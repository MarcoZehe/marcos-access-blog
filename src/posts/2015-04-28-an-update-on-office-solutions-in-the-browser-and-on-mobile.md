---
title: An update on office solutions in the browser and on mobile
slug: an-update-on-office-solutions-in-the-browser-and-on-mobile
date_published: 2015-04-28T15:14:32.000Z
date_updated: 2015-04-28T15:14:32.000Z
tags: [GoogleApps, GoogleDocs, GoogleDrive, iWork, Microsoft, OfficeOnline, OneDrive, OpenXchange]
---

Regular readers of my blog may remember my January 2014 [shout out to Microsoft](https://www.marcozehe.de/2014/01/22/wai-aria-showcase-microsoft-office-web-apps/) for implementing great accessibility in their Office Online offering. Later in the year, I also gave an overview over the [accessibility in Google apps](https://www.marcozehe.de/2014/07/08/accessibility-in-google-apps-an-overview/). Now, in late April 2015, it is time for an update, since both have made progress. We will also take a look at what has changed in Apple&#8217;s iCloud on the web suite, and I&#8217;ll introduce an open-source alternative that is ramping up to becoming more accessible.

## Google apps

The Google apps suite for both free Gmail and paid Google Apps for Business accounts has grown enormously in functionality. And so have the accessibility features. No matter which are you look at, be it Docs with its wide variety of document navigation and collaboration features, Sheets with its ever more comprehensive spreadsheet editing and navigation abilities, or Slides, which allows a blind person to create full-featured slide shows. Gmail itself and Drive are also running very smoothly nowadays. Creating a Google Form to conduct surveys is also going very strongly.

One of the most remarkable facts about this is the enhancements to documentation the Google apps have received. Docs now has dedicated help pages for navigation, formatting, collaboration, and a huge list of keyboard shortcuts for all supported platforms. Take alone the [Collaborating on a document with a screen reader,](https://support.google.com/docs/answer/6050769) and just try a few things described in there with a friend, co-worker or family member. Each time I use these features, I am totally blown away by the experience.

Docs also [introduced braille support](https://support.google.com/docs/answer/6057417) and has by now expanded this to Firefox and screen readers as well. If you use it, you&#8217;ll get braille output (of course), but may lose some announcements that are available when braille support is not enabled. I have found that a combination of both modes works well for me: Non-braille mode for editing and collaboration, and braille mode for the final proof-reading.

The iOS apps have also made huge leaps forward. If you use an external keyboard with your iPhone or iPad, you have a similarly rich set of key strokes available to you that you have on the web. Compared to where these apps were a year ago, &#8230; Uh &#8230; forget it, there is no comparison. It&#8217;s like day and night!

On Android, the situation looks good as well, within, of course, the limitations that TalkBack still imposes on the users in general. Future versions may vastly improve this situation, let&#8217;s keep our fingers crossed! Until then, I suggest you look at the [help documentation for Docs with Android](https://support.google.com/docs/answer/6057286).

## Microsoft

Microsoft has also enhanced its accessibility features. Word Online, Excel Online, and PowerPoint Online work even better than when I wrote my first article. I found that the collaboration features don&#8217;t work as smoothly for me as they do with Google Docs, but because of OneDrive and Dropbox integrations, many tasks can be accomplished using the Office for Windows suite with all its features if the browser version falls short. The start page for [accessibility in Office Online](https://support.office.com/en-US/article/Office-Online-d6018be1-d9fb-450f-8a13-b5a88e0e329e) gives good pointers to articles with further information.

I also found that the Outlook.com web mailer behaves more like a web page than a real application in many instances. But of course, it has tight integration with Microsoft Outlook and Windows Mail in Windows, so again, if the web version falls short for you if you use these services, you can use the desktop versions.

The iOS versions also have seen great improveents for VoiceOver. The new kid on the block, Outlook for iOS, is getting frequent updates which usually also contain VoiceOver fixes.

And some good news for all the Mac enthusiasts out there: The Microsoft [Office 2016 for Mac](http://blogs.office.com/2015/03/05/office-2016-mac-preview/) preview received an update on April 14, 2015 which, according to [this support article,](https://support.microsoft.com/en-us/kb/3048768?wa=wsignin1.0) also contains VoiceOver improvements for Word, Excel, and PowerPoint. Outlook is also said to be accessible via a [different support article](https://support.office.com/en-us/article/Accessibility-in-Outlook-2016-for-Mac-13e59ff3-6da3-4d59-88d8-885a5dc9e90d) on this.

I can&#8217;t say much about the Android versions of the Microsoft Office applications, and the official documentation channels haven&#8217;t revealed anything. If you have any experience, please let me know in the comments! Especially the MS Word for Android Tablet, and friends, are the interesting ones I think, since they are more feature-rich than the Office for Android phone app.

## Apple

As much as Apple is great when it comes to accessibility in their hardware devices, including the latest new device category Apple Watch, as dismal is the situation with their iCloud.com offering. This thing just doesn&#8217;t have the fit and finish that the other products have. Yes, many buttons are now labeled, and yes, in Pages on the web, lines are read when you navigate them, as well as some other information. But the overall experience is not good. The keyboard focus gets lost every so often, and unpredictably, the interface is confusing and keeps stuff around that might, in a certain situation, not even be activable. This is nothing I can recommend to any screen reader user to use productively, even after some upgrades it received over the past year.

If you want, or have to, use iWork for iCloud, use the Mac or iOS versions. They work quite OK and get the job done.

## Open-Xchange

And here&#8217;s the new kid on the block that I promised you! It&#8217;s called [Open-Xchange App Suite](http://open-xchange.com/), and is actually not quite as new in the field of collaborative tools. But its accessibility efforts are fairly new, and they look promising. Open-Xchange is mostly found in web mail providers such as the Germany-based Mailbox.org or 1&1, but also used internationally. Furthermore, anyone who runs certain types of Linux distributions as a server can run their own instance, with mail and cloud storage services. It also offers standards like IMAP and SMTP, CalDav for calendar sync, CardDav for contact sync, and WebDav for access to the files. It works in the MS Office formats, so is compatible with most, if not all, other office suites.

Its accessibility features on the web are on their way to becoming really good. They&#8217;ve still got some ways to go, primarily also in the way the keyboard focus handling works and how to get some tasks done really efficiently, but Mail, some parts of Calendar, Contacts, Drive, Text and the dashboard really work quite well already. It is nothing that compares yet to what Google is offering, but it comes close to the quality of what Microsoft is offering on the web, and definitely surpasses that in some areas.

This is definitely something to keep an eye on. I certainly will be watching its progress closely.

## In summary

As of this writing, Google definitely comes out strongest in terms of accessibility and fit and finish when it comes to working efficiently with their apps. Granted, it takes some getting used to, and it requires that a screen reader user know their assistive technology and are willing to learn some keyboard shortcuts and familiarize themselves with certain usability concepts. But once that is mastered, Google Apps is definitely something I can whole-heartedly recommend for online collaboration. Furthermore, if you look at new features for commercial screen readers such as JAWS, you can see that they&#8217;re paying attention and improve their support for Google apps bit by bit where support is still lacking.

Microsoft is close behind, with some areas that are better accomplished in their desktop apps or on tablets rather than on the web.

Open-Xchange still has its bumps in the road, but is on a good way to becoming a viable alternative for those who can rely on their own infrastructure and want to go to a full open-source stack.

And for Apple, I recommend staying away from the web offering and doing all the office work in iWork apps for Mac or iOS. The web stuff is just too much of a hassle still.
