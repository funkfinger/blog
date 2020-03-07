---
layout: post
title: 'AVR Dragon and OSX (trying it out again)'
comments: true
date: 2015-08-29 14:25:05
categories: [avr, dragon, attiny, avrdude, avr-gcc, OSX]
---

I've been inspired by my 4yo son to get back into some electronics for a spooky Halloween display we're planning on setting up this year. Who am I kidding, my son has nothing to do with it. Anyway, I want to make a few cheap, but hopefully terrifying, effects for the yard and inside.

Some blinking eyes seem like a good thing to hang in the bushes and trees outside, so I'm looking at using an ATtiny85 and a couple of LEDs for them. Here's my proof of concept - running the ATtiny @ 6V (on fresh batteries) which is slightly higher than specs say is cool. Also running the LEDs stright from pins without current limiting resistors.

![ATtiny85 blinker](../../../../../images/IMG_3498.jpg)

It's been a long time since I did any AVR stuff, so I'm going to try and document what I'm doing here - with the hope that someday I can find it again...

Some of what was difficult before doing AVR on OSX looks to be simplified by others now. For instance, to get the tool chain up and running you can use Homebrew - these instructions are from [https://github.com/osx-cross/homebrew-avr/](https://github.com/osx-cross/homebrew-avr/)

```
  $ brew tap osx-cross/avr
  $ brew install avr-libc
  $ brew install avrdude --with-usb
```

Be patient, there's a lot going in that second command.

I'm using the AVR Dragon development platform for programming the ATtiny - It's a little complicated, and there may be easier / more straight forward ways of doing this now, but this is what I have and it did work at one time. I purchased 2 *DracoDapter*s quite some time ago from [www.allgaiershops.com](http://www.allgaiershops.com/) - these made the [config](http://blog.allgaiershops.com/2011/01/23/avr-dragon-adapters/) of the Dragon a lot easier but I'm not very confident you can still buy them. I also soldered on a ZIF socket.

I'm really not sure what follows was needed or not, but in an attempt to find out why `make install` didn't work because of error `avrdude: usbdev_open(): did not find any USB device "usb"`, I ran into this:
[OSX USB solution](http://www.avrfreaks.net/comment/1421981#comment-1421981)

This was specific to an error with the Atmel ICE development platform, so I modified it for my AVR Dragon. Here is a [zip](/source_media/AvrDragon.kext.zip) of the USB config for OSX. I found the AVR Dragon values [here](http://www.avrfreaks.net/forum/tut-hard-use-avr-dragon-linux-without-being-root) - (which needed to be converted to hex). Then I copied and changed the permissions as follows - I also rebooted, just to be safe:

```
$ sudo cp -R AvrDragon.kext /System/Library/Extensions
$ chown -R root:wheel /System/Library/Extensions/AvrDragon.kext
$ chmod -R 755 /System/Library/Extensions/AvrDragon.kext
$ sudo kextcache -system-caches
```

`make install` still doesn't work, but a `make flash` and `make fuse` when run seperatly does.
