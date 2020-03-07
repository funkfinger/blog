---
layout: post
title: 'Controlling Vera home automation Z-Wave controller with Amazon Echo by running an emulator on a Raspberry Pi'
comments: true
date: 2015-06-14 10:02:14
categories: [home-automation]
tags:
  - vera
  - amazon echo
  - java
  - raspberry pi
  - phillips hue
  - z-wave
---

This is all made possible by a nifty little [Java app](https://github.com/armzilla/amazon-echo-ha-bridge) written by [armzilla](https://github.com/armzilla). Here's a quick explanation of the setup:

| Amazon Echo                                                                                        | Raspberry Pi                                                                                           | Vera Home Controller                                                                  |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| The Echo will communicate with Phillips Hue controllers, but my setup is Vera based... what to do? | Add a Raspberry Pi- the Raspberry Pi emulates the Phillips controler and transposes it to 'Vera speak' | The Vera is setup with both on and off scenes for the lights that you want to control |

### Here are the basic steps I used:

- The latest Raspbian has Java 8 installed, so I used that. I got the [Raspbian image](https://www.raspberrypi.org/downloads/) from the Raspberry Pi site and 'burned it' on a SD card- (I use [Apple Pi Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)).
- Next, I downloaded the [Java app](https://github.com/armzilla/amazon-echo-ha-bridge) and dumped it in the `/home/pi` folder. I wrote a small `bash` script to make running it a little easier- this looks like this:<Gist id="96ed2f0fd8a8653787fd" />
- I used [this method](http://localhost:4000/raspberry/pi,/crontab/2015/06/14/starting-something-on-raspberry-pi-boot/) to startup the Java app on boot.
- I created both on and off versions for all of my scenes on my Vera- scenes like `room- master bed on [id: 58]` and `room- master bed off [id: 59]` - make note of the IDs of these scenes, you'
  ll need these later
- The configuration of the Java app is done using by using a RESTful API. I used a OS X based tool called [Paw](https://luckymarmot.com/paw) To do this. My commands (in text form), looked like this:<Gist id="e8f296a2064b64049905" />The `name` value is the word(s) your want to use to control the Echo. The on/off IDs are at the end of the on/offUrl values
- repeat for all scenes you want to control via your Echo. Also, you'll probably want to save these commands as I used the `Forget` button on the `Connected Home` settings screen a number of times while trying to make this work right.
- Lastly, tell echo to discover your emulated controller. The command to do this is `Alexa, discover devices`
- Once 'she' finds the devices, you can control them using the command `Alexa, turn master bedroom on`

This is certainly a hack, but it seems to be working OK for me over the last couple of days. It would be nice if they just played together natively.
