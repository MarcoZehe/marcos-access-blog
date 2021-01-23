---
title: "Easy ARIA Tip #4: Landmarks"
slug: easy-aria-tip-4-landmarks
date_published: 2009-10-31T09:33:01.000Z
date_updated: 2009-10-31T09:33:01.000Z
---

Yes, they&#8217;re back! This is the fourth Easy ARIA Tip in a trilogy of Easy ARIA Tips. 🙂

This week, WebAIM [published](http://webaim.org/blog/screen-reader-user-survey-results/) the [results of their second screen reader survey](http://webaim.org/projects/screenreadersurvey2/). One of the things to note for me was that not many users seem to be aware of a feature in the WAI-ARIA (Accessible Rich Internet Applications) specification called [landmarks](http://www.w3.org/TR/wai-aria/#roleattribute_inherits). This article aims to provide an easy to follow guide to implement landmarks in a matter that makes sense, in the hopes that more folks will start using them in their web projects and more screen reader users will take notice and utilize them in their daily surfing experience.

### What the heck are they?

WAI-ARIA landmarks are a new method of providing easy navigation to certain points or hot spots on a page. Traditionally, this is being accomplished by providing visually hidden &#8220;skip links&#8221; to various anchor points. A commonly encountered one is the &#8220;skip to main content&#8221; or similarly named link that provides a quick way to navigate past all the navigation, search etc. features a site may have, and start reading directly at the main content of a page.

However, as the above cited survey results show, skip links aren&#8217;t nearly as important for most screen reader users as a good heading structure is. Skip links are usually also very useful for keyboard users (who need not necessarily be screen reader users).

However, one of the biggest problems is that &#8220;skip links&#8221; aren&#8217;t consistent. They might be called &#8220;skip to&#8230;&#8221; or &#8220;jump to &#8230;&#8221;, &#8220;skip past &#8230;&#8221; etc., and they may vary in what features they provide. This may also cause complaints for usability. I&#8217;ve been demoed pages that provide 20 or so skip links at the top before an actual link to a site feature is encountered. Needless to say, it didn&#8217;t provide a skip link for the skip links. 🙂

WAI-ARIA attempts to rectify that by standardizing a certain number of navigational anchor points to allow easy and quick access to portions of a page that are frequently needed.

### How are they added?

Landmarks are added to a page by specifying the *role* attribute on certain HTML elements. If you view the source of this blog page, for example, and search for the word &#8220;role&#8221;, you&#8217;ll find it added to some HTML elements that start blocks of interest. The addition is very simple, the only thing that really needs to be done is give some thought about placement of the landmarks.

Screen readers such as JAWS version 10 and above, Orca, NVDA from version 2009.1beta and above recognize WAI-ARIA landmarks in Firefox 3.0+ and IE 8. They usually provide one of their quick navigation keys to navigate to each landmark in turn, and JAWS and NVDA also provide lists of landmarks on a page. NVDA even shows the nesting of landmarks.

### The different landmarks

Below is an explanation of the intention of each landmark from a practical standpoint.

#### banner

The **banner** landmark denotes the portion of a page where a company logo, site slogan or the like would be found. Providing this landmark will allow a screen reader user to easily access that information to, for example, copy the text info to paste somewhere for providing information, correct spelling etc.

#### complementary

the **complementary** landmark denotes a section with complementary information to the main content of the page. For example for a page that shows a single blog post, the complementary information could be links to related articles.

#### contentinfo

The **contentinfo** landmark denotes the section of a page that contains the copyright notice, link to privacy statement etc. It can also be used to denote a section with footnotes, but I&#8217;ve not seen an example of that yet.

#### main

The **main** landmark denotes the section of a page that contains the main content. This is equivalent to the target of a &#8220;skip to main content&#8221; link. On a page showing a single blog post, this is obviously where the title of the post is which starts the article.

Note that it is explicitly stated in the WAI-ARIA spec that this landmark should only appear once in a document. I believe the reason is obvious: If you had more than one main content on a single page, you should split that into two pages. 🙂 All other landmarks can appear more than once (in fact it makes sense for them to do so in some circumstances), but main should only appear once.

#### navigation

The **navigation** landmark denotes one or more sections of a page that contain navigational items. Usually these are links to various features of your site.

#### search

The **search** landmark denotes the section of a page that starts your search feature. This is not necessarily the search textbox itself, but starts usually at the search form level to also include advisory information or the label you might want to include for your search.

#### application

The **application** landmark is a special landmark in that it does not just provide an anchor point but also usually causes different screen reader behavior. The application landmark denotes a section of a page that should not be treated like just any other ordinary web content, but provides features that are more closely related, in concept, to what a desktop application would provide. An example is the Search feature on the Yahoo! pages that provides a very rich experience with widgets not found in standard HTML.

When a screen reader encounters such an application section, what happens is, at least on Windows, that they switch out of their virtual document reading modes into a more interactive mode called &#8220;Focus mode&#8221; or &#8220;forms mode&#8221;. In addition, contrary to normal form elements, they usually prohibit switching back to virtual mode as long as focus is inside the application section. The user is required to interact with whatever keyboard navigation and other feedback (for example through the use of live regions) the web app author provided.

Having said that, the application landmark is usually not found when it comes to providing simple navigation anchors. When the application role is used, you should expect the web author to also have implemented an accessible rich internet application experience and can expect widgets to appear you wouldn&#8217;t find in your standard HTML element. If someone uses the application landmark without providing real rich widgetry, it&#8217;s probably a bug on their part and they&#8217;d most likely appreciate a friendly hint. 😉

Personally, I don&#8217;t consider application to be just another landmark role. For me, application clearly belongs more in the space of true rich internet application development. I just mention it here because it is listed in the same section in the specification.

### What about validation?

Oh yes, that may be important to some! The current W3C validator doesn&#8217;t validate XHTML+ARIA or HTML+ARIA yet, which includes the landmarks. However, if you don&#8217;t care, or you can convince your client that landmarks are a viable new feature for their sites, Steve Faulkner of The Paciello Group has [worked out a way](http://www.paciellogroup.com/blog/?p=107) to validate the landmarks.

### Further reading

A slightly different [approach to explaining the WAI-ARIA landmarks](http://www.paciellogroup.com/blog/?p=106) has been done by Steve Faulkner of The Paciello Group in January of this year.

### Previous Easy ARIA Tips

1. [aria-required](http://www.marcozehe.de/2008/02/29/easy-aria-tip-1-using-aria-required/)
2. [aria-labelledby and aria-describedby](http://www.marcozehe.de/2008/03/23/easy-aria-tip-2-aria-labelledby-and-aria-describedby/)
3. [aria-invalid and role &#8220;alert&#8221;](http://www.marcozehe.de/2008/07/16/easy-aria-tip-3-aria-invalid-and-role-alert/)
