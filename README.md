
<h1 align="center">
  <a name="logo" href="http://jeffreystone.net"><img src="https://github.com/thejeffreystone/home-assistant-configuration/blob/master/config/www/ahlogo_bw.png" alt="Anchorage House HA" width="200"></a>
  <br>
  Anchorage House - Home Assistant Configuration
</h1>

This repo contains the working [Home Assistant](https://home-assistant.io/) configuration for **Anchorage House**. Below are links to the devices currently being used, blog posts, and other HA enthusists that provided inspiration and configs to help build this config. All of the code is free to use.

Be sure to follow me on twitter [@thejeffreystone](https://twitter.com/thejeffreystone) and on [YouTube](https://www.youtube.com/channel/UCipZJ6748kd8TbelSxcvcVg) where I am starting to post videos of my Home Automation. 

You can also follow Anchorage House on Twitter [@anchoragehouse2](https://twitter.com/anchoragehouse2) where it will tweets about the cool automations it does throughout the day.

#### Anchorage House's Three Laws of Home Automation 

When designing Anchorage House's automations I have made every effort to prioritize the solution based on the following three laws. 

**Law 1: Every automation or action should be the result of a passive sensor or indirect action**.

**Law 2: An automation can be triggered by voice command only when Law 1 cannot be achieved**.

**Law 3: An automation or action can be trigger by a physical switch or as the result of a direct iteraction only when Law 1 and Law 2 cannot be achieved.**

<hr>

This is V5 of my config.

##### Major Changes in v5:
* Migrated from Hassbian to Hassio
* Migrated off Smartthings, which had been used a device hub. My zwave and zigbee devices are now using zwave2mqtt and zigbee2mqtt. 
* Swapped the Honeywell Wifi Thermostat out for an Ecobee. This actually happened over the summer, and I am just now updating the readme... 

#### General Information about Anchorage House

Hassio is the flavor of Home Assistant powering Anchorage House these days. Currently it is running on a RaspberryPi 3. I also have a Ubuntu Server that handles running some other things like my 433mhz data collection from varios temperature sensors, and Splunk for Home Assistant data analytics. 

The old configurations are stored in branches for anyone that wants to see the previous iterations. However, the only branch guaranteed to work with the current version of Home Assistant is master.

Read about the continuing work to automate **everything** over on my [blog](https://www.thejeffreystone.net). But be warned, it really hasn't been updated in a while, altrhough I hope to change that soon. Feel free to reach out if you have questions. I love this stuff. 

One last thing. Everything in this configuration is a combination of the things I want out of a home automation system flavored with the inspiration from others using Home Assistant. In some cases I took someone else's idea and made it my own, and in some I just completely stole it. So I would be remiss if I didn't acknowledge those that inpired this journey. If you like what you see here, please checkout their configs as well. I owe them thanks for sharing their work.   

* [CCOSTAN](https://github.com/CCOSTAN/Home-AssistantConfig#logo) / [https://www.vCloudInfo.com](https://www.vCloudInfo.com)
* [Isabella Gross Alström](https://isabellaalstrom.github.io/)
* [Mahasri Kalavala](https://github.com/skalavala/mysmarthome)
 
#### Devices:
* Various Apple Devices (Macbooks, Mac Mini, iPhones, iPads)

##### Networking
* [Eero Mesh Network Routers](https://amzn.to/2Nty6fE)
* [Aeotec Z-Stick Gen 5](https://amzn.to/2K4BqMf)

##### Media
* AppleTv
* Google Home Hub / Home Mini
* [Amazon Echo Dot](https://amzn.to/32vt6vr)
* [Amazon Echo](https://amzn.to/34LSajw)
* [ChromeCast](https://amzn.to/34HIjuL)
* [Roku Premiere](https://amzn.to/2CmOBnF)
* [Roku Streaming Stick](https://amzn.to/34At7zI)

##### Cameras
* [Arlo Pro 2 Cameras](https://amzn.to/32ulDNl)
* [Foscam FI8918W](https://amzn.to/33wKdOL)

##### Switches
* [MyQ Garage Door Opener](https://amzn.to/2NXQSea)
* [GE Z-Wave Switches](https://amzn.to/33vh8mS)
* [Sonoff WiFi Smart Switch ](https://amzn.to/2K0mPla)
* [Levitron Plug in ZWave Dimmer](https://amzn.to/2NW9kno)
* [Levitron Z-Wave Switch](https://amzn.to/2JXyDob)
* [Wemo Wifi SmartPlug](https://amzn.to/2K4bikB)
* [TP-Link HS103 Wifi Switch](https://amzn.to/32wV7Tg)
* [Honeywell Z-Wave Plug](https://amzn.to/2NtRE3L)
* [Sylvania Smart Zigbee Plug](https://amzn.to/32zoJzH)

##### Lights
* [Sengled LED Color Plus (Zigbee)](https://amzn.to/32nEjy8)
* [Cree Connect Bulbs (Zigbee)](https://amzn.to/2NrYOWa)

##### Sensors
* [Z-Wave Door Sensor](https://amzn.to/34MM1n7)
* [Z-Wave Garage Door Tilt Sensor](https://amzn.to/2WUHc8s)
* [Dome Motion Z-Wave Sensor](https://amzn.to/32nD5Ty)

##### Climate
* [Ecobee Thermostat](https://www.amazon.com/gp/product/B07K2GTKQ5/ref=as_li_tl?ie=UTF8&tag=thejefferysto-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07K2GTKQ5&linkId=af62c6bb747234ded5bc4161a651d47a)
* [Ecobee Temp and Motion Sensors](https://amzn.to/2NSdNYz)
* [USB SDR](https://amzn.to/2Nv3f2l) For getting data from Accurite temperture and humidty sensors
* [Accurite Temp and Humidty Sensors](https://amzn.to/36LUatA)

##### Security
* [First Alert Z-Wave Smoke/CO2](https://amzn.to/34M6wQT)

#### Integrations:
* Amazon Echo - Voice Control and Music
* IFTTT - Automations
* Life360 - Presence Detection
* Spotify - Music
* Google (Calendar API, GMail for sensors, and Google Home) - Voice Control, Automations based on Calendar, USPS Informed Delivery
* Waze API - Transit time and Automations
* Dropbox b- Config ackup
* MQTT - For Zwave, Zigbee, various sensors running on a different host.
* Eero - Networked Devices
* [RTL_433](https://github.com/merbanan/rtl_433) - Indoor and Outdoor Temperature Sensors
* Cloudflare - 15 year SSL Cert
* Splunk - Data Analytics
* Various other services and APIs

#### Want to support this project?

<p align="center">
<style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5F7FFF !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 22px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/icE6DeBut"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px !important;">Buy me a coffee</span></a>
<br />
<a target="_blank" href="https://www.amazon.com/?&_encoding=UTF8&tag=thejeffreystone-20&linkCode=ur2&linkId=36476f43b573601a05b45e576b67ccd2&camp=1789&creative=9325">Find your next Home Automation device on Amazon using my affiliate link</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=thejeffreystone-20&l=ur2&o=1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<br />
<a href="http://www.jeffreystone.net/pages/affiliate-disclosure.html">
Affiliate Disclosure
</a>
</p>
