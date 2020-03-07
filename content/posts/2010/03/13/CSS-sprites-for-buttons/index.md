---
layout: post
title: CSS sprites for buttons
date: '2010-03-14'
tags:
  - accessibility
  - buttons
  - code
  - css
  - html
  - image-replacement
  - sprite
---

Found <a href="http://www.komodomedia.com/blog/2009/05/sign-in-with-twitter-and-facebook-buttons/">these</a> login buttons online which have three states - normal, hover and visited. This makes them perfect to use as a CSS sprite, so here's how that went down:

The CSS looks like this:

```css
.signin_button {
  display: block;
  height: 22px;
  width: 150px;
  font-size: 0.1em;
}

#twitter_button {
  background: transparent url(/images/signin_twitter.png) top left no-repeat;
}

#facebook_button {
  background: transparent url(/images/signin_facebook.png) top left no-repeat;
}

#twitter_button:hover,
#facebook_button:hover {
  background-position: 0px -24px;
}

#twitter_button:active,
#facebook_button:active {
  background-position: 0px -48px;
}

span.hide {
  display: none;
}
```

and the HTML looks like this:

```html
<p>
  <a class="signin_button" href="/oauth/create" id="twitter_button">
    <span class="hide">
      Sign in with Twitter.
    </span>
  </a>
  <a class="signin_button" href="/oauth/create" id="facebook_button">
    <span class="hide">
      Sign in with Facebook.
    </span>
  </a>
</p>
```

<strong>Note:</strong> `display: none;` is a no-no in terms of accessibility, but after the first couple accessibility-friendly attempts failed, I got lazy. Perhaps I should pursue a JavaScript solution, as I **believe** that screen readers interrupt the page pre-JS.
