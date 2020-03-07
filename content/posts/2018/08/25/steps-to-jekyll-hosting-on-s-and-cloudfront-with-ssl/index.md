---
layout: post
title: Steps to Jekyll hosting on S3 and CloudFront with SSL with Forestry.io Deployment
comments: true
date: 2018-08-25 16:40:09 +0000
heroImage: ./jekyll-s3-forestry.png
---

Here are the steps I went through to get a new / fresh blog up using Jekyll and deployed to Amazon S3 using Forestry.io with CloudFront and SSL.

## Creating the Jekyll site

It's probably best to follow the [Jekyll quick start quide](https://jekyllrb.com/docs/quickstart/), but here's basically what I went through...

- Create a GitHub repo (or something similar)
- Clone the new repo to your local machine and create the new Jekyll site framework. You should follow the above quick start guide, but these are the things I did on my OS X machine (that is already well setup for software development)...

```bash
git clone https://github.com/<GITHUB USER>/<GITHUB REPO NAME>.git
cd <GITHUB REPO NAME>
rvm use 2.5.1
gem install jekyll bundler
jekyll new . --force
bundle install
jekyll serve
```

- A new Jekyll site should now be available on [http://localhost.com:4000](http://localhost.com:4000)
- do the following to push the fresh Jekyll site to GitHub

```bash
git commit -am 'adding in the jekyll site'
git push
```

## Where the files will live

The site files will live in an **Amazon Simple Storage Service** bucket. This bucket will then be attached to **Amazon CloudFront** so that it can support SSL (as well as have global content distribution).

1.  Create a S3 bucket:
    - use the bucket name `static.YOUR-DOMAIN.com` - this will be where the non-CloudFront-ed content will live.
2.  Setup **Static Web Hosting** on the new bucket
    - `index.html` as index document
    - `error.html` as error document
3.  Set the bucket permissions under `Permssions > Bucket Polciy` add this:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::static.YOUR-DOMAIN.com/*"
    }
  ]
}
```

## Create an IAM user for S3 access

- In the AWS management console, go to IAM and add a user.
- Name the user and give the user `Progmatic Acces`
- Use the `Attach existing policies` link and add `AmazonS3FullAccess`
- Save the `CSV` file that this will generate somewhere safe. The values will be needed in the deployment phase.

## Setting up the domain

In **Route 53** click `Create Record Set` and create an `A - IPv4 address` with a name of `static` and that is an **alias** to the `static.YOUR-DOMAIN.com` S3 bucket.

## **EASY:** Using forestry.io to deploy

An easy way to now deploy the site is using [forestry.io](forestry.io) which is a tool to edit Jekyll (and Hugo) sites online. Behind the scenes you are just editing and commiting the post files to GitHub.

1. Import the GitHub repo to forestry.io
2. Under the `Settings` side menu, click on `Deployment` and select `Amazon S3` filling in the correct bucket name (`static.YOUR-DOMAIN.com`) and the `Access Key` and `Secret` from the `IAM` `CSV`
3. If all goes swimmingly, you should be able to make an edit using the forestry.io online editor and the site should get deployed to your S3 bucket. Which should be available at the domain name [http://static.YOUR-DOMAIN.com](http://static.YOUR-DOMAIN.com)

## Create a SSL certificate

In **Amazon Certificate Manager** create an SSL certificate for your domains

- Select **Request a public certificate**
- Add your domain names:
  - `YOUR-DOMAIN.com` and
  - `www.YOUR-DOMAIN.com`
- Set `Default Root Object` to `index.html`
- DNS validating is easy if you use **Route53** for DNS - Amazon will make the the changes to **Route53** for you

This will take some time, so wait until it completes before moving on to the **CloudFront** step.

## Setup CloudFront

Once the SSL certificate is issued you can create a new **Amazon CloudFront** distribution.

<!-- * For `Origin Domain Name` select the `static.YOUR-DOMAIN.com` address -->

- Select **Web**
- use the static address of the S3 bucket for the `Prigin Domain Name` - IE `http://static.YOUR-DOMAIN.com.s3-website-us-east-1.amazonaws.com` as seen in this StackOverflow answer: [https://stackoverflow.com/a/33087418/2642232](https://stackoverflow.com/a/33087418/2642232) <sup>[NOTE](#note)</sup>
- I selected `Redirect HTTP to HTTPS`
- Add your `Alternate Domain Names (CNAMES)` which should be:
  - `YOUR-DOMAIN.com`
  - `www.YOUR-DOMAIN.com`
- Select `Custom SSL Certificate` and select your certificate from the dropdown menu

This should be all the settings you need to set. Click `Create Distribution` and wait until it deploys. This will also take some time.

Once deployed to **CloudFront**, you should be able to get the **CloudFront** `Domain Name` from your `Distributions` which will look something like `xhja1sdfs7df.cloudfront.net`. Copy this address for the next step

<a name="note">NOTE</a>: Entering the static website value here should allow `permalink: pretty` in your config - so that you don't need `index.html` at the end of links...

## Update your DNS

In **Route53**

- add a `CNAME` record for the `www.YOUR-DOMAIN.com` entry with the CloudFront value from above (i.e. `xhja1sdfs7df.cloudfront.net`)
- add an `A - IPv4 address` record with the alias of the **CloudFront** dropdown value.

## Next Steps

The deployment currently is getting handled by [forestry.io](http://forestry.io/) which is all well and good, but better would be a deployment on check-in to [GitHub](https://github.com/) - Forestry may be actually doing this, but a tool more focused on deployment such as [CodeShip](https://codeship.com/) seems like a better idea. I may pursue this in the near (or distant) future.
