---
title: "WAI-ARIA showcase: TinyMCE 4.17"
slug: wai-aria-showcase-tinymce-4-17
date_published: 2014-02-26T21:58:10.000Z
date_updated: 2014-02-26T21:58:10.000Z
tags: [TinyMCE, WAI-ARIA]
---

Today, on February 26, the [TinyMCE](http://www.tinymce.com) team released version 4.17 of the JavaScript/HTML editor for the web. In the [release notes](http://www.tinymce.com/forum/viewtopic.php?id=33519), the first item mentioned is much improved accessibility support. For those of you not familiar with TinyMCE: It is the WYSIWYG (What You See Is What You Get), AKA visual or rich editor used in many popular content management systems such as the WordPress blogging software.

Over the past few weeks, I had the pleasure of testing the improved accessibility features and provide feedback to the developers. Here are a few hints to get you going, but for a full experience, I suggest you [try it out](http://www.tinymce.com/tryit/full.php) yourself!

I tested with Firefox and NVDA and JAWS, but you should also get good results with Internet Explorer and other browser/screen reader combinations. Since the two mentioned work so well, it can be trusted that the implementation is very solid.

When you navigate or tab to the sample editor instance linked to above, you&#8217;ll land in the content area with some sample text. Arrowing up and down will give you paragraphs, headings and other items such as links. Note that NVDA and Firefox treat links as embedded characters, you have to actually navigate into them to read their texts, but they are accessible.

From the content, you can press Alt+F9 to open a menu bar. Left and Right arrow navigate through the top menu items like in your average desktop app, and Down Arrow will actually open a menu. Note that from there, you cannot go Right or Left through the various drop-down menus, you first have to press Escape once to go back to the top level. When on sub menus, Right Arrow will walk into them, escape will back up.

Alternatively, you can press Alt+F10 to go into the toolbars. You&#8217;ll land on the first tool bar and can tab or arrow through the items. Sub menu items will have the sub menus or panels opened via Down Arrow, and closed via Escape. When you reach the end of one toolbar, Right Arrow and LeftArrow wrap to the next and previous tool bars respectively. Escape will bring you back into the main content area.

From either the menus or toolbars, you can open dialogs such as Insert/Edit Image/Video. These are multi-page dialogs with at least two tabs at the top. When in the tab list, Right and Left arrow will move between the tabs, Space will make the current tab active. Tab moves into the panel and through the controls. OK will accept changes, Escape or Cancel will discard.

On the tool bars and in the formatting menu, you can insert emoticons or change the text and background colors. These are panels you open by pressing DownArrow or Enter on their respective menu/toolbar items, and then use the arrow keys to select the actual item you want applied/inserted. All of these items are also made to talk, so a blind person can change the text color as well and know what they&#8217;re doing.

All of this is due to the great use of the WAI-ARIA (Accessible Rich Internet Applications) markup. As soon as content management systems start integrating this new version, they&#8217;ll automatically benefit from these improvements. This opens the door for even more sites offering better than plain-text editing on the web in an accessible fashion. I cannot even start to count how often I was frustrated in the past because while composing a blog post in plain text, some single symbol missing or fat-fingered markup caused whole posts to fall apart. I personally favor rich editing over plain text editing because I do not have to worry about the markup any more and can concentrate on what I want to say instead. If I want to insert a link or change the formatting of something, I just select the text and apply the formatting I want.

I congratulate the TinyMCE team on this new release and am looking forward to even more good accessible features in the future!
