---
title: "Social networks and accessibility: A not so sad picture"
slug: social-networks-and-accessibility-a-rather-sad-picture
date_published: 2015-02-21T11:12:27.000Z
date_updated: 2015-02-21T11:12:27.000Z
tags: [Facebook, GooglePlus, IdentiCa, InclusiveDesign, SocialNetworks, Twitter, Yammer]
---

This post originally was written in December 2011 and had a slightly different title. Fortunately, the landscape has changed dramatically since then, so it is finally time to update it with more up to date information.

Social networks are part of many people&#8217;s lives nowadays. In fact if you&#8217;re reading this, chances are pretty high that you came from Twitter, Facebook or some other social network. The majority of referrers to my blog posts come from social networks nowadays, those who read me via an RSS feed seem to be getting less and less.

So let&#8217;s look at some of the well-known social networks and see what their state of accessibility is nowadays, both when considering the web interface as well as the native apps for mobile devices most of them have.

In recent years, several popular social networks moved from a fixed relaunch schedule of their services to a more agile, incremental development cycle.. Also, most, if not all, social network providers we&#8217;ll look at below have added personell dedicated to either implementing or training other engineers in accessibility skills. Those efforts show great results. There is over-all less breakage of accessibility features, and if something breaks, the teams are usually very quick to react to reports, and the broken feature is fixed in a near future update. So let&#8217;s have a look!

## Twitter

[Twitter](http://twitter.com) has come a long way since I wrote the initial version of this post. New Twitter was here to stay, but ever since a very skilled engineer boarded the ship, a huge improvement has taken place. One can nowadays use Twitter with keyboard shortcuts to navigate tweets, reply, favorite, retweet and do all sorts of other actions. Screen reader users might want to try turning off their virtual buffers and really use the web site like a desktop app. It works really quite well! I also recommend taking a look at the keyboard shortcut list, and memorizing them when you use Twitter more regularly. You&#8217;ll be much much more productive! I wrote something more [about the Twitter accessibility team](https://www.marcozehe.de/2013/08/23/twitter-now-has-a-dedicated-accessibility-team/) in 2013.

### Clients

Fortunately, there are a lot of accessible clients out there that allow access to Twitter. The Twitter app for iOS is very accessible now for both iPhone and iPad. The Android client is very accessible, too. Yes, there is the occasional breakage of a feature, but as stated above, the team is very good at reacting to bug reports and fixing them. Twitter releases updates very frequently now, so one doesn&#8217;t have to wait long for a fix.

There&#8217;s also a web client called [Easy Chirp](http://www.easychirp.org/) (formerly Accessible Twitter) by Mr. Web Axe Dennis Lembree. It&#8217;s now in incarnation 2. This one is marvellous, it offers all the features one would expect from a Twitter client, in your browser, and it&#8217;s all accessible to people with varying disabilities! It uses all the good modern web standard stuff like WAI-ARIA to make sure even advanced interaction is done accessibly. I even know many non-disabled people using it for its straight forward interface and simplicity. One cool feature it has is that you can post images and [provide an alternative description](http://www.webaxe.org/easy-chirp-now-provides-accessible-images-for-your-tweets/) for visually impaired readers, without having to spoil the tweet where the picture might be the punch line. You just provide the alternative description in an extra field, and when the [link to the picture](http://www.easychirp.com/img/SYESaRq) is opened, the description is provided right there. How fantastic is that!

For iOS, there are two more Apps I usually recommend to people. For the iPhone, my Twitter client of choice was, for a long time, [TweetList Pro](http://zooble.com/tweetlist), an advanced Twitter client that has full VoiceOver support, and they&#8217;re not even too shy to say it in their app description! They have such things as muting users, hash tags or clients, making it THE Twitter client of choice for many for all intents and purposes. The reason why I no longer use it as my main Twitter client is the steep decline of updates. It&#8217;s now February 2015, and as far as I know, it hasn&#8217;t even been updated to iOS 8 yet. The last update was some time in October 2013, so it lags behind terribly in recent Twitter API support changes, doesn&#8217;t support the iPhone 6 and 6 Plus screens natively, etc.

Another one, which I use on the iPhone and iPad, is Twitterrific by [The Icon Factory](http://www.iconfactory.com). Their iPhone and iPad app is fully accessible, the Mac version, on the other hand, is totally inaccessible and outdated. On the Mac, I use the client [Yorufukurou](http://sites.google.com/site/yorufukurou/) (night owl).

Oh yes and if you&#8217;re blind and on Windows, there are two main clients available, [TheQube](http://theqube.oire.org), and [Chicken Nugget](https://q-continuum.net/chicken_nugget/). TheQube is designed specifically for the blind with hardly any visual UI, and it requires a screen reader or at least installed speech synthesizer to talk. Chicken Nugget can be run in UI or non-UI mode, and in non-UI mode, definitely also requires a screen reader to run. Both are updated frequently, so it&#8217;s a matter of taste which one you choose.

In short, for Twitter, there is a range of clients, one of which, the EasyChirp web application, is truly cross-platform and useable anywhere, others are for specific platforms. But you have accessible means to get to Twitter services without having to use their web site.

## Facebook

[Facebook](http://www.facebook.com) has come a long long way since my original post as well. When I wrote about the web site originally, it had just relaunched and completely broken accessibility. I&#8217;m happy to report that nowadays, the FB desktop and mobile sites both are largely accessible, and Facebook also has a dedicated team that responds to bug reports quickly. They also have a training program in place where they teach other Facebook engineers the skills to make new features accessible and keep existing ones that way when they get updated. I wrote [more about the Facebook accessibility changes](https://www.marcozehe.de/2013/06/02/advancements-in-the-accessibility-of-facebook/) here, and things constantly got better since then.

### Clients

Like the web interfaces, the iOS and Android clients for Facebook and Messenger have come a long way and frequently receive updates to fix remaining accessibility problems. Yes, here too, there&#8217;s the occasional breakage, but the team is very responsive to bug reports in this area, too, and since FB updates their apps on a two week basis, sometimes even more often if critical issues are discovered, waiting for fixes usually doesn&#8217;t take long. If you&#8217;re doing messaging on the desktop, you can also integrate FaceBook Messenger/Chat with Skype, which is very accessible on both Mac and Windows. Some features like group chats are, however, reserved for the Messenger clients and web interface.

## Google Plus

[Google Plus](http://plus.google.com) anyone? 🙂 It was THE most hyped thing of the summer of 2011, and as fast as summer went, so did people lose interest in it. Even Google seem to slowly but surely abandon it, cutting back on the requirement to have a Google+ account for certain activities bit by bit. But in terms of accessibility, it is actually quite OK nowadays. As with many of their widgets, Google+ profits from them reusing components that were found in Gmail and elsewhere, giving both keyboard accessibility and screen reader information exposure. Their Android app is also quite accessible from the last time I tried it in the summer of 2014. Their iOS app still seems to be in pretty bad shape, which is surprising considering how well Gmail, Hangouts, and even the Google Docs apps work nowadays. I don&#8217;t use it much, even though I recreated an account some time in 2013. But whenever I happen to stumble in, I&#8217;m not as dismayed as I was when I wrote the original version of this post.

## Yammer

[Yammer](http://www.yammer.com) is an enterprise social network we at Mozilla and in a lot of other companies use for some internal communication. It was bought by Microsoft some time in 2012, and since then, a lot of its accessibility issues have been fixed. When you tweet them, you usually get a response pointing to a bug entry form, and issues are dealt with  satisfactorily.

### iOS client

The iOS client is updated quite frequently. It has problems on and off, but the experience got more stable in recent versions, so one can actually use it.

## identi.ca

[identi.ca](http://identi.ca) from Status.net is a microblogging service similar to Twitter. And unlike Twitter, it&#8217;s accessible out of the box! This is good since it does not have a wealth of clients supporting it like Twitter does, so with its own interface being accessible right away, this is a big help! It is, btw, the only open-source social network in these tests. Mean anything? Probably!

## Conclusion

All social networks I tested either made significant improvements over the last three years, or they remained accessible (in the case of the last candidate).

In looking for reasons why this is, there are two that come to mind immediately. For one, the introduction of skilled and dedicated personell versed in accessibility matters, or willing to dive in deep and really get the hang of it. These big companies finally understood the social responsibility they have when providing a social network, and leveraged the fact that there is a wealth of information out there on accessible web design. And there&#8217;s a community that is willing to help if pinged!

Another reason is that these companies realized that putting in accessibility up-front, making inclusive design decisions, and increasing the test coverage to include accessibility right away not only reduces the cost as opposed to making it bolt-on, but also helps to make a better product for everybody.

A suggestion remains: Look at what others are doing! Learn from them! Don&#8217;t be shy to ask questions! If you look at what others! have been doing, you can draw from it! They&#8217;ll do that with stuff you put out there, too! And don&#8217;t be shy to talk about the good things you do! The Facebook accessibility team does this in monthly updates where they highlight stuff they fixed in the various product lines. I&#8217;ve seen signs of that from Twitter engineers, but not as consistent as with Facebook. Talking about the successes in accessibility also serves as an encouragement to others to put inclusive design patterns in their work flows.
