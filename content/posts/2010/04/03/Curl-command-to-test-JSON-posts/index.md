---
layout: post
title: Curl command to test JSON posts
date: '2010-04-04'
tags:
  - applicationjson
  - bash
  - code
  - curl
  - json
  - post
  - test
---

```
curl -i -H "Content-Type: application/json" -H "Accept: application/json" -X POST -d '{"user":{"username_or_email":"username","password":"password"}}' http://fas/test_json_post
```
