---
date: 2021-11-06 09:28:00
title: 'HP-35 Calculator Living in an Adafruit Macropad RP2040'
heroImage: './hero.png'
---

It's not quite done, but - more coding to do, but I've been working on getting HP's first pocket calculator running as an emulator on the Adafruit Macropad RP2040 keeb. The bulk of this code comes from an Instructables project where [enurdag](https://www.instructables.com/member/enurdag/) emulated the HP-35 with an Arduino and a TFTLCD touchscreen shield. Very cool!

The HP-35 has 35 keys, the macropad has 9, so I am using double clicks to access the more used features, and _WILL_ be using the rotary encoder to access everything else. Also, I'm going to be adding a USB input mode where you can turn the Macropad into what it was more intended to be, a computer interface.

[Here's my repo - WORK IN PROGRESS!](https://github.com/funkfinger/adafruit-macropad-hp-35-calc)

[legends for relegendable caps](https://docs.google.com/document/d/1mupzLa-DK0bMKQjIS_BeLYIE813HpPON7XwUicwWx2c/edit?usp=sharing)

## HP 35 calculator links...

- HP-35 Scientific Calculator Emulator With Arduino Uno: https://www.instructables.com/member/enurdag/
- About the HP-35: https://en.wikipedia.org/wiki/HP-35
- A HP-35 simulator (emulator?): https://www.hpmuseum.org/simulate/hp35sim/hp35sim.htm
- Reverse engineering the HP-35 ROM based on a photo of the physical chip - really cool!: http://www.pmonta.com/calculators/hp-35/
- HP Calculator microassembler and simulator: http://www.brouhaha.com/~eric/software/casmsim/ - replaced by https://nonpareil.brouhaha.com
- Some general cool info about the HP-35: https://www.keesvandersanden.nl/calculators/hp35.php
- HP-35 ROM: http://home.citycable.ch/pierrefleur/Jacques-Laporte/HP35%20ROM.htm
