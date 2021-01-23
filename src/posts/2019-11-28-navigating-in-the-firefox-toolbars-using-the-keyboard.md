---
title: Navigating in the Firefox toolbars using the keyboard
slug: navigating-in-the-firefox-toolbars-using-the-keyboard
date_published: 2019-11-28T13:00:00.000Z
date_updated: 2019-11-28T13:00:00.000Z
tags: [Keyboard]
---

Firefox toolbars got a significant improvement to keyboard navigability in version 67. It was once again enhanced in Firefox 70. Here&#8217;s how.

For a long time, Firefox toolbars were not keyboard accessible. You could put focus in the address bar, and tab to the search box when it was still enabled by default. But the next press of the tab key would take you to the document. Shift-tabbing from the address bar would take you to the Site Identity button, AKA the Lock icon, and another Shift+Tab would take you to the open tabs.

In 2018, we set out to come up with a new model to make this more accessible, and every item reachable via the keyboard. The goal was to make the navigation both efficient and be as close to the [toolbar design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#toolbar) as possible. Here&#8217;s how it now works:

- Tab and Shift+Tab will move to the next or previous container block or text field.
- When in a container block, left and right arrows will move to the previous and next toolbar item.
- Press Enter or Space to activate.

In Firefox 70, Jamie made the navigation even faster by adding an incremental search to the whole toolbar system. The only prerequisite is that you are not currently focused on the address bar or a search or other edit control. For example, do the following:

1. From your web page, press Ctrl+L or Alt+D to focus the address field.
2. Press Tab once to get out of the address field onto the first button in the next container.
3. Hit the letter F once or multiple times. Observe or listen as focus moves between all buttons whose tooltip or label start with F, like Firefox Accounts, Firefox menu, Facebook Account Containers (if you have that add-on installed), etc.
4. Instead, if you type the letters f and i in rapid succession, you will land on the first item whose label or tooltip starts with fi, so Firefox Accounts, Firefox menu, but not Facebook Account Containers.

This also works with numbers, so if you have the 1Password extension installed, and type the alphanumeric number 1, you&#8217;ll jump straight to the 1Password button, no matter where in the various toolbars it is. Cool, ey?

Happy surfing!
