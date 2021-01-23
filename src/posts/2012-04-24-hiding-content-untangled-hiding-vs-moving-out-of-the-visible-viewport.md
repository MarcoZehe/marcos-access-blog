---
title: "Hiding content untangled: Hiding vs. moving out of the visible viewport"
slug: hiding-content-untangled-hiding-vs-moving-out-of-the-visible-viewport
date_published: 2012-04-24T15:28:17.000Z
date_updated: 2012-04-24T15:28:17.000Z
tags: [CSS, DisplayNone, HidingContent, NegativePositioning]
---

This blog post is once again prompted by something I encountered in the wild. The other day, I was testing [browserid.org](http://browserid.org)&#8216;s account manager for accessibility and encountered some inconsistencies in keyboard navigation and screen reader usage. For one, there are &#8220;edit&#8221; buttons next to the &#8220;Your E-Mail addresses&#8221; and &#8220;Password&#8221; headings whose usability wasn&#8217;t obvious to me. To my screen reader, the &#8220;remove&#8221; buttons next to the e-mail addresses linked to my account, as well as the two password entry fields, were visible without me having to actually press these &#8220;edit&#8221; buttons at all. I could perform all actions without a hitch, so these buttons seemed superfluous and just adding noise. Secondly, even when just navigating through the page via the tab key, I couldn&#8217;t find anything that these &#8220;edit&#8221; buttons could be used for.

The solution came to me when I asked my significant other, who is sighted, to look at the page with me. For her, the &#8220;remove&#8221; buttons and password entry fields were not visible on initial page load. When I started navigating the page with NVDA&#8217;s virtual cursor, the buttons magically appeared. When I moved in the opposite direction, they disappeared again. When I navigated via tab, they appeared and remained visible from then on.

The problem here was that the content &#8220;hiding&#8221; was done in a way that visually hides the content from the naked eye, but not from my screen reader. Furthermore, the fact that this page has different interaction models for keyboard and mouse users was not taken into account. In short: a wrong technique was used to hide the content.

This blog post is an attempt at explaining the different &#8220;hiding&#8221; models as well as trying to get rid of some of the misunderstandings and misconceptions I&#8217;ve encountered over and over over the past ~10 years.

### Some basics

To understand what&#8217;s happening, you need to know (or remember) this: Screen readers as well as other assistive technologies for people with disabilities use a collection of objects to convey information about the web page to the user. These objects are structured in a tree-like structure, with the document being the root, the navigation area, headings, sections etc. being this root&#8217;s children and so forth. Accessibility techies call this the &#8220;accessible tree&#8221;. It is a sub set of the tree built from the HTML source code in the browser&#8217;s document object model (DOM). Not all elements need a representation in the accessibility tree, so the mapping isn&#8217;t always 1:1.

The rendering engine, in Firefox&#8217;s case Gecko, applies several attributes to these accessible objects that relay important information to the user with disability. For this information, the engine does not only use attributes supplied by the individual HTML tags, but also some styling information from the CSS. An example of this CSS-based information is that about text styling and attributes, colors etc.

Some information, however, is **not** used, like the final position of a container via CSS. A div container may, for example, be shown in the upper right-hand corner of the site, right next to the navigation bar, but its code may be somewhere at the end of the source file. The screen reader will find the text in that container near the end of the accessible tree, not right next to the navigation, because the styling information for this position is not used. If you&#8217;d like to know more about this, read [this article of mine](http://www.marcozehe.de/2009/10/07/the-importance-of-placement-of-html-tags-in-a-document/).

### Hiding is not equal to hiding

Some CSS statements, however, are being followed to the letter. In IE, the screen reader does it, in Firefox, the Gecko engine does it for the screen reader, and has being doing so for over ten years now. Elements styled with &#8220;display: none;&#8221; or &#8220;visibility: hidden;&#8221; are **not included** in the accessibility tree! Only if that element&#8217;s styling is changed via JavaScript or similar to make it visible, it is being inserted into the accessible tree, and an event is being emitted to let the screen reader know that this insertion just occurred.

Other statements for &#8220;hiding&#8221; like &#8220;left: -9999px; top: -9999px;&#8221; are not being used. These elements appear to the screen reader just as any other currently visually visible element on the screen is.

Once again so this sinks in: Elements styled with &#8220;display: none;&#8221; or &#8220;visibility: hidden;&#8221; are **always hidden** from screen readers as well. This is true for screen readers on Windows like NVDA or JAWS, and has been so for at least the last ~7 years. Orca on Linux, VoiceOver on OS X and iOS also adhere to this rule. JAWS has consistently supported this since version 7, which was released in 2005. All other screen readers I know do this right, too, and have been for ages. Why this rumor that one can provide extra content to screen readers via elements styled with &#8220;display: none;&#8221; keeps sticking around, I have no clue. It is definitely **wrong**! Screen readers completely ignore elements styled with &#8220;display: none;&#8221; or &#8220;visibility: hidden;&#8221;.

### So when do I use what?

If an element or group of elements should only become visible after the user performed a conscious action, use &#8220;display: none;&#8221; or &#8220;visibility: hidden;&#8221;, depending on your requirements. A good example of this can be seen by many bloggers each time they&#8217;re in their WordPress 3.3 backend. The main menu items like &#8220;Dashboard&#8221;, &#8220;Article&#8221;, etc., have menu items hidden that only become visible if a) one hovers the mouse over them or b) one navigates there via tab and presses enter. Some magic is performed, and the &#8220;display: none;&#8221; styling is removed, and the elements become visible. In addition, WordPress correctly uses the WAI-ARIA attribute *aria-haspopup=&#8221;true&#8221;* on these menu items to indicate that there are items that become visible once a particular action is performed.

Had the WordPress folks used a technique to merely remove the elements from the visible view port, my screen reader would see all sub menu elements of all categories. My user interface would be much more cluttered than that of sighted people. All advantages of a lean and mean interface would be gone. And yes, I, too, enjoy the niceties of a clean interface where I can show and hide the stuff I need to work with or not. If, like in the WordPress case, the correct markup is being used, I do not need to see **all** content immediately to know that it may be there if I need it. On the contrary, if it were all shown, my interface would be cluttered and difficult to navigate, too!

The wrong method to use is the one I explained at the beginning of this article. The &#8220;remove&#8221; buttons and password entry fields of the BrowserID account manager were merely moved out of the visible view port rather than completely hidden.

Another useful application of content moved out of the view port are &#8220;skip&#8221; links. WebAIM have an [article on these](http://webaim.org/techniques/skipnav/) if you want to dive into this matter further.

### In conclusion

It is my sincere hope that this blog post helps to clear up some confusion about the types of &#8220;hidden&#8221; content, the effects &#8220;display: none;&#8221; vs. negative positioning has, and when to use what properly. A good rule of thumb might be: If something should remain hidden until the user performs a conscious action, use &#8220;display: none;&#8221;. Should something, on the other hand, become visible when navigated to via the keyboard, or be discoverable by screen reader users right away, use negative positioning.

Questions? I&#8217;m sure there are! So feel free to post them here! And don&#8217;t be shy. Only who asks no questions will remain in the dark. 🙂
