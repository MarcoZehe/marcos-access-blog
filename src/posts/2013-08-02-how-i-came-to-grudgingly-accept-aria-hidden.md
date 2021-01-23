---
title: How I came to grudgingly accept aria-hidden
slug: how-i-came-to-grudgingly-accept-aria-hidden
date_published: 2013-08-02T09:14:35.000Z
date_updated: 2013-08-02T09:14:35.000Z
tags: [aria-hidden]
---

Yes, that&#8217;s right, I grudgingly accept the fact that [aria-hidden](http://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden) is here, and most probably here to stay. Those of you who know me and have been involved in discussions with me, like poor [Victor Tsaran](https://twitter.com/vick08), whom I pestered more than once to give me tangible evidence that aria-hidden solves problems normal visibility techniques don&#8217;t, know that I&#8217;ve been always a strong opponent to give web developers that much power over the accessibility tree. Unlike role &#8220;presentation&#8221;, which marks only one particular element as uninteresting for accessibility, aria-hidden does the same for an element and all its child elements. 

Especially considering that Chrome and Safari mercilessly prune the whole tree underneath and including the element marked with aria-hidden=&#8221;true&#8221;, dangerous things can happen if aria-hidden is used irresponsibly or carelessly. What can happen in such a circumstance is that a child element of that tree is, or becomes, focusable, but there is suddenly no accessible for it.

Firefox, therefore, takes a less offensive approach. We give aria-hidden marked elements an object attribute, but leave the element and its children in tact in the accessibility representation otherwise, so that screen readers can opt-in to ignore the sub tree.

And this is where Firefox OS suddenly comes into play. When [Eitan](http://monotonous.org) and I started working on this a year ago, we immediately noticed that there were several problems with Gaia, the UI and apps library shipping on Firefox OS devices. It is built completely in HTML, CSS and JavaScript. When i started playing with a device, I noticed that apps were showing me content that was not on the screen, didn&#8217;t go away when I closed them, etc.

The reason for this behaviour was the fact that much of the styling in Gaia uses the z axis to &#8220;hide&#8221; elements. They just get pushed into the background. But putting stuff on a negative z axis does not prune them from the accessibility tree traditionally.

Eitan then started experimenting with changing the visibility to use display: none; or visibility: hidden; instead, depending on the reflow demands. While this solved some problems, it definitely didn&#8217;t solve all of them. Most importantly, there were often visual artefacts interfering with animations and other things. And the last thing we want is that accessibility is the cause for visual unpleasantness!

So in the course of the last two months, it became apparent that the least intrusive method of solving this problem is to introduce aria-hidden in strategic places into Gaia to manage what is visible to our screen reader, and what is not. Consequently, our screen reader for Firefox OS was enhanced to support ignoring trees that are marked with aria-hidden.

And here it is, the reason why I grudgingly accept aria-hidden as a useful reality. It not only solves a big chunk of problems with only a few attributes in strategic places. It also makes sure we do not interfere with the visual experience, and it saved us from having to touch each and every CSS in Gaia to manipulate it to fit our needs, and by doing so, cause that visual degrading we want so desperately to avoid. Also, it helps prevent breakage, because Gaia developers can change the relevant CSS without having to be afraid to break accessibility

So while I was searching for external sources to tell me why aria-hidden is actually useful and needed, the reason that convinced me built up inside Mozilla! 🙂

I still think that aria-hidden is a rather dangerous attribute, I count on the educational skills of the accessibility community at large to make sure the situation doesn&#8217;t get really bad! And I will do my part to help with that effort!
