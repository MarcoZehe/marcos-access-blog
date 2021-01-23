---
title: WAI-ARIA menus, and why you should handle them with great care
slug: wai-aria-menus-use-with-care
date_published: 2019-05-30T18:00:39.000Z
date_updated: 2019-05-30T18:00:39.000Z
tags: [DontUse, menu, menubar, menuitem, menus]
---

The WAI-ARIA standard defines a number of related menu roles. However, before using them, please give great consideration to the implications.

## Preface

This article was previously published under a different title and with a different tone. The comments below, left here for documentary and historic reasons, speak to that fact. At the time, it felt right to write it the way I did. However with some time passed and some reflection, it was time to update it to a more balanced tone and statement. Thank you to Sina and all others who voiced their opinion about that article being &#8220;out of character&#8221;, as they say. I needed some time to realize this myself, but better late than never. 😉 So here goes!

## A bit of history

In the mid 2000s, people were arguing over whether HTML4.01 or XHTML 1.x was the better standard. Both markup languages had in common that they hardly knew anything about advanced widgets. However, such widgets were more and more asked for, by web developers around the world, but because standards processes were very slow, and browser vendors were not that many as today, things were moving too slowly.

So, web developers started wildly implementing these with div and span elements and style them to look like desktop counterparts. This was to create richer user experiences for their web sites which were slowly transitioning to what we today would consider web applications.

Back then, people were still using mostly desktop applications that had classic menu bars with dropdown menus, on operating systems like Windows XP. The Mac still knows these today, so do most Linux desktops. Windows, however, has moved away from them in modern applications. They are either gone completely, like in most Universal Windows Platform apps, or replaced by ribbon-style tabs and toolbars, as known from Office applications such as Word, Outlook or OneNote.

### WAI-ARIA to the rescue

To somehow cope with the influx of new web experiences, the WAI-ARIA standard was brought to life by a group of very talented people, to map desktop concepts to the web, and give web authors the means to communicate to desktop screen readers what desktop equivalent of a widget was being created. Screen readers were thus given the information to deal with these widgets in a similar way as they would in desktop applications.

One set of widgets were menu bars, menus, menu items, and their siblings menuitemradio and menuitemcheckbox. These were to mimic a menu bar, menus that popped up from these, and the three types of menu items that Windows, Linux/GNOME and Mac knew about. Screen readers reacted to these menus the same way as for desktop applications. Because of a long history of no proper programming interface support, especially on Windows, screen readers had to hack together special so-called menu modes for applications, because technically, focus was in two places at the same time, or so it seemed. And there were a bunch of other problems and quirks.

One problem was that in browsers, such menus lived alongside the native menu bar the browsers had. And unlike that native menu bar, these menus acted like any other widget in that, properly coded, they did take focus and thus had a very unambiguous model. But screen readers still applied their mechanisms for dealing with menus to these, sometimes leading to situations where the closing of a menu would not be recognized, and new focus changes required the user to actually force the native menu open and closed once to get the screen reader back in check.

The important takeaway is that menuitem and friends provoke a very specific set of expectations within users *and* screen readers of a web application&#8217;s behavior. A menu can only contain menu items, for example, a menu bar only menus, and such. Also, the keyboard is expected to behave in a very specific way: A set of menu bar items is traversed from left to right (or right to left in RTL languages), menus are dropped down with Enter or DownArrow, the menu is closed with Escape etc.

## The problem

Over the years, it has become very apparent that these concepts are, with the receding of menus especially on Windows, less and less known to people. Many web developers, despite the WAI-ARIA authoring practices having design specifications for these, unfortunately lack the context of this complex set of widgets and the expected interaction. One of the most common ARIA errors we see in the wild comes from improper uses of the menu roles. Often, menu items are used without proper menu parents, resulting in totally improper behavior by assistive technologies. A screen reader could get stuck in their menu mode, for example, because the web author doesn&#8217;t signal when a menu has been closed.

Generally, it seems that web developers read about these menu roles, and think a set of links within a list that may pop open another sub set of links is enough to warrant it to be called a menu. Well, let me put it bluntly: Nope. Because:

- A link is a very specific widget. It brings you to another page. A menu item, on the other hand, performs an action within an application, or in the case of checkbox or radio item, changes the state of a certain behavioral component.
- A menu item needs a menu as its parent, and that either needs a button as a parent that pops it open, or a menu bar that drops it down.
- Users expect to navigate among menu items using the arrow keys, and not tab.
- They also expect Escape to either close the menu or back them up a level.

In other words, if a web developer wants to use the menu item roles, they enter into quite a specific contract with their users and the browser that turns their code into properties the assistive technology of people with disabilities understand.

Likewise, a button that, when pressed, pops open a set of options or actions to choose from is often coded as a menu. While this is correct in principle, it, too, means that you have to use menu and menuitem, and the proper set of key strokes. It also means that you have to manage focus precisely. Up and down arrows navigate among the items, Enter executes, and Escape closes the popup menu and &#8212; and this is very often forgotten &#8211; returns focus to the button. This does not happen automatically, you as a web developer have to do this explicitly. Always. Deal?

But because of all these problems that screen readers have to deal with when it comes to menus in desktop applications, testing is paramount. Bring in users. See that you get different browser and screen reader combinations covered. While NVDA and Firefox might cope fine in an instance, JAWS may react differently, and where both JAWS and NVDA might cope well, VoiceOver might fall over, or any other combination of these. And Narrator, the new kid on the block on Windows, which now not only supports Microsoft EdgeHTML Edge, but also Chrome and the new Chromium-based Edge in Windows 10 May 2019 update and later, there&#8217;s one more screen reader to test. Good thing is, that&#8217;s one you already have and don&#8217;t need to download even.  Trust me, I have seen them all over the years. And the only thing that keeps them reasonably in check is indeed proper focus management. Always keep track of where your focus is, and never assume the browser will manage something for you in this instance.

## The solution

Think about your design carefully. Is what you&#8217;re building really a menu in an application sense of the word? Especially if you are building something more complex like a super menu, the answer is probably yes. If you are popping up a set of choices at the press of a button, it is, too. If you reveal a subset of links when a link gains hover and keyboard focus, or even better, gains focus and has Enter pressed on it, it, and the links in the sub list are probably not if it is just a top level plus one level down navigation.

Test your design with users by providing a prototype. Don&#8217;t be afraid to call for help.

And document your user interaction for those who actually have to use your application. This will not only help screen reader users who cannot see your design in full, but also helps keyboard users who might not be immediately aware that they&#8217;re dealing with a menu system.

## One that doesn&#8217;t know about menus

And here&#8217;s another aspect that I intentionally left until last: Mobile doesn&#8217;t know about these old desktop concepts of menu bars and pull-down menus at all. So the user experience for such roles is even more unpredictable than on desktop. Buttons and links, on the other hand, are very well supported on mobile as well. Other pop-ups on mobile operating systems contain these normally, too, so this is a totally expected and consistent user experience.

So when you design your responsive application, be sure to also adjust what roles you might be using on mobile operating systems, and again, test, test, test, either yourself or by bringing in users who might be more proficient at certain assistive technologies. It is totally OK to not know everything and not be able to work every screen reader yourself.

## An example

Here is a menu system that is well implemented and provides a useful means of navigation. But be aware, it is pretty hardcore in that it has two horizontal levels of navigation, and only from the second level you actually get full dropdown menus. The menu system starts below the search facility, and is introduced by some navigation hints for the menu. Go to [The Morton Arboretum](https://www.mortonarb.org/), tab to the menu system and start exploring and listening to what your screen reader tells you. If something feels weird, turn off virtual/browse mode. Thanks to Sina Bahram who provided me with this example of a good menu implementation.

## Conclusion

This is one of those things that gets totally misunderstood by web developers who are not as experienced in the finer points of accessibility nuances, and their use of these roles is often misguided by thinking along the lines of &#8220;it&#8217;s a popup, or slide-out, has to be a menu&#8221;. The situation is quite similar to the potential misuse of the &#8220;application&#8221; role, which also isn&#8217;t justified by just the fact that a web application is being created. It does have its uses, but needs to be applied locally and with care, too, not as a blanket top-level attribute in almost all cases.

So as a TL;DR, I&#8217;d say: Think very carefully before using menu* roles, they&#8217;re quite volatile for historical reasons, and can cause more churn than a good user experience if applied the wrong way.
