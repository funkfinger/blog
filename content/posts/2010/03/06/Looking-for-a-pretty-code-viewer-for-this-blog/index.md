---
layout: post
title: Looking for a pretty code viewer for this blog...
date: '2010-03-07'
tags:
  - code
  - code
  - geshi
  - javascript
  - ruby
---

<b>\* Updated: Working thanks to <a href='http://wordpress.org/extend/plugins/wp-syntax/'>this</a> WP plugin. </b>

Here's some code as a test:

```ruby
require File.dirname(__FILE__) + '/../test_helper.rb'

class FundastacheTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    @app ||= FundAStache::Application
  end

  def test_home_page_ok
    get '/'
    assert last_response.ok?
  end

  def test_404_error
    get '/does_not_exist'
    assert !last_response.ok?
  end

  def test_custom_404_error
    get '/does_not_exist'
    assert last_response.body.include?("what\'cha lookin\' for?")
  end

end
```

and I want it to look nice. How can we do that with Wordpress?
