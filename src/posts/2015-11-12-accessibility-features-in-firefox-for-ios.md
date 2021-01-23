---
title: Accessibility features in Firefox for iOS
slug: accessibility-features-in-firefox-for-ios
date_published: 2015-11-12T15:47:55.000Z
date_updated: 2015-11-12T15:47:55.000Z
tags: [iOS]
---

After ten months in development, Mozilla today [released Firefox for iOS](https://blog.mozilla.org/press/2015/11/firefox-users-can-now-choose-their-favorite-browser-on-ios/) worldwide. Firefox for iOS is bringing your synchronized bookmarks, history and other information associated with your Firefox account to the iOS platform. Moreover, it is also going to record pages you visit in your history and sync these back to your Firefox on Windows, Linux, Mac, and even Android devices.

From the start, we also made sure that Firefox for iOS supports multiple features of the iOS platform. Here are some highlights:

## VoiceOver

Firefox for iOS supports VoiceOver. Since Apple&#8217;s app store rules force us to use the Safari rendering engine, that is accessible anyway. But we also made sure the browser&#8217;s UI, Settings views and other features all talk well with VoiceOver. Moreover, we also implemented audio cues to indicate page load progress and finish. Those of you using NVDA might feel a certain familiarity with these sounds. 😉

We are also taking advantage of the iOS 8 feature of custom actions in various places. So when you start to learn Firefox for iOS, make sure to turn on VoiceOver hints so you get notified when custom actions are available.

Some things we did not get to yet, but which are on our list of things to do are:

- [Announce the availability of Reader mode](https://bugzilla.mozilla.org/show_bug.cgi?id=1160785). The control is there when this is available, but VoiceOver does not announce it yet, unlike as known from Safari.
- Intermittently, opening a link with VoiceOver on could accidentally [activate the context menu](https://bugzilla.mozilla.org/show_bug.cgi?id=1191687) instead.
- When reading the address bar, and it contains a URL, VoiceOver [does not read it with all punctuation](https://bugzilla.mozilla.org/show_bug.cgi?id=1158638).

## System font

We respect the system font setting in the UI. The web site could, of course, still set its own fonts, but all the accessibility settings pertaining to the Web View will work as they do in Safari.

## Bold text setting

The Bold Text accessibility setting is respected. You can expect the UI to respond to changing this setting in your iOS system settings.

## Switch control

Like VoiceOver, switch control should work in the browser UI. We also tried to always make sure that switch control cannot go to any hidden controls or the like that are not really actionable at a given time.

## Some known issues

- The tabs panel animations [don&#8217;t respect the Reduce Motion](https://bugzilla.mozilla.org/show_bug.cgi?id=1180634) setting yet.
- A [color blindness audit](https://bugzilla.mozilla.org/show_bug.cgi?id=1165748) is pending. There are bound to be issues. If you have experience with this and/or are color-blind yourself, feel free to get in touch!

## Where to get it?

Firefox for iOS is freely [available on the iOS App Store](http://itunes.apple.com/app/id989804926). It runs on iOS 8 and later.
