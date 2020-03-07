---
layout: post
title: Facebook OAuth with Sinatra
date: "2010-05-20"
tags:
  - access-token
  - api
  - client-id
  - code
  - facebook
  - graph
  - graph-facebook-com
  - json
  - oauth
---

This <strong>MOSTLY</strong> is working, so, here's what I found when trying to connect to Facebook with OAuth. It needs some <strong>serious refactoring</strong> because a lot of this was done in an "investigative" trial and error way. It also looks like Facebook have improved their <a href='http://developers.facebook.com/docs/api'>docs on this</a> since I was first looking at them...

First, you need to initiate a connection:

```ruby
    get '/:blog_name/facebook/oauth/create' do
      redirect "https://graph.facebook.com/oauth/authorize?client_id=##FACEBOOK API KEY##&redirect_uri=##CALLBACK URL##&scope=publish_stream,user_status,user_photos,user_about_me"
    end
```

where `##FACEBOOK API KEY##` = your applications API key (mine is a 32 digit hex value) and `##CALLBACK URL##` = the URL that will be processing the next step. Also, the scope value let's you get more access to the user's account. Check their <a href='http://developers.facebook.com/docs/authentication/permissions'>extended permissions</a> doc for more info.

Next, you need to process what comes back from Facebook. I am stashing what comes back in the DB (the `FacebookOauthToken` model). Also using the `Mechanize` gem which is pretty silly. Some of the code below is specific to my app, so ignore those bits...

```ruby
    get '/:blog_name/facebook/oauth/callback' do
      if !params['code'].blank?
url="https://graph.facebook.com/oauth/access_token"
client_id="client_id=##CLIENT ID##"
client_secret="client_secret=## CLIENT SECRET ##"
code="code=#{URI.escape(params['code'])}"
redirect_uri="redirect_uri=http://example.org/#{@blog.url_name}/facebook/oauth/callback"
      
url="#{url}?#{client_id}&#{client_secret}&#{code}&#{redirect_uri}"
begin
  res=open(url)
rescue
  flash[:error]="There was a problem connecting to Facebook"
  redirect "/#{@blog.url_name}/"
end
read=res.read
access_token=CGI.parse(read)['access_token']
if !access_token.blank?
  @blog.facebook_oauth_token = FacebookOauthToken.new(:access_token=>access_token,:blog_name=>params[:blog_name])
  if @blog.save
    begin
      a=Mechanize.new
      res=a.get("https://graph.facebook.com/me/?access_token=#{access_token}")
      @blog.facebook_oauth_token.facebook_id=JSON(res.body)['id']
      @blog.save!
    rescue
      flash[:error]="There was a problem getting information from Facebook"
      redirect "/#{@blog.url_name}/"
    end
    flash[:notice]="Facebook connection created!"
    redirect "/#{@blog.url_name}/"
  else
    flash[:error]="There was a problem saving Facebook connection"
    redirect "/#{@blog.url_name}/"
  end
else
  flash[:error]="There was a problem making Facebook connection"
  redirect "/#{@blog.url_name}/"
end
      else
flash[:error]="There was a problem connecting to Facebook"
redirect "/#{@blog.url_name}/"
      end
    end
```

Where `##CLIENT ID##` = your <strong>Application ID</strong> (mine is a 12 digit numeric value) and `## CLIENT SECRET ##` = your <strong>Application Secret</strong> (mine is a 32 digit hex value).

Once you have an `access_token` you should be able to make calls to URLs like this: `
"https://graph.facebook.com/me/?access_token=#{access_token}"`. The `/me` path is the connected user's data and I'm grabbing their Facebook ID from the returned JSON for use elsewhere.
