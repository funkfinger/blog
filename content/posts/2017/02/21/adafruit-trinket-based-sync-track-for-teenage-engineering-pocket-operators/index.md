---
layout: post
title: Adafruit Trinket-based Sync Track for Teenage Engineering Pocket Operators
comments: true
date: 2017-02-21 16:28:45 +0000
heroImage: ./te-adafruit-hero.png
categories:
  - trinket
  - teenage engineering
  - sync
  - tap
  - bpm
---

An [Adafruit Trinket](https://www.adafruit.com/products/1501)-based button that outputs a [Teenage Engineering Pocket Operator](https://teenageengineering.com/products/po) sync track. I made this Trinket version after I made a [straight-up ATtiny85 / GCC version](http://jaywiggins.com/pocket%20operator/teenage%20engineering/bpm/sync/2016/04/25/teenage-engineering-pocket-operator-tap-sync/) because the Trinket board is probably easier for most folks to get started with.

<YouTubeVideo id="PH5dn6jR41Q" />

I personally like using [Platformio](http://platformio.org/) for my AVR (Arduino) builds - but I think you could - with a little file re-arrangement - build this inside the Arduino IDE. Let me know...

### BOM - required...

- [Adafrit Trinket](https://www.adafruit.com/products/1501) - Your life might be a lot easier if you plug this into an old USB (2.0) hub. Seems like it doesn't play nice with USB 3 - mine was...
- [button](https://www.adafruit.com/products/473) - I personally used a cool Happ one, but if you're doing your shopping on Adafruit, this one will do...
- [1/8" stereo plug](https://www.adafruit.com/products/2790) This one would work well, or you can sacrifice a cable you already have lying around and put some bread board pins in it like I did...
- [a 5V power source](https://www.adafruit.com/products/1959) - I like to use something like this one - mine was free swag

### BOM - not required...

- [I2C OLED Display](https://www.adafruit.com/products/938) - So, I love Adafruit, but honestly, these are way cheaper from China on [Ebay](http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR3.TRC1.A0.H0.Xi2c+oled.TRS0&_nkw=i2c+oled&_sacat=0) - the display is great for debugging the Trinket because serial write isn't really available (as far as I know) for this "Arduino"
- A LED and a current limiting resistor ≈ 470Ω

### Hardware...

Given that Trinket looks like this:

![Trinket](https://cdn-learn.adafruit.com/assets/assets/000/025/644/medium640/trinket5.png)

<div class="attribution"><a href="https://learn.adafruit.com/assets/25645">Image by Adafruit</a></div>

My audio cable has 3 conductors:

- green -> Trinket #4
- black -> ground
- red -> not connected

My arcade button has 2 conductors:

- Common -> 5V
- Normally Open -> Trinket #1 (the same as the Trinket red LED)

The OLED display has 4 connections:

- VCC -> 5V
- GND -> ground
- SCL -> Trinket #2
- SDA -> Trinket #0

The LED can be connected - 470Ω resistor -> Anode of LED -> Cathode of LED -> ground.

### [Software](https://github.com/funkfinger/trinket-tap-bpm-for-pocket-operator)

Here is the [Software](https://github.com/funkfinger/trinket-tap-bpm-for-pocket-operator)
. I like [Platformio](http://platformio.org/) to manage my AVR (and other) projects. I prefer a command line build, but to each their own. Platformio is trying to address the mess that is multiple build platforms and library management. It's not perfect, but works for me. If you want to stick with the Arduino IDE, I think you can just grab all of the files in the `lib/ssd1306xled` folder and move them into the `src` folder and build it fine.

If you do use Platformio, here are the build commands...

To build:

```
platformio run
```

To burn (Trinket needs to be freshly reset to enter boot loader mode - pulsating red LED):

```
platformio run -t program
```

To clean:

```
platformio run -t clean
```
