# Home-Assistant Config by [@thejeffreystone](http://www.twitter.com/thejeffreystone)
[Home Assistant](https://home-assistant.io/) configuration files (YAMLs)

This is my Home Assistant Configuration and it is a work in progress. So much to add and so little time.

Currently I am running HA on a Dell Optiplex running Ubuntu 16.04.

**Devices I have :**
* Apple Devices (Macbooks, Mac Mini, iPhones, iPads)
* [Honeywell Wifi Thermostat](http://a.co/cqvrljP)
* [Amazon Echo Dot](http://a.co/7VYHqvw)
* [Smartthings](http://a.co/2xWyXF5)
* [GE Z-Wave Switches](http://a.co/3OUpcMf)
* [Aeon Energy Switchs](http://a.co/7aKBkst)
* [First Alert Z-Wave Smoke/CO2](http://a.co/iTuEjU8)
* [GoControl Z-Wave Bulbs](http://a.co/ajfXdIS)
* [Cree Connect Bulbs](http://a.co/91ddysL)
* [Foscam FI8918W](http://a.co/cExSWZ7)
* [ASUS RT-N66U](http://a.co/cCDuNkI)
* ChromeCast

**App Integrations**
* Amazon Echo Skill
* IFTTT
* Owntracks
* MQTT (For Smartthings and Owntracks)
* [Smartthings-MQTT-Bridge](https://github.com/stjohnjohnson/smartthings-mqtt-bridge)

**Automations:**
```
LOCATION AWARNESS:
    Send notifications based on arrival and departure of zones as well as itegration with Echo so Alexa can provide location when asked.

SUNSET: 
    Turn on Outside lights and Living Room Lamp (100%)
     
SUNRISE:
    Turn off all lights

SECURITY
    When smoke is dectected all lights turn on

```

#Todo List

* Move HA to RasberryPi 3.
* Move Automations currently handled by Smartthings to HA.
* Add LED Strips to stairs, kitchen cabinets. 
* Add Slack notifications.
* Add GoControl Z-Wave Garage Door Opener 
* Put Door Sensor in Mailbox
* Add scenes for various daily events and to streamline automation
* Add RGB LED Bulbs to the lamps in the bedrooms and living areas
* Add Motion detectors
* Add door sensors
* Integrate with Google Maps to provide traffic and ETA for daily driving routes
* Add Smart locks to ensure all doors are locked.
* Replace other Smoke Detectors with Z-Wave Detectors.


