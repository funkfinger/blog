---
layout: post
title: My war is winding down with OAuth
date: '2010-03-16'
tags:
  - access-token
  - code
  - consumer
  - key-secret
  - oauth
  - provider
  - request-token
  - token
---

Summary of what's going on with OAuth:

<ol>
<li>create a OAuth consumer. Consumer is made up of:
<ul>
<li>application key</li>
<li>application secret</li>
<li>the url and path to the OAuth provider</li>
</ul></li>
<li>create a request token:
<ul><li>this makes a call to the provider</li>
<li>the request token sends the callback URL to the provider</li>
<li>it seems like this expires pretty quickly (at least with Twitter)</li>
<li>therefore, I'll probably hold this in a session</li>
<li>once returned from the provider, you can redirect to the provider to complete the access</li>
<li>once access is granted, the provider will return the user to the callback URL you sent</li>
</ul>
</li>

<li>create the access token:
<ul><li>this makes a call to the provider</li>
<li>the user is redirected from the provider to the callback URL</li>
<li>a querystring variable - `oauth_verifier` - is included with the callback URL</li>
<li>the `oauth_verifier` value is then sent back to the provider</li>
<li>the provider then returns an access token</li>
<li>the access token can hang around for a while and I'll save that in the database attached to the User model</li>
</ul>
</li>

</ol>
