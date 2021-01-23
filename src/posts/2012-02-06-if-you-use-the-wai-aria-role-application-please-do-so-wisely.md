---
title: If you use the WAI-ARIA role "application", please do so wisely!
slug: if-you-use-the-wai-aria-role-application-please-do-so-wisely
date_published: 2012-02-06T20:35:52.000Z
date_updated: 2012-02-06T20:35:52.000Z
tags: [landmarks, roles, WAI-ARIA]
---

This goes out to all web developers out there reading this blog and implementing widgets and other rich content in HTML, CSS and JavaScript! If you think of using the WAI-ARIA role &#8220;application&#8221; in your code, please do so with caution and care! And here&#8217;s why:

### What is it?

&#8220;application&#8221; is one of the WAI-ARIA landmark roles. If you&#8217;d like to read up on landmarks, [please go here](http://www.marcozehe.de/2009/10/31/easy-aria-tip-4-landmarks/).  It is used to denote a region of a web application that is to be treated like a desktop application, not like a regular web page. In other words, if you use something that is not part of standard HTML, like a mashup widget, and your page has no resemblance to a classic document in, roughly, over 90% of its content, &#8220;application&#8221; is for you. If you, on the other hand, make up a user interface solely of elements that are part of standard HTML like selects, check boxes, text boxes etc., and in addition use only common compound widgets and lots of document-like content like hyperlinks, you will most probably not want to use &#8220;application&#8221; because browsers and assistive technologies provide a standard interaction model for these already and don&#8217;t need special support from you in that.

### Why use it at all?

Traditionally, assistive technologies like screen readers for the blind convert a page&#8217;s content into a format that is easier for a person with a disability to comprehend. A two-column newspaper style text, for example, is reformatted so that the text flows from beginning to end like it would in a single-column document. Multi-column layouts of pages are streamlined so that there&#8217;s a structured flow a person who, for example, cannot see the screen, can understand.

For this, screen readers especially on Windows have adopted a two-part user interaction model:
virtual cursor or browse modeThis is the mode screen readers especially on Windows operate in when the user browses a web page. The term virtual cursor has been used since its inception in 1999 because this feels to the user like a document in, for example, WordPad or MS Word. The user walks the document using the arrow keys and has the text to them read via the speech synthesizer. In addition, semantic information is spoken to indicate whether a particular piece of text is a link, graphic, form element, part of a data table structure, list etc.  In addition, several keys are captured by the assistive technology and are not processed by the browser. These allow navigation by headings, lists, links, tables, form elements and others. Usually, these are done via single letters. The visual focus may or may not follow the virtual cursor onto focusable items, depending on the assistive technology in use and its settings.Forms mode or focus modeThis is a mode where the user interacts with elements that accept a form of data entry. This may be via entering text, checking a check box, selecting one of several possible radio buttons, or making a selection in a select element.  This mode is either invoked by putting the virtual or browse focus onto such an element and pressing a key (usually Enter), or by the assistive technology switching to this mode automatically when the virtual focus encounters such an element. Others may only activate this mode automatically when specifically using the tab key. In this mode, all keys are passed through to the browser. It is as if you were sitting in front of your browser using it with the keyboard, and don&#8217;t have a screen reader running.  Likewise, if the application focus leaves such an element that supports or requires direct keyboard interaction, if it was switched on automatically, it will be switched off and the user returned to browse/virtual mode.  **Note**: Some elements like buttons and links do not require the user to switch into focus or forms mode, because for efficiency, screen readers allow activation of these elements directly from virtual/focus modes.
The challenge is that you may be creating widgets that require you to force the user into direct interaction with the browser. You know that your widget can best be used via the keyboard if the user is **not** in virtual mode. In addition, you know that you have no classic document content to display, but only use widgets and provide all necessary context through them. This is what *role* &#8220;application&#8221; is for.  It is under **your** control whether the user is being thrown into focus mode once your widget gains keyboard focus.  Also, contrary to standard focus mode, if an assistive technology encounters an area that is marked up with role &#8220;application&#8221;, it is usually not so easy to manually exit out of that mode to review the surrounding content in browse mode.

### So when should I use it, and when not?

You **do not** use it if a set of controls only contains these widgets, that are all part of standard HTML. This also applies if you mark them up and create an interaction model using WAI-ARIA roles instead of standard HTML widgets:

- text box. This also applies to password, search, tel and other newer input *type* derivates
- textarea
- check box
- button
- radio button (usually inside a fieldset/legend element wrapper)
- select + option(s)
- links, paragraphs, headings, and other things that are classic/native to documents on the web.

You also do **not** use the &#8220;application&#8221; role if your widget is one of the following more dynamic and non-native widgets. Screen readers and other assistive technologies that support WAI-ARIA will support switching between browse and focus modes for these by default, too:

- tree view
- slider
- table that has focusable items and is being navigated via the arrow keys, for example a list of e-mail messages where you provide specific information. Other examples are interactive grids, tree grids etc.
- A list of tabs (tab, tablist) where the user selects tabs via the left and right arrow keys. Remember that **you** have to implement the keyboard navigation model for this!
- dialog and alertdialog. These cause screen readers to go into a sort of application mode implicitly once focus moves to a control inside them. Note that for these to work best, set the *aria-describedby* attribute of the element whose role is &#8220;dialog&#8221; to the id of the text that explains the dialog&#8217;s purpose, and set focus to the first interactive control when you open it.
- toolbar and toolbarbuttons, menus and menu items, and similar

You **only** want to use role &#8220;application&#8221; if the content you&#8217;re providing consists of only interactive controls, and of those, mostly advanced widgets, that emulate a real desktop application. Note that, despite many things now being called a web application, most of the content these web applications work with are still document-based information, be it Facebook posts and comments, blogs, Twitter feeds, even accordeons that show and hide certain types of information dynamically. We primarily still deal with documents on the web, even though they may have a desktop-ish feel to them on the surface.

In short: The times when you actually **will** use role &#8220;applications&#8221; are probably going to be **very rare** cases!

### So where do I put this thing?

Put it on the closest containing element of your widget, for example the parent div of your element that is your outer most widget element. If that outer div wraps only widgets that need the application interaction model, this will make sure focus mode is switched off once the user tabs out of this widget.

**Only** put it on the body element if your page consists solely of a widget or set of widgets that all need the focus mode to be turned on. If you have a majority of these widgets, but also have something you want the user to browse, use the *role* &#8220;document&#8221; on the outer-most element of this document-ish part of the page. It is the counterpart to &#8220;application&#8221; and will allow you to tell the screen reader to use browse mode for this part. Also make this element tabbable by setting a *tabindex* value on it so the user has a chance to reach it. As a rule of thumb: If your page consists of over 90 or even 95 percent of widgets, role &#8220;application&#8221; **may be** appropriate. Even then, find someone knowledgeable who can actually test two versions of this: One with and one without role &#8220;application&#8221; set to see which model works best.

**NEVER** put it on a widely containing element such as body if your page consists mostly of traditional widgets or page elements such as links that the user does **not** have to interact with in focus mode. This will cause huge headaches for any assistive technology user trying to use your site/app.

### Some examples

The behavior that originally prompted me to write this is the newest version of the layout of Gmail. It looked to me like Gmail treats the whole thing as role &#8220;application&#8221;, causing the user to tab a zillion times before actually getting to the inbox message table. It turned out to be a bug which has been haunting us for a few months now, where parts of the accessible tree (the thing we create from HTML and CSS) gets detached from the rest, causing a very similar behavior in screen readers like role &#8220;application&#8221;. If virtual cursor was still active, the users could press t in their screen reader once and jump to that table right away instead of tabbing 30 or 40 times.  A temporary solution to this problem seems to be this: Google provide us with keyboard shortcuts j and k. These can be disabled in the account settings of Gmail. That makes the bug disappear.  **Had** Google used role &#8220;application&#8221; here, it would have been inappropriate. Gmail is, below the surface, still strongly document based and thus many traditional interaction modes do apply here.

An example where roles &#8220;application&#8221; and &#8220;document&#8221; are really used wisely is the current Yahoo! mail web interface. The table where the messages are being displayed in a list is marked up to be an &#8220;application&#8221;, because the arrow keys are used to navigate between messages, enter opens one etc. Once a mail is being displayed, everything around the actual mail header and text is an application, but the mail header and text are a document, so role &#8220;document&#8221; is used and initial focus is put there so the user can immediately start reading their mail in a familiar browsing fashion.

**funny disclaimer**: Yahoo! do not pay me for constantly calling them out as a good example of an accessible web app. They just did a bang-up job, that&#8217;s all! 🙂

### Closing comments

If you have questions about this, feel free to post them here on the blog, I&#8217;ll do my best to answer them and also incorporate answers to updates to this post. You can also find the Google Group [free-aria](http://groups.google.com/group/free-aria) and discuss questions there with other web developers, standards experts and users. This is an important topic that, if done right, can provide all your users with a rich and pleasant experience, but if done wrong, can also cause headaches, complaints, and cause your web app to be less likeable by a sizeable number of users.

So use role &#8220;application&#8221; only if you absolutely have to, and tests show that this provides the better interaction model! Use it wisely when you do it, it&#8217;s worth the effort!

### Update February 7

I&#8217;ve incorporated comments that were posted to the original version of this blog post into the post, making the statements even stronger hopefully. Thanks to Jamie for pointing out a couple of very important points that make the point against using role &#8220;application&#8221; in most cases even stronger!

### Update Feb 9, 2012

Google&#8217;s accessibility team contacted me, stating that they actually don&#8217;t use role &#8220;application&#8221; in Gmail. After further investigation, it turns out that this seems to be another case of a bug we&#8217;ve been hunting for months, but which the main person who can fix it, cannot reproduce. I&#8217;ve thus updated the example section with the appropriate info. Thanks to Google for getting back to me and providing these details!
