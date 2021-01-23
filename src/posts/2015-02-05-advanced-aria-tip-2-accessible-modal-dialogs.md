---
title: "Advanced ARIA Tip #2: Accessible modal dialogs"
slug: advanced-aria-tip-2-accessible-modal-dialogs
date_published: 2015-02-05T15:44:51.000Z
date_updated: 2015-02-05T15:44:51.000Z
tags: [dialog, WAIARIA]
---

One question that came up more and more in recent months is how to create an accessible modal dialog with WAI-ARIA. So without further ado, here&#8217;s my take on the subject!

## An example

To lay the ground work for some terms we&#8217;ll be using, let&#8217;s look at an example. A dialog is basically a sub window of an application that asks a question, requires some input, or allows to set options etc. Desktop applications have dialogs of all shapes and sizes, but there are some unique properties that distinguish them from other windows. The primary one is that it usually cannot be moved out of the main application window. Another is that usually, when it is open, the application around it becomes inert, and you cannot do anything with it as long as the dialog is open. The dialog is what we call modal. Yes, there are also non-modal dialogs, but they are then more like different panels in the main application window rather than a dialog in the classic sense of the word.

Let&#8217;s look at a simple example: Open your favorite word processor, type in something or paste your lorem ipsum, and then just close the window. You&#8217;ll get a dialog that consists of the following:

- A title that contains the name of the application or some phrase like &#8220;Save the document&#8221;.
- Text that states that you haven&#8217;t saved the document and what you want to do now.
- A series of buttons like &#8220;Save&#8221;, &#8220;Don&#8217;t Save&#8221;, &#8220;Cancel&#8221; etc.

Screen readers will speak the title, the text, and the currently focused button automatically when you do the above steps with it running. This is important, so keep that in mind. It automatically reads the title *and* the text.

In the following example, we&#8217;ll call the title the &#8220;label&#8221;, and the text the &#8220;description&#8221;.

## The simple Confirmation dialog

In HTML5 markup, this dialog could look something like this.

```html
    <div>
      <h2>Save "untitled" document?</h2>
      <p>You have made changes to "untitled.txt" that have not been saved. What do you want to do?</p>
      <button id="saveMe" type="button">Save changes</button>
      <button id="discardMe" type="button">Discard changes</button>
      <button id="neverMind" type="button">Cancel</button>
    </div>
```

Let&#8217;s go through this step by step:

1. The first line declares a container that encompasses the whole dialog. Since HTML5 still doesn&#8217;t have a proper [dialog element](http://www.w3.org/TR/html51/interactive-elements.html#the-dialog-element) that is supported everywhere and gives us what we want, we will not use that element due to possible unpredictability of browser implementations. Instead, we&#8217;ll solely rely on WAI-ARIA to give us the semantics we need. The role is &#8220;dialog&#8221;.
2. The aria-labelledby references the ID of our title. This is important since that will give the accessible object for the dialog the proper title, or label, or accessible name, that is spoken first by the screen reader when focus moves into the dialog.
3. The aria-describedby associates the main dialog text with the dialog as well, which will turn it into the accessible description of the dialog object upon later translation. AccDescription is *additional* information that enhances the name and is spoken after name, role, and states. This concept goes back to the very old Windows days and is supported by all modern screen readers. If screen readers find an accDescription for a dialog accessible, they&#8217;ll speak it. Linux and OS X have adopted this concept later.
4. Below the actual divs that contain the title and description texts, there are three buttons. These are regular button elements with a type of &#8220;button&#8221; so they are considered valid even outside of a form element.

From this, there are some rules to be deduced:

1. If you use the role &#8220;dialog&#8221;, you *must* use aria-labelledby to point to the element containing the visible dialog title. The aria-labelledby attribute must be *on the same HTML element* as the role &#8220;dialog&#8221; attribute.
2. If your dialog has one main descriptive text, you must use aria-describedby to point to its element, also on the *same* element that has role &#8220;dialog&#8221;. You can also point to multiple text elements by separating their IDs with spaces.

One note about Safari on OS X: In my testing, I found that the dialog text would not immediately be read. Safari sometimes has the tendency to map aria-describedby in a funny way that makes the description end up as help text, spoken after a several second delay, or retrievable via Ctrl+Option+Shift+H. Apple should really change this to something that gets picked up as dialog text. The fact that VoiceOver reads dialogs correctly in, for example, TextEdit shows that it has principal provisions for that, it just needs to be mapped correctly from Safari.

## The heavy-lifting

OK, that was the easy part. For the following, you must remember that WAI-ARIA merely provides semantic information. It tells the screen reader what the elements represent. It does not automatically introduce certain types of behavior. You have to use JavaScript to do that. The following sections describe what you need to do, and why.

### Initial focus

When you open your dialog, for example by setting it from display: none; to display: block;, or by inserting its markup into the DOM, you have to give it keyboard focus. Focus should be on the first keyboard focusable element. In our example above, keyboard focus would go to the &#8220;Save changes&#8221; button. Opening the dialog will not cause the browser to set focus in there automatically, so you&#8217;ll have to do it manually in JS via the .focus() method. Setting focus will cause the screen reader to recognize the change of context and detect that focus is now inside a dialog, and will do its magic to read the title and description of the dialog automatically.

### Trapping keyboard focus inside the dialog

Since your dialog is most likely modal, you will probably have something in place that ignores mouse clicks outside of it. You will have to do something similar for keyboard focus. The common way to move around controls is via the tab key. So you&#8217;ll have to make sure your keyboard focus **never** leaves the dialog. A few rules for this:

1. Create a natural tab order by arranging elements in the DOM in a logical order. That will cause the tab order to flow naturally without you having to do much. If you have to use the tabIndex attribute for anything, give it a value of 0 so the element fits into the natural tab order.
2. On the very last element of your dialog, add a special keyPress handler that traps the forward tab key to redirect it to the first element of the dialog. Otherwise, tab would jump outside the dialog into the surrounding document or to the browser UI, and we don&#8217;t want that.
3. Likewise, add a keyPress handler to the very first focusable element inside the dialog that traps the shift+tab key combination so the backwards tab order also doesn&#8217;t leave the dialog.

### Provide an escape route

As is customary in dialogs, there is usually a way to escape out of it without making changes. Often, this does the same as whatever the Cancel button does. You&#8217;ll have to provide the same functionality to your dialog. So, make sure pressing Escape will close your dialog, and usually discard any changes.

### Restoring focus after closing the dialog

Of course, Escape isn&#8217;t the only way to close your dialog. You would also provide a button to accept changes and execute on whatever functionality you desire. In any case, after you close the dialog, you *must!!!*, you **absolutely must!!!** then set focus back to the element that opened the dialog, or any other useful element from which the user of your app will most likely continue working. **Never ever** let keyboard focus go into Nowhere Land after the user dismisses a dialog you opened. In the worst case, it lands on the document or somewhere else far away from where the user&#8217;s context was before they opened the dialog. There is nothing more frustrating than to have to spend 10 or more seconds trying to find one&#8217;s last place again from where one left off.

## Other dialog cases

Of course, your dialogs will most likely be more complex than what I showed above. Here are some more hints on what to do in certain situations.

### A dialog with only a single button

Sometimes, you&#8217;ll create a dialog just to let users know that something completed successfully. Just follow the rules laid out above with focus on the single Close or OK button, and make sure the title and description are fully wired up via ARIA attributes as shown.

### A dialog without descriptive text

If you don&#8217;t have general descriptive text, well then that&#8217;s that. Just make sure your form inputs are properly labeled as is customary for HTML forms, and if you group things together, use fieldset and legend elements to provide context. Also, of course, you can always use aria-describedby on individual inputs or other focusable elements to provide additional contextual information that you visually put outside the main label for that element or such. It all comes down to listening to your dialog and seeing if you can still understand what you&#8217;re asking of the user.

### Multi-tabbed dialogs

Of course these are possible in HTML as well! You&#8217;ll probably not have general descriptive text, but yes, you can have a [tablist/tabs/tabpanels construct](https://www.marcozehe.de/2013/02/02/advanced-aria-tip-1-tabs-in-web-apps/) inside a dialog just fine. You may then have aria-labelledby on the tabpanel pointed to its tab, and aria-describedby pointing to descriptive text within that panel that may give some context. Screen readers will pick that up when you move into the panel as well. Initial focus will then go to either the first tab in the tab list with the tab panel already opened, or the selected tab with its associated tab panel opened, if the dialog had been opened before and you want to preserve that when the user comes back. Your choice.

## What about role &#8220;alertdialog&#8221;?

Hmm&#8230; Uhh&#8230; Don&#8217;t use it. Seriously, I&#8217;ve been working with ARIA for over seven years now, and I still haven&#8217;t figured out why role &#8220;alertdialog&#8221; was ever invented. It has all the properties of a &#8220;dialog&#8221;, and yet inherits the aria-live attribute with a value of &#8220;assertive&#8221;. That will cause its label, or title, to be spoken by a screen reader immediately upon its appearance, interupting everything else.

But a correctly marked up dialog will already speak all relevant information upon initial focus, and there should not be a reason not to give a dialog keyboard focus when it opens, so having a dialog yell at the screen reader user would only make sense if one would not initially set focus to it. And that is, from a usability standpoint, generally not a good thing to do in my opinion. I know opinions may differ on this, but since you&#8217;re on my blog and I can give you my advice, that is: Don&#8217;t use role &#8220;alertdialog&#8221;.

## Other examples

Other fellow accessibility evangelists have created dialog examples that work similarly, but also have a few differences to what I discussed above. [Lisa Seeman&#8217;s dialog example](http://accessibility.athena-ict.com/aria/examples/dialog.shtml), for example, sets focus to the initial heading that contains the dialog title, and doesn&#8217;t associate the text above the fake login form to the dialog description. Also, in my testing, while shift+tab was trapped, tab was not, so I could move outside the dialog into the browser UI.

[HeydonWork&#8217;s example](http://heydonworks.com/practical_aria_examples/#warning-dialog) shows the technique of using role &#8220;document&#8221; inside the dialog to make screen readers switch back to their reading mode. Cleverly used, this technique can help to work in application and browse mode automatically wherever appropriate.

And the most complete and comprehensive implementation I&#8217;ve seen, and which worked in a lot of combinations I tested, is this example by Greg Kraus called [Incredible Accessible Modal Window](http://accessibility.oit.ncsu.edu/training/aria/modal-window/version-2/). Thanks, Sina, for the pointer, as I didn&#8217;t even know about this one when I wrote the initial version of this post.

## Conclusion

Creating a modal dialog that is fully accessible requires some work, but it is not rocket science or even magic. The important things to be aware of have been highlighted throughout this article, like associating both a label and descriptive text which screen readers will then pick up. It is also important to always control where focus goes inside the dialog, and when it closes.

I hope that this introduction to the topic of modal dialogs on the web helps you create more accessible experiences in the future! And of course, your questions and comments are always welcome!

happy hacking!
