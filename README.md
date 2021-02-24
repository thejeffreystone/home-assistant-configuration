
<h1 align="center">
  <a name="logo" href="http://slacker-labs.com"><img src="https://github.com/thejeffreystone/home-assistant-configuration/blob/master/config/www/ahlogo_bw.png" alt="Anchorage House HA" width="200"></a>
  <br>
  Anchorage House
  <br>
  Home Assistant Configuration
</h1>

This repo contains the working [Home Assistant](https://home-assistant.io/) configuration for **Anchorage House**. Below are links to the devices currently being used, blog posts, and other HA enthusists that provided inspiration and configs to help build this config. All of the code is free to use.

Be sure to follow me on twitter [@thejeffreystone](https://twitter.com/thejeffreystone) and on [YouTube](https://www.youtube.com/channel/UCipZJ6748kd8TbelSxcvcVg) where I am starting to post videos of my Home Automation journey. I also post articles about this config and other Home Automation topics at [slacker-labs.com](https://slacker-labs.com)

You can also follow Anchorage House on Twitter [@anchoragehouse2](https://twitter.com/anchoragehouse2) where it tweets about the cool stuff it does throughout the day as well as links to some of the best Home Assistent content creators out there.

And of course, if you have hit that :star: at the top to follow this repo what are you waiting for? You can get updates right in your notification feed everytime I push updates. Which is at least once a week and some weeks quite a bit more.  

#### Anchorage House's Three Laws of Home Automation 

When designing Anchorage House's automations I have made every effort to prioritize the solution based on the following three laws. 

**First Law: Every automation or action should be the result of a passive sensor or indirect action**.

**Second Law: An automation can be triggered by voice command only when Law 1 cannot be achieved**.

**Third Law: An automation or action can be trigger by a physical switch or as the result of a direct iteraction only when Law 1 and Law 2 cannot be achieved.**

For more about how they are used visit [https://slacker-labs.com/2020/04/02/the-three-laws-of-home-automation/](https://slacker-labs.com/2020/04/02/the-three-laws-of-home-automation/)

<hr>

This is V5 of my config.

##### Major Changes in v5:
* Migrated from Hassbian to Hassio
* Migrated off Smartthings, which had been used a device hub. My zwave and zigbee devices are now using zwave2mqtt and zigbee2mqtt. 
* Swapped the Honeywell Wifi Thermostat out for an Ecobee. This actually happened over the summer, and I am just now updating the readme... 

#### General Information about Anchorage House

Hassio is the flavor of Home Assistant powering Anchorage House these days. Currently it is running on a RaspberryPi 3. I also have a Ubuntu Server that handles running some other things like my 433mhz data collection from varios temperature sensors, and Splunk for Home Assistant data analytics. 

The old configurations are stored in branches for anyone that wants to see the previous iterations. However, the only branch guaranteed to work with the current version of Home Assistant is master.

Read about the continuing work to automate **everything** over on [slacker-labs.com](https://slacker-labs.com). Feel free to reach out if you have questions. I love this stuff. 

One last thing. Everything in this configuration is a combination of the things I want out of a home automation system flavored with the inspiration from others using Home Assistant. In some cases I took someone else's idea and made it my own, and in some I just completely stole it. So I would be remiss if I didn't acknowledge those that inpired this journey. If you like what you see here, please checkout their configs as well. I owe them thanks for sharing their work.   

* [CCOSTAN](https://github.com/CCOSTAN/Home-AssistantConfig#logo) / [https://www.vCloudInfo.com](https://www.vCloudInfo.com)
* [Isabella Gross Alström](https://isabellaalstrom.github.io/)
* [Mahasri Kalavala](https://github.com/skalavala/mysmarthome)
 
#### Devices:
* Various Apple Devices (Macbooks, Mac Mini, iPhones, iPads)

##### Networking
* [Eero Mesh Network Routers](https://www.amazon.com/gp/product/B07WMLPSRL/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=2b6442e719136c286229d14bc77e2533&language=en_US)
* [Aeotec Z-Stick Gen 5](https://www.amazon.com/gp/product/B00X0AWA6E/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=2b9769cb7e6bafa1048d34601422926d&language=en_US)

##### Media
* AppleTv
* Google Home Hub / Home Mini
* [Amazon Echo Dot](https://www.amazon.com/gp/product/B07W95GZNH/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=5cd455fd06e21ad09017d90ca588fce3&language=en_US)
* [Amazon Echo](https://www.amazon.com/gp/product/B0794W1SKP/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=2c0b37b092008eb917fa7b18c676a297&language=en_US)
* ChromeCast
* [Roku Premiere](https://www.amazon.com/gp/product/B07HDBZN7Q/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=f1d5cb6e897b91459d9f1d46ce848656&language=en_US)
* [Roku Streaming Stick](https://www.amazon.com/gp/product/B075XN5L53/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=c9dd374ee78c1150f682c4076e95edd6&language=en_US)

##### Cameras
* [Arlo Pro 2 Cameras](https://www.amazon.com/gp/product/B075P84FH2/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=135cb25a4427888fd4f978770fe40e02&language=en_US)
* [Foscam FI8918W](https://www.amazon.com/gp/product/B00466X9SY/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=fd92b312f8005403ee7eed95cd3c1314&language=en_US)
* [Wyze Cam](https://www.amazon.com/Wyze-Indoor-Wireless-Detection-Assistant/dp/B076H3SRXG/ref=as_li_ss_tl?crid=1EPYMX3F0YZD1&cv_ct_cx=wyze+cam&dchild=1&keywords=wyze+cam&pd_rd_i=B076H3SRXG&pd_rd_r=86f79129-57d1-47f6-bbe9-1ec0e8b22e34&pd_rd_w=pkdoh&pd_rd_wg=gbpqk&pf_rd_p=224b59c9-c98f-46fd-96d6-8e952866d6a3&pf_rd_r=243QSM6J6DSMYVSH288X&psc=1&qid=1600873696&sprefix=wyze,aps,172&sr=1-1-a14f3e51-9e3d-4cb5-bc68-d89d95c82244&linkCode=ll1&tag=thejeffreysto-20&linkId=82caffd3f9213edbfd2e64a1dbe8b3aa&language=en_US)

##### Switches / Plugs
* [MyQ Garage Door Opener](https://www.amazon.com/gp/product/B075H7Z5L8/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=e530b7bd83fb9a64b8af14190c99d759&language=en_US)
* [GE Z-Wave Switches](https://www.amazon.com/gp/product/B01M1AHC3R/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=74a1bf32886f6e643619beac4eafbe2a&language=en_US)
* [Sonoff WiFi Smart Switch ](https://www.amazon.com/gp/product/B078GDFYTY/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=2a2da928247fa3f7209e721694f36c33&language=en_US)
* [Levitron Plug in ZWave Dimmer](https://www.amazon.com/gp/product/B01NAO4B9Z/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=723acf42f30081edfb98bc93595bd8d9&language=en_US)
* [Levitron Z-Wave Switch](https://www.amazon.com/gp/product/B01MZ0WVKH/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=bffb672ca2f285047e2b859743abf070&language=en_US)
* [Wemo Wifi SmartPlug](https://www.amazon.com/gp/product/B01NBI0A6R/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=961d2858acb364741767f66e1c75e351&language=en_US)
* [Honeywell Z-Wave Plug](https://www.amazon.com/gp/product/B07B3SWWTH/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=f5a78d3f1d95e66b83bf47dff0d62105&language=en_US)
* [Sylvania Smart Zigbee Plug](https://www.amazon.com/gp/product/B01M6UM8QD/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=abfc93828c666f4fcd48386be9265fc0&language=en_US)
* [Wyze Plug](https://www.amazon.com/Wyze-Labs-WLPP1-Smart-Two-Pack/dp/B07XZT24B8/ref=as_li_ss_tl?cv_ct_cx=Wyze+plug&dchild=1&keywords=Wyze+plug&pd_rd_i=B07XZT24B8&pd_rd_r=b4ac5aaf-80a7-4ad3-87e6-675b2c2fe388&pd_rd_w=vSV3A&pd_rd_wg=iGnZm&pf_rd_p=224b59c9-c98f-46fd-96d6-8e952866d6a3&pf_rd_r=017PDK4XWA0JJKXW6BMK&psc=1&qid=1600874038&sr=1-1-a14f3e51-9e3d-4cb5-bc68-d89d95c82244&linkCode=ll1&tag=thejeffreysto-20&linkId=0fc4ddfe870185f6e4fb59d2863d9ea7&language=en_US)
* [Honeywell UltraPro Z-Wave Plus Smart Light Switch](https://www.amazon.com/gp/product/B07B3LY1SJ/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=ll1&tag=thejeffreysto-20&linkId=5de0fc01098e2fa71220ff455a2b4016&language=en_US)
* [Innr Zigbee Plugs](https://www.amazon.com/gp/product/B07SQGG8Z7/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=ll1&tag=thejeffreysto-20&linkId=6ba995598ce5131986b1586f60f67a6c&language=en_US)

##### Lights
* [Sengled LED Color Plus (Zigbee)](https://www.amazon.com/gp/product/B073ZBYXKQ/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=74939562b8889e2b750d9b01fd347b48&language=en_US)
* [Cree Connect Bulbs (Zigbee)](https://www.amazon.com/gp/product/B01701DL7A/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=93c44ca1fc96f2554f9aa73afe5f9943&language=en_US)
* [Sylvania BR30 LED Bulb](https://www.amazon.com/gp/product/B07H918FN5/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=ll1&tag=thejeffreysto-20&linkId=7fb3f747a87fe205283c425b211e7d67&language=en_US)

##### Sensors
* [Z-Wave Door Sensor](https://www.amazon.com/gp/product/B01N5HB4U5/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=b274f5e5d57b8a698ea6d94138a58afa&language=en_US)
* [Z-Wave Garage Door Tilt Sensor](https://www.amazon.com/gp/product/B01MRZB0NT/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=2515ffb412b6cd2113f755fe531ec203&language=en_US)
* [Dome Motion Z-Wave Sensor](https://www.amazon.com/gp/product/B076Y6DXSY/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=d9f4f6267d5372786a0da7e01c6ca172&language=en_US)
* [Aqara Motion Sensor](https://www.amazon.com/Aqara-RTCGQ11LM-Motion-Sensor-White/dp/B07D1CRRVF/ref=as_li_ss_tl?dchild=1&keywords=aqara&qid=1600873881&s=electronics&sr=1-5-catcorr&linkCode=ll1&tag=thejeffreysto-20&linkId=2eb1709f03b48e89e25b5f4f20071a11&language=en_US)
* [Aqara Temp / Humidity Sensor](https://www.amazon.com/gp/product/B07D37FKGY/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=ll1&tag=thejeffreysto-20&linkId=6df9beb4ac6d13af685d63e73fa78534&language=en_US)

##### Climate
* [Ecobee Thermostat](https://www.amazon.com/gp/product/B07K2GTKQ5/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=90bbaf5eadbd3b7493adde3095db7192&language=en_US)
* [Ecobee Temp and Motion Sensors](https://www.amazon.com/gp/product/B07NQVWRR3/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=1d068c58194407eeaecfaa4afcff5fc8&language=en_US)
* [USB SDR](https://www.amazon.com/gp/product/B011HVUEME/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=8cd0ed5020766e8cca206190aba7e972&language=en_US) For getting data from Accurite temperture and humidty sensors
* [Accurite Temp and Humidty Sensors](https://www.amazon.com/AcuRite-06002M-Wireless-Temperature-Humidity/dp/B00T0K8NXC/ref=as_li_ss_tl?dchild=1&keywords=Accurite&qid=1589379213&s=hi&sr=1-1&linkCode=ll1&tag=thejeffreysto-20&linkId=2fd400c891fd29356129f7aa93c0a2ee&language=en_US)
* [AcuRite Lightning Detector Sensor](https://www.amazon.com/AcuRite-06045M-Lightning-Detector-Temperature/dp/B01LNALL6C/ref=as_li_ss_tl?cv_ct_cx=Lightning+sensor&dchild=1&keywords=Lightning+sensor&pd_rd_i=B01LNALL6C&pd_rd_r=6674335c-679a-4753-b58e-0f9b81b5c8ee&pd_rd_w=jNNHQ&pd_rd_wg=WnAAD&pf_rd_p=224b59c9-c98f-46fd-96d6-8e952866d6a3&pf_rd_r=HVNXDV908VNCGWW3VD7W&psc=1&qid=1600874236&sr=1-1-a14f3e51-9e3d-4cb5-bc68-d89d95c82244&linkCode=ll1&tag=thejeffreysto-20&linkId=c009e162d0c4f028bc9f4db948152eab&language=en_US)

##### Security
* [First Alert Z-Wave Smoke/CO2](https://www.amazon.com/gp/product/B00KMHXFAI/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=thejeffreysto-20&linkId=5da9bad04dc5b86f1bd582d22a6bea21&language=en_US)

#### Integrations:
* Amazon Echo - Voice Control and Music
* ~~IFTTT - Automations~~ 
* Life360 - Presence Detection
* Spotify - Music
* Google (Calendar API, GMail for sensors, and Google Home) - Voice Control, Automations based on Calendar, USPS Informed Delivery
* Waze API - Transit time and Automations
* Dropbox - Config backup
* MQTT - For Zwave, Zigbee, various sensors running on a different host.
* [RTL_433](https://github.com/merbanan/rtl_433) - Indoor and Outdoor Temperature Sensors
* Cloudflare - 15 year SSL Cert
* Splunk - Data Analytics
* Various other services and APIs

#### Want to support this project?

<p align="center">
<a target="_blank" href="https://www.buymeacoffee.com/icE6DeBut"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a><a target="_blank" href="https://www.buymeacoffee.com/icE6DeBut"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"></a>

<br />
<a target="_blank" href="https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_il_tl?ie=UTF8&tag=thejeffreysto-20&keywords=Home Automation&index=aps&camp=1789&creative=9325&linkCode=xm2&linkId=8f8efaca6bcebfd793c383c68c070400">Find your next Home Automation device on Amazon using my affiliate link</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=thejeffreystone-20&l=ur2&o=1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<br />
<a href="https://slacker-labs.com/affiliate-disclosure/">
Affiliate Disclosure
</a>
</p>
