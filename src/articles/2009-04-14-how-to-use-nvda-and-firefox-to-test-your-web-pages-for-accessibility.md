---
title: How to use NVDA and Firefox to test your web pages for accessibility
slug: how-to-use-nvda-and-firefox-to-test-your-web-pages-for-accessibility
date_published: 2009-04-14T09:50:14.000Z
date_updated: 2020-05-29T11:59:10.000Z
---

This article aims to provide a guide to testing your web sites or web applications using both NVDA and Firefox. These are  some of the tools available to visually impaired users who will benefit from your sites being accessible. While there are many tools available to check whether your pages are semantically correct, it is always helpful to also use a real screen reader to hear what your pages would sound like to a blind visitor.

[NVDA (Non-visual Desktop Access)](http://www.nvda-project.org) is a free and open-source screen reader for the Microsoft Windows operating system. Unlike its commercial counterparts, which have to be purchased to be legally used for testing web sites, NVDA does not cost you any money. Moreover, it is light-weight yet powerful, and can be installed on both physical as well as virtual desktops. Your system won’t be impaired by it, no video drivers will be installed. If you like, you can even put the portable version onto a USB thumb drive and run NVDA from there, requiring no installation at all.

## How to get NVDA

NVDA can be downloaded from the [project’s homepage](http://www.nvda-project.org). Generally, you have two options:

- Download the release version, which at the time of this writing is 2020.1. This is a stable release which is suitable for most tasks. However it may not contain the latest updates.
- Download a current development snapshot. This may be a bit more unstable, or features may be in flux or temporarily unavailable, but those features that are available are the latest cutting edge. For example, if you want or need to test your web sites with beta or nightly versions of Firefox, Chrome, or Chromium-based Microsoft Edge, the alpha releases may contain support for new features not yet available in the release version. A note on Internet Explorer, if you still need to support that: please be aware of [some limitations](http://www.marcozehe.de/2009/03/31/updated-aria-spiced-form-example-to-work-in-ie-8/) when testing Accessible Rich Internet Applications (WAI-ARIA) enabled web apps with IE. Also, NVDA’s support for IE dynamic updates and ARIA support are less in demand nowadays, so support may not be as good in general. Since everyone is moving away from IE thankfully, and Microsoft themselves are encouraging everybody to upgrade to Chromium-based Edge, it is best to test your development in one of these modern browsers.

Once downloaded, install it, or put the portable version on a suitable USB thumb drive and insert it.

## First start

Starting NVDA is easy. The installer offers to run it right after it finishes. Running it from the USB drive is as easy as opening it in Explorer and double clicking the NVDA executable.

On first start, a quick start guide will appear. I encourage you to at least browse it. You can then choose to disable this dialog and click OK. Now, NVDA will sit in your system tray, talking to you through your sound card.

## Visual speech output

NVDA offers a handy feature for those who cannot, or do not want to, get used to the default voice that ships with it. It comes with a synthesizer that instead of speaking, outputs what it would say into a small window on your screen. To turn this on:

1. Right-click the NVDA icon in your system tray.
2. Select Preferences -> Settings -> Synthesizer.
3. Click on the "Change" Button next to the displayed current synthesizer.
4. From the drop down, select the *Display* synthesizer.
5. Click OK twice.
6. If you want to save your changes to make them permanent, right-click the NVDA icon again and select “Save settings”.

## Opening your first web site and looking at it with NVDA

Now, it is time to start Firefox and open a web page to make sure you get the proper output.

Once the page loads, NVDA should automatically announce the title. Now, it is time to familiarize yourself with the [virtual buffer concept](http://www.nvda-project.org/blog/Virtual_buffer_Library_code_started) common to all Windows screen readers on the market. In a nutshell, what happens is that NVDA takes the HTML of the page and converts it into a flat document with semantic information. Links, headings, form fields, images and other information is being spoken along with the actual text of the page. It is done in the order the HTML appears in the source that Firefox just loaded.

This so-called virtual document is what NVDA presents to you by default. You can use the arrow keys to navigate the document by character or line, and with the Ctrl key added, also by word or paragraph. You can even select text using Shift plus arrow keys and copy that selected text to the clipboard. Note, however, that there is no visual indication that you have selected the text.

In this mode, NVDA has full control over the keyboard. No key you press will be forwarded to the browser.

If you encounter an interactive control such as a textbox, combobox or listbox, you can switch to what NVDA calls Focus Mode, in which the virtual buffer reading mode is stopped and focus is set to the control at hand, ready for you to interact with it using the keyboard, as if NVDA was not running at all. You invoke focus mode by pressing Enter when the virtual caret is on the relevant field. Using Escape, you switch back to reading inside the virtual document. If you navigate the page with the Tab key, focus mode will automatically be switched on and off for you. NVDA plays a typing sound when focus mode is turned on, and a low beep when it is turned off.

As you navigate the virtual document, NVDA will update the real browser focus to each focusable element as you hit it with the virtual caret. You will often get visual indication of where you are on the page if you get lost.

As you navigate, NVDA will also speak semantic information such as “link”, “heading level 1” (through “heading level 6”), “button” or the like. It will indicate whether you enter or leave lists and how many items these lists have.

### Virtual buffer navigation keys

While the virtual buffer is active, the following key combinations can be used to perform actions.

**Note**:  The NVDA key is usually the Insert key on the number pad, but can be configured in the Preferences/Keyboard… settings of the NVDA menu to be the CapsLock key.
General purpose functionsKeyFunctionNVDA+spaceTurn virtualBuffer pass-through mode on or offcontrol+NVDA+fFindNVDA+f3Find nextNVDA+f7Display a list of all links, headings, or form fields on the pageNVDA+f5Refresh the buffer, sometimes needed with dynamic content
The following is a list of quick keys  to move the virtual cursor. These single letter keys can be combined with the Shift key to perform the same function in the reverse direction.
Virtual buffer quick keysKeyElementhheading1 to 6headings 1 to 6 respectivelyllist (ordered, unordered, definition)ilist itemttableklinkuunvisited linkvvisited linkfform fieldeedit fieldbbuttonxcheckboxccomboboxrradio buttonqblock quotesseparatormframeggraphicdlandmarkoobject (embed, web dialog
So, if you’re browsing this article with NVDA, pressing Ctrl+Home, followed by t once will bring you to the first table, which is the table with the general purpose keystrokes. Pressing t again will move you to the second table which contains the virtual buffer quick keys.

## Checking for different aspects of your web page

OK, now that you’ve familiarized yourself with how NVDA works, it’s time to load your own web pages and give them a check up. Things that NVDA can help you determine quickly:

- Do your headings follow a logical structure and substructure? Or did you put everything at one heading level even though something may be a sub section of something else?
- Do your form fields like edits and buttons have labels? In other words, does NVDA speak something like “User name: edit” automatically, or does it just say “edit”? If the latter, your labels aren’t properly associated with the field they’re labeling. This is an error in your markup which is easily corrected.
- Do your important images have proper alternative text? All images that are part of links, and all images that communicate something important must have alternative text. Otherwise, screen readers cannot pick up the meaning of the image. They will try to guess part of the *src* attribute as the image name, but this is at most cryptic if not completely useless. To mark an image as decorative, put an alt attribute on it with an empty string `""`.
- Are things such as navigational links grouped together inside a list of some sort? Putting them in a list helps to add structural information to your pages.
- If using [WAI-ARIA](http://www.w3.org/TR/wai-aria/), are you using landmark roles for navigation, search, main, footer etc.? This will aid in identifying specific parts of your page and thus help in navigation/understanding of the layout. Note that you can also use the HTML5 equivalent elements like nav, header, footer, main, aside, etc.
- Also if using WAI-ARIA, are your form fields that are required [using the *aria-required* attribute](http://www.marcozehe.de/2008/02/29/easy-aria-tip-1-using-aria-required/)? Screen readers such as NVDA can use this to give an unambiguous indication that this field is required to be filled in.

Of course, there are more things to check than the above, but these are starting points where NVDA can help you assess quickly whether your markup is good.

## Advanced techniques

NVDA provides a mechanism called Object Navigation. This mode is a walker of the accessible hierarchy exposed by Firefox and other accessible applications. There is a root accessible object usually representing the main window or frame, and as its children, grandchildren and grand-grandchildren etc. are all the objects the browser UI and the currently loaded web page expose. There are tools to visualize this tree in every modern browser's developer tool set. But if you want to listen to your tree rather than see it, NVDA offers you the means to do so.

NVDA also provides some default information such as whether the element is actually being displayed (visible), unavailable (grayed out) or other similar info. The following are some basic keystrokes to get you started:
Object Navigator basic keystrokesKeyDescriptionNVDA+NumPad8From the current element, go to its ancestorNVDA+NumPad4Go to the previous object on the same level as the current objectNVDA+NumPad6Go to the next object at the same level as the current objectNVDA+NumPad2Move to the first descendant object of the current objectNumPad EnterPerform the default action, usually clicking, on the current element
There are also commands to route the mouse to the current navigator object, or vice versa, but I'll leave it up to you to find these.

When navigating your page with this mechanism, you will hear every list, interesting divs (exposed as sections), every form and its formfield descendants, etc., and can get a feel for how your markup affects the output to the accessibility programming interfaces.

More information on object navigator is available in both the quick key reference and the NVDA user guide, which were both installed onto your system when you installed NVDA.

## In conclusion

This article is not meant to replace the NVDA user guide. Nor is it aimed to replace proper accessibility training and skill acquisition. The aim of this article is to be useful for web developers who want to add one more testing tool to their daily workspace to test the human interaction factor of their web sites.

Having said that, feedback is, of course, very welcome! You can find information on how to contact me on the “About” page.

## In other languages

This article has been translated into the [Spanish](http://www.webhostinghub.com/support/es/misc/probar-la-accesibilidad) language by Maria Ramos  from [Webhostinghub.com](http://www.webhostinghub.com/).
