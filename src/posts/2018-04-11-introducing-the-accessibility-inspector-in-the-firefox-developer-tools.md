---
title: Introducing the Accessibility Inspector in the Firefox Developer Tools
slug: introducing-the-accessibility-inspector-in-the-firefox-developer-tools
date_published: 2018-04-11T13:46:50.000Z
date_updated: 2018-04-11T13:46:50.000Z
tags: [DeveloperTools, DevTools]
---

The built-in Firefox Developer Tools just received a new family member. The Accessibility Inspector allows you to inspect your website&#8217;s exposure to assistive technologies.

## Introduction

As a web developer, have you wondered what your web site might look like to a screen reader for the blind? Have you wondered why you get reports that some people with disabilities cannot use your web application? Or, as a blind user, have you been frustrated by your screen reader not reading something right on a web page you were visiting, or which were even putting up barriers that make it impossible for you to get anything done on such a web page?

The accessibility team is proud to present the new Accessibility Inspector in the Firefox Developer Tools. This compliments the inspection tools that are already there, and works directly with the accessibility engine that also delivers information to screen readers or other assistive technologies. It has several features:

1. Allows you to inspect the hierarchical tree of objects that was created from the information provided by the web page. For each node, a separate tree gives you all the relevant information such as role (What is this thing?), name (And what does it do?), states, and other information that assistive technologies use to create a suitable representation for their target audiences.
2. A visual highlighter that accompanies the selection within that tree, giving a visual indication of which element is being referenced by this object.
3. An ability to jump from the accessible object&#8217;s properties straight into the HTML inspector and inspect the element this accessible object was created from.
4. The ability to jump from a selected HTML element in the HTML inspector to the corresponding accessibility object and inspect its properties.
5. A context menu item in the main browser that allows you to inspect a given element&#8217;s accessibility. This will open the Accessibility Inspector with the relevant node already selected and its properties displaying.
6. It is accessible for mouse, keyboards, and assistive technologies such as screen readers.

## How do I get my hands on it?

The fully functional inspector debuted in the April 11, 2018, [Firefox Nightly build](https://nightly.mozilla.org/) and will make its way into Firefox 61, due for beta in May, and for release in July of 2018. You can download the Nightly build for desktop now and try it out, or wait for beta and dev edition to get it in May if you like.

## How does it work?

### Enable it first

Normally, the inspector is part of the toolbox. However, if it is not, you need to manually enable the panel once so it will show up in the tool box. Go to the Settings And Feedback menu button in the Developer Toolbox, select Settings, and tab to the Accessibility checkbox. Press Space to check it. This will add it to the toolbox, and also enable the relevant context menu items.

### Enable the engine

If you are a screen reader user or using other assistive technologies in Firefox by default, the following step can most likely be skipped. For all others, you need to enable the engine.

Select the Accessibility panel. There is a button that indicates whether accessibility is enabled or not. To inspect a web page, you must enable it.

### Inspect elements

Now that you&#8217;ve got it up and running, load any web page of your liking, and right-click an element to inspect its accessibility. You&#8217;ll notice that below the already familiar Inspect Element item, there is also an Inspect Accessibility item now.

This will open the Accessibility Inspector and drop you right into the node that is relevant to the element you right-clicked on. You can now see or listen to the information. Tab to the other panel and arrow up and down through the information such as name, role, description, states. Some of these can be expanded, like States, Actions, and Attributes. Shift-tab back to the objects tree and select another tree. Or, focus the DOM Node element and press Enter to be taken right to the HTML Inspector tree where you can inspect the actual HTML element and its vicinity.
[![Screenshot of the accessibility inspector panel showing properties of an object such as name, role, description etc.](/content/images/wordpress/2018/04/b0587-panel-with-properties.png?w=1000)](/content/images/wordpress/2018/04/b0587-panel-with-properties.png)Screenshot of the accessibility inspector panel showing properties of an object
If you are sighted, you can also observe that, as you navigate the accessibility object tree, a visual highlighter indicates which element this object corresponds to.
[![A visual highlighter indicating the actual on-screen object corresponding to the selection made in the accessible objects tree](/content/images/wordpress/2018/04/53e98-picker-highlighter.png?w=1000)](/content/images/wordpress/2018/04/53e98-picker-highlighter.png)The highlight that accompanies the selection in the accessibility inspector object tree.

### Turning off the engine after you&#8217;re done

If you do not normally use an assistive technology in Firefox, after you&#8217;re done inspecting, you might want to turn the accessibility engine back off. The same button that initially started it will also turn it off for you.

If you are a screen reader or other assistive techhnology user, do not worry. If the Inspector detects that accessibility was already running when it was launched, it will not let you turn off the engine, so accessibility isn&#8217;t being pulled out from under you accidentally.

## What this Inspector is *not*

This inspector is *not* meant as an evaluation tool. It is an inspection tool. So it will not give you hints about low contrast ratios, or other things that would tell you whether your site is WCAG compliant. It helps you inspect your code, helps you understand how your web site is translated into objects for assistive technologies. It is a good tool to prepare for other tools like Axe, Tenon.io, Colour Contrast Analyzer or whatever tools you might want to use to actually evaluate your site for accessibility.

## An example

So, let&#8217;s say you encounter [this little broken form](/content/images/wordpress/brokenForm.html) (opens in new tab):

    <html><head><title>Testing a broken form</title></head>
    <body>
    <form action="post">
    <label>E-mail address:</label><input id="email" type="email" /><br />
    <label>Password:</label><input type="password" id="pw" /><br />
    <input type="submit"/><input type="reset"/>
    </form>
    </body>
    </html>

Those experienced with accessibility immediately see the two errors here, but let&#8217;s see. Load this page into a new tab. Focus the first input, press the context menu key and select Inspect Accessibility.

The inspector comes up, and when you inspect the properties of the entry object, you&#8217;ll notice that the name is given as &#8220;null&#8221;. &#8220;null&#8221; is never good, because it means it is not present, which means a screen reader will not automatically indicate what this field is doing, or what input is needed. There *is* a label, yes, but it is not properly associated with the input field.

You see the label object right above the entry field. Select that one, then go to the DOM Node item in the properties and press Enter.

You&#8217;ll be taken to the HTML inspector, and placed on the label element. To associate the label with the input, we need to add a **for** attribute to the label whose value is the ID of the input field we want to associate this label with. To do this:

1. Press Enter to go into editing mode for the element.
2. Tab to the Add New Attribute button and press Space
3. Enter `for="email"` and press Enter to save.
4. Press Escape to leave editing mode for the element and return to the tree.

Now, arrow down to the input, press your context menu key, and select Inspect Accessibility Properties. This will take you back to the properties of the entry field in the Accessibility Inspector. Notice that the name has now changed from &#8220;null&#8221; to &#8220;E-mail address:&#8221;, which is exactly what we want it to be.

Go ahead and fix the password field as well! Just remember that the above actions will not save the changes back to your file, you&#8217;ll have to apply the changes there separately, and then you can reload it in Firefox to test whether the changes indeed fixed all the problems.

## A note about right-clicking an item

In the above example and descriptions, I was purposely referring to right-clicking instead of using the context menu key when on a web page. The reason is that the context menu key only works on focusable elements, not on any node or text. So, to get the best results, even when you&#8217;re a screen reader user, use your mouse emulation to route the mouse pointer to the element you want to inspect, and use the right mouse button simulation to right-click. Refer to your screen reader&#8217;s documentation if you are unsure how this is done.

We hope to provide a better solution for this in the future.

## Getting in touch

Naturally, we would like to hear what you think. We are super excited, and we hope you will be, too! But there may always be cases where things might not work. So to report that to us, or just share how much you like the inspector, you can find us in these locations:

- On [Mozilla&#8217;s IRC server](https://wiki.mozilla.org/IRC), in either the #accessibility or #devtools channels.
- On the [HTML DevTools Slack](https://devtools-html.slack.com), in the #a11y-inspector channel.

Of course, you can also comment below this blog post.

## Credits

The screenshots were provided by my team mate Yura Zenevich, who is also the author of the Accessibility Inspector.

[What is this thing, and what does it do?](https://www.youtube.com/watch?v=YLihNhn_MO4) (Youtube link) is a talk given by Karl Groves on several occasions, and is a great introduction to the accessibility tree. This is a worthwhile watch for both accessibility novices and experienced professionals.
