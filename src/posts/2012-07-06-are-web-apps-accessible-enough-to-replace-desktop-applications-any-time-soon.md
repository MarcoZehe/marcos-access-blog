---
title: Are web apps accessible enough to replace desktop applications any time soon?
slug: are-web-apps-accessible-enough-to-replace-desktop-applications-any-time-soon
date_published: 2012-07-06T12:46:48.000Z
date_updated: 2012-07-06T12:46:48.000Z
tags: [NativeApps, Web]
---

I know, reflections on things usually happen at years-end time, but to be honest, this blog post has been in my head for the last two-and-a-half years, and has thus &#8220;seen&#8221; a number of year-ends, so I felt that it&#8217;s now finally time to put it in writing.

I&#8217;ve been with Mozilla since December of 2007 and have seen quite a number of things happening since I started.

- I was there when Firefox 3 came out, a huge leap forward in providing accessibility for modern, ARIA-enabled web content.
- I saw the [birth of Canvas accessibility](http://mindforks.blogspot.de/2012/07/canvas-accessibility.html) and how it finally saw the light in Firefox 13.
- [NVDA](http://www.nvda-project.org) has matured into a true free and open-source alternative that can be used in productive and home environments around the world.
- Accessibility on mobile devices has grown from a very niche market with only a handful of devices to one that is being spread all over the world on millions and millions of devices via iOS and Android, and soon, Firefox OS as well if I have any say in it.

But has all this really managed to revolutionize the way we use the web if we require accessibility to do so? Has the web really grown to become a full desktop application replacement?

It saddens me to say this, but **no, it hasn&#8217;t**, at least for me.

### A few examples

And why is that? Because of the efficiency I can get work done in desktop and even mobile applications over that of their browser-centric counterparts. Let me give you a couple of examples:

#### E-Mail

Despite my [bang-up review](http://www.marcozehe.de/2011/09/21/review-the-all-new-yahoo-mail-web-application/) of the Yahoo! Mail upgrade and its truly desktop-like touch and feel, I haven&#8217;t switched to it, primarily because I use so many e-mail accounts from other providers with folders/labels and what not, that I didn&#8217;t want to switch it all to pop-mail and thus lose the easy access to them from all my devices. Aside from Yahoo! mail, there is no compelling web mailer that I could conceivably imagine using. GMail is by far not ready for productive use for a person using a screen reader and keyboard only, except **maybe** if you want to tie yourself to Chrome and ChromeVox and deal with the hassle of switching back and forth between that and your screen reader which you need to turn off for this to work seamlessly. The web mailer of my self-hosted domains is not even close to being called a web app, with everything loading as a separate document and such. And don&#8217;t even get me started on the web mailer that&#8217;s driving my Mozilla.com e-mail address! That thing was coded in the early 2000s, when there was no ARIA around, and hasn&#8217;t been upgraded ever since. And every web developer knows: Crafting accessibility onto something in the aftermath is always a lot harder and more costly than implementing it right from the start. So should there ever be a re-write of the Zimbra webmail interface, I sincerely hope it&#8217;ll be done with accessibility in mind from the start!

For E-Mail, which is still the primary source of business communication, for me there simply is no alternative to a native desktop or mobile client. Everything else simply takes too long to get to and to use in a productive manner.

Side note: Even Apple still thinks this way. Why else would they have included a new feature in OS X Lion that, once you sign into certain web sites using Safari, offers you to set up e-mail, calendar, instant messaging, and contact accounts for this particular log in automatically?

#### Twitter

If you follow my [Twitter account](http://twitter.com/MarcoInEnglish), and you watch the applications I tweet from, you&#8217;ll hardly ever see &#8220;Web&#8221; in the applications. Instead, you&#8217;ll see Mac and iOS clients, and sometimes the [EasyChirp](http://www.easychirp.com) web client, which is a fully accessible web interface for Twitter. And **why** do I use these native desktop and mobile apps so much more than EasyChirp or even the Twitter web interface? Again because of efficiency. In Yorufukurou, which is the only current accessible Mac client, it takes me exactly one keystroke from the list of tweets to either reply to a tweet or start a new one, and a press of Enter to send off that tweet to the world. In the first case it&#8217;s Enter, in the second it&#8217;s Tab. Reading a tweet is simply one key press away in the up or down direction. On iOS, my primary mobile OS, it&#8217;s a swipe left or right for the previos/next tweet, a double-tap and hold, plus the chosing of an action to start a reply, and the simple tap and double-tap of a button in the upper right-hand corner of my tweets window to start a new tweet.

In Firefox using EasyChirp, the sequence is as follows. This is assuming I have EasyChirp in a pinned (or app) tab which means it automatically loads when I start Firefox:

1. I have to sign in first. EasyChirp does not sign me on, and it doesn&#8217;t keep a Twitter-provided authorization for more than half an hour. Signing in goes as follows:

1. Either find the &#8220;Skip to sign in&#8221; link, press enter, then DownArrow, then Enter again to activate the Sign In link. Or: Use NVDA+F7 to open the list of elements, find the sign in link by typing s and i, and pressing Enter to close the dialog and activate the link. Or: Press NVDA+F to open find, type sign in, and press Enter, hoping to land on the actual sign in link, not the skip to sign in one. Press Enter again to activate once you found the right one.
2. Page loads.
3. Either sign into Twitter, which involves finding the edit box for the user name, typing it in, tabbing, typing in password, pressing Enter to sign in. Or, continue with next step.
4. If auto-signed in or just signed in, press B, which is a quick navigation key to find the next button, which takes me to the &#8220;Authorize app&#8221; button, and press Enter or Space to activate.
5. Another page load.

2. Now we&#8217;ve arrived in the timeline. Posting a tweet involves these steps:

1. Press E to go to the next (first) edit box on the page, which happens to be the &#8220;What&#8217;s happening?&#8221; field.
2. Press Enter to enter focus mode, in other screen readers also called &#8220;forms mode&#8221;. This is a technical necessity and annoyance having to do with the way browsers have to interact with screen readers on Windows in the most efficient manner possible.
3. Type my stuff
4. Because this is a textarea, I have to Tab to the &#8220;Post&#8221; button and then press Enter or Space.

3. If I want to read the timeline, it&#8217;s a combination of using the H and Q quick navigation keys. Every new tweet area starts with a heading that contains the user name, but the actual tweet text is then contained within a blockquote element, so I go H to find out who wrote it, and then skip over the user avatar graphic by pressing the BlockQuote key to hear what they were tweeting.

Anyone kept count? 🙂 And this is with an **accessible** web application! And it doesn&#8217;t even take into account that it doesn&#8217;t really keep your reading position. In other words, If I come back three hours later and have to re-sign in and the timeline comes up, there&#8217;s no way to get back to the point where I left off reading the newest tweet to read back in chronological order. My desktop app can simply sit there, collect the new tweets while I do something else, and when I come back, I can simply arrow around to read the tweets in a chronological order. My mobile client uses the TweetMarker service to remember where I left off and can start from there upon next launch.

#### News feeds

I very recently became a big fan of [FlipBoard](http://flipboard.com) for reading my daily news items on the iPhone or iPad. There is, I believe, no web app that can even come close to providing me with that level of comfort. I&#8217;ve tried various feed reader extensions for Firefox, I even tried coping with Google Reader, but this, again, only works well if you&#8217;re willing to use Chrome and ChromeVox, other browser/screen reader combinations are limited by the techniques they&#8217;re using which appear to be specifically tailored towards Google&#8217;s own offerings. BTW: There&#8217;s not even an app on Mac or Windows that gives me such a reading and usability comfort as FlipBoard does.

#### Web forums

I am currently switching a community from a privately run mailing list to a web forum. I want to get rid of the ugliness that is the Mailman archive for that mailing list, to a properly threaded and manageable way of organizing that community. But to allow easier access from iOS and Android phones, my forum supports the apps [Forum Runner](http://forumrunner.com) and [TapaTalk](http://tapatalk.com). Why? Because reading a web forum in a mobile browser is usually not much fun. With all the browser UI in the way, and all the baggage forums keep around, it&#8217;s hard to focus on the important. Those apps give a much cleaner, less fragmented and thus more efficient user experience to the forum than any current web offering could provide the user base, myself included.

### What would need to change to make this experience better on the web?

There are a lot of things that are in the way of a good user experience especially for keyboard and also for screen reader users. Let me highlight a couple of them:

#### The web is a very mouse-driven place

All the above examples showed one thing clearly: The web is a mostly mouse-driven place. You can get very far with little effort if you only consider mouse users in your design approaches. As soon as you take keyboard users into account, things become much more complicated. For one, you need to think about a sensible tab order. Second, you need to make sure keyboard focus is always visible so users know where they are. And with the keyboard, it&#8217;s less easy to ignore the surrounding browser UI, because keyboard focus may sometimes be there, not in the web content for one reason or another.

#### Implementing proper accessibility for screen readers is not trivial in many cases

Yes, that&#8217;s right! While there are quite a number of things to easily get right, like making sure your images have alternative text, or providing proper labels for inputs by correctly associating labels with the inputs via the for/id combo, there are other things that can go wrong very easily. This ranges from [properly hiding content](http://www.marcozehe.de/2012/04/24/hiding-content-untangled-hiding-vs-moving-out-of-the-visible-viewport/) from the view port that you want the screen reader to read anyway, to very complex tasks like making rich widgets accessible via HTML, JS, ARIA and CSS.

And here&#8217;s one of the big problems: The matter is so complex that not even those who create the standards get the specs done easily. ARIA 1.0 has been in last-call review state three times I think, and it is still not at final 1.0 state. HTML5 accessibility is going through morphs, removed and added-back elements, heated arguments and what not, and is a very hard matter to get one&#8217;s head around, especially if you want to get involved. There are historic design choices that stick with us like a basic MS_DOS kernel sticks with current versions of Windows, which make web developers&#8217; lives unnecessarily complicated. Recently, I was asked why, for example, the primary source for an image has to be the alternative text (alt-attribute), if using the title-attribute would have the benefit of providing sighted people with a visual queue to what a particular item means as well. Guess what: I had no good answer for him.

#### Providing accessibility for native iOS and Android apps is much easier

That&#8217;s right! Providing accessibility for those mobile operating systems is, in many cases, a piece of cake. Apple, and lately Google, too, have crafted their native widgets with so many features that it makes it very easy to provide a visually compelling, yet fully accessible user experience. Take the above mentioned FlipBoard as an example. If you watched the iOS Accessibility track at [WWDC 2012](https://developer.apple.com/videos/wwdc/2012/), you will have seen that the presenter made a game fully accessible that requires one to drag &#8220;weapons&#8221; to moving targets on a playing field, with little more than twenty(!) lines of code. TWENTY lines!

Side note: Mac accessibility, if done with COCOA widgets and custom views derived from them, is not much harder to make accessible.

On the other hand, like with many other pieces of the puzzle, web developers have to deal with different implementations of accessibility features across browsers and even some assistive technologies on all platforms. The web is, despite all efforts, a very incoherent place, not only, but also, in accessibility matters. And this, I believe, is one of the primary reasons that the [WebAIM screen reader survey #4](http://webaim.org/blog/survey-4-results/) still shows no significant increase in people&#8217;s perception that the web has become a more accessible place over the past three to four years. There are just so many stepping stones and loopholes that often leave web developers frustrated. Others, although this number is shrinking, aren&#8217;t even aware of the different web accessibility efforts and need to be taught from the ground up.

#### Technical limitations between screen readers and browsers

This primarily applies to Windows, where the accessibility API architecture requires two modes: One for browsing, one for direct interactions with web content. Users have to remember to switch between these modes in many cases, and the browsing mode usually nukes out all custom keyboard shortcuts that the web site may define for other keyboard users.

There is a role for such web content called &#8220;application&#8221;, but this is better used cautiously, as [this blog post](http://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) and the comments below it show.

### So&#8230;.Any good news?

Yes! Despite all this demise, there have been improvements. jQueryUI is continually adding accessibility to their widgets. Yahoo&#8217;!&#8217;sYUI has had improvements added for years, too. Dojo Toolkit was the prototyping project for many ARIA-enabled widgets. CKEditor is a fully ARIA-enabled WYSIWYG editor. All these have emerged or vastly improved since I started working at Mozilla in December of 2007.

One of my projects over the next couple of months is to make sure that the Firefox OS UI and the building blocks for app developers for Firefox OS are accessible, so whatever apps that are built from standard UI components, will have accessibility built-in.

I will continue to provide advice, articles and views on the topic of web accessibility and the way it may, or may not, evolve to become a true desktop replacement platform for all users. As I recently said to David Bolter, I [love my job](http://mindforks.blogspot.de/2012/07/mission-feeds-morale.html). I could see all the above as demotivating factors and think all web accessibility efforts are in vain. But I&#8217;m not that kind of person! I, instead, take this as motivation to help drive efforts forward, home in on issues and fix them, and make the web a better place for everyone if I can. And that&#8217;s a promise!
