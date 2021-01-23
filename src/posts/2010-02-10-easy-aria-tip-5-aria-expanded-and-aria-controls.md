---
title: "Easy ARIA Tip #5: aria-expanded and aria-controls"
slug: easy-aria-tip-5-aria-expanded-and-aria-controls
date_published: 2010-02-10T19:02:00.000Z
date_updated: 2010-02-10T19:02:00.000Z
---

In this Easy ARIA tip, I will give you a bit of a hint on how to make not too complex, but still dynamic, menus accessible. We often encounter menus that pop in and out upon a mouse click or activation of an element using the keyboard.

An example can be found at [this German blog](http://grochtdreis.de/weblog/) site. Look for the &#8220;Archive&#8221; heading, which is a clickable element that shows or hides the archive choices offered by this blog.

Right now,[NVDA](http://www.nvda-project.org/) speaks this item as &#8220;clickable&#8221;, so the blind user already gets notified that there is a possibility here to press Enter on the item and something will happen. Now how cool would it be if, in addition, NVDA would tell me that something will be expanded, or is currently expanded, and I can press Enter to collapse it?

Fortunately, we have [WAI-ARIA](//www.w3.org/TR/wai-aria/) to rescue us from this desire! 🙂

The global attribute [*aria-expanded*](http://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded) is used for exactly this purpose. It takes one of two values: **true** or **false**. true means  a section that this element denotes is currently expanded (visible), false means the expandable section or items is/are currently collapsed (invisible). In the above example, *aria-expanded* must be defined, and by default set to **false**. In the Javascript that handles the expansion and collapsing of the categories, another code block must be added to touch this attribute and change its value to **true** when the categories are made visible, and back to **false** when they are made invisible. Since there is already JavaScript in place to handle the visibility of the categories, this can be plugged in very easily.

There is one more piece to this: Modern screen readers such as NVDA, [Orca](http://live.gnome.org/Orca) or modern versions of the commercial screen readers, can also make use of another attribute that tells which element is actually being affected. In this case, the list of categories. This is done through an attribute called [*aria-controls*](http://www.w3.org/TR/wai-aria/states_and_properties#aria-controls). The value of this attribute is the ID of the affected element and is set either once or whenever the controlled element changes. In this example, the value would point to the html:ul element with the ID of &#8220;archivliste&#8221;. The attribute gets set on the same element that also gets aria-expanded and does all the magic. Screen readers then know which element is being referenced, by something called Accessible Relations.

**In summary**:

- *aria-expanded* receives a value of &#8220;true&#8221; when the elements in question are visible. It is set to &#8220;false&#8221; when those elements are actually not visible.
- *aria-controls* is set to the ID of the top level element that gets made visible or invisible.

Both attributes get set on the element that actually does the magic (the same element that has the onclick handler or click/keyboard event listener).

[Update] One word about placement of the expandable items: Ideally, they should be following the item that expands and collapses them, as can be seen in the example above. The list of archive months follows the heading  that has the click handler to expand and collapse it. The result is that screen reader users can expand the items and simply down arrow without having to look for the new content. This makes it feel very natural and efficient.

Also,  some screen readers have intelligent detection of dynamic changes and speak them automatically. This is sort of what WAI-ARIA live regions do, but without the explicit live region markup. The result is that upon expansion, the new items might automatically be spoken, which might be undesirable. For example, this list of months would be very undesirable to be rattled off by the synthesizer whenever the list gets expanded. To prevent this, another attribute can be applied, *aria-live* with its value set to &#8220;off&#8221;. This prevents supporting screen readers from ever treating this particular region as a live region. This attribute, however, in the example above, would go on the html:ul element, not the element that expands and collapses the list.

Thanks to [Aaron Leventhal](accessgarage.wordpress.com) for these two excellent points![/update]

### Previous Easy ARIA Tips

1. [aria-required](http://www.marcozehe.de/2008/02/29/easy-aria-tip-1-using-aria-required/)
2. [aria-labelledby and aria-describedby](http://www.marcozehe.de/2008/03/23/easy-aria-tip-2-aria-labelledby-and-aria-describedby/)
3. [aria-invalid and role &#8220;alert&#8221;](http://www.marcozehe.de/2008/07/16/easy-aria-tip-3-aria-invalid-and-role-alert/)
4. [Landmarks](http://www.marcozehe.de/2009/10/31/easy-aria-tip-4-landmarks/)
