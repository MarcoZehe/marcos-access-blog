---
title: Apple's iOS 4 supports WAI-ARIA landmarks
slug: apples-ios-4-supports-wai-aria-landmarks
date_published: 2010-06-22T08:26:33.000Z
date_updated: 2010-06-22T08:26:33.000Z
tags: [iOS4, VoiceOver, WAI-ARIA]
---

This is, I believe, my 100th post on this blog, and I&#8217;m using it to announce that Apple&#8217;s iOS 4, released yesterday for the iPhone and iPod Touch, supports WAI-ARIA landmark in the VoiceOver screen reader. VoiceOver has had, since its inception, a feature called the rotor. The rotor allows users to set a particula rweb element by which the one-finger-flick up and down gesture moves in mobile Safari and other apps that use a web display. This feature is now highly customizable. Not only can you enable and disable certain features (for example if you never want to navigate by graphics, you can disable it completely and it won&#8217;t show up in the rotor). But the rotor settings also include a new feature called landmarks. This rotor setting is disabled by default, but can be enabled through the Web settings sub window of the VoiceOver settings. Once enabled, and the user switches to it via the rotor gesture, navigating by WAI-ARIA landmarks on a page works very nicely. The one thing that VoiceOver does not do yet is announce the type of landmark, be it banner, main, search, complementary etc. Furthermore, the landmarks also include what is called automatic web spots in the VoiceOver on Snow Leopard for the Mac. So not only do you jump to the actually marked up landmarks, but a few more spots on a page Apple deems interesting. In my experience, these usually are quite useful spots, too, so this doesn&#8217;t harm the original landmark feature at all.

It is fantastic to see that WAI-ARIA is getting more and more adoption in mainstream products. VoiceOver is available on any iPhone 3G S and iPhone 4, as well as the newest generation iPod Touch models (32 and 64 GB), and the iPad. The iPad does not include the landmarks feature yet, since its iOS hasn&#8217;t been updated to version 4 yet.

### Further reading

[Easy WAI-ARIA tip #4: Landmarks](http://www.marcozehe.de/2009/10/31/easy-aria-tip-4-landmarks/)
