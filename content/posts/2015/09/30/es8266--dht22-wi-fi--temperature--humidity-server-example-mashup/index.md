---
layout: post
title: 'ES8266 / DHT22 - Wi-Fi / Temperature & Humidity server (example mashup)'
comments: true
date: 2015-09-30 23:23:40
categories: [es8266, dht22, arduino, iot, temperature, humidity, server]
---

Here's a quick (couple hours with my sloppy mistakes) mashup of two Arduino examples - the ES8266 (HUZZAH from Adafruit) WiFi controller and a DHT22 temperature and humidity sensor. This is the start of a bigger project which tells outdoor and indoor temperature along with accurate time (more on that to come), and probably wind speed, etc...

Here's (sort of) what the circuit looks like:
![ES8266 / DHT22 Circuit](http://media.jaywiggins.com.s3.amazonaws.com/images/huzzah%20temp%20sensor_bb.png)

Here's a photo of the protoboard:
![circuit on protoboard](http://media.jaywiggins.com.s3.amazonaws.com/images/IMG_3535.jpg)

and here's the quick mashup code of the two example:

<Gist id="4b260699a1c22a31279a" />
