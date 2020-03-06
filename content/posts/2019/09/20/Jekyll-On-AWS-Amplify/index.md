---
layout: post
title: Jekyll On AWS Amplify
comments: true
date: 2019-09-20 20:00:00 +0000
heroImage: ./jekyll-amplify-hero.png
---

Here I am, changing the hosting / backend / whatever on this blog again. This time, I'm going with AWS Amplify. It will let me do continuous integration (automatically publish) using just [GitHub](https:github.com) connected to [AWS Amplify](https://aws.amazon.com/amplify/). Amplify recognizes Jekyll sites, and builds and deploys them automatically, so the setup is fairly trivial. I already do all of my domain registration through AWS Route 53 so my setup is really simple. The only thing I haven't got a good solution for is hosting external media (aka images). That may be the place I look next to better automate the creation / distribution of content.

Incidentally, [Forestry.io](https://forestry.io) was an ok solution, but I prefer using the command line and text editors to create and edit content. On top of that, I forgot I was even using Forestry.io and after a year of no posts, went straight to Git anyway. I'm probably not in the majority on this, so take anything I have to suggest with a grain of salt...

# Things to Note:

- The [minima](https://github.com/jekyll/minima) (and probably other stuff) requires the environment variable `JEKYLL_ENV` to be set to `production` for some of the functionality to render - notably [Google Analytics](https://analytics.google.com/) and [Disqus](https://disqus.com). This is easily done in the Amplify Console

![Amazon Amplify Jekyll environment variable](https://s3.amazonaws.com/media.jaywiggins.com/images/amplify-environment-variable.png 'Amazon Amplify Jekyll environment variable')
