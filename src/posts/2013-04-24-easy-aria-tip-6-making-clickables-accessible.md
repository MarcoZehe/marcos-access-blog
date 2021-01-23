---
title: "Easy ARIA Tip #6: Making clickables accessible"
slug: easy-aria-tip-6-making-clickables-accessible
date_published: 2013-04-24T12:48:59.000Z
date_updated: 2013-04-24T12:48:59.000Z
tags: [aria-label, button, tabindex, WAI-ARIA]
---

It often happens that designers and web developers agree on the fact that they do not like the standard buttons or the styling capabilities of buttons in browsers. To work around this, they then resort to what&#8217;s called clickable text. It is in many cases a simple span or div element with some funky styling that makes it look like a button with some fancy twists. A JavaScript click handler then does the magic behind the scenes that happens if the user clicks on that particular styled text with the mouse.

Semantically, these styled text bits are totally meaningless to screen readers. The screen reader may or may not recognize that the text is clickable, but it can neither be tabbed to, nor is it known if this is a button, checkbox without a state that&#8217;s obvious, etc., etc.

Keyboard users also suffer from these, since these text bits are not tabable. Just adding an onclick handler does not automatically make these things focusable using the tab key.

Fortunately, there is WAI-ARIA. And with some simple additions to your markup, you can make these accessible and still profit from the fancy styling capabilities you get from using spans or divs instead of semantically correct buttons. Here&#8217;s the recipe:

### Make it focusable

To do this, simply add the *`tabindex="0"`* bit to the span or div. Giving tabindex a value of 0 makes sure it fits into your tab order in the logical flow of your HTML code.

### Make it a button

WAI-ARIA gives us the ability to tell assistive technologies such as screen readers for the blind that a certain element, or set of elements, actually means something that is not immediately obvious from the markup itself. In our case, even though the styling makes the span visually look like a button, the screen reader is not able to deduce that from the HTML and CSS instructions. To help it, you add *`role="button"`* to the element that receives the click. Ideally, this is the same that also already received the tabindex attribute above.

### If it&#8217;s a graphic instead of text, also give it a label

Sometimes, you may end up with a clickable image instead of text. That&#8217;s fine, and both above parts of the recipe still apply, but in this case, and to be platform-independent, you should add *`aria-label="My button label"`* to the item. You can also do this with spans containing text if you want to be absolutely sure the screen reader speaks the right thing. aria-label takes a literal, and localizable, string as its value and translates that into the spoken label. Yes, for graphics, this even overrides the use of the alt attribute, if specified. And because some browser/screen reader combox like Safari and VoiceOver on the Mac have some problems with the alt attribute on occasion, aria-label puts you on the safe side.

### Make Space and Enter activate the click handler

Yes, because this is no button in the original semantic sense, and browsers do not take into account WAI-ARIA markup except for when mapping stuff to the assistive technology APIs, you have to add a keypress handler that makes space and enter activate the onclick handler. In the regular desktop UI of most, if not all operating system, space is used to activate buttons, and enter is used to activate the default button of a dialog. But since in most cases we are not dealing with something that might have a default button except when it&#8217;s the submit button of a form, using enter in addition to space is OK here.

And that&#8217;s all there is to it! You need nothing more than that to make your fancy looking clickable buttons accessible on the basic level. Of course, if your button is a toggle and expands and collapses something, you may want to consider adding aria-expanded, as described in [Easy ARIA Tip #5](http://www.marcozehe.de/2010/02/10/easy-aria-tip-5-aria-expanded-and-aria-controls/).

### What about checkable clickables?

With a few tweaks, this will get you going as well:

- Instead of &#8220;button&#8221;, use &#8220;checkbox&#8221; as the role, or &#8220;radiobutton&#8221;, if only one should be checked at a given time.
- use *aria-checked* with a value of &#8220;true&#8221; for checked or &#8220;false&#8221; for non/checked items. In the same routine where you swap out the images to indicate the different states, also change the attribute or attributes accordingly. Make sure the attributes are never undefined, so are always either checked or not.
- If dealing with radio buttons, enhance the onkeypress handler that reacts to the space bar and add support for arrows up and down to change focus to the next or previous radio buttons respectively. Tab should immediately jump to the next non-radio button outside that group of radio buttons.

These techniques can be used on both desktop and mobile. On mobile, you may want to react to touch events instead of click events, but I am sure you are already aware of that. 🙂
