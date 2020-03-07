---
layout: post
title: 'Getting my AVR Dragon to talk to the Arduino IDE on OSX'
comments: true
date: 2015-08-31 23:54:31
categories: [arduino, avr dragon, attiny, osx]
---

I added the following to `/Applications/Arduino.app/Contents/Java/hardware/arduino/avr/programmers.txt` and restarted the Arduino IDE and magically, this seemed to work for me.

```
  dragon.name=Atmel AVR Dragon in HVSP mode
  dragon.communication=usb
  dragon.protocol=dragon_hvsp
  dragon.program.tool=avrdude
  dragon.program.extra_params=-P usb
```

I pieced this together from [these](http://fab.cba.mit.edu/classes/863.12/people/charles.fracchia/wk6.html#fabsampler) [two](http://www.instructables.com/id/Add-a-custom-programmer-on-Arduino-IDE/?ALLSTEPS) sites.
