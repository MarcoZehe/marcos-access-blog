---
title: Improvements to the handling of the aria-pressed attribute
slug: improvements-to-the-handling-of-the-aria-pressed-attribute
date_published: 2014-04-04T09:57:10.000Z
date_updated: 2014-04-04T09:57:10.000Z
tags: [aria-pressed, WAI-ARIA]
---

On Monday this week, Heydon Pickering brought to my attention that Firefox has a problem with the way it handles the[ aria-pressed attribute](http://www.w3.org/TR/wai-aria/states_and_properties#aria-pressed) in some circumstances. aria-pressed is used on buttons (or elements that have a WAI-ARIA role of &#8220;button&#8221;) to turn it into a toggle button which can be either pressed or not. Think of the Bold, Italic, etc. toolbar buttons in your favorite word processor as an example.

The problem Heydon uncovered in his [simple toolbar example](http://heydonworks.com/practical_aria_examples/#toolbar-widget) was that we didn&#8217;t expose the &#8220;pressed&#8221; state in his case. Upon investigation, both Steve Faulkner and I found that a) a native button element was used and b) adding the role of &#8220;button&#8221; fixed the problem.

This was certainly not the way we should handle a native button which has the aria-pressed attribute added, when we already turned its role from &#8220;button&#8221; into &#8220;toggle button&#8221;. Because we&#8217;re dealing with a native button, adding role=&#8221;button&#8221; should not at all be necessary.

I decided to dive into the code myself and fix the problem. This was my first dive into the C++ core of Firefox in way over a year, and it turned out to be a much bigger project than I originally thought, in which I learned a lot about some of the new structure Alex and Trevor had been introducing. But in the end, we now have:

1. You can use the aria-pressed state attribute on a native button, and its states will correctly be exposed.
2. When state changes, assistive technologies will be notified via an event, so NVDA&#8217;s virtual buffer will immediately reflect the change, for example.
3. While I was there, I also removed the &#8220;checkable&#8221; state from the toggle button accessible. Checkable is something reserved for checkboxes and radio buttons. Toggle buttons are slightly different not only in visual appearance, but also in that they can be either: Stand-alone like your attribute toolbar buttons &#8220;Bold&#8221;, &#8220;Italic&#8221; etc., or part of a group where only one can be checked at a time, like &#8220;Left justified&#8221;, &#8220;right justified&#8221; etc. Applying the checkable state to these is not appropriate, and it caused screen readers to say nonsense like &#8220;A to Z toggle button pressed not checked&#8221;. Well, that nonsense is no more! 🙂
4. Finally, i also updated the bridge code between the Gecko core and the Android and Firefox OS output to work with this new set of changes, so there, toggle buttons will now also properly speak and braille.

I just checked this code into our tree called Mozilla-Inbound, from where it will travel to Mozilla-Central within the next day or so, from where [Firefox Nightly builds](http://nightly.mozilla.org) are made. So those of you on the bleeding edge will probably see this appear in a build around Sunday April 6, or Monday April 7 or so. This will then be in the Firefox 31 release.

Thanks to Heydon for finding this bug in Firefox! And thanks to Alex for his support while I muddled through some of the new stuff in core! 🙂 This was fun, and it felt good to write a real patch again after such a long time where I mostly did testing and evangelism.
