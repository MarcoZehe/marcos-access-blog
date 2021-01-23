---
title: Advancements in the accessibility of Facebook
slug: advancements-in-the-accessibility-of-facebook
date_published: 2013-06-02T09:25:55.000Z
date_updated: 2013-06-02T09:25:55.000Z
tags: [Android, Facebook, iOS4, Web]
---

In December 2011, I wrote this [overview of the accessibility of social network sites and apps](http://www.marcozehe.de/2011/12/08/social-networks-and-accessibility-a-rather-sad-picture/), and I had to paint a rather sad picture about most of the accessibility experiences. As time went by, some things improved here and there, others stalled.

One social network that caused some excitement in the community when they [announced a dedicated accessibility team](https://www.facebook.com/notes/facebook-design/designing-for-accessibility-qa-with-jeff-wieland/10151059999667793), however, was Facebook. And since then, the team has made some great leaps forward in over-all accessibility, and also listening to feedback from users on both their official [Facebook accessibility page](https://www.facebook.com/accessibility) and [Twitter](https://twitter.com/fbaccess).

I left Facebook in June 2012, but recently [returned](https://facebook.com/marco.zehe.hamburg) for various reasons, and now think it&#8217;s time to review a few things that now work much better, especially for screen reader users. I&#8217;ll be taking a look at both desktop and mobile sites as well as the iOS and Android native clients.

**Disclaimer**: I&#8217;m neither employed nor paid by Facebook for this review. This is purely my personal opinion and an attempt to highlight what good can be done if any company put a dedicated accessibility team in place.

### Desktop site

What most people will probably be using first is the standard desktop site of Facebook. I used both NVDA and Firefox on Windows, and VoiceOver and Safari on OS X, to do my testing.

The sign-up process still requires a CAPTCHA to be solved. Since the audio CAPTCHAs have become unintelligible over-all, trying to solve the visual CAPTCHA in Firefox with the [WebVisum extension](http://webvisum.com), or getting sighted help, are the only viable options to get signed up.

Once the sign-up process has been completed, filling out one&#8217;s profile information works much better over-all than it used to. Auto-complete suggestions, keyboard focus handling and the over-all consistency when showing or hiding sections of the profile editing process provide a smooth experience. There are some quirks when filling out employment life stations, because Facebook has the tendency to fill in employers from friends one might have added already. While this might be a good idea in general, pre-filling the text field once it gains focus without waiting for the user to type, is not the best usability idea, IMO. But this happens to people without assistive technologies, too, so this is not an accessibility-specific issue per se, but it causes a bit of confusion.

In many areas, Facebook&#8217;s keyboard navigation and focus handling have improved. When posting a status update, sharing a link, adding a friend and adjusting the friend settings, in chat, dealing with notifications, all have improved significantly. Dialogs now behave modally, and the tab key is trapped so one cannot navigate outside of the dialog&#8217;s controls.

The search at the top of the page is a delight to use, the auto-completion and navigation by arrow keys work very well with both screen reader/browser combinations. What I found was that VoiceOver and Safari don&#8217;t read the checked/unchecked state of some menu items, like when adjusting if a friend is an acquaintance or a close friend. However, since NVDA and Firefox read these states just fine, it is a bug on the VO+Safari side, which I also notified Apple about through official channels.

There are some rare cases where dialogs don&#8217;t work as consistently as others, or get confused by unexpected keystrokes. However, as the monthly updates from the accessibility team indicate, this is an area that is constantly being improved, so these quirks should become less and less of a problem.

In summary, it can be said that the difference to when before the team started, is a difference between night and day! The experience has become much more user-friendly, and therefore more efficient. Low-vision users will also be delighted to hear that the FB Access team is constantly improving the high contrast experience as well.

### Mobile site

A probably even bigger difference is what happened to the mobile version of the Facebook site over the last year. I used both Firefox for Android on a Nexus 4 running Jelly Bean 4.2.2, and VoiceOver and Mobile Safari on an iPhone 4S and an iPod Touch 5th generation running the latest iOS 6.1.3.

To recap, the last mobile experience I checked was a set of static pages that were loaded and unloaded constantly. It was very stripped down and hardly contained any semantic information other than links and inputs. No headings and other really useful stuff.

Well, that has changed drastically. The mobile sites look very much like the native app counterparts, and they also now use a lot of good semantics, both HTML and WAI-ARIA, to communicate. As on the desktop, the notifications for friend requests, messages and other notifications are present and can have pop-overs displayed or hidden when tapped. On the iPhone, these were announced quite nicely, and for Firefox for Android, a bug was just fixed for the Firefox 24 Nightly builds that now also causes TalkBack to speak the fact that these buttons have pop-overs.

When displaying the main menu on the left side of the mobile screen, information is nicely accessible. Status updates have headings, so it is easy with quick navigation gestures to jump through them to get an overview. The status update widget is also accessible, including the buttons above and below the actual text entry, and the rest of the page is nicely hidden from view so it doesn&#8217;t clutter up the screen reader view. Note that for Firefox for Android, you need a June 1 or later nightly build or the 24 release to take full advantage of this widget. Part of my using Facebook regularly was finding those bugs in our implementation and helping fix them.

I found that with Firefox for Android, I can navigate the mobile news feed just as efficiently as the native Android app.

There still seems to be a bit of a problem on the Messages page. At least in Firefox for Android, i am unable to re-open the main menu. On the iPhone, it works, so it&#8217;s probably a glitch in our accessibility support which needs investigating.

Other than that, one can reach most common things. I can use the friend suggestions, events, notes, and other stuff just fine in both browsers.

A note about tablets: On both my iPad Mini and a Nexus 7, I got the desktop version of Facebook, maybe with some tweaks, but in general, it looked a lot like in Safari on OS X, or Firefox on the desktop. Again, techniques used work just fine, and most, if not all, stuff is spoken by VoiceOver and TalkBack. So on a tablet where there is more screen estate available, the experience is nicely scaled up to give the user the advantage of the bigger screen.

### The native clients

Both iOS and Android offer native Facebook apps. Both are largely accessible nowadays. There are some problems with the iOS app where if you double tap an entry that has a photo or link attached, that photo or link are opened straight away instead of the actual Facebook entry. So commenting on these is difficult, in case of a link even impossible. The Android version does not suffer from this limitation, because all tapable items in the main timeline can be explored or swiped to. This means a little more swipes per entry, but the extra granularity also has its advantages. The Facebook app for iOS should definitely be changed to open the actual entry and allow the user to view the link or photo from that detailed entry view. The UIAccessibility protocol makes this possible.

I found some unlabeled buttons in both the iOS and Android apps, but as the May accessibility team update states, they&#8217;re constantly looking for these and fix them.

On iOS, there is also the separately available Facebook Messenger app, an app that only contains the Messages part of Facebook. Its accessibility has become quite good over the last year. I&#8217;ve set it up so it can push me new messages, whereas I did not allow the main Facebook app to do that. This way, the dedicated messenger app works just like an SMS alternative like WhatsApp.

Facebook Messenger for Firefox

End of last year, Mozilla introduced what we call the Social API, allowing social networks to offer parts of their services as always-present side bars in the browser, without the need to always keep a tab open with the whole site working in the background. First ones to take advantage were Facebook with the [Messenger for Firefox](https://facebook.com/about/messenger-for-firefox) add-on. Unlike other add-ons, you just activate it from this page. If you&#8217;re logged into Facebook already, everything is being taken care for you. A new side bar, which you can switch to via the F6 key, presents you with very recent updates, your list of online contacts, and some settings. If you navigate to one of those contacts and press Enter, you&#8217;ll be taken to an ordinary text area where you can type your message. Enter will send it, and if you press Escape in NVDA to turn off virtual cursor, you can navigate upwards to follow along what your contact is writing, then press e again to move back to the text area, press Enter for focus mode, and type away your reply.

The HTML Facebook renders for this add-on does not yet have all the accessibility features known from the built-in Chat on the Facebook site. I&#8217;ve notified the team of that, and since this is all coming from Facebook, as soon as they improve that, you should see an improvement right away without having to update anything on your end. You can close your Facebook tabs, navigate and browse around, and the side bar will keep you online and available to others for chatting.

### In Summary

Accessibility has come quite a long way over the past year on Facebook! Yes, there are always areas where it can still improve, but especially the vast improvement in mobile browsers and on the desktop site are really worth highlighting! The native apps also have improved significantly over what was there a year ago.

The one remaining really big annoyance is the CAPTCHA that bites users not only at sign-up, but can also hit if Facebook thinks the IP address one is connecting from is so unlikely that it can&#8217;t be you. Happened to me twice in my past Facebook life when I was at my employer&#8217;s place or the hotel we were staying in. Still burdening the user with these unreadable and unintelligible CAPTCHAs in 2013 when there are [many better methods](http://www.karlgroves.com/2012/04/03/captcha-less-security/) of user verification that run on the server side, is not a good way to treat your honest users. I sincerely hope this will soon be a thing of the past!

I&#8217;d like to give the Facebook accessibility team a shout out for the work they&#8217;re doing! Keep it up, you&#8217;re definitely on the right path!

And to all users of Facebook, no matter which assistive technology you use: If you find problems with Facebook, let them know! There is a link on the Facebook Access page linking straight to an accessible feedback form allowing you to send your problems and suggestions straight to them. It is difficult for the team to try and catch everything by themselves, especially since everybody uses Facebook in a slightly different, and sometimes unexpected, fashion. If you speak out, you can be helped and the site improved to fit your use cases!

Happy facebooking!
