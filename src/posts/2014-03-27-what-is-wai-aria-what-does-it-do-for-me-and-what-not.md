---
title: What is WAI-ARIA, what does it do for me, and what not?
slug: what-is-wai-aria-what-does-it-do-for-me-and-what-not
date_published: 2014-03-27T14:47:21.000Z
date_updated: 2014-03-27T14:47:21.000Z
tags: [WAI-ARIA]
---

On March 20, 2014, the [W3C finally published](http://www.w3.org/blog/2014/03/wai-aria-expands-web-accessibility/) the WAI-ARIA standard version 1.0. After many years of development, refinement and testing, it is now a web standard.

But I am often asked again and again: What is it exactly? What can it do for me as a web developer? And what can it not do?

I often find that there are assumptions made about WAI-ARIA that are not correct, and the use of it with such wrong assumptions often lead to sites that are less accessible than when ARIA is not being used at all.

In addition, Jared W Smith of WebAIM just yesterday wrote a very good blog post titled [Accessibility Lipstick on a Usability Pig](http://webaim.org/blog/accessibility-lipstick-on-a-usability-pig/), highlighting another related problem: Even though a website may suck usability-wise, pouring WAI-ARIA sugar on it somehow forces it into compliance, but it still sucks big time.

So with all these combined, and after receiving encouragement by Jason Kiss on Twitter, I decided to write this post about what WAI-ARIA is, what it can do for you as a web developer, and what it cannot do. Or rather: When should you use it, and more importantly, when not.

I realize such articles have been written before, and these facts have also all been stressed time and again in talks by various good people in the field of web accessibility. But it is such an important topic that it is finally time for this blog to have such an all-encompassing article as well.

So without further due, let&#8217;s jump in!

### What is it?

WAI-ARIA stands for &#8220;Web Accessibility Initiative &#8211; Accessible Rich Internet Applications&#8221;. It is a set of attributes to help enhance the semantics of a web site or web application to help assistive technologies, such as screen readers for the blind, make sense of certain things that are not native to HTML. The information exposed can range from something as simple as telling a screen reader that activating a link or button just showed or hid more items, to widgets as complex as whole menu systems or hierarchical tree views.

This is achieved by applying roles and state attributes to HTML 4.01 or later markup that has no bearing on layout or browser functionality, but provides additional information for assistive technologies.

One corner stone of WAI-ARIA is the [role attribute](http://www.w3.org/TR/wai-aria/roles). It tells the browser to tell the assistive technology that the HTML element used is not actually what the element name suggests, but something else. While it originally is only a div element, this div element may be the container to a list of [auto-complete items,](http://www.marcozehe.de/2014/03/11/easy-aria-tip-7-use-listbox-and-option-roles-when-constructing-autocomplete-lists/) in which case a role of &#8220;listbox&#8221; would be appropriate to use. Likewise, another div that is a child of that container div, and which contains a single option item, should then get a role of &#8220;option&#8221;. Two divs, but through the roles, totally different meaning. The roles are modeled after commonly used desktop application counterparts.

An exception to this are document landmark roles, which don&#8217;t change the actual meaning of the element in question, but provide information about this particular place in a document. You can read more about landmarks in my [WAI-ARIA tip #4](http://www.marcozehe.de/2009/10/31/easy-aria-tip-4-landmarks/). Also, if you&#8217;re using HTML5, there are equivalent elements you might want to use as well.

The second corner stone are WAI-ARIA [states and properties.](http://www.w3.org/TR/wai-aria/usage#introstates) They define the state of certain native or WAI-ARIA elements such as if something is collapsed or expanded, a form element is required, something has a popup menu attached to it or the like. These are often dynamic and change their values throughout the lifecycle of a web application, and are usually manipulated via JavaScript.

### What is it not?

WAI-ARIA is not intended to influence browser behavior. Unlike a real button element, for example, a div which you pour the role of &#8220;button&#8221; onto does not give you keyboard focusability, an automatic click handler when Space or Enter are being pressed on it, and other properties that are indiginous to a button. The browser itself does not know that a div with role of &#8220;button&#8221; is a button, only its accessibility API portion does.

As a consequence, this means that you absolutely have to implement keyboard navigation, focusability and other behavioural patterns known from desktop applications yourself. A good example can be read about in my [Advanced ARIA tip about tabs](http://www.marcozehe.de/2013/02/02/advanced-aria-tip-1-tabs-in-web-apps/), where I clearly define the need to add expected keyboard behavior.

### When should I **not** use it?

Yes, that&#8217;s correct, this section comes first! Because the first rule of using WAI-ARIA is: **Don&#8217;t use it unless you absolutely have to!** The less WAI-ARIA you have, and the more you can count on using native HTML widgets, the better! There are some more rules to follow, you can [check them out here](http://rawgithub.com/w3c/aria-in-html/master/index.html#notes-on-aria-use-in-html).

I already mentioned the example with buttons versus clickable divs and spans with a role of &#8220;button&#8221;. This theme continues throughout native roles vs. ARIA roles and also extends to states and properties. An HTML5 required attribute has an automatic evaluation attached to it that you have to do manually if you&#8217;re using aria-required. The HTML5 invalid attribute, combined with the pattern attribute or an appropriate input type attribute will give you entry verification by the browser, and the browser will adjust the attribute for you. All of these things have to be done manually if you were using aria-invalid only. A full example on the different [techniques for form validation](http://www.marcozehe.de/2011/12/05/from-wai-aria-to-html5-and-back-or-maybe-not/) can be found in a blog post I wrote after giving a talk on the subject in 2011.

Fortunately, this message seems to finally take hold even with big companies. For example, the newest version of Google Maps is using button elements where they used to use clickable divs and spans. Thanks to Chris Heilmann for finding this and pointing it out during an [accessibility panel at Edge Conf](https://www.youtube.com/watch?v=4gr9rG5rf4w) (link to Youtube video) in March 2014!

Here&#8217;s a quick list of widget roles that have equivalents in HTML where the HTML element should be preferred whenever possible:
WAI-ARIA roleNative elementNotesbuttonbuttonuse type=&#8221;button&#8221; if it should not act as a submit buttoncheckboxinput type=&#8221;checkbox&#8221;&#8211;radiogroup and radiofieldset/legend and input type=&#8221;radio&#8221;fieldset is the container, legend the prompt for which the radio buttons are the answer for, and the input with type of &#8220;radio&#8221; are the actual radio buttonscomboboxselect size=&#8221;1&#8243;Only exception is if you need to create a very rich compound widget. But even then, combobox is a real mess which warrants its own blog post.listboxselect with a size greater than 1Only exception is if you create a rich auto/complete widgetoptionoptionAs children of select elements or combobox or listbox role elementslistul or olNot to be confused with listbox! list is a non-interactive list such as an unordered or ordered list. Those should **always** be preferred. Screen readers generally also supporting nesting them and get the level right automatically.spinbuttoninput type=&#8221;number&#8221;If the browser supports it.linka with href attributeShould, in my humble opinion, never ever ever be used in an HTML document!formformNobody I know from the accessibility community can actually explain to me why this one is even in the spec. I suspect it has to do primarily with SVG, and maybe EPUB.
The reason all these roles to native elements mappings are in there at all are because of the fact that WAI-ARIA can also be applied to other markup such as EPUB 3 and SVG 2. Also, some elements such as spin buttons and others are new in HTML5, but because WAI-ARIA was originally meant to complement HTML 4.01 and XHTML 1.x, and HTML5 was developed in parallel, roles, states and properties were bound to overlap, but got more defined behaviors in browsers for HTML5.

Likewise, you should prefer states such as disabled and required over the WAI-ARIA equivalents aria-disabled and aria-required if you&#8217;re writing HTML5. If you write HTML 4.01 still, this rule does not apply. If you&#8217;re specifically targetting HTML5, though, there is not really a need for the aria-required, aria-disabled and aria-invalid states, since the browsers take care of that for you. And yes, I know that I am in disagreement with some other accessibility experts, who advise to use both the HTML5 and WAI-ARIA attributes in parallel. Problem with that is, in my opinion, that it is then extra work to keep the WAI-ARIA attributes in sync. Especially with the aria-invalid attribute, this means that you&#8217;ll still have to put in some JavaScript that responds to the state of the HTML5 form validation state.

#### Why this duplication? Why can&#8217;t the browser just also react to the WAI-ARIA attributes as it does to the HTML ones?

This is a question I am getting a lot. The simple answer is: Because WAI-ARIA was never meant to change browser behavior, only expose extra information to assistive technologies. The more complex answer is: WAI-ARIA can be applied to XHTML 1.0 and 1.1, HTML 4.01, and HTML5. The HTML5 attributes can only be applied to HTML5 capable browsers, including mobile, but will give you all kinds of extra features defined in the standard for these attributes. If the WAI-ARIA attributes were suddenly made to influence actual browser behavior, the level of inconsistency would be enormous. To keep WAI-ARIA clean and on a single purpose, it was therefore decided to not make WAI-ARIA attributes influence browser behavior ever.

### When **should** I use it?

Whenever you create a widget that is not indiginous to your host language, e. g. HTML. Examples of such widgets include:

- tree with treeview children: When creating something the user should be navigating in a hierarchical fashion. Examples can be seen in the folder tree in Windows Explorer or the list of topics and books in the Windows HTML help viewer.
- menu with menuitem, menuitemcheckbox, and menuitemradio children: A real menu system as can be seen in Windows or OS X apps.
- grid or treegrid, with gridrow, columnheader, rowheader, and gridcell children: An editable grid similar to a spreadsheet. Not to be confused with data tables which use native HTML table, tr, th, and td elements with proper scope and other attributes.
- toolbar container with actual buttons or other interactive elements as children.
- dialog as container for a message or input prompt that needs to be acknowledged or dismissed in a modal fashion, e. g. no other part of the web page or app can be interacted with at the moment. The role alertdialog is related, although I recommend not using it since its support is inconsistent.
- application, in which you control every single focus and keyboard interaction. For a detailed discussion, see my [article on the use of the application role](http://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/).

In all of the above cases, it is your responsibility to:

1. Familiarize yourself with the expected user interaction with both mouse and keyboard.
2. Make sure all elements can be reached via the tab key, and that focus is always visible. Use the tabindex with a value of 0 to put stuff in the tab order at their natural position within the document.
3. Make sure some items are not necessarily reachable via the tab key. For example in a tool bar, items should be navigated via left and right arrows, and tab should jump straight to the next container (tool bar or other compound widget), and Escape should return to the main application area. Likewise, a tab list should be navigated with left and right arrows, too, and tab itself should jump into the tab panel that is active.
4. You manage focus appropriate to the type of widget you are in. For example, when opening a dialog (role &#8220;dialog&#8221;), it is your responsibility to set keyboard focus to it or its first focusable child element, and to manage modality, meaning you must make sure tab does not wander outside the confines of the dialog as long as it is open. Escape should generally cancel, and a dedicated OK/Accept/Save button should close with changing. Make sure once you&#8217;re done with a dialog, you return focus to a defined position in your application/document, like the button that opened the dialog in the first place, or keyboard and screen reader users might get lost.

If you do not adhere to the common interaction patterns associated with certain of these roles, your WAI-ARIA sugar might very quickly turn into sour milk for users, because they get frustrated when their expected keyboard interaction patterns don&#8217;t work. I strongly recommend studying the [WAI-ARIA 1.0 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/) and keeping them handy for reference because they provide a comprehensive list of attributes and roles associated to one another, as well as more tips on many of the things I just mentioned. Another very good resource is the afore mentioned [Using WAI-ARIA in HTML](http://rawgithub.com/w3c/aria-in-html/master/index.html) document which provides an extensive technical, yet easy to understand, reference to best practices on how to apply WAI-ARIA code, and also, when not to do it.

### Closing remarks

I realize that to someone just getting started with web accessibility, these topics may seem daunting. However, please remember that, like learning HTML, CSS and JavaScript, learning the intricacies of web accessibility means you&#8217;re learning a new skill. The more often you use these techniques, the more they become second nature. So don&#8217;t be discouraged if you at first feel overwhelmed! Don&#8217;t be shy to ask questions, or pull in people for testing! The accessibility community is generally a very friendly and helpful bunch.

One thing that may also help with motivation, and it&#8217;s been thankfully mentioned more and more often: Accessibility and usability go hand in hand. The more you improve the usability, the more it gets you there in terms of accessibility, too. And first and foremost, it&#8217;s about people! Not about some WCAG technique, not about a law that needs to be fulfilled, but about people actually using your web site or web application. Fulfilling legal requirements and WCAG techniques then come naturally.

So: Make WAI-ARIA one of your tools in your arsenal of tools for web development, but take its first rule to heart: Don&#8217;t use it unless you absolutely have to. Get the usability right for keyboard users, make sure stuff is properly visible to everyone even when they&#8217;re standing outside with the sun shining down on their shiny mobile phones or tablets (thanks to Eric Eggert for that tip!), and use WAI-ARIA where necessary to provide the extra semantic screen readers need to also make sense of the interactions. With people in mind first, you should be good to go!

Happy coding!
