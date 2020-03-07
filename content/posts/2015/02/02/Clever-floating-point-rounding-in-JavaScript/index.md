---
layout: post
title: Clever floating point rounding in JavaScript
date: "2015-02-03"
tags: []
---

This is clever

<!--more-->

    +Math.PI.toFixed(0); // 3
    +Math.PI.toFixed(1); // 3.1
    +Math.PI.toFixed(2); // 3.14
    +Math.PI.toFixed(3); // 3.142
    +Math.PI.toFixed(4); // 3.1416
    +Math.PI.toFixed(5); // 3.14159

toFixed(x) converts the number to a string and prefixing with the '+' converts it back to a number. Found <a href="http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript">here</a>
