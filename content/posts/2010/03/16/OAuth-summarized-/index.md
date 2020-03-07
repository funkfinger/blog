---
layout: post
title: 'OAuth summarized '
date: '2010-03-17'
tags:
  - access-token
  - application
  - code
  - consumer
  - gem
  - oauth
  - request-token
  - ruby
  - session
  - sinatra
  - user
---

<h3>Application Scope</h3>

```ruby
# create the consumer...
consumer ||= OAuth::Consumer.new(KEY, SECRET, {:site => SITE, :authorize_path => PATH })
```

<h3>Session Scope</h3>

```ruby
# create the request token...
rt=consumer.get_request_token({ :oauth_callback => OAUTH_CALLBACK_URL })
# save the request token and secret in the session...
session[:r_token]=rt.token
session[:r_secret]=rt.secret
```

<h3>User Scope (Model)</h3>

```ruby
# use session values to create the request token...
rt=OAuth::RequestToken.new(consumer, session[:r_token], session[:r_secret])
# grab the user data from the OAuth provider...
access_token=rt.get_access_token({:oauth_verifier=>params[:oauth_verifier]})
oauth_user_json=access_token.get(VERIFY_PATH).body
oauth_user=JSON.parse(oauth_user_json)
# create or find the the user (using twitter.com for the email address - could use some work)...
u=TwitterUser.first_or_create(:email=>"#{oauth_user['screen_name']}@twitter.com")
u.username=oauth_user['screen_name']
u.save!
u.oauth_tokens.all.destroy
u.oauth_tokens.new(:user_access_token=>access_token.to_yaml)
u.save!
# set the session user for future use...
session[:user]=u.id
...
# and when you need access to the OAuth provider again, use the access_token stored in the User model
u=User.first(:id=>session[:user])
access_token=YAML::load(u.oauth_tokens.first.user_access_token)
verify=access_token.get(OAUTH_PROVIDERS["https://twitter.com"][:verify_path]).body
```
