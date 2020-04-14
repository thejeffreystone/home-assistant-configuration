
<h1 align="center">
  <a name="logo" href="http://jeffreystone.net"><img src="https://github.com/thejeffreystone/home-assistant-configuration/blob/master/config/www/ahlogo_bw.png" alt="Anchorage House HA" width="200"></a>
  <br>
  Anchorage House
  <br>
  Home Assistant Configuration - Documentation
</h1>

<h2 align="center">
Welcome to Packages
</h2>

If you are not using packages in your config, perhaps you should be. They are are a great way to organize your configuration. A package can contain input_booleans, input_datetimes, sensors, automations, scripts, and more. The only downside is you have to restart Home Assistant after any changes you make to packages. The options to refesh automations and scripts do not pick up changes to packages. 

This document is mean to be a guid to the packages in this config. Below is a summary of the packages in this configuration as well as links to any blog posts about their setup and use. 

<hr>

### announcements.yaml

The Announcement package handles reoccuring informational annoucements that happen though the day.

### audio.yaml

The audio package is just for that. I use it for playing audio either from youtube, or from a local server. The package works for both. Check out the Disney Package for ways I sue this. But you can even randomize the urls to the audio betwene youtube and a local server. Total awesomeness. I hope to leverage this to build a version of my haunted mansion package that allows anyone with home assistant to drop it in, change the light effects and go. 

### daily.yaml

The Daily package handles daily maintenance and cleanup tasks. 

### disney.yaml

The Disney package handles a good chunk of the Disney Imagineering that has been setup via Home Assistant. This ranges from simply playing audio from the parks or rides, to automating lighting effects.

### events.yaml

The Events package handles special event sensors. These include tracking specific dates, or automations around specific events thought the year. 

### haunted_mansion_show.yaml

The Haunted Mansion Show package handles the configuration for turning the Living Room into Disney's Haunted Mansion. 

You can find more information about how this works over at [How I turned my hosue into the Haunted Mansion](https://jeffreystone.net/2020/04/04/how-i-turned-my-anchorage-house-into-disneys-haunted-mansion-using-home-assistant/) where I provide a walk through of how it is setup and link to videos of it in action.

### holidays.yaml

The Holidays package handles automation around major holidays. This may be combined into the Events package in the future. In it you will find automation and scripts around ligting effects, music, and tweets. 

### jarvis.yaml

The Jarvis package is badly named. It's current purpose is to enable some Jarvis like behavior via some scripts that have am Alexa custom routine attached to it. 

### notify.yaml

The Notify package handles a good junk of the notification engine. This is mainly Text to Speech for the various audible notifications. 

### presence.yaml

the Presence package is whete you will find all the sensors, automations, and scripts related to managing presence at Anchorage House. Some of these call entities in the security package. 

### reminders.yaml

The Reminder package is meant to handle any reoccuring items that someone needs to be reminded of. These could be chores, or pills, or other time events.

### security.yaml

The Security package handles all the security related entities. It contains switches, sensors, automations and scripts. 

You can find more information about how the idea behind it and how to is supposed to work in the following articles:

* [How I Secured My Home using Home Assistant](http://jeffreystone.net/2020/04/10/how-i-secured-my-home-using-home-assistant-part-one/)

### space.yaml

The Space package is made up of stuff I stole from [CCOSTAN](https://github.com/CCOSTAN/Home-AssistantConfig#logo). It handles any automation including tweets about Space subjects.

### sysmon.yaml

The Sysmon package is everything related to monitoring Home Assistant and the host it is on. 

### twitter.yaml

The Twitter package is a lot like the Nitify package. It contains the Twitter notification engine that other automations and scripts call to send out tweets. There are also some automations related to tweets. Some of the scripts rely on the [templates](https://github.com/thejeffreystone/home-assistant-configuration/tree/master/config/templates) directory.

### usps.yaml

The USPS package handles the USPS Informed Delivery integration. This is mostly a home grown thing based on [skalavala's work](https://github.com/skalavala/smarthome/blob/master/packages/usps.yaml). 

You can find my walk through of this on youtube at [Integrating USPS Informed Delivery with Home Assistant](https://www.youtube.com/watch?v=TjVeoAKn-r0)

### weather_alerts_nws.yaml

The Weather Alerts package is focused on making sure Anchorage House is aware of any weather alerts. A lot of what is in here is based on the [eracknaphobia's NWS Alert Custom Component](https://github.com/eracknaphobia/nws_custom_component). 

### zigbee2mqtt.yaml 

The Zigbee2Mqtt package handles all the sensors, switches, scripts and automations that are required as part of the Zigbee2Mqtt Addon. 

#### Want to support this project?

<p align="center">
<a target="_blank" href="https://www.buymeacoffee.com/icE6DeBut"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a><a target="_blank" href="https://www.buymeacoffee.com/icE6DeBut"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"></a>

<br />
<a target="_blank" href="https://www.amazon.com/?&_encoding=UTF8&tag=thejeffreystone-20&linkCode=ur2&linkId=36476f43b573601a05b45e576b67ccd2&camp=1789&creative=9325">Find your next Home Automation device on Amazon using my affiliate link</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=thejeffreystone-20&l=ur2&o=1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<br />
<a href="https://jeffreystone.net/affiliate-disclosure/">
Affiliate Disclosure
</a>
</p>
