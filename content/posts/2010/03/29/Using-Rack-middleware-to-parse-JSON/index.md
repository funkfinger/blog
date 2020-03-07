---
layout: post
title: Using Rack middleware to parse JSON
date: '2010-03-30'
tags:
  - code
  - json
  - middleware
  - params
  - postbodycontenttypeparser
  - rack
  - ruby
  - sinatra
  - testing
---

In attempting to AJAX-ize the site, I had the desire to handle JSON as if it were form post data. Queue a Rack middleware solution. `<a href='http://github.com/rack/rack-contrib'>rack-contrib</a>` contains a bunch of common middleware extensions, one being the horribly named `PostBodyContentTypeParser`. To get this working I added:

```ruby
require 'rack/contrib'
```

with all of the rest of the required files.

Added:

```ruby
use Rack::PostBodyContentTypeParser
```

to my application class

And went about <strong>over</strong> testing it like so:

```ruby
def test_json_creates_params_hash
  params_hash={"user"=>{"username"=>"testuser","email"=>"test@test.com","password"=>"pass1","password_confirmation"=>"pass1"}}
  post '/test_json', params_hash
  assert !last_request.params.blank?
  assert_equal params_hash, last_request.params
  assert last_response.ok?
  json_string="{\"user\":{\"password_confirmation\":\"pass1\",\"username\":\"testuser\",\"password\":\"pass1\",\"email\":\"test@test.com\"}}"
  post '/test_json', JSON(json_string)
  assert !last_request.params.blank?
  assert_equal params_hash, last_request.params
  assert last_response.ok?
  post '/test_json', json_string, "CONTENT_TYPE"=>"application/json"
  assert_equal last_request.env["CONTENT_TYPE"], "application/json"
  assert !last_request.params.blank?
  assert_equal params_hash, last_request.params
  assert last_response.ok?
end
```
