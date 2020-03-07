---
layout: post
title: AWS S3 using AWS/S3 Ruby gem
date: '2010-03-22'
tags:
  - amazon
  - aws
  - awss3
  - bucket
  - code
  - gem
  - ruby
  - s3
  - s3object
  - upload
---

working on storing files to Amazon's S3 web service. Here's what I've come up with so far:

```ruby
require 'aws/s3'
def aws_connect
  @aws_connect ||= AWS::S3::Base.establish_connection!(
    :access_key_id=>AWS_KEY,
    :secret_access_key=>AWS_SECRET
  )
end

def aws_upload(file,bucket=AWS_BUCKET)
  aws_connect
  AWS::S3::S3Object.store(file,open(file),bucket)
end
```

then a:

```ruby
aws_upload('test.txt')
```

Will upload the the file to the Amazon bucket. Pretty simple.
