---
title: Making the Firefox developer tools accessible
slug: making-the-firefox-developer-tools-accessible
date_published: 2016-01-26T20:43:58.000Z
date_updated: 2016-01-26T20:43:58.000Z
tags: [DeveloperTools]
---

In the first quarter of 2016, Yura, who is part of the accessibility team at Mozilla, and I are starting on a journey to make the firefox developer tools accessible. The majority of the tools are currently a very mouse-driven environment, and our goal is to make them equally accessible for keyboard users and those using assistive technologies such as screen readers. This blog post marks the beginning of that journey.

## The reasons

The main reason of course is: It&#8217;s the right thing to do. Firefox is accessible except for some small areas like the Customize Toolbar feature, so the developer tools should be, too.

But another reason is also that the built-in developer tools are becoming more and more integrated than the Firebug extension is, which has been used in the past if accessible web inspection and other tools were needed. So in order to secure the jobs of blind web accessibility consultants, it is our responsibility to make sure they continue to have an environment to work in when using Firefox.

## Breaking down the task

The [developer tools](https://developer.mozilla.org/en-US/docs/Tools) have already become a big collection of tools for various purposes. There are web page inspection tools, debuggers for various components, a code editor, a style editor, a responsive design view and some far more visual components to examine performance, animations, and more.

So to make them accessible and at the same time achieve the highest amount of impact in the shortest amount of time possible, it was important to prioritize the different modules by importance. For example, there are some tools which will help a lot of people at once, whereas others may never make much sense to somebody who cannot see the screen.

What helped us greatly was a recent e-mail I received from Birkir, who is working as a web accessibility consultant at Deque Systems. He described to me in detail how he, as a screen reader user, uses Firebug to give his clients feedback about their web sites and the problems he finds. I, of course, know Firebug myself, but having his way of working described to me in this depth helped me to understand better what the changes with the most short-term impact will be.

## Is anything already there at all?

Yes, the web console is already accessible. This is thanks to Jamie from the NVDA team who provided patches a while ago to make the web console and auto-completes read better. When you are using this with a screen reader, you can start typing JavaScript statements and will get suggestions read to you which you can arrow through, make a selection or continue filtering by typing more letters. Tab will then auto-complete the currently selected item and put you back in the text field with the cursor after the piece you just auto-completed. The result will be spoken after execution, but you can also shift-tab into that output window, which is a regular HTML output window, to re-read what the screen reader just spoke.

## The web page inspector

The first and most important web developer tool we&#8217;re going to tackle is the web page inspector. This is the one that you get when you right-click or Shift+F10 on an element and choose &#8220;Inspect Current Element&#8221; from the context menu. This is also the tool in Firebug whose usage Birkir described to me. During investigation of this user story, we found that all of his and probably many other people&#8217;s needs will be covered once we make this one accessible. But I promise, we won&#8217;t stop there! 🙂

Once you&#8217;ve chosen &#8220;Inspect Current Element&#8221;, the web page inspector opens with the focus landing on a tree view with that very element highlighted. And here&#8217;s where the first problem lies: Keyboard navigation for a tree view is already there, with arrows up and down selecting nodes, left and right collapsing/expanding current node if it has children, or skipping up to first parent or down to first child respectively, already in place. But the actual elements lack proper WAI-ARIA semantics, and other superfluous elements need to be filtered out for screen readers. In essence, we will have to [apply tree view semantics](https://bugzilla.mozilla.org/show_bug.cgi?id=1242694) (sometimes also called outline views), [filter out presentational elements](https://bugzilla.mozilla.org/show_bug.cgi?id=1242700), and [hide inactive nodes](https://bugzilla.mozilla.org/show_bug.cgi?id=1242711). Moreover, proper labels need to be applied to both [the tag](https://bugzilla.mozilla.org/show_bug.cgi?id=1242697) and [its attributes](https://bugzilla.mozilla.org/show_bug.cgi?id=1242707) for each tree view item.

The keyboard navigation also needs to be adjusted. Right now, tab moves through all potentially several thousand items in the tree view, which is totally unnecessary since the arrow keys already do most of the work, and tabbing to each attribute of the selected item totally suffices. So the goal is to [change the tab key behavior](https://bugzilla.mozilla.org/show_bug.cgi?id=1242854) to only move through the attributes of the currently selected tag and then jump into the tab list of the multi-tabbed side panel. Oh yes, and the focus should also [always be visible](https://bugzilla.mozilla.org/show_bug.cgi?id=1242851) when tabbing between those attributes. 😉

The side panel&#8217;s different tabs also have their own set of challenges that need to be dealt with in order of the tabs from left to right.

## A big thank you

At this point, a big thank you is in order! Thanks to Hans Hillen for his outstanding work on making Firebug accessible! Your work will help us implement much of the inspector&#8217;s accessibility much more quickly. Since many of the concepts themselves are closely related to Firebug, it is only fair that we strive to make the sound and keyboard feel of the new tools as familiar to our users as possible as well! So even if Firebug itself should be discontinued one day, your work and collected experience will live on in the built-in developer tools.

## OK, I&#8217;m excited about this! How can I help?

Hey, I&#8217;m glad you asked! 😉 We can always use help in one form or another! First step is to track the work that is going on. The best starting point is the [meta bug on the web page inspector&#8217;s accessibility.](https://bugzilla.mozilla.org/show_bug.cgi?id=1242686) That links to all the other bugs that are being worked on. The &#8220;Depends On&#8221; section has the open ones first, and the closed ones following afterwards, so you can easily track which of the bugs have already been fixed.

If you are a user of the [Firefox Nightly builds](https://nightly.mozilla.org), you will also get the newest enhancements roughly a day or two after they&#8217;ve been checked into our code base. So if you&#8217;re watching any of the bugs above, and notice that they&#8217;ve been marked as fixed, you can expect to see the result a day or two later. You can fire up your screen reader of choice and test these particular enhancements and tell us what you think right away! You can even use the comments in this blog post if you like, I will triage them accordingly.

If you want to get your hands dirty because you are a developer yourself, go get your build system fired up and updated, pull the code, build Firefox and start hacking. Then, submit a patch and ask for review. You can find all information about how to do that on the [Mozilla Developer Network](https://developer.mozilla.org).

But even if you&#8217;re not on the bleeding edge, but choose to be a bit more conservative and work with the Firefox Developer Edition, you will get everything that has been fixed during a cycle with the next major update and can test there. If you find bugs and report them, we can fix them, and if they&#8217;re critical, even uplift. Users of the beta and release channels will then get these bits when the particular version, currently 47, reaches them a few weeks later.

## Closing remarks

Despite the many things we&#8217;ve already set out to do for this one developer tool alone, implementing this won&#8217;t be done overnight. So please bear with us while we get this all done and pushed out to users. Also, we&#8217;ll continue to look at the other tools and do them one by one, and while doing so, also add test coverage to make sure things don&#8217;t break when new features are developed or refinements made.

In addition, if you think we should take special consideration of any particular tool after we&#8217;ve finished the web page inspector, let us know! The better we know how you want to use the developer tools, the better we can prioritize and come up with best strategies. Soe of the tools are more complex than others, but the final goal is to make all developer tools accessible, or at least as accessible as possible given their nature.

Now,: fasten your seat belts, and let&#8217;s go!
