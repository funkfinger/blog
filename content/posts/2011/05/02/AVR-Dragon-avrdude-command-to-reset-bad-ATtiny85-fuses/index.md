---
layout: post
title: AVR Dragon / avrdude command to reset bad ATtiny85 fuses
date: '2011-05-03'
tags:
  - atmel
  - attiny
  - avr-dragon
  - avrdude
  - dragon_hvsp
  - electronics
  - fuse
  - high-voltage
  - reset
---

```
avrdude -c dragon_hvsp -p attiny85 -U lfuse:w:0x62:m -U hfuse:w:0xdf:m -U efuse:w:0xff:m -P usb
```
