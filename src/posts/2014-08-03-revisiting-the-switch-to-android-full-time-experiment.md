---
title: Revisiting the "Switch to Android full-time" experiment
slug: revisiting-the-switch-to-android-full-time-experiment
date_published: 2014-08-03T10:39:12.000Z
date_updated: 2014-08-03T10:39:12.000Z
tags: [Android, TalkBack]
---

Just over a year ago, I conducted an experiment to see whether it would be possible for me to [switch to an Android device full-time](http://www.marcozehe.de/2013/04/05/switching-to-android-full-time-an-experiment/) for my productive smartphone needs. The conclusion back then was that there were still too many things missing for me to productively switch to Android without losing key parts of my day to day usage.

However, there were several changes over the past 15 or so months that prompted me to revisit this topic. For one, Android itself has been updated to 4.4 Kitkat, and Android L is just around the corner. At least Google Nexus devices since the Nexus 7 2012 get 4.4, and the newer Nexus 7 and Nexus 5 models will most likely even get L.

Second, after an 8 month hiatus since the last release, [TalkBack development continues](https://groups.google.com/d/msg/eyes-free/97h-cvcBl-s/xmDEChFSXlgJ), with the distribution for the beta versions being put on a much more professional level than previously. No more installing of an APK from a Google Code web site!

Also, through my regular work on testing Firefox for Android, I needed to stay current on a couple of Android devices anyway, and noticed that gesture recognition all over the place has improved dramatically in recent versions of Android and TalkBack 3.5.1.

So let&#8217;s revisit my points of criticism and see where these stand today! Note that since posting this originally on August 3, 2014, there have been some great tips and hints shared both on here as well as on the eyes-free mailing list, and I&#8217;ve now updated the post to reflect those findings.

### The keyboard

Two points of criticism I had were problems with the keyboard. Since TalkBack users are more or less stuck on the Google Keyboard that comes with stock Android, there were a few issues that I could not resolve by simply using another keyboard. Both had to do with languages:

1. When having multiple languages enabled, switching between them would not speak which language one would switch to.
2. It was not possible to enter German umlauts or other non-English accented characters such as the French accented e (é).

Well what can I say? The [Google Keyboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin) recently got an update, and that solves the bigger of the two problems, namely the ability to enter umlauts and accented characters. The button to switch languages does not say yet which language one would switch to, but after switching, it is clearly announced.

To enter accented characters, one touches and keeps the finger on the base character, for example the e, and waits for the TalkBack announcement that special characters are available. Now, lift your finger and touch slightly above where you just were. If you hit the field where the new characters popped up, you can explore around like on the normal keys, and lift to enter. If you move outside, however, the popup will go away, and you have to start over. This is also a bit of a point of criticism I have: The learning curve at the beginning is a bit high, and one can dismiss the popup by accident very easily. But hey, I can enter umlauts now! 🙂

Another point is that the umlaut characters are sometimes announced with funny labels. The German a umlaut (ä), for example, is said to have a label of &#8220;a with threema&#8221;. Same for o and u umlauts. But once one gets used to these, entering umlauts is not really slower than on iOS if you don&#8217;t use the much narrower keyboard with umlauts already present.

This new version of the keyboard also has some other nice additions: If Android will auto-correct what you typed, space, and many relevant punctuation characters will now say that your text will be changed to the auto-corrected text once you enter this particular symbol. This is really nice since you immediately can explore to the top of the keyboard and maybe find another auto-correct suggestion, or decide to keep your original instead.

The new version of the keyboard was not offered to me as a regular software update in the Play Store for some reason. Maybe because I had never installed a Play Store version before. I had to explicitly bring it up in Google Play and tell the device to update it. If you need it, you can browse to the link above on the desktop and tell Google Play to send it to your relevant devices. 😉

Two points gone!

### Editing text

The next point of criticism I had was the lack of ability to control the cursor reliably, and to use text editing commands. Guess what? TalkBack improved this a lot. When on a text field, the local context menu (swipe up then right in one motion) now includes a menu for cursor control. That allows one to move the cursor to the beginning or the end, select all, and enter selection mode. Once in selection mode, swiping left and right will actually select and deselect text. TalkBack is very terse here, so you have to remember what you selected and what you deselected, but with a bit of practice, it is possible. Afterwards, once some text is selected, this context menu for cursor control not only contains an item to end selection mode, but also to copy or cut the text you selected. Once something is in the clipboard, a Paste option becomes available, too. Yay! That&#8217;s another point taken off the list of criticism!

### Continuous reading of lists

TalkBack added the ability to read lists continuously by scrolling them one screen forward or back once you swiped to the last or first currently visible item. In fact, they did so not long after my original post. This is another point that can be taken off my list.

### The German railway navigator app

This app has become accessible. They came out with a new version late last year that unified the travel planning and ticketting apps, and one can now find connections, book the tickets and use the Android smartphone to legitimize oneself on the train from start to finish on Android like it is possible on iOS. Another point off my list!

### eBooks

While the Google Play Books situation hasn&#8217;t changed much, the [Amazon Kindle app](https://play.google.com/store/apps/details?id=com.amazon.kindle) became fully accessible on Android, closely following the lead on iOS. This is not really a surprise, since FireOS, Amazon&#8217;s fork of Android, became much mure accessible in its 3.0 release in late 2013, and that included the eBook reader.

### Calendaring

This was originally one of the problematic points left, however comments here and in the eyes-free list lead to a solution that is more than satisfactory. I originally wrote:

> The stock Calendar app is still confusing as hell. While it talks better somewhat, I still can&#8217;t make hells of tales out of what this app wants to tell me. I see dates and appointments intermixed in a fashion that is not intuitive to me. Oh yes, it talks much better than it used to, but the way this app is laid out is confusing the hell out of me. I&#8217;m open to suggestions for a real accessible calendar app that integrates nicely with the system calendars coming from my google account.

As [Ana points out](https://groups.google.com/d/msg/eyes-free/gMgYXE1BsNU/O57NUU2yXjYJ) in a reply on eyes-free, the solution here is to switch the Calendar to Agenda View. One has to find the drop down list at the top left of the screen, which irritatingly says &#8220;August 2014&#8221; (or whatever month and year one is in), and which lead me to believe this would open a date picker of some sort. But indeed it opens a small menu, and the bottom-most item is the Agenda View. Once switched to it, appointments are nicely sorted by day, their lengths are given and all other relevant info is there, too. Very nice! And actually quite consistent with the way Google Calendar works on the web, where Agenda View is also the preferred view.

And if one&#8217;s calendaring needs aren&#8217;t covered by the Google Calendar app, I was recommended [Business Calendar](https://play.google.com/store/apps/details?id=mikado.bizcalpro) as an alternative.

### Currency recognition

Originally, I wrote:

> The [Ideal Currency Identifier](https://play.google.com/store/apps/details?id=org.ideal.currencyid&amp;hl=en) still only recognizes U.S. currency, and I believe that&#8217;ll stay this way, since it hasn&#8217;t seen an update since September 2012. Any hints for any app that recognizes Canadian or British currencies would be appreciated!

I received three suggestions: [Darwin Wallet,](https://play.google.com/store/apps/details?id=com.ndu.mobile.darwinwallet)[Blind-Droid Wallet](https://play.google.com/store/apps/details?id=com.mirwebsistem.currencyeyes), and [Goggles](https://play.google.com/store/apps/details?id=com.google.android.apps.unveil). All three work absolutely great for my purposes!

### Navigation and travel

I wrote originally:

> Maps are still not as accessible as on iOS, but the Maps app got better over time. I dearly miss an app like [BlindSquare](http://blindsquare.com/) that allows me to identify junctions ahead and other marks in my surroundings to properly get oriented. I&#8217;m open to suggestions for apps that work internationally and offer a similar feature set on Android!

I received several suggestions, among them [DotWalker](https://play.google.com/store/apps/details?id=cz.lido.dotwalker) and [OsmAnd](http://poretsky.homelinux.net/osmand/index-en.html). Haven&#8217;t yet had  a chance to test either, but will do so over the course of the next couple of days. The feature sets definitely sound promising!

One thing I am definitely missing, when comparing Google Maps to Apple Maps accessibility, is the ability to explore the map with my finger. iOS has had this feature since version 6, which was released in 2012, where you can explore the map on the touch screen and get not only spoken feedback, but can trace streets and junctions with your finger, too, getting an exact picture of whichever area you&#8217;re looking at. I haven&#8217;t found anything on Android yet that matches this functionality, so I&#8217;ll probably keep an iPad around and tether it if I need to look at maps in case my next main phone is indeed an Android one.

Ana also recommended [The vOICe for Android](https://play.google.com/store/apps/details?id=vOICe.vOICe) as an additional aid. However, this thing is so much more powerful in other senses, too, that it probably deserves an article of its own. I will definitely have a look (or listen) at this one as well!

### Other improvements not covered in the original post

Android has seen some other improvements that I didn not specifically cover in my original post, but which are worth mentioning. For example, the newer WebViews became more accessible in some apps, one being the German railway company app I mentioned above. Some apps like Gmail even incorporate something that sounds a lot like ChromeVox. The trick is to swipe to that container, not touch it, then ChromeVox gets invoked properly. With that, the Gmail app is as usable on Android now as the iOS version has been since a major update earlier this year. It is also no longer necessary to enable script improvements to web views in the Accessibility settings. This is being done transparently now.

Other apps like Google+ actually work better on Android even than on iOS. 😉

Other third-party apps like Facebook and Twitter have also seen major improvements to their Android accessibility stories over the past year, in large parts due to the official formation of dedicated accessibility teams in those companies that train the engineers to deliver good accessible experience in new features they introduce.

And one thing should also be positively mentioned: Chrome is following [the fox&#8217;s lead](http://www.marcozehe.de/2012/08/22/support-for-talkbacks-jelly-bean-explore-by-touch-now-in-firefox-for-android-nightlies/) and now [supports proper Explore By Touch](https://groups.google.com/d/msg/eyes-free/R0hHk-gKwXc/KJUqF-Az5aUJ) and other real native Android accessibility integration. This is available in Chrome 35 and later.

### Things that are still bummer points

There is really only one item from the blockquoted items of my original post that is still problematic, and that is the Gallery. The built-in Camera on my Nexus 5 talks much better indeed than it used to, I can now find out whether I&#8217;m taking a picture, shooting a video etc. The problematic part is if I want to go back and share the media I took later. The Gallery doesn&#8217;t give me any info on the different items I have there. This also includes apps like ABBYY TextGrabber, where if I wanted to choose a photo from the gallery, I&#8217;d be just as lost.

However, as Piotr comments below (on the original post content), other device manufacturers use different skins or apps for the same purpose, and it seems that the Camera and Gallery on the Samsung Galaxy S5 are much more powerful in the accessibility sense than the stock Google-provided ones on the Nexus 5.

### In conclusion

Over the past year, Android has become a much more viable alternative for me and possibly other users. The gap is closing, and that is a good thing for user choice and market diversity! Show stoppers? No, there aren&#8217;t really any any more. The stuff with the Camera or rather the Gallery is an annoyance, but taking pictures is something I do occasionally, not regularly. So yes, I can now see myself using an Android device, be it a Nexus 5 or maybe a modern Samsung device, as my primary phone.

Welcoming your comments!
