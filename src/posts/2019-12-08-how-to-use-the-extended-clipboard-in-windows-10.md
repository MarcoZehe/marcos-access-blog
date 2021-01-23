---
title: How to use the extended clipboard in Windows 10
slug: how-to-use-the-extended-clipboard-in-windows-10
date_published: 2019-12-08T13:00:00.000Z
date_updated: 2019-12-08T13:00:00.000Z
tags: [Clipboard, ClipboardHistory, Windows10]
---

Since the update from October 2018, (Version 1809), Windows 10 has had an extended clipboard feature. Here&#8217;s how you turn it on and use it.

## Turn it on

With this feature, the last 25 text bits you copied or cut to the clipboard will be available to paste. You can either just use the clipboard history for one computer, or synchronize across multiple devices logged into the same Microsoft account. But you have to turn it on first. On each computer that should participate, do the following:

1. Open Start Menu and type Settings. Press Enter to open.
2. In the search box, type clipboard, then choose Clipboard Settings and press Enter.
3. Tab to the first option that says to turn on Clipboard History. It might be turned on for you, in which case you don&#8217;t have to do anything. Otherwise, toggle it on using the Space bar.
4. Optionally, tab forward once and turn on the toggle to use the clipboard from all devices connected to the same Microsoft account.
5. Once you&#8217;ve done that, you can then choose the synchronization option for the clipboard from this device. You can choose for each device whether it should just use the common clipboard history, or also actively sync its own content with the others. So, you can have two that sync, and one that doesn&#8217;t, but can still use the contents of the other two.

## Using it

To paste any of the last 25 text snippets, instead of pressing CTRL+V as usual, press WindowsKey+V instead. This will open a list, sorted from newest to oldest, of the last 25 copied or cut text snippets. Focus is on the newest. Use arrow keys right and left to choose. Press Enter to paste.

A note about Control+V behavior: After you turn on the feature, it acts normally, meaning it will paste the last text you copied as usual. The one exception is if you pasted a different snippet from the above steps. From that moment on, until you either choose a different item or copy or cut some new text, CTRL+V will paste the last item you chose from that list of 25 snippets.

A warning to users of the NVDA screen reader: There seems to be [a bug in the way NVDA interacts with this feature](https://github.com/nvaccess/nvda/issues/10588), and it is in all versions I&#8217;ve tested up to the upcoming spring 2020 release (2004) and NVDA 2019.3 beta 1. Sometimes after pasting, the control key appears to be stuck software-wise. It is as if it is being held down continuously, meaning arrow keys will suddenly move by word or paragraph instead of by character or line. It is intermittent. If it happens, just press the Control key once to rectify the situation.

## Pinning or deleting items

In the Clipboard History window, you can pin items that you paste frequently. You can also delete a single or all items from the history.

To do this, open the Clipboard History window with WindowsKey+V, and select an item. Next, press Tab once to focus the More button. Press Space to open the popup menu. here, you have the Pin and Delete plus Delete All items available.

Note that there is another [bug in NVDA](https://github.com/nvaccess/nvda/issues/10597) where it does not interact with both the button and the menu properly at the time of this writing. I have informed the NVDA team about both issues.

## Closing remark

This is, in my opinion, by far one of the best features Microsoft introduced to Windows in recent years. It has made me so much more productive and made so many tasks easier that I cannot even begin to count them. And whenever I am at a device that doesn&#8217;t have this feature, I ask myself how I could ever live without it.

I hope you&#8217;ll find it just as useful. Have fun playing with it!
