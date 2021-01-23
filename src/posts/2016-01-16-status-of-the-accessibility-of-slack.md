---
title: Status Of The Accessibility Of Slack
slug: status-of-the-accessibility-of-slack
date_published: 2016-01-16T11:35:11.000Z
date_updated: 2016-01-16T11:35:11.000Z
tags: [Slack]
---

After my [report on the accessibility of the IRCCloud IRC client](https://www.marcozehe.de/2015/12/07/looking-at-the-accessibility-of-the-irccloud-service/), but also in general, the question of how accessible the [Slack team communication service](https://www.slack.com) is, has come up time and again. Here&#8217;s my observation after trying it out. This article was last updated in May 2019.

## What is Slack?

Slack is an instant messaging service for teams. Primarily targeted at companies initially, it now has been adopted more and more by open-source projects like WordPress, too, over traditional Internet Relay Chat (IRC).

Unlike IRC, signing up to Slack teams is relatively simple. You need either a public invitation link or one sent to you via mail by someone who is already on that team, or administers it. You then fill out a form with your e-mail address, nickname and password, and in you are.

On IRC, if you want to join a channel of a project, you first need to know the server this particular project runs its channel on, AKA the IRC network, choose a nickname and then have a varying number of methods to authenticate as you, or not as the case may be. With Slack, all you need after signup is the team name, your e-mail address and chosen password, and in you are.

Slack incorporates several features that make it a more productive tool over IRC in many ways. At the time of this writing, January 2016, there are over 150 apps and services that can be integrated into a team, ranging from simple Twitter notifications when a particular account is mentioned, to document sharing via Dropbox, Box or Google Drive, to initiating team-wide calls via either Skype or Google Hangouts. It integrates with Github, Trello and other productivity services. So, you essentially use Slack as the hub of communication in your team around a project where everything ties together. Some even report they&#8217;ve completely replaced e-mail communication with Slack rooms to make it easier to keep everyone on the same page. As Slack is centralized, there is also no such thing as net splits known from IRC that can cause relatively frequent down times.

## What initiated my interest?

Originally, as in, September 2015, I wanted to join the [a11ySlackers](https://www.paciellogroup.com/blog/2015/07/anybody-can-be-an-a11y-slacker/) via Slack. While doing so, I found several problems, with both the website as well as the iOS client, that made me quickly abandon that effort, and instead used [Gitter](https://gitter.im) and its IRC bridge plus [IRCCloud](https://irccloud.com) as my IRC client. In light of recent (November 2016) changes to the Slack iOS client, however, I&#8217;ve since abandoned that construct and am using Slack directly. And fast-forwarding to May 2019, I don&#8217;t even think about alternatives any more.

However, in early January of 2016, Chris Heilmann announced that he had created a Slack community for evangelists/advocates. Drawing from my past experience, I told him that I would love to join, but that Slack is very inaccessible and thus not an option for me. I really felt left out and disappointed. Christian captures the essence of our conversation and his conclusions in his post titled &#8220;[Don&#8217;t use Slack?](https://www.christianheilmann.com/2016/01/10/dont-use-slack/)&#8220;.

However, after sleeping over it for a night, I decided to turn this frustration into something positive and dig back into the problems I was having with Slack and maybe contact the team at Slack to fix their stuff. I started by signing up to Chris&#8217;s evangelism community, which is appropriate anyway since evangelism/advocacy is a large part of what I do.

And here are my observations about the accessibility of the different ways one can interact with Slack.

## The web interface

As hinted already, the web interface was initially pretty much inaccessible once you joined a team and interacted with the real UI. Getting information about Slack, even signing up to a team worked OK, but the actual hot stuff wasn&#8217;t working. Aside from the textarea that is the input for a message, and an occasional link strewn about, the rest was all non-semantic clickable div and span elements, probably very nicely colored if memory serves me right from reading reviews. Even though it was 2016 when I did the original test, and Slack had only been around since 2013, they definitely didn&#8217;t use the [web accessibility basics](https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/), AKA proper semantics, in their HTML. So yes, you could get all kinds of information about Slack, you could sign up to teams, but the rest should then be done in a mobile client. That was true then, if you were a keyboard or screen reader user or had a need for other assistive technologies in the browser. The only place this was a little better was in mobile Safari, and using exploratory touch, not sequential walk through of the web app. There, you could get to certain things a little more easily than from the constraints of a desktop browser/screen reader combination.

Fortunately, all of that is a thing of the past now. In July 2016, Slack hired two people well-known in the accessibility industry, one product manager and one engineer. They were formerly at Facebook and Twitter respectively and had done good stuff there. And since then, the accessibility team has been completely turned around for the web and desktop apps.

It started out with [massive improvements to keyboard interaction](https://get.slack.help/hc/en-us/articles/115003340723-Keyboard-accessibility-in-Slack-) and focusability of different parts of the UI. Over time, a [list of keyboard shortcuts](https://get.slack.help/hc/en-us/articles/201374536-Slack-keyboard-shortcuts) and even a [guide to efficiently navigate](https://get.slack.help/hc/en-us/articles/217626598-Get-around-faster-with-keyboard-shortcuts) around the UI were published in the knowledge database as well.

This went a long way towards over-all better accessibility. Next, [screen reader accessibility](https://get.slack.help/hc/en-us/articles/360000411963-Use-a-screen-reader-with-Slack-s-desktop-app) was added bit by bit, refining here and there as they went. There are still parts that are being optimized, and these updates roll out to workspaces regularly.

Alongside, other features such as zoom, high contrast and other features were also added. There are also a few tweaks you can make in your workspace preferences under the Accessibility tab. It&#8217;s worth checking out regularly to find out what&#8217;s new.

But Slack fortunately didn&#8217;t stop there. They embed accessibility into their whole design and feature process by now, and aren&#8217;t even afraid [to tell when they fail at it](https://slack.engineering/how-to-fail-at-accessibility-99bdf3504f19).

The Slack web app went from totally inaccessible to accessible in just over two years. And while some might say that this took them far too long, it is good that it finally happened.

One recommendation, though: Know your screen reader well. Don&#8217;t be afraid to skip into and out of virtual or browse mode every now and then, as also hinted at in the articles linked above. Slack is best used with different modes for different situations. Learn, practice, and with that in your arsenal, Slack is no longer a barrier to a job, university project or other endeavor. I don&#8217;t know how many WCAG 2.1 success criteria it fails or passes, but from a subjective point of view, it is now usable by many more people than was the case when this article was initially written.

## The Mac and Windows clients

The same story is true for the native clients on Mac OS X and Windows.  They are mostly a native wrapper around the same now accessible web content. The big difference is that some keyboard shortcuts involving function keys, such as F6 and Shift+F6 to go to different sections of the app, are sole function keys in the native app while in the browser, you have to add the CTRL key on Windows and Linux, and CMD on the Mac. The wrapper is a chromium-based engine, AKA [Electron](https://electronjs.org/), which exposes accessibility information much like Chrome does.

## The iOS client

From reports of friends, and my initial trials, I knew the iOS client was supposed to be accessible. However when I first tried this with the a11ySlackers, I found a very confusing bug with where my position was or should be within a channel&#8217;s message history. Back then in September of 2015, I gave up and switched to IRC instead. Later, as I signed up to Chris&#8217;s evangelism community, I decided to dig back into this and finally figure out what was wrong. Because the rest of the app seemed largely accessible, including hiding the background when one of the side bar menus is active, something many iOS developers get wrong initially, by experience. As of November 2016, all problems I initially reported at this point in the post have been fixed. If you&#8217;re on the iOS client and have version 3.8 or later installed, you&#8217;re all good. If not, I suggest you update at once. The pagination problem where the last page was at the top and the first at the far bottom, team switcher problems some reported, and also interaction with attachments to a message have all been addressed, and one can now call this client fit for productive use.

In version 19.2.1, they even added more productivity for VoiceOver, with each item being just a single swipe stop, and custom actions to do all the interactions possible on a single Slack message. Unfortunately, the [iOS release notes](https://slack.com/intl/en-in/release-notes/ios) no longer go back far enough. They did explain very well what they enhanced to make the already good experience even better.

## The Android client

The Android client, from some initial testing, also seemed largely accessible. Yay! 🙂

The only thing I found were two unlabeled controls, one at the top of the Settings screen, and one in the sub menu for adding/changing teams. Adding a team was unlabeled, existing teams had labels.

Fortunately, the accessibility effort also extends to the Android client, and these problems have been fixed by now. I am keeping my fingers crossed that the single stop for each message plus the custom actions will also make their way into the Android client soon, since that will also enhance the experience even further. The APIs certainly allow for this by now, and have since Android Lollypop (version 5.1, to be exact). We&#8217;re almost at 10 now. So come on, folks, you can do it!

## In conclusion

Slack is accessible now. Granted, there is always room for improvement, but accessibility in its nature is an ongoing process, nothing you do once and then forget about. I encourage everybody to give feedback. The team at Slack is very responsive to it. As stated above, Slack accessibility is no longer a barrier to entry or evolvement at any job or university.

After all, the biggest driver behind the development of Slack features, according to Slack&#8217;s CEO Stewart Butterfield in an [interview with German Gründerszene Magazin](http://www.gruenderszene.de/allgemein/stewart-butterfield-slack/2), is the question how users feel when using the service. Well, I can tell you, Mr. Butterfield, right now, a not small group of users or potential users feel better about your service than was previously the case! This should be encouragement to carry on, and continue to spread the word about the good things your teams are doing.

I will keep this article updated to reflect latest developments as they reach the public.
