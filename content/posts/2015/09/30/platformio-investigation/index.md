---
layout: post
title: "PlatformIO Investigation"
comments: true
date: 2015-09-30 23:52:26
categories: [platformio, arduino, avr, es8266]
---

While looking around for a good [library to parse JSON](https://github.com/bblanchon/ArduinoJson) on an Arduino, I bumped into [PlatformIO](http://platformio.org/). This seems to address a problem I've been struggling with – library / board management.

I had to update my OS X Homebrew install of Python to get this working (I really needed to do that anyway) and I needed to install this using `sudo` - `sudo pip install -U platformio`. Because of `virtualenv`, I also had to `gpip install -U pip setuptools` - which is using a 'global' version of the Python pip command. Modifications to my `.bashrc` file were required...

With all that, I was able to build and deploy the 'blink' code on a Arduino Uno (actually an Adafruit Metro) using the command:

     mkdir platformio_blink
     cd platformio_blink
     platformio init --board=uno


and then added a `main.cpp` file to the `platformio_blink/src` folder

Here's what that looks like:

    #ifdef ENERGIA
    	#include "Energia.h"
    #else
    	#include "Arduino.h"
    #endif

    #ifndef LED_PIN
    	// Most Arduino boards already have a LED attached to pin 13 on the board itself
    	#define LED_PIN 13
    #endif

    void setup() {
      pinMode(LED_PIN, OUTPUT);     // set pin as output
    }

    void loop() {
      digitalWrite(LED_PIN, HIGH);  // set the LED on
      delay(1000);                  // wait for a second
      digitalWrite(LED_PIN, LOW);   // set the LED off
      delay(1000);                  // wait for a second
    }

Then by executing `platformio run`, the code was uploaded to the Uno / Metro board. And voila, blinking pin 13!
