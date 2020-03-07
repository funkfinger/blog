---
layout: post
title: Couldn't get that last thing to work so keeping it simple (stupid)
date: '2010-04-01'
tags:
  - before-filter
  - code
  - file-extension
  - format
  - mime-type
  - sinatra
---

This could undoubtedly be more elegant, but it's late and I want it to work now. May take another stab at it later...

<strong>TODO:</strong> limit the content types and only allow rendering if they are ok.

Setting up a before filter:

```ruby
before do
  # remove and grab the file extension
  request.path_info.sub! %r{\.([^\./]+)$}, ''
  @format=$1 || 'html'
  @charset=mime_type($1) || 'text/html'
  content_type @charset, :charset => 'utf-8'
end
```

and using a case statement:

```ruby
get "/home" do
  case @format
  when 'html'
    @stylesheet='home.css'
    haml :home, :layout=>:layout_simple
  when 'js'
    "{'js':true}"
  else
    pass
  end
end
```
