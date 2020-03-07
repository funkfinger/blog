---
layout: post
title: 'Starting somthing on Raspberry Pi boot...'
comments: true
date: 2015-06-14 09:49:14
categories: [raspberry pi]
---

This seems to be the easiest way to start something up on bootup of Rasperian...

- run `crontab -u pi -e`
- and add `@reboot sh /home/pi/amazon_echo.sh`
