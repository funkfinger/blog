---
layout: post
title: 'Setting My ATtiny85 Fuses To Mimic The Adafruit Trinket'
comments: true
date: 2015-09-04 06:17:54
categories: [attiny85, trinket, avr, fuses]
---

To get a [Adafruit Trinket](https://www.adafruit.com/products/2000) Arduino sketch running on a straight-up ATtiny85, I did the following:

I set the fuses of the ATtiny85 to what I believe the Trinket uses - or at least what the `boards.txt` has in it. I did this using my AVR Dragon - I _believe_ that this has to be done with high-voltage programing, but I'm not sure, so don't quote me.

```
avrdude -c dragon_hvsp -p attiny85 -U lfuse:w:0xc1:m -U hfuse:w:0xd4:m -U efuse:w:0xff:m -P usb
```

Downloaded the [arduino-tiny](https://code.google.com/p/arduino-tiny/) library from their expiring Google Code site. If this gets shutdown, there may or may not be a self-hosted mirror link in the HTML comments of this page. Follow the instructions on arduino-tiny site, but essentially it required creating a boards.txt file.

<!--
I backed up here because google code is shutting down... http://media.jaywiggins.com.s3.amazonaws.com/files/arduino-tiny-0150-0020.zip
-->

To this `boards.txt` file, (in my case it was at `~/Documents/Arduino/hardware/tiny/avr/boards.txt`) I added the following:

```
###########################################################################

attiny85at16p.name=ATtiny85 @ 16 MHz  (internal PLL; 4.3 V BOD)

attiny85at16p.upload.tool=arduino:arduinoisp

attiny85at16p.upload.maximum_size=8192
attiny85at16p.upload.maximum_data_size=512

# PLL Clock; Start-up time PWRDWN/RESET: 1K CK/14 CK + 4 ms; [CKSEL=0001 SUT=00]
# Brown-out detection level at VCC=4.3 V; [BODLEVEL=100]
# Preserve EEPROM memory through the Chip Erase cycle; [EESAVE=0]
# Serial program downloading (SPI) enabled; [SPIEN=0]

attiny85at16p.bootloader.low_fuses=0xC1
attiny85at16p.bootloader.high_fuses=0xD4
attiny85at16p.bootloader.extended_fuses=0xFF

attiny85at16p.bootloader.path=empty
attiny85at16p.bootloader.file=empty85at16.hex
attiny85at16p.bootloader.tool=arduino:avrdude

attiny85at16p.build.mcu=attiny85
attiny85at16p.build.f_cpu=16000000L
attiny85at16p.build.core=tiny
```

Now, obviously, select this board when building the sketch.
