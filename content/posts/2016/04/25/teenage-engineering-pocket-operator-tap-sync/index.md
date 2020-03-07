---
layout: post
title: 'Teenage Engineering Pocket Operator Tap Sync'
comments: true
date: 2016-04-25 19:22:11
categories: [pocket operator, teenage engineering, bpm, sync]
heroImage: ./te-po-hero.png
---

<YouTubeVideo id="Cx91QPgpqYk" />

This little project is finally coming together. Here are the parts I settled on. The button was going to be an arcade-style button, but I was running into missed taps, which, when rapid firing Galaga swarms, might be **OK**, but when trying to time out BPM is a killer. I ended up using an [Adafruit momentary capacitive touch sensor](https://www.adafruit.com/products/1374) instead. For the LCD display (which was totally useful for debugging), a cheap ebay I2C lcd module was used.

The software is fairly straight forward except for the [totally and terribly](http://jaywiggins.com/attiny85/i2c/lcd/2016/04/18/mostly-no-arduino-attiny-ic-lcd/) hacked I2C LCD bits which were ripped from various spots online. [Here's the code...](https://github.com/funkfinger/tap-bpm-click-track) Someday, I'll try and post a schematic - particularly if someone stumbles by and is interested.
