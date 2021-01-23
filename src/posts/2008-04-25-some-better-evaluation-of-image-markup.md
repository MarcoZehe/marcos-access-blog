---
title: Some better evaluation of image markup
slug: some-better-evaluation-of-image-markup
date_published: 2008-04-25T09:43:52.000Z
date_updated: 2008-04-25T09:43:52.000Z
tags: [AltAttribute, ImgTag, TitleAttribute]
---

Thursday&#8217;s nightly build of Firefox 3 contained a change that will give more useful information on certain pages where attributes for image tags have been used in some funny way. There are sometimes sites where the web author supplies an `alt` attribute with an empty string `""`, and in addition supplies a title with useful data.

As per agreement among ATs and browser vendors, images that have an `alt` attribute with an empty string should be considered decorative images. However, if a `title` attribute is specified as well, we now assume that the author means to supply some useful information, and will expose the title as the accessible name for such images.

JAWS and Window-Eyes have applied such magic for quite some time already, and now Firefox supports this method for all who care to use it.

Also, this change restores the fact that, if no `alt` attribute is specified at all, and no `title` is present, either, we return a NULL pointer instead of an empty string. This will allow ATs to differenciate between &#8220;no alt&#8221; and &#8220;alt is empty&#8221;.
