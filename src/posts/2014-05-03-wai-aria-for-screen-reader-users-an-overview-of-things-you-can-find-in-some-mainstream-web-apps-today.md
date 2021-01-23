---
title: "WAI-ARIA for screen reader users: An overview of things you can find in some mainstream web apps today"
slug: wai-aria-for-screen-reader-users-an-overview-of-things-you-can-find-in-some-mainstream-web-apps-today
date_published: 2014-05-03T20:01:08.000Z
date_updated: 2014-05-03T20:01:08.000Z
tags: [Facebook, Microsoft, OneDrive, Twitter, WAI-ARIA]
---

After my [recent post about WAI-ARIA](http://www.marcozehe.de/2014/03/27/what-is-wai-aria-what-does-it-do-for-me-and-what-not/), which was mostly geared towards web developers, I was approached by more than one person on Twitter and elsewhere suggesting I&#8217;d do a blog post on what it means for screen reader users.

Well, I&#8217;ve got news for all my blind and visually impaired readers: You&#8217;re not getting one blog post, you&#8217;re getting a whole series instead! 🙂

This blog post will kick it off, and I will cover some general uses where you will find that WAI-ARIA improves your user experience. These examples are most useful when using modern screen reader/browser combinations, as is the case with most web stuff today anyway. So if you&#8217;re using NVDA or JAWS on Windows, Orca on Linux, or VoiceOver on the Mac, most, if not all, example uses below should work for you in one way or another. Browsers on Windows are Firefox and Internet Explorer, on Linux it&#8217;s also Firefox, and on OS X most likely Safari. Chrome and ChromeVox may or may not work in a similar way, but I&#8217;ll leave that to those using that combination to test it.

### Some WAI-ARIA basics

WAI-ARIA stands for Web Accessibility Initiative &#8211; Accessible Rich Internet Applications. It is a World Wide Web Consortium (W3C) standard. It allows web authors to tell assistive technologies that certain constructs of HTML markup &#8212; the stuff that makes up web pages &#8212; mean something that is not actually available in normal HTML, but maps to some desktop control that users are probably familiar with.

WAI-ARIA has three pillars: Roles, States and Properties, and Live Regions. I will briefly cover each of them below, but not extensively, since this is mostly for end users.

#### Roles

Roles tell the screen reader that a particular element of a web page is actually meant to be something else. For example, if assigning a role of &#8220;button&#8221; to a fancy looking clickable element made up of one or more generic HTML elements, screen readers will simply read it as a button in virtual buffer. If the author did a good job of providing keyboard accessibility, you can even tab to it and press Space to activate. All examples below do that.

Roles are oriented along known control types from the desktop. Using WAI-ARIA, you can mark up even fancy stuff like whole tree views, similar to what the folder tree in Windows Explorer is. In a later article, we&#8217;ll see such a tree view in action.

#### States and Properties

States and Properties tell the screen reader something more about a particular control than normal HTML can. For example, even in older web pages, they can tell the screen reader that a field is required or invalid. They can tell whether a button opens a popup or sub menu, if something has an auto-complete, if a fancy checkbox is checked or not, etc. We&#8217;ll see a lot of these in action in this and other articles.

#### Live Regions

Live Regions allow the web author to make the screen reader tell the user about some dynamic updates. For example, a live region can be used to make the screen reader say information like &#8220;auto-complete results are available&#8221;, or &#8220;Your message has been sent successfully&#8221;. Status information that is good to know at a particular moment, but not important enough to stick around for long, or even be exposed in a dialog form.

Live regions can be either polite, meaning they speak once your screen reader has finished speaking what it&#8217;s currently speaking, or assertive, meaning they will interrupt whatever the screen reader is currently speaking, to immediately make you aware of a certain status change.

OK, now that we&#8217;ve got these pillars of WAI-ARIA laid out a bit, let&#8217;s get started looking at some examples! it is important that you have JavaScript in your browser turned on. Yes: On, not off! Modern web apps live only because of JavaScript, and turning it off nowadays is like cutting off an arm or foot, it will leave you mostly immobilized on most modern web sites. So throw away those old beliefs that javaScript is no good for accessibility, and turn it back on or uninstall that NoJS add-on you&#8217;ve been keeping around!

Each of the below examples will open in a new tab or window on purpose, so you can play around with them a bit and return to the article when you&#8217;re done.

### Twitter

[Twitter](https://twitter.com) got a huge accessibility boast over the last year to a year and a half. Twitter even has a dedicated accessibility team now making sure their web site and mobile apps are becoming more accessible, and stay that way.

When you open Twitter and log in &#8212; assuming you have an account &#8211;, you can do several things to try out its accessibility.

First, focus on the Tweet Text edit field and invoke focus or forms mode, or whatever that mode is called in your preferred screen reader. Even that alone will give you several bits of information. It will tell you that the edit field is collapsed, that it has a sub menu, that it has an auto-complete, and that it is multi-line. The bits about having a sub menu and being collapsed are coming from WAI-ARIA markup. The other info could be encountered in just any multi-line edit field on the web.

Next, start typing some text. Notice that on occasion, Twitter will speak numbers as the number of available characters that you have left in the tweet decreases. Twitter has a limit of 140 characters per tweet.

Now, let&#8217;s add a user name. Type the @ sign. My Twitter handle is [MarcoInEnglish](https://twitter.com/MarcoInEnglish) (in one word, capitalization is not important). So after the @ sign, type the letter m. If you&#8217;re following me, at least one result should come up. The first thing you&#8217;ll hear now is that the edit field changes state from &#8220;collapsed&#8221; to &#8220;expanded&#8221;. After a moment, depending on your internet connection, you will also hear something like &#8220;3 results available&#8221; (number may vary). This means that Twitter has found matching handles that start with, or contain, the letter m.

Now, press DownArrow. You will now hear that you are in a list, that a certain list item is selected and what it contains, and that it&#8217;s item 1 of 3 (or whichever number of results are being displayed). All this is WAI-ARIA magic. You can press Up and Down to select an entry, Tab or Enter to insert that into your tweet, or Escape to dismiss the AutoComplete and return focus to the edit field without inserting anything, and resume typing.

If you decided to press Enter or Tab, you&#8217;ll hear that focus returns to the edit field, and that it is now collapsed again. Your cursor is positioned after the Twitter handle you just inserted, and a space has been added for you so you can continue typing uninterrupted.

Next, let&#8217;s look at something else on the Twitter page. Press Escape or whichever hotkey gets you out of forms or focus mode back into browse mode/virtual cursor mode. Find the heading level 2 that says &#8220;Tweets&#8221;, then DownArrow to the first tweet. After the tweet text and possible links, you&#8217;ll find a list of 4 items. The first three items are normal buttons named Reply, Retweet and Favorite. The fourth, however, is a menu button that has a sub menu. Screen readers will announce it as such. Press it. Focus will now shift to a menu, and you have 3 items: Share via E-Mail, Embed, and Report. These are announced as menu items within a menu. Press Escape to dismiss this menu without selecting anything.

These are also WAI-ARIA menus. Menu items, or menu buttons with attached sub menus are normally not available in HTML. However, through WAI-ARIA markup and some focus/keyboard handling via JavaScript, these widgets can be made fully keyboard accessible and expose all relevant information to screen readers, including menus.

Want to get even more app-like? If you&#8217;re on Windows, which probably most of you are, turn off your virtual cursor. With NVDA, you do this by pressing NVDA+SpaceBar. JAWS&#8217;s shortcut is Insert+Z. You may have to press it twice to also prevent JAWS from reinvoking virtual PC cursor when a new page loads. Once you&#8217;ve turned off your browse mode or virtual cursor, start pressing J and K (yes, the letters) to move through tweets. You&#8217;re now moving the actual keyboard focus, and through WAI-ARIA labeling, and some live regions on occasion, you are getting a fully accessible experience. Press your Question Mark key to hear which other keyboard shortcuts you have available. You can reply, favorite, retweet tweets, expand conversations and jump to the new tweets that might, in the meantime, have been added while you were browsing your timeline. You can also quickly jump to the compose edit we were in earlier, to write a new fresh tweet. In essence, you might hardly ever need virtual cursor at all on Twitter, because the app-like experience is so good!

On Mac OS X, you don&#8217;t even have to worry about switching modes, because there is no virtual cursor, and you can use those Twitter shortcuts right away. In fact, this might be a much more efficient way to navigate the Twitter experience than the VoiceOver commands for web browsing.

All the while, keyboard focus will make sure that pressing Tab will actually move into the tweet you&#8217;re currently reading.

### Facebook

[Facebook](https://facebook.com) has made similar advancements in making their regular web presence more accessible in the last 18 to 24 months. If you log in with your Facebook account and start exploring from the top, you&#8217;ll immediately encounter a few menu buttons that have popups attached to them. These are the Friend Requests, Messages, and Notifications buttons. If you have the newest design, the Privacy and Account Settings buttons will also be there.

A bit further below, you will find the Search field. It is announced as a combo edit field, one of those edits that you can either type in or choose from a list. Focus it, and start typing, for example the name of the Facebook Accessibility page. You will automatically hear announcements as results become available. Like you would expect, you can arrow up and down through the results, and if you found the one you were looking for, press Enter to go to that page.

But let&#8217;s stay on the main page for now, and find the edit field that alllows you to post a status update. This is not only a normal edit field. It, too, has the possibility to auto-complete names or locations as you type them. If you start typing the name of a friend, a list will pop up that allows you to select from the available auto-complete results, and press Tab to insert that name into the text field, including tagging that person once you post the status update. Unlike we&#8217;ve seen on Twitter, the list comes up automatically, but you can continue typing without the danger of selecting something. You will only insert a search result via the Tab key.

Again, listen to what your screen reader tells you about the results, the list items, etc. Also, the widget to post a status update has a few buttons at the top that allow you to switch whether you&#8217;re posting a news item, a photo or video. These are called toggle buttons. They are a bit similar to radio buttons, but because they will immediately perform an action once you press them, they&#8217;re buttons. Radio buttons normally only change a selection, but don&#8217;t cause whole widget environments to change. You will hear the announcement that one, by default the Story item, is pressed, meaning this is the button that is currently active. An analogous construct could be in your word processing toolbar where you have Left, Center, Right, and Justified buttons. Only one of them can be active &#8212; or pressed &#8212; at a particular time. If one is pressed, the pressed state of another goes away. Same here in this Facebook widget.

All of this is, again, WAI-ARIA. In earlier years, you would not have known which item was the active one, or that these were toggle buttons at all. The auto-complete results would not have spoken as such, either.

There&#8217;s one more thing I would like you to try: Find a friend who will be your guineapig and send them a private message. After you send it, leave your focus in the edit field and wait for their reply. Ideally, you&#8217;d choose a friend who is currently showing as online. Once she or he replies, you should automatically hear the message and can start replying right away. This is again a live region at work. Once new messages come in, even those that you just sent, they&#8217;ll be read out aloud.

### Microsoft OneDrive and Office Online

Microsoft also has made some great strides in making their online services more accessible. Their cloud storage is called [OneDrive](https://onedrive.live.com), and it is a web frontend to the files and folders you have stored in their cloud.

If you have an account at Microsoft OneDrive, log in and look at the list that is available on that page. It will list all your files and folders. Here, you can see a not yet fully complete implementation (as of this writing) of WAI-ARIA. For one, the list items are in multiple columns, so you can not only use up and down, but also left and right to move to items. Second, when pressing Enter, screen readers are not yet notified of changes. You have to press an arrow key again to hear that the contents has actually changed. Now, select a file, and press the context menu key. This is also called the windows key and is located to the left of the right control key on most keyboards. You **should** now hear a context menu open, and when you press up and down, you **should** hear the selected menu item. Yes, you should, but you won&#8217;t. 🙂 Because this is currently still a bug in the implementation. The context menu appears, you can move up and down, but the newly focused item is not yet being communicated to screen readers. Yup, it&#8217;s a bug, and I let Microsoft know about it when I found it just now. 🙂

As a workaround, you can turn virtual mode back on manually (NVDA+Space or for JAWS the NUMPAD PLUS key), move to the end of the virtual document, and find the menu items there. Arrow to the one you want and press Enter to select and activate it.

The Word document, if you selected one, will now open in Office Online. I wrote a [more detailed review of Office Online](http://www.marcozehe.de/2014/01/22/wai-aria-showcase-microsoft-office-web-apps/) already, so I strongly suggest you read that for an in-depth look at what Word in the browser has to offer! And it&#8217;s all done through a combination of modern web technologies, including WAI-ARIA. The tool bars and ribbons etc. are all rich internet application stuff.

### More goodies are coming

The use of WAI-ARIA is spreading. Since many web sites use re-usable components such as jQueryUI and others nowadays, making these accessible will bring better accessibility to many web sites automatically. Other components, such as the TinyMCE and CKEditor rich web editors, have also made great strides in accessibility in the last year or two, and sites using these will get that accessibility for free. If you have a WordPress blog on version 3.9, try using the visual editor for a change, and from the edit area, press Alt+F10, for example! 🙂

Sometimes, as shown in the Microsoft OneDrive case above, things may not be fully implemented yet. Yes, these things can happen, and they happened on the desktop before, too. The best is to provide constructive feedback to the site owners and point out where the problems lie exactly. That way, they can be fixed most easily.

In the next few blog posts on this series, I will take an in-depth look at Google apps like GMail, Contacts and calendar, Google Drive, Docs, Sheets and Slides, etc. These have become more and more important in many work as well as educational environments, and Google has made great progress in the last 6 to 9 months alone making their offerings much more accessible than they were before. Their documentation is also generally pretty good, but I&#8217;d like to provide my own perspective nevertheless, and provide a few tips and tricks and point out possible caveats. So stay tuned!

I hope this article helped you get a bit of a glimpse into what WAI-ARIA is and what good it can do for you as a blind or visually impaired user when used properly. More and more web sites, components and companies are using it.

And if anyone tries to tell you that WAI-ARIA is not important or its importance is greatly overstated, ask them if they can do what you can do, without using WAI-ARIA, and without offering any 3rd party app, just the web browser and assistive technology. WAI-ARIA **is** important, and it is being enhanced to provide even richer and more accessible experiences in the future. More and more apps are moving to a web-based user interface for both desktop and mobile operating systems, and it is important to have a technology that can make these rich applications as accessible as their native counterparts or legacy offerings. The technology is there, it&#8217;s working, so let&#8217;s use it!

So keep your JavaScript turned on, fear not, and embrace the future of web apps!
