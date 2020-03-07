---
layout: post
title: More on OpenID
date: "2010-03-11"
tags:
  - api
  - code
  - facebook-connect
  - login
  - oauth
  - openid
  - sreg
  - user-creation
  - user-model
---

I'm now working on user creation process...

This was what I was trying to eliminate by using OpenID - but realistically, while OpenID may be suited to the problem <strong>"Allow access to a person visiting this site"</strong>, it isn't well suited to the problems of <strong>"Use the supplied information to act as a user on this site"</strong>

The problem is this, OpenID allows for a federated login but doesn't allow for basic user information (like an email address or name) which is critical to application usage to be passed back to the application. And while there is something called <em>OpenID Simple Registration Extension (sreg)</em>, it doesn't seem to be supported in ANY major OpenID providers.

This leaves OAuth or Facebook Connect. Both are better suited to replacing a the whole user creation / user model in that most of the necessary basic user information is available via either's API. Additionally, information about the specific service that you're connecting to is available. For example with Twitter's OAuth, you have access to all of the friends associated with the Twitter account you're connecting to.

Google, incidentally, is trying to <a href="http://googledataapis.blogspot.com/2009/01/bringing-openid-and-oauth-together.html">mix the</a> <a href="http://groups.google.com/group/google-federated-login-api/web/oauth-support-in-googles-federated-login-api">two together</a>, which seems like a pretty good approach but I'm unaware of any other site using this mixed OAuth / OpenID thing at the moment.

So, in summary, I think I'll start pursuing the OAuth approach. I will also probably build a Facebook Connect approach if time allows.
