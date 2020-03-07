---
layout: post
title: Including common routines in test_helper.rb
date: '2010-03-24'
tags:
  - code
  - ruby
  - test
  - testunit
  - testing
  - test_helper
---

I should have done this earlier. To do a number of tests, I have to repeat the same actions like create a user, log a user in, etc. I was putting these actions at the top of each test file, but have wised up and moved them to the `test_helper.rb` file. Here's how that looks now:

```ruby
module Test::Unit
  class TestCase
    ...

    def create_user(user_hash={})
      post '/user/signup', {:user=>{:username=>"testuser",:email=>"test@test.com",:password=>"pass1",:password_confirmation=>"pass1"}.merge(user_hash)}
    end

    def login(user_hash={})
      post "/user/login", :user=>{:username_or_email=>'testuser',:password=>'pass1'}.merge(user_hash)
    end

  end
end
```
