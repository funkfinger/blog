---
layout: post
title: Trying out Pony for email
date: '2010-03-12'
tags:
  - code
  - email
  - gem
  - pony
  - ruby
  - test
---

Email is going to be used to activate an account, and I'm leaning towards using the Pony gem to simplify the creations and sending.

Here's how simple Pony is:

```ruby
Pony.mail(:to => 'test@example.com', :from=>'test@example.com', :subject=>'spam', :body=>(erb :registration_email))
```

and here's how you can test it with the <strong>pony-test</strong> gem:

```ruby
  def test_valid_new_user_signup_should_create_email
    count=all_email.count
    create_user
    assert_equal count+1, all_email.count
  end

  def test_signup_email_should_contain_activation_link
    create_user
    assert_match /http\:\/\//, current_email.body
  end
```

Don't forget to nclude the Pony test helpers in your test class...

```ruby
include Pony::TestHelpers
```
