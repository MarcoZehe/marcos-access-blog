---
title: 'Easy ARIA Tip #7: Use "listbox" and "option" roles when constructing AutoComplete lists'
slug: easy-aria-tip-7-use-listbox-and-option-roles-when-constructing-autocomplete-lists
date_published: 2014-03-11T11:03:51.000Z
date_updated: 2014-03-11T11:03:51.000Z
tags: [auto-complete]
---

One question that comes up quite frequently is the one of which roles to use for an auto-complete widget, or more precisely, for the container and the individual auto-complete items. Here&#8217;s my take on it: Let&#8217;s assume the following rough scenario (note that the auto-complete you have developed may or may not work in the same, but a similar way):

Say your auto-complete consists of a textbox or textarea that, when typing, has some auto-complete logic in it. When auto-complete results appear, the following happens:

1. The results are being collected and added to a list.
2. The container gets all the items and is then popped into existence.
3. The user can now either continue typing or press DownArrow to go into the list of items.
4. Enter or Tab select the current item, and focus is returned to the text field.

**Note**: If your widget does not support keyboard navigation yet, go back to it and add that. Without that, you&#8217;re leaving a considerable amount of users out on the advantages you want to provide. This does not only apply to screen reader users.

The question now is: Which roles should the container and individual items get from WAI-ARIA?Some think it&#8217;s a list, others think it&#8217;s a menu with menu items. There may be more cases, but those are probably the two most common ones.

My advice: use the [listbox](http://www.w3.org/TR/wai-aria/roles#listbox) role for the container, and [option](http://www.w3.org/TR/wai-aria/roles#option) for the individual auto-complete items the user can choose. The roles menubar, menu, and menuitem plus related menuitemcheckbox and menuitemradio roles should be reserved for real menu bar/dropdown menu, or context menu scenarios. But why, you may ask?

The short version: Menus on Windows are a hell of a mess, and that&#8217;s historically rooted in the chaos that is the Win32 API. Take my word for it and stay out of that mess and the debugging hell that may come with it.

The long version: Windows has always known a so-called menu mode. That mode is in effect once a menu bar, a drop-down menu, or a context menu become active. This has been the case for as long as Windows 3.1/3.11 days, possibly even longer. To communicate the menu mode state to screen readers, Windows, or more precisely, Microsoft Active Accessibility, uses four events:

1. SystemMenuStart: A menu bar just became active.
2. SystemMenuPopupStart: If a SystemMenuStart event had been fired before, a drop-down menu just became active. If a SystemMenuStart event had not been fired before, a context menu just became active. If another SystemMenuPopupStart preceeded this one,  a sub menu just opened.
3. SystemMenuPopupEnd: The popup just closed. Menu mode returns to either the previous Popup in the stack (closing of a sub menu), the menu bar, or falls out of menu mode completely.
4. SystemMenuEnd: A menu bar just closed.

These events have to arrive in this exact order. Screen readers like JAWS or Window-Eyes rely heavily on the even order to be correct, and they ignore everything that happens outside the menus once the menu mode is active. And even NVDA, although it has no menu mode that is as strict as that of other &#8220;older&#8221; screen readers, relies on the SystemMenuStart and SystemMenuPopupStart events to recognize when a menu gained focus. Because the menu opening does not automatically focus any item by default. An exception is JAWS, which auto-selects the first item it can once it detects a context or start menu opening.

You can possibly imagine what happens if the events get out of order, or are not all fired in a complete cycle. Those screen readers that rely on the order get confused, stay in a menu mode state even when the menus have all closed etc.

So, when a web developer uses one of the menu roles, they set this whole mechanism in motion, too. Because it is assumed a menu system like a Windows desktop app is being implemented, browsers that implement WAI-ARIA have to also send these events to communicate the state of a menu, drop-down or context or sub menu.

So, what happens in the case of our auto-complete example if you were to use the role menu on the container, and menuitem on the individual items? Let&#8217;s go back to our sequence from the beginning of the post:

1. The user is focused in the text field and types something.
2. Your widget detects that it has something to auto-complete, populates the list of items, applies role menuitem to each, and role menu to the container, and pops it up.
3. This causes a SystemMenuPopupStart event to be fired.

The consequences of this event are rather devastating to the user. Because you just popped up the list of items, you didn&#8217;t even set focus to one of its items yet. So technically and visually, focus is still in your text field, the cursor is blinking away merrily.

But for a screen reader user, the context just changed completely. Because of the SystemMenuPopupStart event that got fired, screen readers now have to assume that focus went to a menu, and that just no item is selected yet. Worse, in the case of JAWS, the first item may even get selected automatically, producing potentially undesired side effects!

Moreover, the user may continue typing, even use the left and right arrow keys to check their spelling, but the screen reader will no longer read this to them, because their screen reader thinks it&#8217;s in menu mode and ignores all happenings outside the &#8220;menu&#8221;. And one last thing: Because you technically didn&#8217;t set focus to your list of auto-complete items, there is no easy way to dismiss that menu any more.

On the other hand, if you use listbox and option roles as I suggested, none of these problems occur. The list will be displayed, but because it doesn&#8217;t get focus yet, it doesn&#8217;t disturb the interaction with the text field. When focus gets into the list of items, by means of DownArrow, the transition will be clearly communicated, and when it is transitioning back to the text field, even when the list remains open, that will be recognized properly, too.

So even when you sighted web developers think that this is visually similar to a context menu or a popup menu or whatever you may want to call it, from a user interaction point of view it is much more like a list than a menu. A menu system should really be confined to an actual menu system, like the one you see in Google Docs. The side effects of the menu related roles on Windows are just too severe for scenarios like auto-completes. And the reason for that lies in over 20 years of Windows legacy.

Some final notes: You can spice up your widget by letting the user know that auto-complete results are available via a text that gets automatically spoken if you add it in a text element that is moved outside the viewport, but apply an attribute aria-live=&#8221;polite&#8221; to it. In addition, you can use aria-expanded=&#8221;true&#8221; if you just popped up the list, and aria-expanded=&#8221;false&#8221; if it is not there, both applied to your input or textarea element. And the showing and hiding of the auto-complete list should be done via display:none; or visibility:hidden; and their counterparts, or they will appear somewhere in the user&#8217;s virtual buffer and cause confusion.

A great example of all of this can be seen in the Tweet composition ContentEditable on [twitter.com](https://twitter.com/).

I also sent a proposal for an addition to the Protocols and Formatting Working Group at the W3C, because the [example in the WAI-ARIA authoring practices](http://www.w3.org/TR/wai-aria-practices/#autocomplete) for an auto-complete doesn&#8217;t cover most advanced scenarios, like the one on Twitter and others I&#8217;ve come across over time. Hope the powers that may be follow my reasoning and make explicit recommendations regarding the use of roles that should and shouldn&#8217;t be used for auto-completes!
