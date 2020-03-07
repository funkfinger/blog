---
layout: post
title: 'Update to using an ATtiny85 in a Similar Way To An Adafruit Trinket - specifically to run the Adafruit Neopixel library'
comments: true
date: 2015-09-15 20:35:28
categories: [attiny85, trinket, adafruit, avr, fuses, neopixel]
---

I'm continuing to try and 'cheap-ify' my per effect cost for my Halloween decorations. I ran into some issues last night trying to get an Arduino sketch that used the Adafruit Neopixel library and ran on a Trinket to run on a straight ATtiny85. The solution was to select the chip in the Arduino IDE and using an AVR programmer, burn the 'bootloader'.

If you're following along (which of course you're not) - I added the ATtiny85 'board' to the `~/Documents/Arduino/hardware/tiny/avr/boards.txt` file (in my OS X case). The 'board' is actually a description of the ATtiny chip and looks something like this (16Mhz):

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

Basically, all I believe that did was set the fuses correctly, but without too much digging, it didn't seem to be working when I manually set the fuses for the chip using `avrdude`. I'm not going to complain or dig much more now that it's working.

Incidentally, the setup (code) for the Neopixel library looks like this:

<Gist id="738bbd3fa8a6183fd47f" />
