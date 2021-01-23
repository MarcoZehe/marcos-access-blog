---
title: If you ARIA label something, give it a role
slug: if-you-aria-label-something-give-it-a-role
date_published: 2019-12-12T13:00:00.000Z
date_updated: 2019-12-12T13:00:00.000Z
tags: [landmarks, widgets]
---

TL;DR: As a rule of thumb, if you label something via aria-label or aria-labelledby, make sure it has a proper widget or landmark role.

The longer version is that several elements created extraneous amount of announcements in screen readers in the past that were not really useful. Especially in the ARIA 1.0 days where a lot of things weren&#8217;t as clear and people were still gathering experience, this was an issue for elements or roles that mapped to regions, multiple landmarks of the same type on a page, etc. Therefore, best practice has become to label both widgets (which should be labeled anyway), and landmarks with means such as aria-label or aria-labelledby, to make them more useful. This is important for several reasons:

- Assistive technologies don&#8217;t use all divs or span elements, and browsers filter them out if they&#8217;re not interesting enough, to keep the accessibility tree manageable.
- &#8220;Section&#8221;, which is the accessible object role for an unlabeled section or div, is neither interactive nor specific, and neither is &#8220;TextFrame&#8221;, which is what gets rendered on Windows as the equivalent of a span element.
- Such items are usually not focusable, so labeling them is largely superfluous.

So to give your aria-label or aria-labelledby more meaning, if you need to use these in the first place, it is best practice, and will probably soon be required, to give such elements a proper widget role such as &#8220;button&#8221; or &#8220;link&#8221;, or landmark role such as &#8220;complementary&#8221;, or &#8220;region&#8221;. In fact, there will, alongside this requirements change, probably be requirements for user agents in the future to no longer expose aria-label* if an associated role isn&#8217;t present. These assumptions I am making are based on the way practitioners have advised these techniques in recent times, as well as rumours and fragmented discussions in various channels among people close to the ARIA and HTML specifications.

I, for one, also recommend and welcome such changes. A div with an aria-label is much more meaningful if it is clear that it groups some elements together. It probably is meant to act as a composit widget or grouping element for true widgets anyway, so giving it a role of &#8220;group&#8221; in such situations is more correct anyway. That is, if you cannot use fieldset and legend for some reason.

Some of these rules are already enforced on the HTML side of things, for example an HTML section element is only mapped to a region if a label is provided. This all is to reduce the amount of noise certain elements can create if not labeled, and also make sure that if you label something, it also has a meaningful expression of what it is you&#8217;re labeling.

Screen readers use this better information to help users navigate complex pages. Hearing &#8220;complementary&#8221; multiple times is far less meaningful than actually telling users that it&#8217;s a certain type of side bar or adjacent element group to something else you&#8217;re interacting with.
