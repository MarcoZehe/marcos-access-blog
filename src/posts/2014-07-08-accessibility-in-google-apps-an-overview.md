---
title: Accessibility in Google Apps - an overview
slug: accessibility-in-google-apps-an-overview
date_published: 2014-07-08T17:03:02.000Z
date_updated: 2014-07-08T17:03:02.000Z
tags: [Docs, Drive, Forms, GoogkeApps, Google, Sheets, Sites, Slides]
---

I recently said that I would write a blog series about Google apps accessibility, providing some hints and caveats when it comes to using Google products such as GMail, Docs, and Drive in a web browser.

However, when I researched this topic further, I realized that the documentation Google provide on each of their products for screen reader users is actually quite comprehensive. So, instead of repeating what they already said, I&#8217;m going to provide some high-level tips and tricks, and links to the relevant documentation so you can look the relevant information up yourself if you need to.

There is really not much difference between Google Drive, GMail and the other consumer-related products and the enterprise-level offerings called Google Apps for Business. All of them are based on the same technology base. The good thing is that there is also no way for administrators to turn accessibility off entirely when they administrate the Google Apps for Business setup for their company. And unless they mess with default settings, themes and other low-vision features should also work in both end user and enterprise environments.

### A basic rule: Know your assistive technology!

This is one thing I notice pretty often when I start explaining certain web-related stuff to people, be they screen reader users or users of other assistive technologies. It is vital for your personal, but even more your professional life, to know your assistive technology! As a screen reader user, just getting around a page by tabbing simply isn&#8217;t enough to get around complex web applications efficiently and deal with stuff in a timely fashion. You need to be familiar with concepts such as the difference between a virtual document (or virtual buffer or browse mode document) and the forms or focus mode of your screen reader, especially when on Windows. You need to know at least some quick navigation commands available in most browse/virtual mode scenarios. You should also be familiar with what landmarks are to navigate to certain sections of a page. If you just read this and don&#8217;t know what I was talking about, consult your screen reader manual and key stroke reference now! If you are a person who requires training to memorize these things and isn&#8217;t good at self-paced learning this, go get help and training for this, especially in professional environments. You will be much more proficient afterwards and provide much better services. And besides, it&#8217;ll make you feel better because you will have a feeling of greater accomplishment and less frustrations. I promise!

Now with that out of the way, let&#8217;s move on to some specific accessibility info, shall we?

### GMail

One of the most used things you&#8217;l be using is GMail. If you want to use a desktop or mobile e-mail client because that is easiest for you, you can do so! Talk to your administrator if you&#8217;re in a corporate or educational environment, or simply set up your GMail account in your preferred client. Today, most clients even won&#8217;t require you to enter an IMAP or SMTP server any more, because they know what servers they need to talk to for GMail. So unless your administrator has turned off IMAP and SMTP access, which they most likely haven&#8217;t, you should be able to just use your preferred client of choice. Only if you want to add server-side e-mail filters and change other settings will you then need to enter the web interface.

If you want to, or have to, use the web interface, don&#8217;t bother with the basic HTML view. It is so stripped down in functionality that the experience by today&#8217;s standards is less than pleasant. Instead, familiarize yourself with the [GMail guide for screen reader users,](https://support.google.com/mail/answer/90559?hl=en) and also have a look at the [shortcuts for GMail](https://support.google.com/mail/answer/6594?hl=en). Note that the latter will only work if your screen reader&#8217;s browse or virtual mode is turned off. If you&#8217;re a screen reader user, experiment with which way works better for you, browse/virtual mode or non-virtual mode.

Personally, I found the usability of GMail quite improved in recent months compared to earlier times. I particularly am fond of the conversation threading capabilities and the power of the search which can also be applied to filters.

Note that in some documentation, it is said that the chat portion of GMail is not accessible. However, I found that this seems to be outdated information, since the above guide very well states that Chat works, and describes some of its features. Best way to find out: Try it!

### Contacts

Contacts are accessible on the web, too, but again you can use your e-mail client&#8217;s capabilities or extension to sync your contacts through that as well.

### Calendar

Google Calendar&#8217;s Agenda View can be used with screen readers on the web, but it, too, allows access from desktop or mobile CalDav clients as well. The [Google Calendar guide for screen reader users](https://support.google.com/calendar/answer/1630828?hl=en) and [Keyboard Shortcuts for Google Calendar](https://support.google.com/calendar/answer/37034?hl=en) provide the relevant info.

### Google Docs and Sites

This is probably the most complicated suite of the Google offerings, but don&#8217;t fear, they are accessible and you can actually work with them nowadays. For this to work best, Google recommends to use either JAWS or NVDA with Firefox, or IE, or Chrome + ChromeVox. I tested, and while Safari and VoiceOver on OS X also provided some feedback, the experience wasn&#8217;t as polished as one would hope. So if you&#8217;re on the Mac, using Google Chrome and ChromeVox is probably your best bet.

Also, all of these apps work best if you do not rely on virtual/browse modes when on Windows. In NVDA, it&#8217;s easy to just turn it off by pressing NVDA+Space. For JAWS, the shortcut is JAWSKey+Z. Bt since this has multiple settings, consult your JAWS manual to make this setting permanent for the Google Drive domain.

The documentation on Drive is extensive. I suggest to [start at this hub](https://support.google.com/drive/topic/1631585?hl=en&amp;ref_topic=2650510) and work your way through all linked documentation top to bottom. It&#8217;s a lot at first, but you&#8217;ll quickly get around and grasp the concepts, which are pretty consistent throughout.

Once you&#8217;re ready to dive into Docs, Sheets, Slides and the other office suite apps, use the [Docs Getting Started document](https://support.google.com/docs/answer/1632201) as a springboard to all the others and the in-depth documentation on Docs itself.

One note, in some places, it is said that creating forms is not accessible yet. However, since there is documentation on that, too, those documents stating that creating forms isn&#8217;t accessible yet are out of date. One of those, among other things, is the Administrator Guide to Apps Accessibility.

I found that creating and working in documents and spreadsheets works amazingly well already. There are some problems sometimes with read-only documents which I&#8217;ve made the Docs team aware of, but since these are sometimes hard to reproduce, it may need some more time before this works a bit better. I found that, if you get stuck, alt-tabbing out of and back into your browser often clears things up. Sometimes, it might even be enough to just open the menu bar by pressing the Alt key.

### Closing remarks

Like with any other office productivity suite, Google Docs is a pretty involved product. In a sense, it&#8217;s not less feature-rich than a desktop office suite of programs, only that it runs in a web browser. So in order to effectively use Google Apps, it cannot be said enough: Know your browser, and know your assistive technology! Just tabbing around won&#8217;t get you very far!

If you need more information not linked to above, here&#8217;s the [entry page](http://google.com/accessibility) for all things Google accessibility in any of their apps, devices and services. From here, most of the other pages I mention above can also be found.

And one more piece of advice: If you know you&#8217;ll be switching to Google Apps in the future in your company or government or educational institution, and want to get a head start, get yourself a GMail account if you don&#8217;t have one. Once you have that, all of Google Drive, Docs, and others, are available to you as well to play around with. There&#8217;s no better way than creating a safe environment and play around with it! Remember, it&#8217;s only a web application, you can&#8217;t break any machines by using it! And if you do, you&#8217;re up for some great reward from Google! 🙂

After some requests, I also produced a little [audio demo](https://audioboo.fm/boos/2366439-a-demonstration-of-gmail-drive-and-docs) (about 40 minutes) where I demonstrate a few Gmail, Drive and Docs features.

Enjoy!
