---
layout: post
title: Trying out Codeship
date: '2015-01-29'
tags: []
---

Stumbled across <a href="https://codeship.com/">Codeship</a> and decided to give it a shot. Works a little similar to deploying to <a href="http://heroku.com">Heroku</a> which I'm already doing, so it wasn't too bad to figure out.

Because <a href="http://heroku.com">Heroku</a> stores deployment specific data in environment variables, my little application was pretty much already set up for <a href="https://codeship.com/">Codeship</a>. I had to export the variables a little differently. Also, I learned quickly that you had to set the Ruby version using RVM in the setup and the test command. Here is my setup - the environment vars are set so the tests can pass:

<Gist id="dba9dedc81de4d6bf40e" />

and here is my test command:

<Gist id="83c1e0cf92ad914e90d6" />

and the poop is passing (at least right now it is)...

<img src="https://codeship.com/projects/f02f65f0-88d1-0132-dcd4-3ae5e43a70a3/status?branch=master" width="155" height="25" class="alignnone" />
