---
title: Looking at the accessibility of the IRCCloud service
slug: looking-at-the-accessibility-of-the-irccloud-service
date_published: 2015-12-07T12:18:08.000Z
date_updated: 2015-12-07T12:18:08.000Z
tags: [Gitter, IRC, IRCCloud, Slack]
---

In recent months, I&#8217;ve started using the [IRCCloud](https://irccloud.com/) service for all my communication via [Internet Relay Chat (IRC)](https://en.wikipedia.org/wiki/Internet_Relay_Chat). We use IRC at Mozilla, and many other open source projects as well as the W3C use IRC for their instant communication needs.

Previously, I had been using typical IRC clients such as Adium for OS X or ChatZilla as an add-on to Firefox. But that caused a lot of problems when working from multiple machines, like not being able to easily switch fron one to the other without losing and having to rebuild context, or logging in with two separate nicknames etc.

A while ago, IRCCloud started appearing at the peripherals of my filter bubble. It is a cloud-based IRC client with a few extras. And in the spring, I decided to finally check it out myself. We&#8217;re running an instance of the Enterprise Edition at Mozilla. So I got an account, and off I went.

## What is it?

Here is what the team [says about the service](https://www.irccloud.com/about). IRCCloud is offered as both a web application and native apps for iOS and Android. The native apps offer push notifications for nickname mentions as well as keyword highlights, meaning one can react to things even on the go without sitting in front of the computer. IRCCloud comes in two flavors: One instance that is hosted at [irccloud.com](https://irccloud.com), which allows individuals and teams to connect to IRC via IRCCloud&#8217;s hosted service, and the Enterprise Edition, which is usually self-hosted by the organization purchasing the annual subscription. The latter is what Mozilla is using, but I have been looking at both instances by now, since they differ slightly. The instance at IRCCloud itself is usually newer, has the latest and greatest features, while the Enterprise editions can lag a bit behind.

IRCCloud works like this: You log onto the service, and from there, manage your different IRC server connections with nicknames, registered nick passwords etc. The paid accounts offer you an unlimited number of connections. The free edition allows for two except the one to irc.irccloud.com. The [Pricing page](https://www.irccloud.com/pricing) has more information and details.

Once connected, the connections are permanent. IRCCloud keeps you logged into all your IRC servers and collects incoming chats even when you are currently not logged into the IRCCloud service. But when you come back, either through the web site or mobile app, you can review everything that has happened in your absence. This includes private messages that wait for you just like on any other instant messaging service.

## The accessibility

When I first started using our Enterprise instance, I found the web application to be very accessible. All the options were easily reachable with the NVDA virtual cursor in Firefox, or also Safari or Chrome + VoiceOver on OS X. IRCCloud supports the standard IRC commands that start with a slash / character. The entry happens in a standard multiline text area, the output in a part of the web page right above that text area. Adding servers, channels and starting private conversations were all manageable through controls present on the web page. Also the nice additions like paste bins for multi-line text, uploading of images, embedding of tweets etc. all worked nicely.

However, with a [redesign in September of 2015](https://blog.irccloud.com/2015-web-redesign/), the web app hosted on irccloud.com lost some of this accessibility due to things now being hidden behind mouse hovers, or elements turning from semantic links to non-semantic text clickables. At first, I didn&#8217;t make the connection, but at some point it dawned on me that, if Mozilla pulled in these changes at some point, I and other current and future visually impaired or blind Mozilla employees would lose that functionality as well. So I decided to contact the IRCCloud team.

Over the past week or so, I worked with James, one of the founders of IRCCloud, who works on the front-end portion, to resolve the (for me) most urgent issues in the IRCCloud instance. This is already live, and anyone can try it out. The things we covered were:

- Clickable text that should be buttons were made buttons via WAI-ARIA.
- Those items that expand to a multitude of options such as the account e-mail address or the Options buttons, indicate their states via aria-expanded. Those that open to a non-modal pop-over such as every nick name anywhere in chats and private messages, will have a sub menu indicator. Those sub menus aren&#8217;t really sub menus, but rather pop-overs with a multitude of options such as being able to directly send a private message, finding out who that person is etc.
- The channels and servers as well as each private message nickname are now announced as tabs. This seemed to us the most appropriate mapping, since only one channel, server output or private message is usually visible at a time, but radio buttons didn&#8217;t seem really appropriate to use. James kept the heading structure in place, so that every server instance starts with a new heading.
- Things that were previously hidden behind mouse hovers such as the Options button for an individual IRC server entry are now shown when the server name is focused via the virtual cursor or other browsing mechanism. With NVDA, this will cause the virtual cursor to land on the Options button once the button becomes visible, with the server name moving down one line in the virtual buffer.
- Options in the individual server settings, accessible from the above mentioned Options button, are now toggle buttons if they are toggleable. Other buttons remain normal buttons as appropriate. But now, the state is clearly communicated whether an option such as embedding social links etc. are on or off.
- In channel views,  if there is a series of status messages that are collapsed, the button to expand these into individual entries is now accessible, and it indicates whether the status messages are currently expanded or collapsed.

This is by far not meant as a full audit, nor was it meant to be a full consulting service. I pointed out to James the most low-hanging fruits that made working with IRCCloud difficult for me after the redesign. James was super responsive in adding the appropriate attributes and also adding his own ideas and asking good questions about details here and there. What we did not at all tackle, were issues for keyboard-only, non-screen reader users or low-vision users. I do not, for example, know if contrast is good in all places. But what we did can certainly be viewed as a starting point for dealing with other issues that might cause headaches for some users. Interest and willingness to fix these issues is definitely there, so don&#8217;t be shy if you want to use IRCCloud and run into problems!

## The iOS app

Even before working with James on the web app, I contacted the team with some problems I had found in the pre 2.0 version of the iOS app. The iOS app had, for example, a problem with not updating VoiceOver content with the new loaded content after switching channels. However, since buttons were labeled and other attention to detail had been given, I was sure this was only an oversight. Sam, the IRCCloud team member responsible for the mobile apps, came back with a very fast response, and we worked together throwing back and forth observations and new beta builds, and within a day, in time for the recent 2.0 release of the iOS app, the problems were solved and some more improvements were made. Now, the iOS client which runs on both iPhone and iPad is very accessible. In fact I am not aware of any area of the app right now that I cannot use.

## Wait, what about the Android app?

Sorry, I didn&#8217;t look at that one. I currently use Android only for testing Firefox, not as aproductive device of any kind, so looking at that had no priority for me among all the other things I have to take care of in my day to day job at Mozilla.

## What about Slack or Gitter?

[Gitter](https://gitter.im/) is a chat service built around the Github eco system and is very developer-centric. Its accessibility on the web is limited, and I know nothing about the iOS or Android apps. It offers an IRC bridge, so one can interact with one&#8217;s rooms on Gitter via IRC.

[Slack](http://www.slack.com) is also an enhanced chat service that offers team collaboration and embedding of many kinds of media, file transfers etc. I tested Slack when I wanted to join the [a11y Slackers](https://www.paciellogroup.com/blog/2015/07/anybody-can-be-an-a11y-slacker/), but was very unhappy with the service. The web service is all non-semantic clickables. The iOS app seemed to have a problem in that it showed me the chat history in a seemingly random order. As I only found out much later, [the Slack iOS client has a twist](https://medium.com/@MarcoZehe/i-am-the-one-christian-heilmann-was-referring-to-in-his-post-d49b6173a161) that isn&#8217;t immediately obvious, but it is accessible. I ended up using the Gitter to IRC bridge and my Mozilla-hosted IRCCloud instance to connect to it and am now always-on there.

Both these services are centralised, proprietary messaging services unlike IRC, which is an *open*, distributed system of different networks that don&#8217;t depend on one another. So even when IRCCloud should suffer an outage, not the whole system becomes unavailable at once, and you can always use an alternative client as an emergency backup to connect to your favorite IRC servers. IRCCloud does offer additional features like file storage, embedding of social links, pastebins and (if you want to) videos, bringing it up to the level of other proprietary solutions. And some parts of IRCCloud are even open-source!

## Disclaimer

Some might think that this post contains a lot of information that could be conceived as marketing. I am not associated with IRCCloud in any other way than that I use their service, and I do not receive any compensation for writing this post. This post purely reflects my own opinion about their service. Their responsiveness to accessibility issues and fixing them in a speedy fashion is commendable. I like this service, that&#8217;s all. 😉

And I hope this post helped you in understanding it a little better and maybe trying it out yourselves! After all, you never know what happens to some other IRC clients in the future. With some major changes coming to Firefox next year, the ChatZilla add-on may be rendered unusable for some time, for example. So it&#8217;s always helpful to know about accessible alternatives.

Have fun exploring! And happy chatting!

## Updates

- 11-01-2016: Updated my statement regarding the Slack iOS client.
