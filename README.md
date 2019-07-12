
## Anchorage House - [Home Assistant](https://home-assistant.io/) Configuration

This repo contains the working [Home Assistant](https://home-assistant.io/) configuration for **Anchorage House**. Below are links to the devices currently being used, blog posts, and other HA enthusists that provided inspiration and configs to help build this config. All of the code is free to use.

This is V4 of my config.

#### Major Changes in v4:
* Moved to Lovelace UI
* Started migrating to packages to better organize sesnors, scripts, and automations
* Continued work to streamline the config
* Anchorage House now tweets throughout the day - [@anchoragehouse2](https://twitter.com/anchoragehouse2) 
* Due to a required garage door opener replacement the GoControl ZWave Garage Opener has been replaced with Chamberlain MyQ 

#### General Information about Anchorage House

Hassbian is the flavor of Home Assistant powering Anchorage House. Currently it is running on a RaspberryPi 3. I also have a Ubuntu Server that handles running some other things like my 433mhz data collection, and Splunk for Home Assistant data analytics. And Smartthings is currently is used as a dumb hub handling most of the zwave and zigbee devices.

The old configurations are stored in branches for anyone that wants to see the previous iterations. However, the only branch guaranteed to work with the current version of Home Assistant is master.

Read about the continuing work to automate **everything** over on my [blog](https://medium.com/@thejeffreystone). But be warned, it really hasn't been updated in a while. Feel free to reachout if you have questions. I love this stuff. 

One last thing. Everything in this configuration is a combination of the things I want out of a home automation system flavored with the inspiration from other using Home Assistant. In some cases I took someone else's idea and made it my own, or I just completely stole it. So I would be remiss if I didn't acknowledge those that inpired this journey. If you like what you see here, please checkout their configs as well. I owe them thanks for sharing their work.  

* [CCOSTAN](https://github.com/CCOSTAN/Home-AssistantConfig#logo) / [https://www.vCloudInfo.com](https://www.vCloudInfo.com)
* [Isabella Gross Alström](https://isabellaalstrom.github.io/)
* [Mahasri Kalavala](https://github.com/skalavala/smarthome)
 
#### Devices:

None of the following links are affiliate links, and are included merely as reference. 

* Apple Devices (Macbooks, Mac Mini, iPhones, iPads)
* [Honeywell Wifi Thermostat](http://a.co/cqvrljP)
* [Amazon Echo Dot](http://a.co/7VYHqvw)
* Amazon Echo Gen 2
* [Smartthings](http://a.co/2xWyXF5)
* [GE Z-Wave Switches](http://a.co/3OUpcMf)
* [Aeon Energy Switchs](http://a.co/7aKBkst)
* [First Alert Z-Wave Smoke/CO2](http://a.co/iTuEjU8)
* [GoControl Z-Wave Bulbs](http://a.co/ajfXdIS)
* [Cree Connect Bulbs](http://a.co/91ddysL)
* [Foscam FI8918W](http://a.co/cExSWZ7)
* [MyQ Garage Door Opener](https://www.amazon.com/dp/B075H7Z5L8/)
* [ZWave Door Sensor]( http://a.co/4Uj8d5r)
* [Sonoff WiFi Wireless Smart Switch ]( http://a.co/9v8KnBT)
* [Levitron Plug in ZWave Dimmer](http://a.co/8wOv1Gs)
* [Levitron ZWave Switch](http://a.co/1z9EeS3)
* [Dome Motion Sensor](http://a.co/aFlzEmf)
* [Dome Door Window Sensor](http://a.co/eo4DsIk)
* AppleTv
* ChromeCast
* Roku Streaming Stick
* [NeoTec USB SDR](http://a.co/giwQvX1) For getting data from Accurite temperture and humidty sensors
* [Accurite Temp and Humidty Sensors](http://a.co/hcppyvF)
* [Sonoff Wifi Switches](http://a.co/dh5hCZu)  

#### Integrations:
* Amazon Echo
* IFTTT
* Owntracks
* Life360
* Spotify
* Goolge (Calendar API, GMail for sensors, and Google Home)
* Waze API
* Dropbox for backup
* MQTT (For Smartthings, Owntracks, Life360)
* Eero For Networked Devices
* [Smartthings-MQTT-Bridge](https://github.com/stjohnjohnson/smartthings-mqtt-bridge)
* [RTL_433](https://github.com/merbanan/rtl_433)
* Cloudflare for SSL and DNS
* Splunk
* Various other services and APIs