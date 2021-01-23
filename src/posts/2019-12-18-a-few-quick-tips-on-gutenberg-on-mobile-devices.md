---
title: A few quick tips on Gutenberg on mobile devices
slug: a-few-quick-tips-on-gutenberg-on-mobile-devices
date_published: 2019-12-18T13:00:00.000Z
date_updated: 2019-12-18T13:00:00.000Z
tags: [BlockEditor, Gutenberg, GutenbergMobile]
---

The new WordPress block editor is also available in the WordPress app for iOS and Android. It uses the same basis as the editor on a self-hosted or hosted WordPress site, but is a bit simplified. And it is accessible. Here are a few quick tips to get around it.

## Enable it first

You may first have to enable it. You&#8217;ll find the setting under each blog/site you have in the WordPress app. It is called &#8220;Use the new visual editor&#8221;. Check its checkbox, or turn on its toggle switch, to use it.

Now when you compose a new post, you have many of the features of Gutenberg available. With each release, new blog types are supported on mobile devices. If you are unsure of what blocks are, [read my introduction to Gutenberg](https://marcozehe.de/2019/12/13/a-quick-introduction-to-using-gutenberg/) from recently.

## Navigation

Initially, you will land in the title, as usual. Enter it and press Enter.

Pressing Enter will by default create a new paragraph block. Unlike on the desktop, there is no Slash command available here to change the block type on the fly. But usually, the first block you want is a paragraph block anyway, and if not, you can add one and simply move it up as you wish.

To add a new block, find the Add Block toolbar item that is located above the keyboard, or if you are using an external one, in the lower left corner of your screen. That will open a popover with all the blocks it currently knows about. Choose a More block, a Heading block, a List block, etc., whatever you prefer. It is an intelligent list that shows you your last used block types first.

Go ahead and choose a new heading block. You can then write a heading. By default, this is a heading level 2. With each block, there is a toolbar associated with it. The elements except the Add Block, undo, redo, and some other common actions, each block has a few specific items. The Heading block, for example, has a group of buttons where you can switch which level the heading should have. You can easily switch to a heading of levels 3 or 4 here. In a paragraph block, you&#8217;ll find items to bold, italicize, underline text, or insert a link.

Notice as you are now in the Heading block, as you swipe left, you will encounter the previous paragraph block and the title. To the right of the currently focused block, you have buttons to move the block up a position, down (if available), or remove it alltogether. Depending on some blocks, you may even have the ability to move blocks right or left a column.

Each block item speaks its type nicely along with the text that is in the block. The order is pretty efficient: Block type, maybe the level if available, position information, followed by the text. This is a feature that is currently [being worked on](https://github.com/WordPress/gutenberg/pull/18132) for the desktop/browser version, too, so when in selection mode, the blocks are spoken more nicely by screen readers as well. The aim is to unify the experiences so they are consistent across platforms.

## A few gotchas

Inserting a block is always relative to the current block, it does not insert a block at the end by default. So if you have 10 blocks already, and are focused on block 8, the next block you insert will be at position 9 of then 11 blocks, not at position 11. If you want to insert a new block at the end, pfocus the last existing block first, then either choose a new block from the Add Block popover, or go to the end of your text and press Enter to just insert a new paragraph block at the end.

Inserting a link can be a bit confusing. There is no OK button, you add the link, and just close the popover. The only explicit action there is to remove the linkage.

## Conclusion

The mobile version of Gutenberg inside the WordPress apps is more consistent and less dynamic than the desktop counterpart currently is. There is work being done to better the situation there, too, and when the time comes, I will blog about it here. The mobile version is actually a great option to play around with blocks, move them, get a feel for what you can do with posts, see what happens in the preview, etc.

So if, after reading my introduction for the desktop, you find it daunting, this mobile option may be a way for you to familiarize yourself with blocks in a little more controlled environment. The toolbar buttons are always visible, regardless of whether text is selected in a block or not, for example. And with the mobile version being very touch friendly, there is also no mouse hover state that can do seemingly unpredictable things.

Have fun playing!
