---
layout: post
title: 'Tap BPM for Teenage Engineering Pocket Operator'
comments: true
date: 2016-03-31 11:26:08
categories: [attiny85, trinket, po-12]
---

I have a [Teenage Engineering Pocket Operator (PO-12)](https://www.teenageengineering.com/products/po) and it's pretty cool. One thing I felt was missing, though, was a way to tap a button to set the BPM value - the 3 presets (Hip-Hop, Disco, Techno) and dial adjust isn't very specific. It does however have a sync feature that allows you to connect multiple Pocket Operators together (and I've heard some other devices as well) - and keep them in sync... which got me thinking, could one create the sync signal using some simple electronics and programming? Project time...

I originally (and likely still will) went with an bare ATTiny85 and an arcade-style button. I've since moved to using an [Adafruit 5v Trinket](https://www.adafruit.com/products/1501) because I did a fair amount of this work on a plane from Phoenix to Philadelphia and didn't want to bother with my Dragon programmer.

Hardware setup is really straight forward...

![schematic](http://media.jaywiggins.com.s3.amazonaws.com/images/Screen%20Shot%202016-03-31%20at%204.09.46%20PM.png 'schematic')

[Software](https://github.com/funkfinger/tap-bpm-click-track/blob/5ea43eae6498fdbdec285e12b0fcdaf8c4e07898/src/main.cpp) setup uses timer 0 on the ATTiny85 timer tuned to 1ms. The button is setup to interrupt and there isn't really any code in the loop. I'm just figuring this stuff out, so there may be bugs and I may be committing a number of bad practices in my code - use at your own peril and improve...
