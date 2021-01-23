---
title: Quickly check your website for common accessibility problems with tenon.io
slug: quickly-check-your-website-for-common-accessibility-problems-with-tenon-io
date_published: 2015-01-14T20:12:53.000Z
date_updated: 2015-01-14T20:12:53.000Z
tags: [development, Extension, TenonIO]
---

[Tenon.io](http://tenon.io/) is a new tool to test web sites against some of the [Web Content Accessibility Guidelines](http://www.w3.org/TR/WCAG20/) criteria. While this does not guarantee the usability of a web site, it gives you an idea of where you may have some problems. Due to its API, it can be integrated into workflows for test automation and other building steps for web projects.

However, sometimes you&#8217;ll just quickly want to check your web site and get an overview if something you did has the desired effect.

The Tenon team released a first version of a [Chrome extension](https://chrome.google.com/webstore/detail/tenon-check/bmibjbhkgepmnehjfhjaalkikngikhgj) in December. But because there was no equivalent for Firefox, my ambition was piqued, and I set out to build my first ever Firefox extension.

And guess what? It does even a bit more than the Chrome one! In addition to a tool bar button, it gives Firefox users a context menu item for every page type so keyboard users and those using screen readers have equal access to the functionality. The extension grabs the URL of the currently open tab and submits that to Tenon. It opens a new tab where the Tenon page will display the results.

For the technically interested: I used the Node.js implementation of the [Firefox Add-On SDK](https://developer.mozilla.org/en-US/Add-ons/SDK), called [JPM](https://www.npmjs.com/package/jpm), to build the extension. I was heavily inspired by this blog post published in December about [building Firefox extensions the painless way](http://pomax.github.io/#gh-weblog-1418833974687). As I moved along, I wanted to try out [io.js](http://iojs.org), but ran into issues in two modules, so while working on the extension, I contributed bug reports to both [JPM](https://github.com/mozilla/jpm/issues/243) and [jszip](https://github.com/Stuk/jszip/issues/197). Did I ever mention that I love working in open source? 😉

So without further due: [Here&#8217;s the Firefox extension](https://addons.mozilla.org/addon/tenon-check/)! And if you like it, a positive review is certainly appreciated!

Oh, and if you&#8217;re into WordPres development or have often-changing content on your WordPress site, I highly recommend you check out [Access Monitor](https://github.com/joedolson/access-monitor), a WP plugin that integrates with tenon.io, written by Mr. [Joe &#8220;WordPress Accessibility&#8221; Dolson](http://joedolson.com)!

Have fun!
