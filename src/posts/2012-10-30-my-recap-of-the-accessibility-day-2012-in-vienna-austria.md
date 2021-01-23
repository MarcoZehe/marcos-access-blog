---
title: My recap of the Accessibility Day 2012 in Vienna, Austria
slug: my-recap-of-the-accessibility-day-2012-in-vienna-austria
date_published: 2012-10-30T18:28:09.000Z
date_updated: 2012-10-30T18:28:09.000Z
tags: [A-Tag, AccessibilityDay2012, ATag2012]
---

On October 25, I took part in the 2012 Accessibility Day [A-Tag 2012](http://atag.accessiblemedia.at), in Vienna, Austria. This semi-annual event brings together people of various technology fields and organisations as well as end users with disabilities to exchange, share, and get updated on the latest developments in accessibility. This year&#8217;s motto was &#8220;mobile accessibility&#8221;, and with Mozilla&#8217;s recent mobile efforts like Firefox for Android and Firefox OS, this was a perfect venue to share and get feedback about our accessibility development and ideas.

The day started out with a remarkable keynote by [Stephanie Rieger](http://stephanierieger.com). Her talk was titled &#8220;Beyond the mobile web&#8221;, and she pointed out how seamless mobile devices have made the interaction with the internet. You no longer sit down at your computer, turn it on, go online, do your stuff, and go offline again. You pick up your favourite mobile device, look up something on Amazon, look for a train connection or the traffic situation, look up a celebrity&#8217;s info on Wikipedia etc. You don&#8217;t even think about it any more if you have a functioning Wifi connection with an always-on internet connection.

She then went on to demonstrate through every-day examples how the boundaries between the so-called &#8220;real life&#8221; and the internet are fading, and how little some of the companies are, or were until more recently, prepared for it, with their mobile site requirements still stuck in the days when one thought mobile users were on-the-go, hectic quick consumers who went online via WAP or the like.

That led her to her core point which should go out to all who provide it: [Put Your Content First](http://stephanierieger.com/its-about-the-content-stupid/)! Let the users chose how they view it, which device they use, and don&#8217;t put your design first since that will most likely break for many users.

The next talk was by a developer who demonstrated some of the problems he encountered while developing certain browser-based games for various mobile platforms. The capabilities of browsers on various versions of Android, iOS, and even Windows Phone 7 vary greatly and give developers a lot to chew on. Some are even so outdated that modern web stuff won&#8217;t work on them at all. It was noted, after I asked, that Firefox for Android is bridging a huge gap, and that the company had recently started adding it to their testing pool. The central message was: For mobile, develop for the oldest, not the latest and greatest. Considering that Firefox supports Android versions all the way back to Android 2.2 and also devices with ARMv6 processors, this is a paradigm we also follow at Mozilla, but enabling those older devices with new web capabilities in the process.

The next talk was by [Sylvia Egger](http://sprungmarkers.de). She demonstrated how she converted an old, static web site of the Vienna museum for historic arts into a responsive site, using technologies like REM, SAS, and others. Her unmistakable message: Put mobile first, then scale up to the desktop! The days are over when mobile is only a niche part of a web presence! Do not make the mistake to have a huge-scale desktop site that you need to scale down afterwards. Like with accessibility in mind, it is nowadays less expensive to start developing for mobile and scale up conditionally to the desktop world.

After the lunch break, [Sindre Wimberger](http://sindre.at) showed how he developed a responsive and accessible navigation system based on the Austrian Open Government Data initiative, a collection of map and other navigational meta data that allows people with and without disabilities to better navigate around Vienna. he was using pure web technologies for this and demonstrated a few important usability aspects like keyboard access, the right contrast for visually impaired users etc.

He was directly followed by a gentleman from the Austrian government who talked a little about the other side of that project, how the open government data is put together. He also called out to the community to help make the data better if they encountered errors, new obstacles like temporary construction work etc. in the city of Vienna.

After the coffee break, [Joshue O&#8217;Connor](http://designed4yall.wordpress.com/) talked about the current state of HTML5 and WAI-ARIA accessibility, provided some advice on when to use HTML5 if it makes sense, but to not be shy and fall back to HTML4.01 or so if that perfectly suits the purpose. I sort of disagree with parts of the statement, since using the HTML5 doc type makes sure WAI-ARIA validates, and other quirks of earlier browser parsing hell have been overcome by the standardized HTML5 parsers.

The highlight of his talk was definitely [this video](https://www.youtube.com/watch?v=2BhHwk9qSvI) of a guy who uses a single switch to operate his computer and other technology around his house, allowing him to live a much more independent life than he would otherwise. He also plays World of Warcraft, among other things. If you ever wondered what accessibility can be all about, watch this video!

My own talk concluded the day. I gave an overview of Firefox for Android&#8217;s coming about, the different stages Mozilla&#8217;s mobile development went through before that, and what a great change the move to a native Android widget UI is in terms of accessibility possibilities! If you want to read more about this, [go to this blog post](http://www.marcozehe.de/2012/06/01/accessibility-in-firefox-for-android-some-more-technical-details/).

I demonstrated briefly what Firefox for Android sounds like, letting the UI and two web sites talk a little on a NEXUS 7 running Jelly Bean.

I then went on explaining what Firefox OS is and what the accessibility story is going to be. I recommend [this excellent Mozilla Hacks post](https://hacks.mozilla.org/2012/10/creating-the-future-of-mobile-with-firefox-os/) for more information, better put than I could ever write it here.

After the official day was over, I spent some time talking to people. Especially Mozilla&#8217;s venture into the mobile space, and with the accessibility team aligned with this venture, inspired quite some ideas and brought about a lot of confidence in the effort. Firefox OS was perceived as a source for inspiration. Someone, half-jokingly, remared that Sylvia should do a talk on theming Firefox OS at the next Accessibility Day in a year from now. Knowing her, she&#8217;ll probably do it! 🙂 And all that without me even being able to demonstrate it live, since I didn&#8217;t have a compatible device to flash it on, and my dev/qa device didn&#8217;t arrive in time. If that is not inspiration, I don&#8217;t know what is! It felt amazing to hear people pick up so positively on the idea and already drawing energy for own ideas from it.

I believe this was a good day to be at, I learned a good bunch of new things and was able to also get across some of the stuff we as Mozilla do to an enthusiastic group of developers and users.
