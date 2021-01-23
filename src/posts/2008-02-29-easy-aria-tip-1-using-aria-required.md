---
title: "Easy ARIA Tip #1: Using aria-required"
slug: easy-aria-tip-1-using-aria-required
date_published: 2008-02-29T12:19:30.000Z
date_updated: 2008-02-29T12:19:30.000Z
tags: [aria-required, attributes, HTML]
---

Inspired by a conversation I had with Aaron the other day, I&#8217;m starting a mini series about easy accessibility improvements you can accomplish using ARIA, but which do not require you to implement a whole widget. Some ARIA attributes also work on plain old standard HTML elements and can easily improve accessibility within supported browsers and screen readers. On browsers that do not support these attributes (yet), they are ignored and do not break your page just because that attribute is there.

The first attribute I&#8217;d like to cover is called aria-required. It is one of the universal aria attributes, which means, as stated, that it can be used on any conventional HTML element such as input or select.

Let&#8217;s look at this sample excerpt:
`

First name:

Last name:

Street address:
`

In this excerpt, both the firstName and lastName input elements have the aria-required attribute set. Note that in normal scenarios, you&#8217;d also stype them or their label differently, or put an asterisk &#8220;*&#8221; after the label.

However, if you cannot or do not want to put an asterisk on the label, but only style it with bold text or the like, screen readers usually cannot pick up the information automatically that this is a required field. If you use the aria-required attribute as shown above, modern screen readers will indicate that this is a required field automatically, if used together with Firefox 3.

Screen readers that already support this feature are NVDA, JAWS 9.0, and Window-Eyes 5.5 or higher. JAWS 8 does not support this attribute yet. Also, ORCA does not seem to pick this attribute up yet, at least my testing showed that Orca did not indicate the required state to me when tabbing through that form.

On the browser side, Opera 9.5 is going to include ARIA support, so this technique is not limited to Firefox. Also, as this technology spreads, more browsers will pick up on it, and your sites will automatically be compatible and more accessible once these other browsers also support ARIA.

This is the first of a couple of examples that demonstrates how easily you can use ARIA without implementing a whole widget to improve accessibility on your web sites. Start using it today, and you&#8217;ll make sure that you help insure good accessibility for people using modern browsers and screen readers!
