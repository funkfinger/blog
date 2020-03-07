---
layout: post
title: ATtiny software PWM to drive RGB LED
date: '2011-05-04'
tags:
  - atmel
  - attiny
  - attiny85
  - c
  - code
  - electronics
  - i2c
  - led
  - pulse-width
  - pwm
  - rgb
---

Based on Atmel's <a href='http://www.atmel.com/dyn/resources/prod_documents/doc8020.pdf'>AVR136: Low-Jitter Multi-Channel Software PWM</a> Application note, here's a 3 channel software-based pulse width modulator to drive a RGB LED. This is a proof of concept and currently there is some in-efficient color cycling code in there, but the goal is to drive these cheap chips using an I2C (two wire serial) bus. Disco dance floor anyone?...

<Gist id="954874" file="main.c" />
