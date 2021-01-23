---
title: The importance of placement of HTML elements in a document
slug: the-importance-of-placement-of-html-tags-in-a-document
date_published: 2009-10-07T16:50:59.000Z
date_updated: 2009-10-07T16:50:59.000Z
---

This was an issue I ran into today, so thought I&#8217;d blog about it.

When dealing with dynamically added and removed content on web pages, there are usually two approaches: One approach is to show and hide content in the place where the trigger for this change is. An example of that is the [Mozilla Corporation Careers](http://www.mozilla.com/en-US/about/careers.html#feature-meet) page. Clicking one of the links &#8220;Meet Mozilla&#8221;, &#8220;The team&#8221;, &#8220;Life at Mozilla&#8221; links will replace one text portion with another, in the same place, right below the list of these items.

The second approach is to add the new content to the end of the HTML document, and then use CSS to position the content on top of, or in the place of, a specific location visually. An example of this is the [jQuery Thickbox demos](http://jquery.com/demo/thickbox/) page. Clicking one of the demo links, for example for the image, the gallery or the &#8220;keep in mind&#8221; demo, the text is being added to the end of the HTML, probably by some document.addXxx method in JavaScript or the like.

Visually, these two methods may vary a bit in styling, but have the same effect: You click something, and some text or images become visible or are being replaced by something else, without a page being reloaded.

For a screen reader user, the two methods make a profound difference. In order for a screen reader to present a web page to the blind user, a form of accessible tree traversal or even DOM or HTML parsing has to take place so the screen reader knows which elements there are, and in what order they appear. CSS styling is then used to determine whether something is hidden or visible, formatted as a block or the like. Also, some attributes for text etc. are being derived from this information. But positioning information is always secondary to the actual order in the source HTML, be it hard-coded or generated via JavaScript.

To put it in other words: Even a three-column page layout will appear to the screen reader user in a single-column, top-to-bottom fashion for easier readability.

The consequence is that, in the second example, the new content will always be found at the end of the screen-reader-rendered content. On Windows, this is at the end of the virtual buffer, even below the copyright notice or the like. On Linux and the Mac, one also has to use navigational methods to get to the end of the rendered content (for example by navigating all the way to the end with Orca or by getting to the last element while interacting with the HTML content on Mac). This is true across browsers (Firefox, IE, Safari). So to read the content that newly appeared in the thickbox, the user has to scroll all the way to the end, do whatever is necessary there, and then return to the top and navigate down using heading navigation or the like to find the place they left off. This is not very efficient or intuitive.

The same can be observed on Facebook where if you add a friend, the question whether you really want to send the friend request, will be appended and is found far down at the very bottom of the page for a screen reader user. Visually, it appears in the vicinity where a sighted user clicked the &#8220;Add as friend&#8221; button.

The Mozilla example, on the other hand, replaces the text right below the list, making it easily accessible within the context the user is currently working in anyway. The user never has to leave the general vicinity to get from introduction to the &#8220;Meet the team&#8221; etc. parts. Navigation back and forth is quick and efficient.

Therefore, when you design dynamic content, write an accordeon widget or the like, **please please please** always take the time to chose an appropriate div element in the vicinity of where the user is, and add or remove the dynamic content there instead of taking the maybe easier, but far less intuitive, route to simply dump to the end of the document node&#8217;s children and then use some weird styling to craft it visually. You&#8217;ll help all screen reader users visiting your site by offering them more efficiency in that they don&#8217;t have to navigate between chunks of the content that are far apart.
