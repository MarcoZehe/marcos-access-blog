---
title: Are Ajax and Accessibility mutually exclusive?
slug: are-ajax-and-accessibility-mutually-exclusive
date_published: 2008-04-29T16:51:05.000Z
date_updated: 2008-04-29T16:51:05.000Z
tags: [Ajax, Dojo, Jquery]
---

Peter of ATRC and an a11y community member, pointed me to a blog post titled [&#8220;Stop using Ajax!&#8221;](http://dev.opera.com/articles/view/stop-using-ajax/), written by OperaDev community member [James &#8220;Brothercake&#8221; Edwards](http://www.brothercake.com).

My initial reaction was &#8220;Oh no! Not another one who uses accessibility as the sole argument to rant against a technology he doesn&#8217;t like!&#8221;

And while that outraged feeling has diminished somewhat, I still disagree with his article in large chunks. His point, despite the captivating title, is not to stop using Ajax in its entirety, but to stop using it when you don&#8217;t need it.

However, this brings up several questions. Whether you need Ajax to accomplish something is a totally subjective issue. I agree that sometimes, it is more worth to use native HTML widgets. But some examples simply horrify me, like a full page refresh when all you want to do is show or hide a quick help text in response to a user entry. Full page refreshes are one of the most terrible things you can do to screen reader users. Today&#8217;s screen readers are fully capable of handling dynamic page updates in supported browsers. You usually don&#8217;t even lose your virtual cursor reading position when such updates happen. There are obviously desired exceptions to that rule, such as pressing Enter on a link that moves focus to an anchor on the same page. In such cases, the reading position is expected to change.

He also mentions Twitter. I use Twitter myself sometimes, and I find it very handy to find out how many characters I have left when typing a Twitter update. This is one of those examples that could benefit from some ARIA-empowered live region support so Orca and other screen readers could pick it up and speak it automatically.

But first and foremost, we have to face reality: Ajax, although still pretty new, cannot be stopped. Whether we like it or not, it will continue to spread across the web. So his call to stop Ajax when you don&#8217;t need it may be several months, if not years, too late.

So what about the accessibility? I agree that some applications are real challenges right now. Google Calendar is one of those, gmail a similar one in some areas. However, Google Maps is not so bad. Since it talks about &#8220;maps&#8221;, I do not even expect to be able to see the map it brings up. But it is still accessible enough that I can type in my street address, and give the resulting link to someone sighted so they can see where I live.

And there is [ARIA](http://developer.mozilla.org/en/docs/ARIA:_Accessible_Rich_Internet_Applications). The proposal for Accessible Rich Internet Applications has been evolving for several years now, has been in Firefox 2.0 and is more complete in Firefox 3, and is a way to make all these Ajax apps accessible.

And there are Ajax toolkits out there that already implement ARIA support, making any Ajax application accessible that uses them. One example is [the Dojo toolkit](http://dojotoolkit.org), which is being used in the standard AOL freemail frontend, for example. Other toolkits such as Jquery are implementing, or planning to implement, ARIA in the near future, making even more Ajax widgets accessible with browsers and screen readers that support ARIA.

Granted, there is still a big userbase out there who use, or have to use, browsers that don&#8217;t support ARIA yet.

But frankly, instead of hiding away in a corner and whining about Ajax being so inaccessible, I prefer going out to web developers, educating them about ARIA and the possibilities it offers, and educate corporate deciders to make the right choices when they decide to implement Ajax. In addition, if I can, I&#8217;d like to help other evangelists like Steve Lee who [spread the word](http://eduspaces.net/stevelee/weblog/329891.html) at a UK Web 2.0 conference recently.

In addition, there are other bloggers like John Resig who are [showing](http://ejohn.org/blog/ajax-accessibility/) how easily it can be implemented, and how a few attributes already can make a major difference.

So, BROTHERCAKE, I invite you to get up to speed on ARIA and what it can do. Get in touch with me or other ARIA developers, learn, and then spread the technology yourself with projects you support. I strongly believe that you&#8217;ll be helping the accessibility community much more in that fashion than ranting or giving out hopeless calls like &#8220;Stop using Ajax&#8221;.
