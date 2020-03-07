---
layout: post
title: Storing a Ruby object in Rack::Session will probably clobber the session
date: "2010-03-17"
tags:
  - 2k
  - code
  - oauth
  - rack
  - session
---

In my case it was an OAuth request token and when it was serialized it must have been larger than the cookie limit. Spent too much time on this.
