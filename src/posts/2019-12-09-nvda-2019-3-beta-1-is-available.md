---
title: NVDA 2019.3 Beta 1 is available
slug: nvda-2019-3-beta-1-is-available
date_published: 2019-12-09T13:00:00.000Z
date_updated: 2019-12-09T13:00:00.000Z
tags: [NVDASR]
---

NVDA 2019.3 beta 1 has been [released today](https://www.nvaccess.org/post/nvda-2019-3beta1-now-available-for-testing/). It is a huge milestone in the history of this free and open-source screen reader.

With this release, there are a ton of under the hood changes that have all kinds of far reaching consequences. The most significant are the move to Python 3 from the Python 2 programming language, which is being discontinued and all support is ending. The second is a major refactor and enhancement to the way speech synthesizer engines work.

The switch to Python 3 means that a lot of add-ons also need updating to be compatible with the new programming language and interfaces in NVDA. The same is true for all external speech synthesizer drivers. Many add-ons are already available in an updated form. But some prominent ones, like the NVDA Remote add-on, still need to be made compatible. [This page tracks the progress](https://addons.nvda-project.org/addons/nvdapy3.en.html) on this path and always has the most up-to-date information.

Among the many new features are a whole new synthesizer driving engine, which allows a whole wealth of new features going forward. Sounds, other speech annotations, will all be made possible by this new engine.

Another new feature is a vision framework. The first two features of that are a screen curtain, which you can assign a gesture to to make it a toggle from the keyboard. You can also configure it to either stay on across NVDA restarts or be turned off when NVDA next restarts. Another feature is a focus highlight. But not only that, the position of the NVDA object navigator and the browse mode reading cursor can also be highlighted visually.

There are quite a number of enhancements to braille support as well. Better tracking in Excel, an updated LibLouis that will enhance braille output in various languages, and better handling of Unicode and Emoji characters. Also, in Word, there are many enhancements and bug fixes when using it in UI Automation mode.

Another area that also received quite some enhancements is web support in modern browsers such as Firefox, Chrome, and Chromium-based Microsoft Edge. Articles can now be navigated. There is no gesture assigned by default, but the quick navigation scripts are now there. Also, groups and figures are now labeled, and if they have descriptions, these will also now be read in browse mode. This means that, for example, [this portion of the Mozilla 2019 Internet Health Report](https://internethealthreport.org/2019/ransomware-payments-add-up/) is much more accessible. The team very carefully described the visualizations that illustrate the text. These descriptions are now read by NVDA.

Among the many many bug fixes are also some pertaining to Firefox. One is that a workaround for a focusing problem is no longer needed due to changes in Firefox 70 and beyond. In addition, when using quick navigation keys, NVDA had the tendency to read some things wrong previously. This was also a fix already included in the 2019.2.1 update, but alongside the earlier mentioned fix, adds to a much more pleasant browsing experience in Firefox.

If you want to deep-dive into the new features, changes and bug fixes, take a look at the [What&#8217;s New in 2019.3 file](https://ci.appveyor.com/api/buildjobs/ra7vb4b94dlutb9l/artifacts/output/nvda_2019.3beta1_changes.html). And if you&#8217;d like to try it out, [download the beta](https://ci.appveyor.com/api/buildjobs/ra7vb4b94dlutb9l/artifacts/output/nvda_2019.3beta1.exe).

I have been using the alpha versions of 2019.3 for a few months now and am really excited about these changes and what lies ahead in NVDA&#8217;s future versions. This beta cycle will probably be longer than previous ones, no less because more add-ons are hoped to be compatible upon release of the final 2019.3 version. That will, according to the news post linked to at the top of this article, hopefully happen in very early 2020.

Have fun testing! 🙂
