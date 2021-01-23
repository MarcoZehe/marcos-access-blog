---
title: What's new for accessibility in Gutenberg 7.2
slug: whats-new-for-accessibility-in-gutenberg-7-2
date_published: 2020-01-09T16:26:40.000Z
date_updated: 2020-01-09T16:26:40.000Z
tags: [Gutenberg]
---

Gutenberg 7.2 [has just been released](https://make.wordpress.org/core/2020/01/09/whats-new-in-gutenberg-8-january/) as a plugin. The development cycle was longer than usual. As a result, this version contains [a lot of changes](https://github.com/WordPress/gutenberg/releases/tag/v7.2.0). Several of them improve Gutenberg&#8217;s accessibility.

## The tab order in the editor

When editing a block, the tab order has been adjusted. Rather than tabbing to the next block, for example from one paragraph to the next, pressing tab will now put focus into the side bar for the active block. Further tabbing will move through the controls of said side bar. Shift+Tab will go in the opposite direction.

Likewise, when in the main contents area of a block, Shift+Tab will now move focus to the toolbar consistently and through its controls. It will also skip the drag handle for a block, because this is not keyboard operable. Tab will stop on the items to move the block up or down within the current set of blocks.

This makes the keyboard focus much more consistent and alleviates the need to use the custom keyboard shortcuts for the side bar and toolbar. These do still work, so if you have memorized them, you can continue using them. But you do not need to, tab and shift+tab will now also take you to expected places consistently.

## Improvements to the Welcome guide

The modal for the Welcome guide has been enhanced. The modal now always gets a proper title for screen readers, so it no longer speaks an empty dialog when focus moves into it. The current page is now indicated for screen readers so it is easy to know which of the steps in the current guide is showing. The main contents is now a document so screen readers which apply a special reading mode for content sections can provide this functionality inside the modal.

This was one of the first two code contributions to Gutenberg by yours truly.

## More enhancements and fixes

The justification radio menu items in the formatting toolbar are now properly exposed as such. This was the other of the two code contributions I made to this Gutenberg version.

The Social block now has proper labels.

The block wrapper, which contains the current set of blocks, now properly identifies as a group rather than a section. This will make it easier when dealing with nested blocks or parallel groups of blocks when building pages.

## In conclusion

Gutenberg continues to improve. And now that [I am a team member](https://marcozehe.de/2019/12/22/wordpress-accessibility-team-member-gutenberg-contributor/) as well, I&#8217;ll try to help as time and capacity permit. The changes especially to the keyboard focus and semi-modality of blocks is a big step in improving usability.

One other thing that will hopefully land soon once potential plugin compatibility issues are resolved, will be that toolbars conform to the WAI-ARIA design pattern. That will mean that every toolbar container will be one tab stop, and elements within will be navigable via arrow keys. That will reduce the amount of tab stops and thus improve efficiency and compliance.
