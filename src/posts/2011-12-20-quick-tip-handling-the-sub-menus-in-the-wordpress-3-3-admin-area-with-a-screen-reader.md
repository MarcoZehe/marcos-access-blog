---
title: "Quick tip: Handling the sub menus in the WordPress 3.3 admin area with a screen reader"
slug: quick-tip-handling-the-sub-menus-in-the-wordpress-3-3-admin-area-with-a-screen-reader
date_published: 2011-12-20T16:04:10.000Z
date_updated: 2011-12-20T16:04:10.000Z
tags: [Firefox, KeyboardAccessibility]
---

This is a quick tip to show how to use the new sub menus in the admin area of WordPress 3.3 with a screen reader. For this, I&#8217;m using NVDA 2011.3RC, and Firefox 9.

The new sub menus are  a way to more quickly access items in the sub menus of &#8220;Dashboard&#8221;, &#8220;Posts&#8221; etc. without having to reload the page with the menus opened. Instead, the menus are opened and closed dynamically by either hovering the mouse over the item that is, by NVDA, announced as &#8220;sub menu link&#8221;, or by executing a press of the enter key on such an item.

The problem arises from the fact that screen readers on Windows capture the enter key and many others and execute functions based on their functionality inside the virtual documents/browse mode documents. For example pressing enter on a link usually clicks the link.

In this case, a click on a link is not what we want, since that would indeed reload the page. The menu would still be opened, but we&#8217;d lose all advantages of the more dynamic, time-saving approach that is made possible in 3.3.

Instead, what we do is the following:

1. Position NVDA&#8217;s virtual cursor on the desired sub menu item.
2. Press NVDA-key+F2 to invoke the function to pass the next key press straight through to the application.
3. Press enter.
4. Navigate down with the virtual cursor to find a newly expanded sub menu with links we can click.

Your preferred screen reader offers the same functionality, no doubt. Be aware, however, that some screen readers do not set focus to focusable items under the virtual cursor automatically, so an additional key press before step 2 may be needed to route the system focus or PC cursor to the item the virtual PC cursor is pointing to.

This way, we can easily access the dynamic menus. It requires an extra keystroke, yes, but this is still quicker than having to wait for a page load and looking for the new items starting from the top of the virtual document.

Happy blogging!
