const exposes = require('zigbee-herdsman-converters/lib/exposes');
const fz = {...require('zigbee-herdsman-converters/converters/fromZigbee'), legacy: require('zigbee-herdsman-converters/lib/legacy').fromZigbee};
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;

module.exports = [
    {
        zigbeeModel: ['UT-02'],
        model: 'EFR32MG21',
        vendor: 'easyiot',
        description: 'EFR32MG21 Silabs Router',
        fromZigbee: [],
        toZigbee: [],
        exposes: [],
    },
    {
        zigbeeModel: ['UT-01'],
        model: 'EFR32MG21',
        vendor: 'easyiot',
        description: 'EFR32MG21 Zigbee Bridge Router',
        fromZigbee: [],
        toZigbee: [],
        exposes: [],
    },
];