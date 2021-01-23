---
title: Firefox 49 supports the HTML5  and  elements
slug: firefox-49-supports-the-html5-details-and-summary-elements
date_published: 2016-10-05T16:50:05.000Z
date_updated: 2016-10-05T16:50:05.000Z
tags: [details, HTML5, summary]
---

As you may or may not have heard, [Firefox 49](https://developer.mozilla.org/de/Firefox/Releases/49) supports the HTML5 <[details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)> and <[summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)> elements. Both full keyboard support and support for assistive technologies is also available right from the start.

## What are they?

`<details>` and `<summary>` allow to dynamically show and hide blocks of content. For example, when composing a list of frequently asked questions, each question could be wrapped in an details-summary-block, with the summary being the question, and the details following in the rest of the details block. The user can then show and hide the details by just clicking or pressing on the summary content.

Previously, to achieve the same goal, web developers would have had to use a `<button>` element and bind some JavaScript to it that would show or hide some other adjacent block of text by modifying certain CSS properties. And as things go, these turned out to not always be accessible. Either developers used a clickable `<div>` or `<span>` element without proper keyboard support, or forgot to add the proper WAI-ARIA semantics, or both, turning these kinds of dynamic content into a challenge.

Well, no more, as the HTML5 specification addresses these issues with the `<details>` and `<summary>` elements.

## An example

This can be very easily demonstrated. Navigate to the below heading, which is going to be announced by screen readers as a button, with a collapsed state, and then press Space, or use the mouse or your finger (when on a touch screen) to click or press on it. Then, the button will change to an expanded one, and there will be another new paragraph below that heading. You can press on the button again to collapse that paragraph again and make it disappear.

<details><summary><h3> Press me to show what I&#8217;m wearing underneath</h3></summary>

Hahah, thought you&#8217;d find something naughty here, eh? Well, sorry to disappoint, it&#8217;s just a silly rambling of mine. Go ahead and go back up to close me again.</details>

### Code

The code for this is pasted below.

```html
    <details><summary><h3>Press me to show what I'm wearing underneath</h3></summary>
    <p>Hahah, thought you'd find something naughty here, eh? Well, sorry to disappoint, it's just a silly rambling of mine. Go ahead and go back up to close me again.</p></details>
```

The content inside the `<details>` element can be all kinds of elements like lists, tables, sub headings if need be etc. Just remember to keep the proper heading structure when you do it. The fact that I used a heading up there is totally optional, too. It just fits in the heading structure of the blog.

## Conclusion

Hope these elements will now help to create more accessible collapsible content blocks! Other browsers like Chrome and Safari also support these elements, and we&#8217;re hoping that Microsoft Edge will follow lead soon as well!

Enjoy!
