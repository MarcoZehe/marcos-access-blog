---
title: The web accessibility basics
slug: the-web-accessibility-basics
date_published: 2015-12-14T16:02:40.000Z
date_updated: 2015-12-14T16:02:40.000Z
tags: [AltText, ColorContrast, FormLabeling, Graphics, HTML, HTMLAccessibility, WCAG, WebSemantics, WebStandards]
---

I&#8217;ve been asked again and again over the years what the absolute basics of web accessibility are. And while I always thought that it is not so difficult to find resources about these basics, the recurrence of that question prompted me to finally write my own take on this topic. So here it is, my list of absolute web accessibility basics every web developer should know about.

## Alternative text for images

One of the questions I get asked the most is &#8220;which graphics require alternative text&#8221;? The answer to this question has three parts:

1. *All*[img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tags require an alt attribute. This goes *without exception*. Everything else is an error. If you have an img tag in your HTML without an alt attribute, add it **now**.
2. Every alt attribute has to have a value. And here is where it gets interesting. If the image is important, because it is part of an [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) tag, for example, it has to have meaningful text. What is a best alt text is still a point of sometimes heated debate, but the guideline is to use best judgement. Describe the image briefly, but avoid the phrase &#8220;image of&#8221; or &#8220;graphic of&#8221;. Because screen readers already know it is a graphic. In addition, every image that adds context to the text of a page that is important in understanding the text needs to have meaningful alternative text. If, on the other hand, an image is purely decorative, its alternative text consists of an empty string &#8220;&#8221;. That is simply alt=&#8221;&#8221;, two consecutive quotes. But the alt attribute *has* to be there even for these decorative images, it must not be omitted.
3. It is called alt attribute, alternative text, but never alt tag. alt is an attribute, not a HTML tag.

All the above also applies to SVG graphics. And if you&#8217;re really modern and use the [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element, the rules apply there, too.

Using proper alternative text does not just help blind and low vision screen reader users. It also helps on mobile where images sometimes cannot be loaded, for example over slow connections. So by implementing proper alternative text, you help many more people than you might initially imagine.

## Labeling form fields

Another very common question I get, and a very common error I see on many many web pages even in 2015, concerns the labeling of forms and form fields. In fact, when dealing with many web developers, I am surprised that many don&#8217;t even seem to be aware that there is a [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) element, for example. So here are the most common rules about form field accessibility:

1. Most [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, as well as the [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) elements, need an associated label element that states the purpose. The one exception are those that produce a button, like the types of button, reset, and submit do. But every other, be it text, checkbox, password, radio (button), search etc. require a label element to be present.
2. The association between such an input and label happens by giving the input a unique ID, given by the id attribute on the input, and the label&#8217;s for attribute, which points to said ID. To test that your label actually works, click on the label, not the input, select or textarea. Does the said element still get focus? If so, you did things right. This increases the click target for many audiences, including mobile devices where bigger touch targets are always advantageous. And it associates the label text to the input for screen readers unambiguously. Do **not**, under **any** circumstances, use the placeholder attribute as the label for an input element! [Read here, why](https://www.paciellogroup.com/blog/2011/02/html5-accessibility-chops-the-placeholder-attribute/).
3. Give [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) elements inner text, or if it needs to be a graphic, label it properly with alt text that corresponds to what a textual button label would be. See the section on alternative text for images above. Also, as recommended in the MDN article linked to, prefer button elements over html:input type=&#8221;button&#8221;, because it is more flexible for styling. Also, this is **the** go-to element if you have anything that is a div or span and that you want to make clickable with hundreds of kilobytes of JavaScript code. So before you do that, use button instead.
4. A series of radio buttons go inside a [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) element to group them together. The first element inside this fieldset is the [legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) element that contains the over-arching question or label for this group of choices.
5. Fieldset and Legend should also be used if grouping together different sections of a bigger form for better readability. The fieldset element can take more than just radio button inputs.
6. Label required fields by providing the HTML5 required attribute on the input as well as stating in the label that a form field is required. This can be done by either providing the word &#8220;required&#8221; as part of the label, or putting explanatory text at the *top* of the form telling users that fields marked with an asterisk are required. Do not denote required fields only by a different color. Screen reader users won&#8217;t be able to recognize those, and color-blind users, which are 8 percent of the worldwide male population, will also have a hard time finding these.
7. Use appropriate input types for e-mail, URL, phone number etc. Mobile users will thank you because these will bring up the correct keyboards for the information asked. Also, it will make evaluation easier for you because the browser will immediately know if the correct information, e. g. a valid e-mail address, was entered. Modern browsers will do that, and if you need to support older browsers, they&#8217;ll automatically fall back to text, which is an appropriate fall-back.
8. Make sure keyboard visibility is always guaranteed. If you see a frame appear around a form field when you click inside it, you should also see it appear when you walk through your form using the tab key on your keyboard. If it does not apear, check your :focus and :active stylings for these form fields in your CSS.

If you need something a little more fancy-looking, please *do not* fall back to using clickable span and div elements. Because if you do that, you&#8217;ll have to add roles, state handling, keyboard focusability and acting on key presses all by yourself. If you use form elements and help yourself with some span elements for styling inside the label, for example, you will get all the accessibility for free, including keyboard, screen readers etc.

## Document structure

Believe it or not, but at its core, the web is a document-based structure. So even when we create fancy web applications such as Gmail, the heart of it is a document. And there is a lot you can do with documents semantically that will get you usually 80 to 90 percent of the accessibility for free. For example:

### Heading structure

Noticed the different headings and sub headings in this blog post? Well, there are elements for that. They are called [heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements). And they give you exactly that, a six level heading structure to denote a main heading, secondary sub headings, and sub headings to those for sub sections, like this one, for example. This gives your document a logical, easy to follow structure. Have you ever wondered how Wikipedia puts together its table of contents for each article? They use the logical heading structure for that, too!The h1 through h6 elements are unambiguous in telling screen readers, search engines and other technologies what the structure of your document is. Do not mix unless the structure requires it, do not skip levels if possible, since that will disrupt the logic. And never ever again use something like a div with a class of &#8220;heading1&#8221; in your code. Screen readers, search engines, and other technologies will not know what to do with those. They will know how to treat your headings properly, though!

### Landmarks

There are some more ways to structure your document&#8217;s contents. By landmarks, for example. Landmarks can be [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article), [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside), [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer), [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header), [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main). Adding such landmarks appropriately can help further provide sense to your document and help users more easily navigate it.

### Lists

HTML knows a whole bunch about lists. There are [unordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and [ordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) lists that are exactly what you&#8217;d expect them to be. You can add numbering schemes, even nest them, and the browser will do the rest for you. You can style them the way you want them to look in CSS and thus provide even more structure and meaning to your document&#8217;s content. You&#8217;ve already seen ordered (numbered) lists in this blog post.

There is also a list type for definition term and explanation groups. The MDN page on the [dl](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) element has some great examples of use.

### Others

Did you know that HTML has an element to denote paragraphs? It is called the [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) element. For long citations that require their own paragraphs, use [blockquote](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote). For short, inline, quotes, use the [q](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q) element. Visual separators can be inserted via the [hr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr) element.

For all these elements, use CSS to define indentation, separation between paragraphs etc. Those will not impact the semantics, but you are then free to adjust the visuals to your liking or your client&#8217;s requirements.

## Tables

Tables are its own special case. So much can go wrong, and historically, so much abuse has happened to this poor [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) element and its sub elements! Especially layouts were done for a long time using tables, before HTML 4 and the onset of CSS. But I still find in modern web applications in 2015, cases where layout tables are being used to align form fields and their labels to one another. *STOP DOING THAT*! **PLEASE**!

The table element is a very useful element for creating data representations. Product detail listings, price lists etc. Also, shopping carts with quantities, sub totals and totals, and many other structured data collections can, and should, be put into data tables. Here are some tips to help you:

1. Add a [caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element to give the table a proper heading or summary.
2. Use [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) elements to denote column and row headings. Make use of their scope and other attributes to clearly associate what belongs to which.
3. Use other structural table elements denoted in the &#8220;see also&#8221; section of the table element documentation to further structure your table.
4. If a table gets too complex or has multiple sections that don&#8217;t necessarily have to be in one table, split them up into several data tables.

For more information, I&#8217;d like to refer you to the friends at WebAIM who have put together a very good two-pager on the [accessibility of HTML tables](http://webaim.org/techniques/tables/).

## Some more quickies

Here are some more things you can quickly check and make sure when you write HTML, CSS and JavaScript.

### Separation of concepts

HTML defines your content structure. It is what screen readers and other assistive technologies use to represent your content to their users.

CSS defines how that content looks visually. Its positioning, indentation, padding, margins usually have no bearing on what screen readers render to the user, with one exception: If display: none; or visibility: hidden; styles are used, that content will also not be available to assistive technologies. See my post titled &#8220;[Hiding content untagled](https://www.marcozehe.de/2012/04/24/hiding-content-untangled-hiding-vs-moving-out-of-the-visible-viewport/)&#8221; for more information.

Also, CSS :before and :after text is rendered to assistive technologies. So be aware what you put in there.

JavaScript adds dynamic functionality. Its output must be proper HTML and CSS, too, if it manipulates the DOM. JavaScript dynamics in itself are no problem to accessibility, only some specific behaviors can be, like losing keyboard focus.

The clearer you separate the three, the more maintainable your code will be. Put CSS in their own files, don&#8217;t embed it in the HTML. Put JS modules in their files and don&#8217;t embed JS code in your HTML, either. This will make everything more readable, and remind you that the concepts should really be separate that just happen to work together rather than mingling uncontrollably.

### Color contrast

Have you ever stood in the sunlight or another bright light source with your smartphone or tablet in hand and wondered why you couldn&#8217;t read something? Well, you were suffering from a lack of contrast between foreground and background on the page you were visiting. Low contrast ratios lead to bad readability in bright light situations. For the aging population, as well as low-vision users, low contrasts pose an even greater obstacle in readability. The Web Content Accessibility Guidelines define as a success criteria to have a [contrast ratio of 4.5:1](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) on main content text to its background. You can use tools like the [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) to point at your content and see whether your visuals meet this requirement. Even if you&#8217;re not auditing for WCAG compliance, adhering to this rule of thumb is still a good idea for your own eyes as well as everyone else&#8217;s.

### Keep Pinch alive!

When you develop for the mobile web, and today it is most likely you are, please [keep the Pinch To Zoom gesture alive](http://www.iheni.com/mobile-accessibility-tip-dont-suppress-pinch-zoom/)! Do not disable this gesture vital to many more of your readers than you might think! Pinching to zoom something small on a web page is very common and does not apply only to aging readers as well as those with low vision. If your layout does not cope with the pinch gesture for some reason, you need to revisit your responsive design and fix it. Do *not* disable the pinch gesture on mobile browsers!

## OK, but what about advanced widgets?

If you really need to implement advanced widgets that are not indiginous to HTML, take good care that you implement all aspects of them. I have some information on how to make [clickable widgets that should be buttons or links](https://www.marcozehe.de/2013/04/24/easy-aria-tip-6-making-clickables-accessible/), [tabs and tabpanels](https://www.marcozehe.de/2013/02/02/advanced-aria-tip-1-tabs-in-web-apps/), [some auto-complete widgets](https://www.marcozehe.de/2014/03/11/easy-aria-tip-7-use-listbox-and-option-roles-when-constructing-autocomplete-lists/) and [modal dialogs](https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/) accessible. The friends at SSB Bart Group have a quite current post on [ARIA tree views](http://www.ssbbartgroup.com/blog/creating-an-accessible-aria-tree-control/) up, and Terrill Thompson conducted an extensive test of [ARIA menus](http://terrillthompson.com/blog/474).

## It is all in the semantics

As you may have guessed by now, adhering to semantic structures that HTML already offers today will get you a long long way towards accessible web content. In fact, most web content that doesn&#8217;t need special widgets will most probably be over 90% accessible by just using proper semantics and honoring a few extras that are in styling.

Only if you need to use widgets that are not provided by HTML, will you really have to dig deeper and dive into standards like [WAI-ARIA](https://www.marcozehe.de/2014/03/27/what-is-wai-aria-what-does-it-do-for-me-and-what-not/). But even its first rule is: Don&#8217;t use it if you don&#8217;t have to! Just sugar-coating everything with WAI-ARIA attributes you find in Google somewhere will do more harm than good. I promise!

## In conclusion

If there&#8217;s one wish I have for Christmas from the web developer community at large, it is this: Be good citizens of the web, and learn *proper* HTML before you even so much as touch any JavaScript framework. Those frameworks are great and offer a lot of features, no doubt. But before you use hundreds of kilobytes of JavaScript to make something clickable, you may want to try if a simple button element doesn&#8217;t do the trick just as fine!

Use semantics and save yourselves a lot of extra work, because all the standard elements come with accessibility for free.

Teach others! If you&#8217;ve mastered the skills of a good HTML and CSS citizen, teach others! Get involved, contribute your knowledge and share your wisdom! You&#8217;ll help at least two more than the obvious ones with every contribution you make!

I hope this article helps a little to clarify how easy it is to gain way over 80%, if not over 90% of accessible web content just by following standards and semantics! Please feel free to share your thoughts in the comments below, and if there is something I missed that you think should belong in this collection, feel free to also let me know, and I&#8217;ll add it!

Thank you!

This topic is also available as a [video presentation](https://www.youtube.com/watch?v=zngSYz3pYl4&amp;list=PL95LOQw9SLWxmcZtzBiFuT9HAJKFJnl2n&amp;index=9) held at the 2016 Global Accessibility Awareness Day&#8217;s Inclusive Design 24 event.
