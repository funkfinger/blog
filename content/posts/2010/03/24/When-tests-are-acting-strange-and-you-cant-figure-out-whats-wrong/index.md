---
layout: post
title: When tests are acting strange and you can't figure out what's wrong...
date: '2010-03-25'
tags:
  - bug
  - class
  - code
  - dumb
  - test
---

Check that you didn't copy / paste / <strong>didn't change</strong> the test class definition line.

example:

My <strong>BlogPost</strong> class was mis-titled...

```ruby
class FundastacheSiteTest < Test::Unit::TestCase
...
```

There went an hour...
