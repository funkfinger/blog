---
layout: post
title: Lost sleep over JSON and Rack::PostBodyContentTypeParser
date: '2010-04-04'
tags:
  - charset
  - code
  - json
  - params
  - postbodycontenttypeparser
  - prototype-js
  - rack
  - regex
  - sinatra
  - test
---

I've been fighting this issue the last couple nights. I wrote earlier about how `Rack::PostBodyContentTypeParser` can automagically turn a posted JSON object into a Rack / Sinatra params hash. So, I wrote some tests to make sure this was the case and moved on. Well, it turns out in real life things weren't working and I couldn't figure out why. Everything looked cool, but the hash wasn't getting set when I did an AJAX call in the browser - everything was empty. I looked at everything, from the server, to the JS library, to the browser, to setting different content types in `prototype.js` etc... UGH!

The short of it is that `Rack::PostBodyContentTypeParser` requires exactly `application/json` in order to automagically turn the posted JSON object into Rack params and `prototype.js` (and `jquery.js` were adding an encoding type of `charset=UTF-8` so the entire header entry was coming across as this `CONTENT_TYPE: application/json; charset=UTF-8`. So, as a fix, I'm just including the `Rack::PostBodyContentTypeParser` in the Sinatra application with one small change. Here's the code:

```ruby
module Rack

  # A Rack middleware for parsing POST/PUT body data when Content-Type is
  # not one of the standard supported types, like <tt>application/json</tt>.
  #
  # TODO: Find a better name.
  #
  class PostBodyContentTypeParser

    # Constants
    #
    CONTENT_TYPE = 'CONTENT_TYPE'.freeze
    POST_BODY = 'rack.input'.freeze
    FORM_INPUT = 'rack.request.form_input'.freeze
    FORM_HASH = 'rack.request.form_hash'.freeze

    # Supported Content-Types
    #

    ################## turned into regex so it matches type with encoding data...
    #APPLICATION_JSON = 'application/json'.freeze
    APPLICATION_JSON = /^application\/json/.freeze

    def initialize(app)
      @app = app
    end

    def call(env)
      case env[CONTENT_TYPE]
      when APPLICATION_JSON
env.update(FORM_HASH => JSON.parse(env[POST_BODY].read), FORM_INPUT => env[POST_BODY])
      end
      @app.call(env)
    end

  end
end
```

I tested that this worked by writing the following:

```ruby
def test_post_as_json_converts_to_params
  # sanity check that post with normal params works...
  post '/test_params_as_json', :param1=>"param one"
  assert_equal last_response.body,"params[:param1]=param one"
  post '/test_params_as_json', {:param1=>"param one"}.to_json, "CONTENT_TYPE"=>"application/json"
  assert_equal last_response.body,"params[:param1]=param one"
  # this is the problem, adding a charset to the content type seems to breaks rack-contrib/post_body_content_type_parser.rb
  post '/test_params_as_json', {:param1=>"param one"}.to_json, "CONTENT_TYPE"=>"application/json; charset=UTF-8"
  assert_equal last_response.body,"params[:param1]=param one"
end
```
