---
layout: post
title: Backing up your DB on a Capistrano deployment
date: '2010-05-20'
tags:
  - backup
  - capistrano
  - code
  - database
  - db
  - deploy
  - sqlite
---

Yeah, it's simple but useful. Since I'm using `sqlite` at the moment, it's just a copy but you could run any command in a similar way. I'm also tagging the backup name with a date. Here's a snip from my Capistrano deploy file....

```ruby
# ...snip...
namespace :deploy do
  task :restart do
    t=Time.now
    run "cp /path/to/db.sqlite3 /path/to/backup/#{t.year}-#{t.month}-#{t.day}_#{t.hour}:#{t.min}:#{t.sec}_db.sqlite3"
    run "touch #{current_path}/tmp/restart.txt"
  end
end

```
