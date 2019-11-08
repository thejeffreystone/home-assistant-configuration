#
# Script to fade lights in slowly
# Takes the following inputs
# entity_id = The light you want to fade in
# transition: = # Seconds to go from current to end brightness
# brightness: = # Brightness to end at
# brightness_pct: = # Brightness to end at as a percentage
#
entity_id = data.get('entity_id')
brightness = data.get('brightness', None)
brightness_pct = data.get('brightness_pct', None)

if entity_id is not None and (brightness is not None or brightness_pct is not None):
    light = hass.states.get(entity_id)

    start_level = light.attributes.get('brightness', 0)
    transition = int(data.get('transition', 0))

    """ Use brightness or convert brightness_pct """
    end_level = int(brightness) if brightness is not None else math.ceil(
        float(brightness_pct) * 2.55)

    """ Calculate number of steps """
    steps = int(math.fabs((start_level - end_level)))
    fadeout = True if start_level > end_level else False

    """ Calculate the delay time """
    delay = round(transition / steps, 3)

    """ Disable delay and increase stepping if delay < 3/4 second """
    if (delay < .750):
        delay = 0
        steps = int(steps / 5)
        step_by = 5
    else:
        step_by = 1

    logger.info('Setting brightness of ' + str(entity_id) +
                ' from ' + str(start_level) + ' to ' + str(end_level) +
                ' steps ' + str(steps) + ' delay ' + str(delay))

    new_level = start_level
    for x in range(steps):
        current_level = light.attributes.get('brightness', 0)
        if (fadeout and current_level < new_level):
            break
        elif (not fadeout and current_level > new_level):
            break
        else:
            data = {"entity_id": entity_id, "brightness": new_level}
            hass.services.call('light', 'turn_on', data)
            if (fadeout):
                new_level = new_level - step_by
            else:
                new_level = new_level + step_by
            """ Do not sleep for 0 delay """
            if (delay > 0):
                time.sleep(delay)

""" Ensure light ends at the final state """
if (end_level > 0):
    data = {"entity_id": entity_id, "brightness": end_level}
    hass.services.call('light', 'turn_on', data)
else:
    data = {"entity_id": entity_id}
    hass.services.call('light', 'turn_off', data)