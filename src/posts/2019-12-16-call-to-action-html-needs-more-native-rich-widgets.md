---
title: "Call to action: HTML needs more native rich widgets"
slug: call-to-action-html-needs-more-native-rich-widgets
date_published: 2019-12-16T13:00:00.000Z
date_updated: 2019-12-16T13:00:00.000Z
tags: [a11y, accordion, HTML, WebDev, widgets]
---

Over the weekend, [this post by Dave Rupert](https://daverupert.com/2019/12/why-details-is-not-an-accordion/) made the rounds, and I totally agree with what he is saying.

In his post, Dave showcases a problem with the gap between intent and developer assumption about what a certain element or set of elements, are intended or should be used for, and what not to be used for. In this case, the details and summary elements being used as accordions, or not.

If you are running his example with Firefox and either NVDA or JAWS, you are actually very lucky, because all features of his accordion are supported, including the headings. Because unlike some other browsers, because h elements are allowed within summary elements, we do not nuke the heading semantics, and thus it is possible with both screen readers to navigate by heading even inside the summary elements, which get mapped to the button role. Since Firefox 70, both screen readers will even announce properly when you toggle the details open or closed.

However, this is not the case with all browser and screen reader combinations. And according to the spec, details and summary are not intended to be used as an accordion, even though the interaction model totally mimiks that. And here&#8217;s indeed one of the big problems I have encountered time and again when working with developers internally at Mozilla and on the outside: The specification does not always do a good job of explaining in an understandable form of English what an element is intended for or not. Especially if it mimiks a design pattern that fits the developers use case, but is for some reason not what the developer wants to use it for. This divide is made very obvious in Dave&#8217;s post. Even in accessibility land, there is this divide. For example, the spec allows for buttons or elements that map to buttons to have semantic children like headings. Why then do buttons, according to the accessibility specification, nuke their children&#8217;s semantics? Or should nuke them? Because traditional desktop buttons didn&#8217;t have headings?

The specifications have become a bit better in recent years to reflect current realities. But often enough, there is still this great divide between the HTML spec, the accessibility expectations which often enough stem from 25 year old concepts, such as &#8220;Buttons don&#8217;t have heading children&#8221;, and developer expectations when they see the visuals of what, for example, details/summary do, and think &#8220;hey cool, I combine a few of these and have an accessible accordion&#8221;! It is my hope that, in 2020 and beyond, we in the accessibility community will muster up some more courage to show some flexibility and not be afraid to adjust specifications to realities more, and give developers a bit more certainty. Yes, buttons can have semantic children. Firefox plus NVDA, and even the commercial JAWS, screen readers show that this is doable and the world doesn&#8217;t go to hell because of it. Sometimes things just work.

As we move into 2020, I also hope that each side, developers and spec authors and accessibility professionals, become more and more aligned on intent, reality of usage patterns, and implementation of richer building blocks for the web that are then specified in an understandable manner in HTML and accompanying specifications. We all want to move the web forward. Let&#8217;s do it in a more concerted manner and do more good together. The web needs it!

And Dave is right in demanding that more accessible HTML components get implemented by browsers and properly specified. We should move away from the &#8220;ARIA will fix it&#8221; mentality and put more effort into &#8220;Let&#8217;s give web authors more accessibility out of the box for richer components&#8221;, so those sad figures of 97% of inaccessible sites will hopefully drop to a much more satisfactory number in the next five years.

Let&#8217;s do it!
