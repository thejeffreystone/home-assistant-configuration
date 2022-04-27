const exposes = require('zigbee-herdsman-converters/lib/exposes');
const fz = {...require('zigbee-herdsman-converters/converters/fromZigbee'), legacy: require('zigbee-herdsman-converters/lib/legacy').fromZigbee};
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const ota = require('zigbee-herdsman-converters/lib/ota');
const constants = require('zigbee-herdsman-converters/lib/constants');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;
const globalStore = require('zigbee-herdsman-converters/lib/store');

const xiaomiExtend = {
    light_onoff_brightness_colortemp: (options={disableColorTempStartup: true}) => ({
        ...extend.light_onoff_brightness_colortemp(options),
        fromZigbee: extend.light_onoff_brightness_colortemp(options).fromZigbee.concat([
            fz.xiaomi_bulb_interval, fz.ignore_occupancy_report, fz.ignore_humidity_report,
            fz.ignore_pressure_report, fz.ignore_temperature_report,
        ]),
    }),
};

const preventReset = async (type, data, device) => {
    if (
        // options.allow_reset ||
        type !== 'message' ||
        data.type !== 'attributeReport' ||
        data.cluster !== 'genBasic' ||
        !data.data[0xfff0] ||
        // eg: [0xaa, 0x10, 0x05, 0x41, 0x87, 0x01, 0x01, 0x10, 0x00]
        !data.data[0xFFF0].slice(0, 5).equals(Buffer.from([0xaa, 0x10, 0x05, 0x41, 0x87]))
    ) {
        return;
    }
    const options = {manufacturerCode: 0x115f};
    const payload = {[0xfff0]: {
        value: [0xaa, 0x10, 0x05, 0x41, 0x47, 0x01, 0x01, 0x10, 0x01],
        type: 0x41,
    }};
    await device.getEndpoint(1).write('genBasic', payload, options);
};

module.exports = [
    {
        zigbeeModel: ['lumi.motion.ac02'],
        model: 'RTCGQ14LM',
        vendor: 'Xiaomi',
        whiteLabel: [{vendor: 'Xiaomi', model: 'MS-S02'}],
        description: 'Aqara P1 human body movement and illuminance sensor',
        fromZigbee: [fz.RTCGQ12LM_occupancy_illuminance, fz.aqara_opple, fz.battery],
        toZigbee: [tz.aqara_detection_interval, tz.aqara_motion_sensitivity],
        exposes: [e.occupancy(), e.illuminance().withUnit('lx').withDescription('Measured illuminance in lux'),
            exposes.enum('motion_sensitivity', ea.ALL, ['low', 'medium', 'high']),
            exposes.numeric('detection_interval', ea.ALL).withValueMin(2).withValueMax(65535).withUnit('s')
                .withDescription('Time interval for detecting actions'), e.temperature(), e.battery()],
        meta: {battery: {voltageToPercentage: '3V_2850_3000_log'}},
        configure: async (device, coordinatorEndpoint, logger) => {
            const endpoint = device.getEndpoint(1);
            await endpoint.read('genPowerCfg', ['batteryVoltage']);
            await endpoint.read('aqaraOpple', [0x0102], {manufacturerCode: 0x115f});
            await endpoint.read('aqaraOpple', [0x010c], {manufacturerCode: 0x115f});
        },
        ota: ota.zigbeeOTA,
    },
];
