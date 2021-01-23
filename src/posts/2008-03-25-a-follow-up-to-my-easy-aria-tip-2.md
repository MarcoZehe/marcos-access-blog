---
title: A follow up to my Easy ARIA tip #2
slug: a-follow-up-to-my-easy-aria-tip-2
date_published: 2008-03-25T11:55:27.000Z
date_updated: 2008-03-25T11:55:27.000Z
tags: [Firefox, HTML]
---

Community member Ben Millard has [pointed out in a recent blog post](http://projectcerbera.com/blog/2008/03#day24) that roughly the same as shown in my example can be achieved using regular HTML 4 by embedding the input into the label. Thanks for that info, Ben! It is very useful and shows that some of the techniques that have been available for years escape even us gurus sometimes. But then, we don&#8217;t dig through every W3C doc on a regular basis, either.

However, the implementers of Firefox accessibility have done their homework: Ben&#8217;s examples work nicely with Firefox 3. The association is made properly, the label accessible is built up fine, and the input accessible gets its accessible name defined correctly. I also tested with that other browser that came with my Windows XP, and users there are less fortunate: IE does not properly make up the accessible name for the label and also does not correctly associate the accName of the input type with the label&#8217;s full content.

So, does Ben&#8217;s example now completely obsolete the need for the **aria-labelledby** and **aria-describedby** attributes? Most definitely not! There may always be cases where nesting the input into the label is impractical/not wanted, or where the description cannot be so nicely densed into the label as Ben shows using my example. For those cases where you explicitly need to specify something to become the accDescription, you definitely can still use ARIA. You can even use **aria-describedby** inside an input that&#8217;s nested within a label. 🙂
