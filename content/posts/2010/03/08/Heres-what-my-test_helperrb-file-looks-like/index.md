---
layout: post
title: Here's what my test_helper.rb file looks like...
date: '2010-03-09'
tags:
  - code
  - helper
  - ruby
  - sinatra
  - test
---

```ruby
require 'fundastache'
require 'test/unit'
require "rack/test"
require "rack/flash/test"

ENV['RACK_ENV'] = 'test'

# set test environment
set :environment, :test
set :run, false
set :raise_errors, true
set :logging, false

DataMapper.setup(:default, "sqlite3::memory:")
DataMapper.auto_migrate!
```
