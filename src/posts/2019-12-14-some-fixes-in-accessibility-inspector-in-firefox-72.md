---
title: Some fixes in Accessibility Inspector in Firefox 72
slug: some-fixes-in-accessibility-inspector-in-firefox-72
date_published: 2019-12-14T13:00:00.000Z
date_updated: 2019-12-14T13:00:00.000Z
tags: [AccessibilityInspector, WebDev]
---

Firefox 72, currently in beta, received some fixes to the [Accessibility Inspector](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector) this week. Here they are.

The first fix is to a longer standing issue. If you opened Accessibility Inspector by right-clicking an element and choosing Inspect Accessibility Properties, keyboard focus would not land on the Inspector or Properties tree view, but in limbo somewhere on the document. You had to tab a couple of times to get focus to the correct place. Well, that [will be no more](https://bugzilla.mozilla.org/show_bug.cgi?id=1569868). From now on, keyboard focus will land in the properties tree, so you can directly start exploring the name, role, states etc., of the element you are interested in.

Related to that, if you selected to inspect an accessibility element&#8217;s property either from the browser or DOM Inspector context menus, the selected row in the Accessible Objects tree would not always scroll to actually show the selected item. That too [has been fixed](https://bugzilla.mozilla.org/show_bug.cgi?id=1592858).

Moreover, if you&#8217;re already following along the betas, you may have noticed that within Accessibility Properties, the thing that was once called DOM Node, and which allows you to quickly jump to the HTML element that created this accessible object, was called &#8220;Node Front&#8221;. Well, that [has also been addressed](https://bugzilla.mozilla.org/show_bug.cgi?id=1602516) and will probably soon even be localized.

And last, but not least, resulting from direct feedback we received after Firefox 70 was released, if you have an SVG element which is properly labeled at its root, its children elements will [no longer be flagged as having no proper label](https://bugzilla.mozilla.org/show_bug.cgi?id=1582409) when auditing your site for accessibility problems. If an SVG has a role of &#8220;img&#8221; and is tagged, that will be sufficient to satisfy the auditing facility. In fact, this change is already in Firefox 72 Beta 5 or newer, whereas the other changes mentioned above will appear in Firefox 72 Beta 7 early next week.

Keep the feedback coming! We are constantly fixing bugs and improving the auditing tool to give you better results when testing or developing.
