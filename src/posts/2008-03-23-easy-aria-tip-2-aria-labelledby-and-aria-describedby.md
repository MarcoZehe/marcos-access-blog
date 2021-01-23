---
title: "Easy ARIA tip #2: aria-labelledby and aria-describedby"
slug: easy-aria-tip-2-aria-labelledby-and-aria-describedby
date_published: 2008-03-23T21:29:46.000Z
date_updated: 2008-03-23T21:29:46.000Z
tags: [aria-describedby, aria-labelledby, attribute, HTML]
---

Sorry it took me so long to get back to it, but here it is, my second tip on the usage of some easy ARIA markup to make your sites more accessible.

Imagine this: You have a form where you ask your user a question, but the answer is actually part of the sentence the question is made of. A classic example we all know from our browser settings is the setting &#8220;Delete history after x days&#8221;. &#8220;Delete history after&#8221; is to the left of the textbox, x is the number, for example 21, and the word &#8220;days&#8221; follows the textbox, actually forming a sentence that is easy to understand.

If you&#8217;re using a screen reader, have you noticed that, when you go to this setting in Firefox, it actually tells you &#8220;Delete history after 21 days&#8221;?, followed by the announcement that you&#8217;re in a textbox, and that it contains the number 21. Isn&#8217;t that cool? You do not need to navigate around to find out the unit. &#8220;Days&#8221; could easily be &#8220;months&#8221; or &#8220;years&#8221;, and in many ordinary dialogs, there is no way to find this out other than navigating around with screen reviewing commands.

Well, we have to thank Aaron and all the other great people who invented ARIA, for this capability! The solution is in an ARIA attribute called **aria-labelledby**. Its parameter is a string that consists of the IDs of the HTML or XUL elements you want to concatenate into a single accessible name. Yes, you read right, this not only works in HTML, but in XUL, too!

A second attribute that works very similarly is called **aria-describedby**. It can also take IDs of one or more elements to make up an additional description. In Microsoft Active Accessibility, this is converted into the AccDescription of the element. Some screen readers like NVDA pick this description up and speak it automatically after the name and type of the control, assuming that this information is giving the visually impaired user additional information that a sighted user also gets.

**aria-labelledby** and **aria-describedby** are both specified within the element that is to be labelled, for example an html:input or a xul:textbox. In both cases, the **label for**/**label control** bindings that may also exist, are overridden by **aria-labelledby**. If on an HTML page you provide **aria-labelledby**, you should also provide a **label for** construct to also support older browsers that do not have ARIA support yet. With Firefox 3, your blind users will automatically get the better accessibility of the new attribute, but the users of older browsers are not left in the dark this way.

And here is an example I made up for demonstration purposes:

Shut down computer after
 minutes

Allows you to specify the number of minutes of inactivity after which your computer should shut down.

### A Note for JAWS 8 users

JAWS 8.0 has its own logic to find labels, causing it to always override the accessibleName the textbox of an HTML document gets. With JAWS 8, I have not found a way to get it to accept the label from the example above. But NVDA and Window-Eyes do it just fine, and Orca on Linux also has no problems.

## Previous Easy ARIA tips

1. [aria-required](http://www.marcozehe.de/2008/02/29/easy-aria-tip-1-using-aria-required/)
