---
layout: post
title: Battling autotest
date: '2010-03-27'
tags:
  - autotest
  - code
  - test
  - testing
---

Looking for a reason that autotest is skipping some of my test files....

<strong>UPDATE:</strong> Found the culprit. In my `.autotest` file I had some exclusions which were matching on the <strong>log</strong> in b<strong>log</strong>

```ruby
Autotest.add_hook :initialize do |autotest|
  %w{.git .svn .hg .DS_Store db log tmp vendor ._* .sqlite3}.each do |exception|
    autotest.add_exception(exception)
  end
end
```

I think I'll just comment the exception line out for now as I don't think it's necessary.
