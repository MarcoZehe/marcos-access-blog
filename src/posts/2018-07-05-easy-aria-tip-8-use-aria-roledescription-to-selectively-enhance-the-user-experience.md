---
title: "Easy ARIA tip #8: Use aria-roledescription to selectively enhance the user experience"
slug: easy-aria-tip-8-use-aria-roledescription-to-selectively-enhance-the-user-experience
date_published: 2018-07-05T10:51:07.000Z
date_updated: 2018-07-05T10:51:07.000Z
tags: [AriaRoledescription]
---

In [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/), the aria-roledescription attribute has been added to give web authors the ability to further describe the function of a widget. Here are a few tips for usage.

## The definition of role

When screen readers describe any control or item on a website, they use multiple pieces of information to describe it to the user:

1. The name or label. What does the element do? &#8220;Add a file&#8221;, for example.
2. The role of the item. What kind of control is it? To stick with our example, it&#8217;s most probably a button.
3. For some controls such as checkboxes or radio buttons, toggle buttons etc., the state or states. Am I checked? Am I the selected radio button in a group of radio buttons? Am I pressed?
4. The description, if present. Further information that might show up as a tool tip when hovering over it with the mouse, or focusing with the keyboard. To stick with our example: &#8220;Adds a new file to the current folder&#8221;.

1 and 2 should always be present correctly, 3 for the control types that states apply to, and 4 is optional.

So, for a correctly coded widget, and for assistive technologies to use it, 1 and 2 must be correctly set, keyboard interaction implemented etc. For some, web developers must also make sure that the correct states (3) are always applied or changed.

## Add aria-roledescription

What aria-roledescription does, in a nutshell, is it tells the screen reader to speak and braille something for item 2 above that is defined by the web developer. For roles, screen readers have a default, localized, set of terms they use to describe items. &#8220;Button&#8221;, &#8220;text field&#8221;, &#8220;checkbox&#8221; are some examples. aria-roledescription overrides the assistive technology&#8217;s default role description for an item exposed by the accessibility APIs. This attribute should be used wisely, since it can be the yay or nay for an assistive technology user to understand, or not understand, your user interface.

Here are a few guidelines you as a web developer should follow strictly when considering to use aria-roledescription.

1. Make sure your widget is understandable without it. Pretend that aria-roledescription doesn&#8217;t exist, and make sure your widget or compound widget works with a correct standard role or set of roles first.
2. If you feel that your UI is understood better with aria-roledescription added, add it, bearing in mind that the string you use is used literally, not being mapped to some ID or numeric value. The raw string you put in there will be passed on to the screen reader. This also means that, if you offer your UI in different languages, make it localizable and offer the localized string for each language. Make clear in the localization notes that this is a string being spoken to blind users to help them understand the widget better.
3. Make sure you do not take away information. If you want to enhance the description of a button, make sure the fact that this is a button is still in there somewhere, or your users might not know that they need to press Space to activate.

## A few examples

[These examples by ETS research](http://www.ets-research.org/ia11ylab/aria11spec/) show good use of the aria-roledescription attribute. The first two are regions that are explicitly declared as slides (like in a PowerPoint or Google Slides presentation), while the other two are good examples of enhancing the button&#8217;s description, but still keeping the button semantic clearly audible.

I recently also came across an example in the newly released Open-Xchange OX App Suite 7.10 where a newly introduced window manager and task bar can be enhanced to provide the user with information that this is a special kind of toolbar, namely a task bar. There is no task bar role in either HTML or WAI-ARIA. So what can be done, and what I also suggested to the developers, is to make sure everything works as if this was a normal toolbar, including the appropriate roles, and then enhance the container item that has the role &#8220;toolbar&#8221; with an aria-description specifying that this is, indeed, a task bar. We&#8217;ll see if they add it and if so, how this plays out. 🙂

## Conclusion

As with everything in WAI-ARIA, be mindful of using attributes and roles. Think about the impact your choice might have. But if used in the right context, aria-roledescription can be a great enhancement to the user experience. If used wrongly, though, it can also lead to greater inaccessibility of your web application.

Also note that not all combinations of assistive technologies and browsers support aria-roledescription yet. Firefox does, in combination with NVDA at least, and VoiceOver and Safari on macOS are said to have suport as well. Other combinations may or may not have it yet, so it is very important that you follow the advice and make sure your widgets &#8220;speak&#8221; without it as well.
