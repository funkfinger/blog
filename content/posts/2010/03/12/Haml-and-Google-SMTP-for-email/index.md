---
layout: post
title: Haml and Google SMTP for email
date: '2010-03-13'
tags:
  - code
  - email
  - erb
  - haml
  - pony
  - ruby
  - smtp
  - template
---

I first thought that I would have to use ERB to render non-HTML-like templates. Not true. Haml let you do a `:plain` filter which is pretty much the same as using ERB templates.

Here's a simple example haml template for email:

```haml
:plain
  Welcome #{@user.username} to Fund-A-Stache!

  click the following link to activate your account:

  #{activation_link(@user)}
```

I'm also using Google SMTP for email. That way I can send email from my home (which blocks SMTP traffic). This may change, but just so I can remember why I'm doing this, here's the Pony call:

```ruby
Pony.mail(
  :to=>@user.email,
  :from=>'user@example.org',
  :subject=>'Welcome',
  :body=>(haml :registration_email, :layout=>false),
  :content_type=>'text/html',
  :via=>:smtp,
  :smtp=>{
    :host=>'smtp.gmail.com',
    :port=>'587',
    :tls=>true,
    :user=>'user@example.org',
    :password=>'secret',
    :auth=>:plain, # :plain, :login, :cram_md5, no auth by default
    :domain=>"example.org" # the HELO domain provided by the client to the server
  }
)
```
