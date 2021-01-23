---
title: "Advanced ARIA tip #1: Tabs in web apps"
slug: advanced-aria-tip-1-tabs-in-web-apps
date_published: 2013-02-02T16:55:49.000Z
date_updated: 2013-02-02T16:55:49.000Z
tags: [tab, tablist, tabpanel, WAI-ARIA]
---

The following article will describe how to properly create accessible tabs in web apps. This is important for both mobile **and** desktop web applications. Tabs are not native to HTML5, so if you simulate them, you&#8217;ll probably use other markup such as lists and list items to generate them. You will **have to** add WAI-ARIA markup to make these semantically correct. For non-touch-screen interfaces, you&#8217;ll also have to add keyboard support manually to make sure the experience is consistent with native apps.

This article assumes that you have at least a basic understanding of what WAI-ARIA is and how to apply attributes. This article will show you which attributes are appropriate for this particular task. If you do not yet know what WAI-ARIA is or want to refresh your memory, go and read, for example, this [introduction](http://www.interactiveaccessibility.com/blog/introduction-wai-aria).

To get tabs to work right, there are a few roles and attributes we&#8217;ll need:
tablistThis is the list of tabs itself. It indicates to screen readers that child elements are selectable tabs. It is a container role and allows screen readers to count the number of actual tabs inside.tabAn actual tab. This must be a keyboard-focusable item. It must be focusable directly, not one of its children.aria-selecteda boolean attribute that indicates whether the current tab (in this case) is the selected one. aria-selected is applicable to other types of items such as option items as well.aria-controlsIndicates which element is being controlled by this particular item. We&#8217;ll use this to connect a single tab to its actual tab panel.tabpanelA single tab panel. This is similar to a dialog page, it contains various controls.aria-labelledbyThe attribute to indicate where the tabpanel gets its label, its title, so to speak, from.aria-describedby (optional)The element(s) to provide the descriptive text, for example explanatory dialog text, for this tabpanel.presentationA role used to remove certain intermediate objects from the screen reader&#8217;s view, but which make semantically sense to keep in the HTML.
### The code without WAI-ARIA

    <ul id="tabs">
    <li><a id="tab1" href="#" onclick="showTab(1);">Tab 1< /a></li>
    <li><a id="tab2" href="#" onclick="showTab(2);">Tab 2< /a></li>
    <li><a id="tab3" href="#" onclick="showTab(3);">Tab 3</a></li>
    </ul>
    ...
    
    
    ...
    
    
    
    ...
    
    
    
    ...
    
    

Obviously, you&#8217;d add logic to that showTab() function to show and hide the tabs and keep track of which one is currently selected, adjust their styling etc.

### Adding proper semantics

As it stands, this would render the tabs as a bunch of links in an unordered list, and the tab panels as mere block containers with controls in them. To now add proper semantics to that, so that screen readers recognize these as tabs, we&#8217;ll have to change the same code snippet as follows:

    <ul id="tabs" role="tablist">
    <li role="presentation"><a id="tab1" href="#" onclick="showTab(1);" role="tab" aria-controls="panel1" aria-selected="true">Tab 1< /a></li>
    <li role="presentation"><a id="tab2" href="#" onclick="showTab(2);" role="tab" aria-controls="panel2" aria-selected="false">Tab 2< /a></li>
    <li role="presentation"><a id="tab3" href="#" onclick="showTab(3);" role="tab" aria-controls="panel3" aria-selected="false">Tab 3</a></li>
    </ul>
    ...
    
    
    ...
    
    
    
    ...
    
    
    
    ...
    
    

The above code snippet does the following:

1. It adds the role of tablist to the ul element, indicating that the children are tabs.
2. Adds the role presentation to each of the li elements, indicating that the screen reader should ignore the list items themselves.
3. Adds role of tab to each link, re-mapping their roles to the intended screen-reader recognizable element type.
4. Adds aria-selected to each of the tabs. When you switch tabs in your JS code, update these to reflect the new state of each. **Only one** can be selected at any given time, so the values of two should be false, and only one should be true.
5. Adds aria-controls to each, indicating which panel is referenced by the tab. 
6. Adds a role of tabpanel to each of the div containers.
7. Adds aria-labelledby referencing the actual tab&#8217;s name given to the a elements by the inner text above as labels for the panels.

What your JavaScript now needs to do is:

1. Hide the old tab, by styling the panel1, panel2, or panel3 container as display:none;. **Do not** just move the panels out of the visible view port, as this will not hide them from screen readers! Set the tab1, tab2, or tab3&#8217;s aria-selected attribute to false.
2. Make the new panel1, panel2, or panel3 visible. Set the tab1, tab2, or tab3&#8217;s aria-selected attribute&#8217;s value to true.

The best keyboard interaction model is this:

1. Left and Right arrow keys should move focus to the new tab, but not yet select it.
2. Space should actually perform the hiding and un-hiding of the tab panels and adjust the aria-selected attributes. This is how Mac OS X applications with multiple tabs usually do it, for example many multi-tab panels in the System Preferences. This makes sure the user can change focus multiple times without each focus change triggering a dynamic update and possibly network traffic. Only an explicit step to select a tab should then actually trigger the change, and traffic. Mouse or touch can trigger both at the same time.
3. Tab should immediately move to the first control within the tab panel. It should skip over the remaining tabs.

### Common questions
Why links as tabs?Because they give you focusability for free, without you having to fiddle around with tabindex values.Why list items?Because this is still a list, and only list items are valid children of an ordered or unordered list. 😉 And because this gives you more flexibility in styling.Can I use images instead of text?Yes, provided the images have alt attributes with proper labeling text set. Do refrain from using the title attribute.Why hide the unselected panels via display:none;?Because otherwise, they&#8217;d be cluttering up the screen reader user&#8217;s view even though they weren&#8217;t visible. Screen readers would be able to set focus to items they aren&#8217;t supposed to at the moment and could totally mess up your app logic. Moreover, many screen reader actions could produce unpredictable results because simulated clicks could end up at random screen coordinates. In addition, truly hidden panels free up memory, which is especially handsome on low-spec mobile devices.
You can use other structural elements if you wish, provided you set the ARIA roles and attributes as described above, and also remove those elements from the screen reader&#8217;s view that are not needed.

### When to **not** use tabs semantics

There are many circumstances where tabs are not the appropriate semantics. For example, if you have a web site, not a web application, that has categories such as &#8220;Home&#8221;, &#8220;Products&#8221;, &#8220;Support&#8221; etc., which may **look** like tabs, but actually load new pages, then these are **not** tabs in the intended sense, but should **in all cases** remain links, because that&#8217;s what they are. [Bryan Garaventa wrote more about this here](http://www.linkedin.com/groups/Why-you-should-not-use-4512178.S.134719297).

If it were marked up correctly, the [mobile Twitter site](http://mobile.twitter.com) would be an ideal candidate for appropriate tabs semantics. Specifically, the &#8220;Home&#8221;, &#8220;Connect&#8221;, &#8220;Discover&#8221;, and &#8220;Me&#8221; items at the top. They don&#8217;t open new pages, but switch a view dynamically instead.
