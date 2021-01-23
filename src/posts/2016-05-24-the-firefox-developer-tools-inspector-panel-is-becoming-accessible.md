---
title: The Firefox developer tools  Inspector Panel is becoming accessible
slug: the-firefox-developer-tools-inspector-panel-is-becoming-accessible
date_published: 2016-05-24T17:59:18.000Z
date_updated: 2016-05-24T17:59:18.000Z
---

A few months ago, I wrote about the efforts to make the built-in Firefox developer tools more accessible. That work started in January and is now carrying first far-reaching fruits. Here&#8217;s an update!

Until now, the Firefox developer tools are, except for the web console, largely unusable for people with visual impairments, who rely on assistive technologies etc. In January of 2016, part of the accessibility team at Mozilla started an effort to change that. [I wrote more about it in this blog post](https://www.marcozehe.de/2016/01/26/making-the-firefox-developer-tools-accessible/).

Over the past few months, some small changes landed that improved the keyboard navigability of the Inspector and other developer tools panels in general, like bringing more consistency to multi-tabbed panels, more consistent behavior of the tab key etc.

The second thing that landed was a big styling refresh that makes focus much more visible all across the developer tools, and not just for mouse users, but for keyboard users as well. There are some kinks with this being ironed out, but for the most part, that work has been completed and is already gaining some positive feedback from various sources.

Now, on May 24, 2016, a big change landed on the HTML view of the Inspector that will immensely increase usability for people relying on assistive technologies.

## It&#8217;s a tree view

The HTML view of the inspector is the main panel that opens when you right-click an element on a page and choose &#8220;Inspect Element&#8221; from the context menu. This panel is in large parts taken up by a tree representing the document object model (DOM) structure of the page you&#8217;re currently visiting. It shows the hierarchical relationships between nodes, their tags and attributes and generally gives a structured view of the page source.

It also has a search field, and a breadcrumbs toolbar that shows the direct path from the root of the document leading up to the element that is currently focused in the tree view.

And that tree view is now a tree view! It announces itself to screen readers as such, and its keyboard interaction paradigm resembles that of other standard tree views that you find in Windows and other operating systems:

- Up and down arrows will move from node to node.
- If a node has children, right arrow will expand the node to reveal them, left arrow will close it.
- If a collapsible node is collapsed, Left arrow will back up to the hierarchically higher level node.

As soon as you select a node, the contents of the right-hand side of the inspector changes. These so-called side panels are a multi-tab sub window which show different further information, like the CSS properties, computed styles, and other information. Those side panels are not yet accessible.

## Editing the properties of a node

To edit the selected node in the tree view, press the Enter key. You are now interacting with the node, and the focus lands on the actual tag of the node. Tab will move from the tag to its attributes, and back to the tag once the last attribute has been reached. All of these will be announced as buttons, indicating that you can press Space on them.

If you press Space, you are placed in an edit field where you can edit the tag or the currently selected attribute and its value. Press Enter once finished to save and immediately apply your changes to the web site in the browser. To discard any changes you&#8217;ve made, press Escape.

Escape will also take you out of the interaction with the current node and place focus back on the tree item itself. Tab will then move to the breadcrumbs toolbar, and onwards to the side panel tab strip.

The big news here is that you can now actually navigate, and edit the different nodes within the HTML view inspector panel in a consistent manner.

## How can I test it?

These changes will be in the Firefox Nightly builds starting on May 25, 2016, possibly a second nightly build made on May 24, 2016. You can get the nightly builds from [this web site](https:///nightly.mozilla.org/). If you already have Nightly installed, just update it.

Then, to test, place the mouse pointer on any element on the page, using the screen reader functionality to route the mouse there if you use one. Then, simulate or perform a right-click to bring up the context menu, and choose &#8220;Inspect Element&#8221;.

The developer tools will open, and the Inspector HTML viewer will be in focus, with actual keyboard focus being on the item you right-clicked on. But from here, you can navigate to any element on the page. We also plan to implement a better way to right-click an element or invoke the functionality other than through a right mouse click. But this hasn&#8217;t been implemented yet, so you&#8217;ll have to use a mouse or your screen reader&#8217;s mouse emulation for the time being.

These changes will uplift to the Dev Edition (AKA Firefox Aurora) in June, move to beta in early August, and be in the Firefox 49 release mid September.

Feedback is welcome!
