---
title: Sometimes you have to use illegal WAI-ARIA to make stuff work
slug: sometimes-you-have-to-use-illegal-wai-aria-to-make-stuff-work
date_published: 2013-03-08T15:51:31.000Z
date_updated: 2013-03-08T15:51:31.000Z
tags: [group, listbox, option, roles, tree, treeitem, WAI-ARIA]
---

In this blog post, I&#8217;d like to recap an experience I just had while trying to apply some accessibility enhancements to the [NoodleApp app.net client](http://app.noodletalk.org/).

### The problem

NoodleApp uses keyboard shortcuts to allow users to switch back and forth between posts, messages etc. that are displayed on the screen. Using the j and k keys, one can move down and up through the lists respectively. However, this will only change a visual indicator, done in CSS, but not give any indication that a real focus change occurred. If one presses tab, for example, focus will move to the next item depending on where keyboard focus last was, and not where the j and k shortcuts took the user.

This is not new: Twitter uses similar shortcuts, too, and even GMail has them, allowing to move among message threads.

All of these implementations, however, only change a visual indicator. They neither adjust keyboard focus, nor do they communicate a focus change to screen readers. In addition, at least the screen readers on Windows would not immediately be able to use these keyboard shortcuts anyway, since their virtual buffers and quick navigation keys would be captured before they reached the web application.

### The easy part

The easy part of the solution to the problem is this:

1. Add tabindex=&#8221;0&#8243; to the ol-element that comprises the whole list to make it keyboard focus-able and include it in the tab order at the order determined by the flow of elements. Since its default location is appropriate, 0 is the correct value here.
2. Add tabindex=&#8221;-1&#8243; to each child li element, of which each contains a single post. This is so they become focus-able, but are not included in the tab order individually. Such an extra tab stop is unnecessary here.
3. Add a .focus() call to the next reachable message, which is determined in handling the j and k keys, to set focus to the element, or the first post when none is not focused yet, but the user presses j or k.

These give us keyboard focus-ability. What one can do now is press j or k to move through the list of posts, and then press tab to actually move into the post details and onto items such as the user name link or one of the reply, re-post etc. actions. Very handy if one only uses the keyboard to work NoodleApp.

### The tricky, AKA screen reader part

All the above does not yet give us any speech when it comes to screen readers. Generic HTML list items, normally non-focus-able, are not something screen readers would speak on focus. Moreover, the list would not be treated as a widget anyway yet.

The latter is easily solved by just adding an appropriate role=&#8221;listbox&#8221; to the ol element we already added the tabindex+&#8221;0&#8243; attribute to above. This causes screen readers on Windows to identify this list as a widget one can enter focus or forms mode on, allowing keys to pass directly to the browser and web app instead of being captured by the screen reader&#8217;s virtual buffer.

And here is where it gets nasty. According to the documentation on the [listbox role](http://www.w3.org/TR/wai-aria/roles#listbox), child elements have to be of role [option](http://www.w3.org/TR/wai-aria/roles#option).

OK, I thought. Great, let&#8217;s just add role=&#8221;option&#8221; to each li element, then.

In Firefox and NVDA, this worked nicely. Granted, there was not any useful speech yet, since the list item spoke all text contained within, giving me the user name and such a couple of times, but hey, for a start, that was not bad at all! NVDA switched into focus mode when it was supposed to, tabbing gave me the child accessibles, all was well.

And then came my test with Safari and VoiceOver on Mac OS X.

And what I found was that role=&#8221;option&#8221;, despite it being said that this could contain images, caused all child items to disappear. The text was concatenated, but the child accessibles were all flattened straight. Tabbing yielded silence, VoiceOver could interact with text that it then found was not there anyway, etc., etc.

So, while my solution worked great on Windows with Firefox and NVDA, Safari and VoiceOver, a popular combination among blind people, failed miserably.

### The solution

I then tried some things to see what effect they would have on VoiceOver>

- I just added an aria-label to the existing code to see if that would make things better. It did not.
- I tried the [tree](http://www.w3.org/TR/wai-aria/roles#tree) and [treeitem](http://www.w3.org/TR/wai-aria/roles#treeitem) roles. Result: List was gone completely. Apparently VoiceOver and Safari do not support tree views at present.

Out of desperation, I then thought of the [group](http://www.w3.org/TR/wai-aria/roles#group) role. Those list items are essentially grouping elements for several child widgets. So I changed role=&#8221;option&#8221; to role=&#8221;group&#8221; and made an aria-label (the name has to be specified by the author) containing the user name, post text and relative time stamp.

And miraculously, it works! It works in both Firefox and NVDA, and Safari and VoiceOver combinations. Screen reader users now get speech when they navigate through the list with j and k, after they have switched their screen reader to focus or forms mode.

Yes, I know it is illegal to have group elements as child elements of a listbox role. But the problem is: neither WAI-ARIA nor HTML5 give me an equivalent to a rich list item known, for example, to XUL. And there is no other equivalent. Grid, gridrow, treegrid, rowgroup etc. are all not applicable, since we are not dealing with tabular, editable content.

Moreover, I cannot even be sure which of the browser/screen reader combinations is right with regards to flattening or not flattening content in role=&#8221;option&#8221;. The spec is not a hundred percent clear, so either could be right or wrong.

So, to have a solution that works now in popular browser/screen reader combinations, I had to resort to this admittedly illegal construct. Fortunately, it works nicely! Next step is obviously to advocate for a widget type either in HTML or WAI-ARIA that is conceptually an option item, but can hold rich compound child content.

### What am I doing this for, anyway?

You may ask yourself: &#8220;If I can just read through with my virtual cursor, wyh do I want to use the other navigation method?&#8221; 

The answer is: Yes, you can read through your list of posts using the virtual cursor. Problem is: Once the view is refreshed, either because you&#8217;ve reached the bottom and it loads older posts, or because there were new posts arriving at the top and the view needed refreshing, you lose your place. Using forms/focus mode and the j and k keys will remember your choice even if you load older posts or newer posts arrive after you started reading. You can also use other quick keys like r to reply, f to follow a user, and more, documented at the top of the page of NoodleApp once you open it for the first time. This is not unimportant for efficient reading, to have a means for the screen reader to keep track of where you are. And the virtual buffer concept does not always make this easy with dynamic content.

### If you have suggestions

Please feel free to comment if you feel that I&#8217;m going about this the wrong way altogether, or if you think there are existing roles more suitable for the task than what I&#8217;ve chosen. Just remember that it has to meet the above stated criteria of focus-ability and interact-ability on the browser, not the virtual buffer level.

### The code

If you&#8217;re interested in looking at the actual code, [my commit](https://github.com/Marco-Zehe/noodleapp/commit/9f6b26f768973940187997f51062c209303d047b) can be found on Github.
