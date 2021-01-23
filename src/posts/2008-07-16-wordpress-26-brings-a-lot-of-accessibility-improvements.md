---
title: WordPress 2.6 brings a lot of accessibility improvements!
slug: wordpress-26-brings-a-lot-of-accessibility-improvements
date_published: 2008-07-16T08:06:46.000Z
date_updated: 2008-07-16T08:06:46.000Z
tags: [NVDA]
---

I just upgraded this blog to [WordPress 2.6](http://wordpress.org/development/2008/07/wordpress-26-tyner/).

This version brings with it a number of accessibility enhancements.

One thing you might have noticed already is that there is now a default language set. Default English blogs should now always cause screen readers that support language switching to use the English variant of their default speech synthesizer.

Also new: Whereever possible, there are now labels properly associated with the corresponding form controls. This means that now also screen readers that do not do their own HTML processing should pick up the labels fine.

One more addition that the WordPress team has embraced is the inclusion of some WAI-ARIA markup. Whenever you comment on my blog now, and soon hopefully many others, and you use a compatible browser such as Firefox 3, and a compatible screen reader such as NVDA or Orca, you&#8217;ll hear that the text fields also textually marked as &#8220;required&#8221; in their labels, now are announced as &#8220;required&#8221; fields. The WordPress default theme now uses aria-required to denote such fields as required, giving even more accessibility to WordPress!

I&#8217;d like to thank the WordPress community to embrace ARIA! It is really amazing that ARIA is now finding its way into such a widespread mainstream piece of software!
