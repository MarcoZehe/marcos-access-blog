---
title: A quick introduction to using Gutenberg
slug: a-quick-introduction-to-using-gutenberg
date_published: 2019-12-13T13:00:00.000Z
date_updated: 2019-12-13T13:00:00.000Z
tags: [Gutenberg]
---

Late in November, I published a [personal opinion on the state of Gutenberg accessibility](https://marcozehe.de/2019/11/27/my-thoughts-on-gutenberg-accessibility/). Today, I&#8217;d like to give an introduction to Gutenberg from a screen reader user perspective.

 Gutenberg, the WordPress block editor, is the new way to create content and build sites in WordPress. It is a rich web application that uses many modern techniques such as dynamic updates, toolbars, side bars and other items to completely update the posting experience. It can also be quite daunting at first. Let us try to shed a little light on some of the mysteries around it.

## It is not mandatory

First things first: It is not mandatory yet to use Gutenberg. You can [install the Classic Editor plugin](https://wordpress.org/plugins/classic-editor/), which is fully maintained by the WordPress team for the foreseeable future. Once installed, you change a setting in your user profile to make sure you get the Classic Editor experience. Once you change this, you will have the same well-known WordPress posting experience you&#8217;ve always had, with both a plain HTML text and the [TinyMCE](https://marcozehe.de/2014/02/26/wai-aria-showcase-tinymce-4-17/) editor for more rich editing of your post.

Once you enable that setting, WordPress will take Gutenberg out of the mix. You will have your post types, categories, tags, and other information where you are used to in your WordPress Admin, Create A New Post interface.

## A general overview

But if you decide to go all in on Gutenberg, here is a general overview. Gutenberg manages the whole posting experience from initial creation to proof-reading, rearranging content, adding categories and tags, adjusting the publishing date, to pressing the big scary Publish button. The interface consists of several more or less static elements as well as one central area that is very dynamic in nature.

The top of the editor contains two toolbars. One is labeled the document tools toolbar and contains buttons to insert a new block, undo changes, re-do them, and since Gutenberg 7.0, a toggle under the More Options menu that tells the editor whether it is in selection or editing mode. More on that later.

The other toolbar right below that contains options to save, enable or disable the Settings side bar, adjust Jetpack settings, and bring up the publishing panel. Its More Options menu contains items to control various other options, open a dialog with a current set of keyboard shortcuts, etc. This is all pretty standard and works great with a screen reader. Focus is managed correctly when opening and closing menus, etc. Feel free to explore.

The other pretty standard item is the side bar. This is located at the very bottom of the virtual buffer, if you are using a screen reader that has one, such as NVDA or JAWS. It shows either the document settings, or the settings for the currently selected paragraph. The document settings is where you set your categories, tags, maybe add a post excerpt, control whether your post can receive comments or trackbacks, etc. The block settings can vary. For paragraphs, you get items for adjusting font size and family, maybe colors, and more. For images, this is where you set the alternative text, among other things. A set of two tabs at the bottom switches between Document and Block settings.

One other item that appears here is the Jetpack settings if you select that from the main toolbar, and the Publishing settings. Many items in the Publishing panel are similar to the document settings described above, but if you have Social Media Sharing set up, for example, this is where you adjust your Tweet text for the initial post. These controls are also all pretty standard. The collapsible sections expand or collapse if you press Enter on them, and even items such as the calendar for adjusting the publishing date and time is very accessible.

## The main block contents

The real fun begins in the central editor part. It begins with the post title, and then spans one or multiple blocks you add to your post or page. My workflow, for example, is to type the title, then press Enter. You could also press tab, which will then take you to the Copy Permalink item, and then onto the URL itself, plus into the actual first block.

Depending on your version of Gutenberg, after you press Enter after typing the title, the editor places you in either selection or editing mode. In 7 and later, it will default to editing mode, so you can continue typing your text. In 6.9, it will place you on a Paragraph block button. That is selection mode, and you have to press Enter once more to actually enter editing mode and being able to type. Caveat: Sometimes screen readers don&#8217;t speak the focus transition here. Best to turn off virtual cursor and check with your ScreenReaderModifier+Tab which item has focus. It should be an Empty Block item.

Once you are in the first block, and in editing mode, start typing to simply create a paragraph block. You can use arrow keys to navigate, and if you press Enter, you will create a new, empty block.

However, before typing text, you can also change the block type right from the keyboard. Type a forward slash, /, and a popover will open to allow you to select a block type. Start typing some characters, for example h and e for heading. This is an accessible autocomplete, and it will speak the first item it found. You can press up and down arrows to select a different block type, and Enter to accept. The editor will return you to editing mode, but now the screen reader might say something like &#8220;Heading block, level 2, editing&#8221;. You know that you are going to now type a heading level 2. Finish your sub section title and press Enter to create a new block below.

The blocks all have a dynamic toolbar attached to them. Most of that toolbar&#8217;s contents only becomes visible to sighted people if text is selected. Then, you can apply formatting such as bold, italic, underline, turn it into a link, etc. But if you opened and studied the shortcut keys above, you&#8217;ll know that you can also use keyboard shortcuts like CTRL+B for bold, or CTRL+K for link. However, if you want to access the toolbar, you can always do so from the keyboard by pressing Alt+F10. Yes, if you used TinyMCE before, that&#8217;s the same shortcut that brought you into its toolbar system as well. Once the toolbar opens, use left and right arrows to navigate between controls. Escape will bring you back to the text field. In a heading block, for example, you can use the toolbar to change its level from 2 to 3 to 4 etc.

There are a few more elements above the current block that are always there, which can either be tabbed or shift-tabbed to once the toolbar is open, or you can turn focus or forms mode off and use the virtual cursor to move upwards into the toolbar. One is a button to change the block type through a dropdown. This comes in handy if you already have text entered and therefore can no longer use the forward slash shortcut. The other two buttons are mover buttons. These move the current block up or down above or below other blocks. In some layouts, you may also have the option to move a block to the right into the next column, or to the left into the previous one.

My suggestion for the very dynamic nature of the blocks is to use mostly forms/focus mode in your screen reader to move among blocks. If you are on the first line of a block, and there is another block above it, an Up Arrow will take you into that block. There is a real focus change happening, so the experience is different than if you moved among paragraphs in a Word document, but that&#8217;s the quickest way to go from one block to the other. Also, to manipulate a block via the toolbar, use Alt+F10 to bring up the toolbar instead of trying to search for it using the virtual cursor.

## Edit and Selection Modes

As hinted before, Gutenberg knows two modes to operate in. One is Editing mode, which we have covered so far. The other is selection mode. In this mode, you can quickly navigate among blocks. To enter Selection mode, press Escape while editing a block. That will drop you into navigation mode. If you are using a screen reader, you may have to press Escape twice, since the first press might just turn off forms or focus mode and invoke your virtual reading cursor. However, once in Selection mode, I suggest to turn focus mode on by hand and navigate using tab or arrow keys, since that allows navigation among blocks using the native editor keyboard commands.

After selecting a different block, press enter to turn Edit Mode back on and return to manipulating text.

## Version differences

WordPress comes with a version of Gutenberg that was available at the time of the release of your particular WordPress version. It gets updated each time WordPress gets updated. However, you can also decide to get on the two week release cycle of Gutenberg itself and therefore be independent from WordPress releases. The advantage is that you get new features and accessibility improvements faster than with a WordPress release. The disadvantage is that, as with any software, sometimes there can be bugs that get introduced and then take another two weeks to fix. Unless, of course, the team decides to put out an emergency fix release.

You get onto the two week release cycle by installing the [Gutenberg plugin](https://wordpress.org/plugins/gutenberg/#where%20can%20i%20read%20more%20about%20gutenberg%3F) from the WordPress Plugin Repository. Yes, you can install that even though your WordPress already comes with a preinstalled version of Gutenberg. The only exception is if you run your blog on WordPress.com, the hosting service by Automattic, and are on the free, Personal or Premium plans, which don&#8217;t allow plugin installations. Then, you&#8217;ll always have to wait for Automattic to integrate newer versions of Gutenberg into the WordPress install that you get on WordPress.com.

## Closing remarks

The dynamic nature, and seemingly weird keyboard behavior that results from that, can at times be quite unnerving. It is definitely a challenge to keep track of which mode you are in, which block you are editing, and what options are available. For screen reader users, who have very sequential access to web applications, some of these concepts may be difficult to grasp at first, and definitely incur a steeper learning curve than most sighted users will have with Gutenberg. But mastering it is not impossible. As with any complex web application like Gmail, Google Docs, Slack or the like: Know their shortcuts, know your screen reader and its powers, and you&#8217;ll be fine.

Let me close by thanking those from the Gutenberg development team who have reached out to me after my last post on the subject and asked for input. Together with the other members of the accessibility team, we&#8217;ve had some very good and productive conversations that hopefully will move things forward in interesting ways in the coming months. And I mean that in the most positive sense, without irony or sarcasm. I will post irregular updates on significant changes that make it into new Gutenberg releases. And I&#8217;ll hopefully keep this guide updated with new information as it becomes available.

Until then, have fun playing with Gutenberg! Hope these tips help you in finding your way around.
