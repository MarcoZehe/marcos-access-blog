---
title: Rethinking Web Accessibility On Windows
slug: rethinking-web-accessibility-on-windows
date_published: 2017-09-29T02:35:48.000Z
date_updated: 2017-09-29T02:35:48.000Z
---

For the past 18 years, screen readers on Windows have had a particular way of presenting web content to their users. This model no longer scopes well in light of modern web applications and dynamically changing web sites. The model, therefore, needs to be reimagined and modernized.<!— more —>

## A little bit of history

In 1999, the two major screen reader vendors on the market, JAWS and Window-Eyes, released new versions of their software that introduced a new way of web browsing for blind and visually impaired users when using Microsoft Internet Explorer. Web content was represented in a document-like form, much as was known already from word processors such as Microsoft Word. Semantic information like links, form controls, and later headings, lists and tables, were inlined and spoken accordingly.

To achieve this, the screen readers interfaced directly with IE and slurped in all the HTML of the currently loaded web page. Then, they interpreted the HTML themselves to build up the virtual document, sometimes also called virtual buffer. Virtual, because it was not a real document, but a close approximation of one that used very similar navigation paradigms as a real document.

The advantages of this approach were that the screen reader always knew everything there was to know about the mostly static web pages of the time. They could also perform operations such as listing all links on a page, or all form fields. Later, the vendors also introduced so-called quick navigation keys. By pressing a single letter, like h, for example, the user can move to next items of a particular type. That way, users could quickly jump to the next heading, list, table, form field, visited or unvisited link, etc.

However, as the web became more dynamic, first in the mid 2000s through mechanisms such as AJAX, and later through full-fledged JavaScript frameworks, the virtual buffers began showing signs of inadequacy. Because they needed to be kept in sync with the actually loaded document, a lot of communication had to take place between the browser and screen reader while the user was operating the page, and content be changed under the user’s nose, often dramatically changing the shape of the virtual document.

### New browsers, new APIs

When Mozilla began producing Firefox in the early 2000s, it became apparent that it would not only run on Windows, but on Linux and Mac as well. On Linux, the requirement was that a full-fledged accessibility programming interface would have to be used, and no own HTML parsing was wanted by the assistive technology. The saying went: The browser already knows everything, why should the assistive technology have to reinterpret it again? The browser should, instead, tell the AT what it had through a set of standard programming interfaces.

And because on Windows, there was a project being started called[NVDA](//www.nvda-project.org/“), a free and open-source screen reader, the same requirements were formulated for this platform as well. Instead of devising a whole new API, it was decided to enhance an existing accessibility programming interface called Microsoft Active Accessibility (MSAA), and add to it all the pieces that it was lacking to support full-fledged web content. The result was named IAccessible2, to indicate that IAccessible, the official interface name for MSAA, had been enhanced.

Around the same time, Apple started implementing accessibility support into WebKit, the engine powering the Safari web browser on OS X, now called MacOS. It, too, went the way of defining all that was needed to know for VoiceOver, Apple’s screen reader, through a set of standardized interfaces, instead of having VoiceOver interpret the HTML itself.

And when Microsoft started its work on Edge, the successor to Internet Explorer, it took the same approach, no longer allowing screen readers access to the raw HTML, and instead defining web content through its successor to MSAA, called UI Automation, or UIA.

## Differences in architecture

On Windows, there are two ways to communicate between applications when using MSAA. One is called in-process, the other out-of-process. In the in-process case, one application injects part of its code into the other application’s running instance. It essentially becomes part of that other application. In our case, the screen reader injects part of its code into the browser, in order to get at the information for building the virtual document fast.

The other method, where the screen reader would communicate with the browser across application boundaries through a set of protocols defined by the operating system, is between 12 and 50 times slower than the process-injection method, depending on the actual queries being made. So depending on the size of the loaded web page, loading it into a virtual buffer could take under 1 second when in-process methods are being used, versus 12 to over 40 seconds when doing it across process boundaries. The advantage of in-process methods is therefore very clear.

The disadvantage, however, is that either component could bring the other down with it when crashing. If the screen reader module had a problem and crashed, it could take the browser down with it, being part of it now. Likewise, if the browser crashes, it can render parts of the screen reader inoperable. There are also security implications, and rumor has it that process injection might not be possible for much longer.

On other platforms such as Linux and MacOS, there is no such thing as injecting parts of one process into another. Inter-process communication, such as between an assistive technology and a browser, has to always happen across process boundaries and through standardized protocols. Additionally, Microsoft no longer allows process injection when using UI Automation to communicate between applications. Therefore, all communication between Microsoft Edge and a screen reader has to happen out of process, or in some cases through a specialized UIA bridge between applications.

## Retire virtual buffers

As a consequence, both Orca, the dominant screen reader on Linux, and VoiceOver on MacOS and iOS, have no concept of a virtual buffer as is known from Windows screen readers. Moreover, due to the above mentioned limitations, for Microsoft Edge, NVDA also no longer uses a virtual buffer concept to represent web content when browsing with Edge.

So, to make screen readers on Windows future-proof for the next 10 to 20 years in web content, it is time to retire the virtual buffer concept and work with the notion that screen readers no longer know everything about a whole web document at any given time, but only parts of it that the user is currently working with. Once process injection is no longer possible on Windows even when using MSAA or IAccessible2, trying to maintain a full virtual buffer and keeping it dynamically updated is no longer going to be feasible in a performant manner.

## Browsers must take more responsibility

To achieve equality with already existing functionality in screen readers, and therefore ensuring competitiveness of current users with their sighted peers, browsers must take on several of the tasks the screen reader previously performed inside its virtual buffer. Some of these are:

- Provide means to fetch all items of a certain type on the currently loaded web page, for example all links, all headings etc.
- Allow a means to jump rom the current position to the next heading, table, list, or other desired particular element without the screen reader having to crawl through all accessible objects in-between. The browser knows much more about the loaded web content than the screen reader, so should leverage that and help with this type of navigation by providing the next relevant object directly.
- Fetch a current range of text and all its attributes and other semantic information so the screen reader can give the user a proper representation of what’s hot.
- And other things that will need to be determined as this transition happens.

Examples where parts of the above already exist are the AT-SPI collections on Linux, and the APIs introduced in MacOS 10.11 El Capitan into Safari and Chrome to make navigation and fetching particular lists of items with VoiceOver much more responsive. Especially the Linux case, though, shows that there is still room for improvement. AT-SPI collections can do some things, but not others that would help performance greatly when quickly navigating by headings or lists, for example.

## Examples

The following two examples demonstrate how certain types of interaction work now, and should work in the future on Windows.

### Moving to next heading

A very common task is to move to the next heading. The way screen readers work now is that they suck in all the web content at once, always having it at the ready when the user wants to do quick navigation. The user invokes the Next Heading command. The screen reader crawls through its document and places the virtual cursor onto the next heading. The browser, on the other hand, is totally unaware that the screen reader user has changed reading context. The screen reader might or might not ask the browser to focus on the new element if possible.

In the future, the screen reader should tell the browser to give it the next heading relative to the current reading position. The browser then does the searching, which it can do much faster than the screen reader across boundaries, and provide the new location back to the screen reader, which in turn will then read out the information, and both browser and screen reader are now aware of the new reading position.

### Inserting new content dynamically

When using Twitter in the so-called forms or application or focus mode, in which the user interacts with the browser directly, the user can use Twitter’s keyboard shortcuts. But because the user might switch back to virtual mode at any time, the screen reader needs to keep its buffer up to date at all times regardless of whether the buffer is actually being used.

So while the user is merrily reading tweets, they suddenly are being notified that new tweets were added at the top, and to press the Perios key to load them. By default, Twitter loads 50 tweets at once, and expands to more once the user reads the last two or three currently loaded tweets. Now the user has maybe reached a number of 70 or 80, and 30 new are waiting to be inserted.

The user presses Period. Twitter loads the new tweets and puts focus at the top. The screen reader gets notified that the list of previously 70 items now has expanded to show 100. But because the whole list layout has changed, the most efficient way is to simply replace the old list in the buffer with the new one. So the screen reader goes and removes the old list, and crawls through the hierarchy and fetches the new 100 list items, which may each consist of 6 to up to 10 or more accessible objects, and rerenders it. This will take some time, even when done in-process.

The future way of doing this is far less processing power intense. The new tweets come in, the user presses Period, the browser adds the items, Twitter changes focus to that newest item, and tells the screen reader. The screen reader now only needs to go and ask the parent list container about how many items it now has, so it can tell the user. It does not need to crawl through the whole list because there is no buffer to maintain.

This is why, for example, the experience of using Twitter on MacOS in Safari or Chrome is such a much smoother experience than on Windows with, for example, Firefox or Chrome and NVDA.

## In conclusion

At Mozilla, we do want to start a project to enhance current APIs to allow screen readers to move away from the virtual buffer concept. The ideas are already floating around between team members. And because NVDA is also open-source, we can use an experimental branch to actually prototype approaches and check the theory against the practicality of day to day use. Sometimes, theories sound good, but the practice then falls on its face.

We expect to fail at some first attempts, learn from the experience, and reiterate. The end goal is to give an as good as, if not better, experience for browsing the web and being ready for dynamic web applications built in frameworks such as Angular or React, or being more efficient in complex web applications such as Gmail or Slack than we are now on Windows.

And we certainly hope that our friends at other browser accessibility teams such as Chrome or Edge, as well as commercial assistive technology vendors,  will take an interest in what we do, and in a collaborative fashion, we’ll all strive to give our users better experiences.

The web accessibility on Windows needs to grow up now that it’s 18, and we want to try and make this happen!
