---
layout: post
title: Setting a domain name (env['HTTP_HOST']) to use in Rack::Test
date: '2010-03-13'
tags:
  - code
  - env
  - helper
  - http_host
  - rack
  - ruby
  - test
---

This may not be the best way to do this, but this is what I used at the top of my test file so that a helper method has a value for Rack's env['HTTP_HOST']:

```ruby
class FundastacheUserTest < Test::Unit::TestCase
  ...
  def env
    last_request.env['HTTP_HOST']="example.org"
    last_request.env
  end
  ...
```

The test tests to see that using the activation link (that a user gets in an email) activates the user. It looks something like this:

```ruby
  def test_using_activation_link_should_activate_account
    create_user
    user=User.first
    path=activation_link(user)
    path=~/http\:\/\/example.org(.*)/
    get $1
    follow_redirect!
    assert last_response.ok?
    assert last_response.body.include?('Account activated!')
    user=User.first
    assert user.activated
  end
```

and the helper method looks something like this:

```ruby
module FundAStache
  module Helpers
    ...
    def activation_link(user)
      "http://#{env['HTTP_HOST']}/user/activate/#{user.activation_token}"
    end
    ...
  end
end
```
