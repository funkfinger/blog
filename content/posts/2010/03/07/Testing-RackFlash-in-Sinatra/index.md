---
layout: post
title: Testing Rack::Flash in Sinatra
date: '2010-03-08'
tags:
  - code
  - code
  - flash-testing
  - rack
  - ruby
  - sinatra
---

Here's a slightly dumb way to test Rack::Flash in a Sinatra app...

```ruby
require File.dirname(__FILE__) + '/../test_helper.rb'

module FundAStache
  class Application
    get '/rack_flash_test' do
      flash[:notice]='rack flash is working'
      haml :index
    end
  end
end

class FundastacheTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def flash
    last_request.env['x-rack.flash']
  end

  def app
    @app ||= FundAStache::Application
  end

  def test_rack_flash_working
    # see fake route above...
    get '/rack_flash_test'
    assert_not_nil flash
    assert last_response.body.include?("rack flash is working")
  end
end
```
