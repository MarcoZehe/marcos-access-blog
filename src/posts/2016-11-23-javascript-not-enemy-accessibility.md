---
title: JavaScript is not an enemy of accessibility!
slug: javascript-not-enemy-accessibility
date_published: 2016-11-23T11:31:00.000Z
date_updated: 2016-11-23T11:31:00.000Z
tags: [JavaScript]
---

When I started making my social media rounds this morning, I came across [Jeffrey Zeldman&#8217;s call to action](http://www.zeldman.com/2016/11/22/year-ever-blue-beanie-day-matters/) for this year&#8217;s Blue Beany Day on November 30th. But I respectfully disagree with a number of points he is making in his post about JavaScript frameworks and their accessibility implications.

## Frameworks aren&#8217;t inaccessible because they&#8217;re frameworks

First, I agree that the spreading of new JS frameworks is a temporary problem for accessibility, since many developers who build these frameworks do indeed not know, or take into account, web standards such as the correct HTML semantics, or where these do not work, standards like WAI-ARIA. But if they did, the output those frameworks generated would be just as accessible as plain HTML typed into a plain text editor.

So the problem with inaccessible output is not that they come from frameworks, but that these frameworks are being told the wrong thing. And in my opinion, the solution cannot be to crawl back into a niche and just do plain HTML and CSS and ignore JavaScript. It was invented 18 years ago and is actively being improved to provide better user experiences. Ignoring it would be like going back to Windows 95 and hope the computer still capable of running it will last another month or two.

I strongly believe that this problem can be solved. The solution to this comes in three main parts.

## Education

Web standards and their accessibility implications **must** become part of any and all university curricula that teach web development. A theme that resurfaces at every conversation I have with hiring managers is that engineers fresh from university have never even heard of accessibility.

And guess who those people should be that teach the younger generation these basics? Right, it should be us seasoned accessibility advocates who worked in this field for 15 or 20 years and know this stuff. We must push for many more solutions to this teaching problem than we have in the past.

## Fix up frameworks and teach others by doing so

The second angle to attack this problem from is by fixing existing frameworks and pushing those fixes upstream via pull requests or whatever means is used in that particular project&#8217;s environment. And be vocal about it. *Explain* why you&#8217;re doing certain things and what the accessibility and usability benefits are. I know a lot of good people who already do this, and successfully, and have helped to make the world a lot better again for many who rely on assistive technologies while accessing web content. And also include those who benefit, but don&#8217;t use such assistive technologies.

And even if you&#8217;re someone who doesn&#8217;t have the coding skills to fix up the frameworks yourself, open pull requests. Describe the issues, maybe link to some resources about web accessibility. And tell others you opened that pull request, so they may become aware and jump in to provide their skills.

But first and foremost, **be friendly** when you do those things. The framework authors or community aren&#8217;t your enemy. They may lack some knowledge, but that is probably just a matter of improper education at their university (see above), or lack of awareness. Both can be changed, and this is only achieved by being friendly, empathic, and **not** by putting them in a defensive position by being rude.

## Push on implementors to improve standards support

A third point that is equally important is to push implementors, in an equally friendly tone, to agree on technical issues in standards bodies and implement better support for new widgets, improve support in existing ones such as styling for form elements, for example, and thus give developers less reason to reinvent the wheel with every framework. The better the browser tooling is, the more accessible the web becomes from this angle, too.

## JavaScript is not our enemy

JavaScript or frameworks built with it are not our enemy. They are neither the enemy of accessibility, nor of web standards in general. And neither are the ones who thought up those frameworks to make other developers&#8217; lives easier. They want to do good things for the web just like accessibility advocates do, they just need to work together more. 😉

In fact, I don&#8217;t want to go back to a world without dynamic JavaScript in web applications. I don&#8217;t want to have to deal again with web sites like a mail front-end that loads a completely new page for every click one makes. This may be OK for some situations still, but especially when I want to be productive, I definitely no longer want to have to deal with pages that fully load every five seconds and thus throw me off my context and out of my workflow.

Incidentally, I already wrote a post in April of 2008 called &#8220;[Are Ajax and Accessibility mutually exclusive?](https://www.marcozehe.de/2008/04/29/are-ajax-and-accessibility-mutually-exclusive/)&#8220;. I answered &#8220;no&#8221; to that question back then, and I firmly still stand by that answer now, in the context of JavaScript in general, and frameworks in particular. Granted, it may be hard at first, and it may be tedious at times. But the number of people knowing and caring about accessibility on the web is growing every year. And each pull request, each interaction educates someone you may not even think about at that moment.

So, let&#8217;s all keep up the good work we&#8217;re doing, and not let new things such as JavaScript frameworks scare us into apathy, but let us accept the challenges new and emerging technologies on the web pose, and embrace the possibilities they give us, by helping to make them accessible!
