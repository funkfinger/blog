---
layout: post
title: Taking a pass on URLs that aren't supposed to exist (in Sinatra)
date: '2010-03-13'
tags:
  - '404'
  - code
  - pass
  - route
  - ruby
  - sinatra
  - url
---

This is simple, but I'm dumping it here anyway... I'd like to use the Twitter model of account access: <strong>http://example.com/USERNAME</strong>

So, if the user exists, if should display that user's page. If the user doesn't exist (or the user is deactivated) then this route will pass, which in this case, passes to the 404 error page. Here's how I'm dealing with that in my routes:

```ruby
    get '/:username' do
      @user=User.first(:username=>params[:username],:activated=>true)
      pass unless @user
      haml :user_page
    end
```

<strong>Note:</strong>This should be low on the chain of routes so that users with names or actual routes can't be rendered as user pages. Example, a user with a username of "login" should not interfere with the application function of "login". I might look further into protecting this beyond it's position in the URL parsing chain.
