---
layout: post
title: Capistrano deploy to multiple locations
date: '2010-04-23'
tags:
  - beta
  - capistrano
  - code
  - deploy
  - production
  - recipe
  - stage
---

Pretty simple, but wanted to log here so I can look this up in the future...

I wanted to deploy to both a stage and a live site. Here's how that went down:

First I installed the `capistrano-ext` gem. Second, I edited my Capfile to look like this:

```ruby
require 'capistrano/ext/multistage'
set :default_stage, "beta"
set :stages, %w(beta live)
```

Third, I created a `deploy` folder and added my two recipes there. `beta.rb` looks like this:

```ruby
load 'deploy' if respond_to?(:namespace) # cap2 differentiator

default_run_options[:pty] = true

# be sure to change these
set :user, 'username'
set :domain, 'beta.example.org'
set :application, 'fundastache'

# the rest should be good
set :repository,  "#{user}@#{domain}:git/#{application}.git"
#set :repository,  "/home/#{user}/git/#{application}.git"
set :deploy_to, "/home/#{user}/#{domain}"
set :deploy_via, :remote_cache
set :scm, 'git'
set :branch, 'master'
set :git_shallow_clone, 1
set :scm_verbose, true
set :use_sudo, false

server domain, :app, :web

namespace :deploy do
  task :restart do
    run "touch #{current_path}/tmp/restart.txt"
  end
end
```

The live recipe looks almost identical.

Now when I

```bash
cap live deploy
```

the site is deployed to the live environment and when I

```bash
cap beta deploy
```

or simply

```bash
cap deploy
```

the site is deployed to the beta site.
