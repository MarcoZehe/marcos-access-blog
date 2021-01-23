---
title: "ARIA in Gmail #2: Enhancing the Chat experience"
slug: aria-in-gmail-2-enhancing-the-chat-experience
date_published: 2008-08-06T17:46:14.000Z
date_updated: 2008-08-06T17:46:14.000Z
---

This post continues a series on the implementation of [ARIA (Accessible Rich Internet Applications)](http://developer.mozilla.org/en/docs/Accessible_DHTML) in [Gmail](http://mail.google.com/).

On July 30, Orca team lead Willie Walker forwarded a message to the Orca mailing list titled [Orca & gmail](http://mail.gnome.org/archives/orca-list/2008-July/msg00444.html). The message is originally by Srinivas Annam, an accessibility web developer at Google. He describes a couple of enhancements that had been made to the Gmail user interface and were  pushed live recently. I&#8217;m going to review each feature in turn so you get an impression of what accessibility improvements these changes actually brought about.

I tested with JAWS 9.0, Window-Eyes 7.0 Beta 1, NVDA snapshot as of Wednesday August 6, and Orca snapshot as of Wednesday August 6. Unless noted otherwise, all features are fully useable using Firefox 3.0.1 and these versions of the screen readers.

All of the below are in the Chat area of the Gmail interface. So after you&#8217;ve logged into Gmail, make sure to activate the &#8220;Chat&#8221; link to be able to follow the descriptions.

### The &#8220;Set Status Here&#8221; label

This is the label right below the &#8220;Search, Add or Invite&#8221; textbox. Pressing Tab from that textbox focuses the label. You can press Enter to get another textbox where you can put in a personal status message that others will see when they have you in their chat lists. Note if you&#8217;re using JAWS, press JawsKey+3 (3 on the number row) to pass the key through to Firefox directly. Otherwise, JAWS will capture the Enter key and turn off Forms Mode when you don&#8217;t want it to.

### The &#8220;Status&#8221; menu button

This follows directly in the tab order after the &#8220;Set status here&#8221; label. You can press Enter on it to bring up a context menu to navigate and set a predefined status. This button is also discoverable with the virtual cursor in all three Windows-based screen readers, and Enter works on all of them to open the context menu.

Inside the context menu, navigating the items with Up and Down arrow keys properly issues the focus events, making use of the *aria-activedescendant* attribute to indicate which of the menu items is active.

A known problem is that, when pressing Escape to close the menu, focus does not yet return to the menu button. Use screen reader navigational commands to return to where you left off.

### The chat contact list

This is an ARIA listbox with list items. It follows the &#8220;Status&#8221; menu button in the tab order. The Windows-based screen readers allow navigating to it using their virtual cursors, and pressing Enter for Forms Mode/Virtual off/PassKey mode. With Orca, you can simply navigate or tab to the list. The list uses *aria-activedescendant* to indicate which item has focus.

Navigating inside the list is done using Up and Down arrow keys. Besides the contact&#8217;s name, the status is given &#8220;chatting&#8221;, &#8220;available&#8221;, &#8220;idle&#8221;, &#8220;offline&#8221;.

Pressing Enter will do one of two things. Note that if you&#8217;re using JAWS, again use the JawsKey+3 keystroke to pass the key through, or it will turn off Forms Mode.

- If the contact is available or idle, a chat window will open. See the next section for features within this window.
- If the contact is offline, a new mail message to it will be started, and the focus will be placed in the &#8220;Subject:&#8221; textbox.

Below the list is another menu button labelled &#8220;Options&#8221;. However, the menu that opens does not yet use the *aria-activedescendant* attribute. The result is that no screen reader follows the focused item within this menu yet. It is hoped that this menu be accessible soon since it contains a number of useful functions.

### The chat window

If you&#8217;ve opened a chat window to one of your contacts, the focus is placed inside a textbox where you can type your message. Press Enter when done to send your message.

The chat output pane uses ARIA live regions to enable screen readers to speak incoming messages automatically. These can either be your own, or the ones your chat buddy types. A suggestion: The message output uses *aria-live=&#8221;assertive&#8221;*. The other portion that gives messages such as &#8220;xxx is typing&#8221; does not use live region markup at all yet. It would be good if this used *aria-live=&#8221;polite&#8221;* to allow screen readers to also speak this information. Since this message is not as important as the actual output, using &#8220;polite&#8221; here can help screen readers prioritize the speaking of these updates.

Currently, both Orca and NVDA support speaking of live region updates. This means that, when inside the chat area and a message comes in, both screen readers will automatically speak them. Additionally, you can turn off PassKey through mode in NVDA and navigate upwards to review the last messages. With Orca, simply navigate upwards to review the last messages.

**Note:** If you&#8217;re using JAWS, you should pop out the chat into a separate window. For some unknown reason, JAWS will not pick up the contents of the output window unless the chat is inside its own window. To do this:

1. Press JawsKey+3, followed by Ctrl+DownArrow to focus the Chat window toolbar.
2. Press Tab to move to the &#8220;Pop out&#8221; button.
3. Press Enter to activate it. Note you might get a warning from your popup blocker that it prevented Gmail from opening a pop up, and an error dialog by Gmail itself that tells you how to disable popup blocking for Gmail. I suggest you do this to more easily open those pop outs.

### The Chat window toolbar

You can reach this by pressing Control+DownArrow while focused inside the chat entry textbox. It places focus on an &#8220;Options&#8221; menu button. Press Enter to open it. Navigation inside it is just like in the &#8220;Status&#8221; menu, also works using *aria-activedescendant*.

Alternatively, you can press Tab to reach the &#8220;Pop out&#8221; button, allowing you to put the chat into its own window.

Finally, Ctrl+UpArrow will put focus back into the chat entry textbox.

### In summary

With these enhancements in both keyboard navigation and ARIA semantics, Google have turned this portion of Gmail into a really useful tool also for blind and visually impaired users. With Firefox or another ARIA-capable browser and a compatible screen reader, you can now use this part just like your sighted buddies do.

With this, Gmail is not just web mail, it becomes a communication center as it already is for the sighted users.

I&#8217;d like to thank Google again for putting ARIA into Gmail in this fashion. It shows that the work Mozilla, IBM and the W3C, under the leadership of Aaron Leventhal, put into this spec is indeed usable in real-life scenarios and not just, as suspected by some, a nice geeky thing on the drawing board.

##### Previous ARIA in Gmail posts

- [Alerts](http://www.marcozehe.de/2008/08/04/aria-in-gmail-1-alerts/)
