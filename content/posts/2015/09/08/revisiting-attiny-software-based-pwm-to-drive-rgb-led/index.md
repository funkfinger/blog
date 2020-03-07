---
layout: post
title: 'Revisiting ATtiny85 Software-Based PWM to Drive RGB LED'
comments: true
date: 2015-09-08 20:34:06
categories: [attiny85, avr-gcc, pwm, software-based-pwm]
---

I'm digging up some old code that I did a long time ago - It's a software-based pulse width modulator (PWM) for AVR microprocessors. The basics came from [this technote](http://www.atmel.com/Images/doc8020.pdf), and the code was based on [this sample project](http://www.avrfreaks.net/sites/default/files/AVR136.zip) from AVR.

I originally wanted to have this run 2 RGB LEDs from an ATtiny85 but I steered away from that because I was going to have to use the reset pin as an output and then I ran across this in the [ATtiny datasheet - Table 21-1, page 162](http://www.atmel.com/Images/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet.pdf):

    6. The RESET pin must tolerate high voltages when entering and operating in programming modes and, as a consequence,
    has a weak drive strength as compared to regular I/O pins. See Figure 22-23, Figure 22-24, Figure 22-25, and Figure 22-26
    (starting on page 184).

Looks like I can't drive an LED with the reset as an output directly. Bummer. No big deal using a bigger (more pins) AVR chip, but I thought it was cool to get two PWM-ed RGB LEDs out of an 8-pin chip.
