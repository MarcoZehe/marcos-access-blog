---
title: Why do native mobile apps seem to win all the time?
slug: why-do-native-mobile-apps-seem-to-win-all-the-time
date_published: 2012-12-10T17:47:19.000Z
date_updated: 2012-12-10T17:47:19.000Z
---

Twitter is often a place of small, but thought-provoking bits of information or personal impression. Just today, Mick Curran, one of the NVDA core developers, tweeted this:

> Just used new iPhone app from [@crust_pizza](https://twitter.com/crust_pizza?ref_src=twsrc%5Etfw) to order my dinner. Quite blindy friendly. Only 1 or 2 small issues.
> 
> &mdash; Michael Curran (@md_curran) [December 10, 2012](https://twitter.com/md_curran/status/278041473713328129?ref_src=twsrc%5Etfw)

and followed it up with this:

> Though [@crust_pizza](https://twitter.com/crust_pizza?ref_src=twsrc%5Etfw) is yet another restaurant where it was more easy to use the iPhone app than the website as a blind person.
> 
> &mdash; Michael Curran (@md_curran) [December 10, 2012](https://twitter.com/md_curran/status/278041941734735872?ref_src=twsrc%5Etfw)

Jamie Teh, the other NVDA core developer, replied to this and said:

> [@md_curran](https://twitter.com/md_curran?ref_src=twsrc%5Etfw) I find this trend very disturbing. Surely it&#39;s easier to make web apps accessible at least in a basic sense? Apparently not.
> 
> &mdash; James Teh (@jcsteh) [December 10, 2012](https://twitter.com/jcsteh/status/278058159271211008?ref_src=twsrc%5Etfw)

And this question touches part of the problem, but not the whole. The questions can be continued:

- Why are there native iOS and Android apps for so many offerings that originate on the web?
- Why is it that even Google, a company with a clear web focus, creates native Android apps for its services like GMail or Google Plus?

I believe there are several parts to a possible answer:

### Developing for mobile browsers is damn hard

Every web developer who has developed mobile sites or web applications ever, and tried to make the site work on as many devices and browsers as possible, knows what hard work this is. On Android alone, the native browser behaves differently in each major version. 2.2 and 2.3 support different stuff than 3.x (the tablet-only version) and 4.0 did. And then there&#8217;s Chrome and Firefox, which also run on each of these versions, but which have to be installed separately. Then there&#8217;s Android 4.1+ with Chrome preinstalled at least on the NEXUS 7 tablet, but possibly others. iOS, which has a high rate of current version usage, supports other things than Microsoft&#8217;s mobile version of IE which runs on Windows Phone. Animations in one browser run once while in another runs forward and backward the same amount, or in a third browser, doesn&#8217;t stop animating at all&#8230; You get the picture!

The result is that many mobile sites, to support the widest possible range, are cut down to a bare minimum. Many web devs are even afraid to use anything but basic JavaScript and CSS properties because the three year old version of Webkit that runs on a Gingerbread Android browser doesn&#8217;t know about these things.

So, for many companies, it is economically saner to produce one native app per platform instead that just talks to their backend on the web, but gives users a consistent user interface to deal with even if they upgrade to a newer device along the way.

Others, like Facebook, decide to [cut down their hybrid web content](http://www.facebook.com/notes/facebook-engineering/under-the-hood-rebuilding-facebook-for-ios/10151036091753920) strategy in favor of a more native app to improve the user experience that way, because they feel that they would otherwise get nowhere with what they had. On both iOS and Android, access to device features is easier than from the browser, or it is not possible to use many features from the browser at all.

Other factors also come into play, like how to manage multiple accounts from the same service, e. g., Twitter, through conventional web means like cookies. While the native apps for Android and iOS support multiple accounts, the web app does not, it instead requires one to sign out and in with a different user name and password manually.

### Too much clutter

Let&#8217;s face it, there are hardly any mobile apps that aren&#8217;t either cut down to a point of excruciating pain, or overloaded with too much clutter like a whole bunch of navigation links that take away valuable space especially on small hand-held devices such as iPhones or other smartphones. Native apps do a much better job at providing a single point of focus for the user. Users either want to view a list of articles, do a search, browse categories, but not all at the same time on a 4 inch screen! Or in the case of social media, they want to view a list of posts, or they want to compose one. Trying to squeeze both into a single web page on a small screen is undoubtedly going to create a less than pleasant user experience. In a native app, a tabbed interface allows the majority of the screen estate to be used for a single purpose, a single task, a single point of focus. Links to a web site is only presented in the About section, where it belongs, along with a copyright notice etc. In almost all web presences for mobile and desktop browsers I know, a lot of cruft is being taken along onto every sub page one visits. A huge navigation side bar, a top bar, a search, a footer with a lot of meta data&#8230;.While this is still relatively OK on desktop computers, mobile devices have much less space, or much more need to scroll and become inefficient if too much stuff is presented at once.

Efficiency is maybe the greatest factor of all. If I want to order a pizza, or shop on Amazon, I want to stay focused and not be distracted by ads, too many offerings, bells and whistles, etc. I want to get the job done. I, myself, even though I work for a company that puts the web in front of all other stuff, find that I haven&#8217;t done shopping through the Amazon website in over a year because the native iOS app lets me do it so much faster. What I can shop for in the Amazon app within a minute, usually takes me at least(!) twice as long in any browser/screen reader combo. In other cases, like the one Mick describes in his tweets quoted earlier, the web site is marked up so badly that it is nearly impossible to place an order, whereas the native app makes it very easy to do.

And then there&#8217;s the browser UI itself. It takes up some valuable portion of the screen and is a constant reminder that one is not inside a mobile app but rather a web page. In a native app, this aspect becomes completely transparent. The user does not need to care what&#8217;s working behind the scenes. They get their job done, they simply launch the app, they simply interact with what they want to accomplish.

The [Mozilla market place](https://marketplace.mozilla.org) goes a long way to alleviate this last aspect, by launching the installed web app in a Firefox runtime on one&#8217;s Android device that leaves out all the typical browser UI pieces, and gibes a full screen view of the web app.

But all the web apps I&#8217;ve tried still remind me that it&#8217;s web pages I&#8217;m dealing with. They have links they carry onto every sub page I move to while working the app, and they always clutter up parts of my valuable screen estate. And yes, they get in the way! They either require me to explore past them, remember that they&#8217;re there and that I should start exploring somewhere one third down from the top, or not move too far to the left to not encounter them, etc.

And interaction models often require new pages to load. Loading pages is a very webby thing that can take quite some seconds before the app becomes useable again. A lot could be accomplished by putting everything in one bigger HTML file plus CSS and JS, and show and hide the currently not focused areas dynamically. Compiled JS is fast enough even on mobile devices that the delays are much much less than actual page loads.

There&#8217;s only one mobile web app that I know of that mimics the look and feel of its native Android counterpart, and that&#8217;s [Mobile Twitter](http://mobile.twitter.com). Unfortunately, its markup is rather wild, so it is barely accessible. I have no access to the Compose button in Firefox for Android, for example. But in principle, that&#8217;s what a mobile app should be. it removes all the clutter of a typical web page, gives a tabbed interface and doesn&#8217;t bother the user with a composition form that would take up valuable space that can now be used for more relevant content.

### Accessibility

Yes, this is often a deciding factor, too, whether I, or other blind users, choose to use a native app rather than the web site or mobile offering. And as the above mentioned Facebook example shows, their switch to a native app allowed them to provide a much better accessibility experience for visually impaired users on iOS.

The reason in many cases is that both iOS and Android have UI components that give a lot of accessibility for free just by using them. [iOS](http://mattgemmell.com/2010/12/19/accessibility-for-iphone-and-ipad-apps/) and [Android](http://www.netmagazine.com/tutorials/making-android-apps-voice-output-accessible) app developers only need to do comparably few things to make their even a little more than simple UIs accessible to the assistive technologies preinstalled on those operating systems.

Like with many things on the web, implementing accessibility is not an easy task especially for more complex compound widgets. Fortunately many UI libraries now offer accessibility for free, but how many of them can actually be used efficiently on mobile devices nowadays? In short, the danger &#8212; and yes, I use this word consciously &#8212; of encountering wild-west web coding in accessibility terms is quite high. This becomes an important factor for Mozilla as we venture into the mobile app space more and more with our own Firefox OS offering. I&#8217;m seeing a lot of evangelism work ahead actually, starting with our own implemented apps and expanding that to the author base on the Market Place.

### In summary

The theme of too much clutter impacts a big range of people, not only visually impaired ones. People with cognitive disabilities, for example, are also often frustrated and confused by too much navigation or other &#8220;webby&#8221; stuff on small mobile screens. &#8220;Regular&#8221; sighted people I talked to prefer native apps for the same reason.

Many web app developers need to become much more conscious of what the actual focus point for their end users is at any given point in their application, and center the whole interaction of a single screen around that. The relevant content must **always **come first, and things that we used to take for granted like navigation bars etc. need to recede into the background or get their own special corner inside the app to not take up valuable screen estate and constantly get in the way of the user.

If some of these paradigms settle into the minds of a majority of mobile web app developers, the debate of whether the web is the better platform or not may take a more positive turn for the web from the user&#8217;s point of view.
