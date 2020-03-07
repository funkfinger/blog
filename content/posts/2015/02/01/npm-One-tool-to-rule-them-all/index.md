---
layout: post
title: "npm: One tool to rule them all..."
date: "2015-02-02"
tags:
  - code
---

After trying to sort out what a toolset should be for standard JS / HTML / possibly Node development, I'm narrowing on just using npm. Here's the reference material that got me to this place:

<strong>npm as front-end package management (bower replacement)</strong>

<ul>
	<li><a href="https://github.com/bower/bower/issues/1520">https://github.com/bower/bower/issues/1520</a></li>
	<li><a href="http://blog.kewah.com/2014/npm-as-a-front-end-package-manager/">http://blog.kewah.com/2014/npm-as-a-front-end-package-manager/</a></li>
	<li><a href="http://dontkry.com/posts/code/using-npm-on-the-client-side.html">http://dontkry.com/posts/code/using-npm-on-the-client-side.html</a></li>
</ul>
<strong>npm as build tool (grunt / gulp replacement)</strong>
<ul>
	<li><a href="http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/">http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/</a></li>
	<li><a href="http://superbigtree.tumblr.com/post/59519017137/introduction-to-grunt-js-and-npm-scripts-and">http://superbigtree.tumblr.com/post/59519017137/introduction-to-grunt-js-and-npm-scripts-and</a></li>
</ul>
What I've found so far is that I've had to install more npm packages that I thought I would- these are to make up for npm's shortcomings in running scripts. Mostly I can see how this would be a huge pain if I were dev-ing on Windows (which I hopefully never will).

Here's a link to the <a href="https://github.com/funkfinger/jungle-gym/blob/master/package.json">package.json</a> file that I'm playing with now - it's mostly based on the package.json file in <a href="https://github.com/keithamus/npm-scripts-example">this project</a>.

So, lets see if it works without too many weird hoops...
