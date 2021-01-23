---
title: Switching to Android full-time - an experiment
slug: switching-to-android-full-time-an-experiment
date_published: 2013-04-05T13:39:08.000Z
date_updated: 2013-04-05T13:39:08.000Z
tags: [Accessibility, Android, TalkBack]
---

A few weeks ago, I decided to conduct an experiment. I wanted to determine if Android 4.2.2 &#8220;Jelly Bean&#8221; was finally ready for me to switch to full-time, away from an iPhone.

### Background

I&#8217;ve been an iPhone user for four years, ever since the original iPhone 3G S [came out](http://www.marcozehe.de/2009/06/22/my-first-experience-using-an-accessible-touch-screen-device/) with VoiceOver support in June 2009. What Apple did back then was revolutionary, completely opening up a wealth of apps and services to people with vision impairments without the need to purchase extra assistive technologies at prices that were again the amount of the phone they were supposed to make accessible. Instead, VoiceOver, the screen reader for iOS, was bundled with the operating system for free.

At the same time, Google also announced first steps in accessibility for Android. But this paled by comparison, offering little more than a command shell for the Android platform with some speech output.

Later, TalkBack came about and gave at least some access to Android apps in Android 2.x. However, this access was still very limited compared to Apple&#8217;s model, as [Jamie Teh points out](http://blog.jantrid.net/2010/10/poor-state-of-android-accessibility.html) in a blog post.

In October 2011, Android 4.0 AKA Ice Cream Sandwich came out, and compared to what was offered in previous versions, was a big step forward in terms of accessibility. Not quite there yet, as [this AFB review](http://www.afb.org/afbpress/pub.asp?DocID=aw130302) spells out, it offered touch screen access for the first time, more than two years after Apple came out with VoiceOver, and with a model that still left a lot to be desired.

The biggest step forward came in June 2012, when Google announced Android 4.1 AKA Jelly Bean. With it came a revised model of touch screen access, called Explore By Touch, that closely resembles the model Apple, and now also Microsoft, have employed. Similar gestures allow for easy transition between platforms.

We had just [started work](http://www.marcozehe.de/2012/05/08/first-round-of-accessibility-support-for-android-in-mobile-firefox/) on accessible Firefox for Android, and Jelly Bean meant that we had to add quite some magic to make it work. [But we did](http://www.marcozehe.de/2012/08/22/support-for-talkbacks-jelly-bean-explore-by-touch-now-in-firefox-for-android-nightlies/), and the warm reception and good feedback from the blind and low vision community has been humbling and inspirational!

So when with Android 4.2, and especially the 4.2.2 updates, the gesture recognition seemed to solidify and become more reliable, I decided that it was time to give Android a serious chance to replace my iPhone as my regular smartphone device. I was also inspired by [this MACWORLD podcast episode](http://www.macworld.com/article/2030666/andy-ihnatko-on-his-iphone-to-android-switch.html), where Andy Ihnatko talks about his switch from an iPhone 4S to an Android device, not from an accessibility, but from a general usability point of view. After all, Android has matured quite a bit, and I wanted to take advantage of that and finally use Firefox for Android full-time!

### First steps

So on the 23rd of March, I got my shiny new [Nexus 4](http://www.google.com/nexus/4/). I decided to go for a Google phone because those get the latest updates of Android fastest. Moreover, they come with a stock user interface, nothing home-grown like the HTC Sense or Samsung Galaxy devices have. On my partner&#8217;s HTC One, for example, a TalkBack user cannot even use the dial pad to enter a phone number.

The hardware is quite OK. The phone feels solid, the glass surface on the front and back feel smooth and pleasant to the touch. The phone quality is a bit muffled both on the sending as well as the receiving end. My best friend who has a slight hearing problem had trouble understanding me. The speaker on the back also leaves a bit to be desired, esp since the speaker in the iPhone 4S that I am used to is quite good. I also found out during the course of my testing that I have occasional problems with Wifi connections becoming very slow, download rates plunging or downloads breaking up alltogether. Deleting and re-adding the access point entry seems to have, at least temporarily, fixed the issue. This is also being discussed lively in the Android project issue tracker, so is nothing specific to my device alone.

I was betrayed of the initial setup experience. No matter what I tried, the gesture that was described in the Jelly Bean accessibility guide for both the Nexus 4 and Nexus 7 devices, didn&#8217;t work. TalkBack would not start at all. So my sighted partner had to do that setup for me. We could then turn on TalkBack. After an update to Jelly Bean 4.2.2, we could also enable the quick button and gesture sequence to turn on TalkBack while the phone is running regularly. This experience did not leave that good of an impression with me.

Setting up accounts was a breeze. To be more flexible, I got my calendars and contacts off of iCloud and store them in an [OwnCloud](http://owncloud.org) installation at my web space provider&#8217;s server. I didn&#8217;t want to go the Google Contacts route because of recent announcements that left me uncertain whether this would be supported across platforms in the future. For OwnCloud, I installed a CalDAV and CardDAV provider software from the Play Store that works like a charm with the Nexus 4.

However, some of the stock apps like Calendar don&#8217;t work that well with TalkBack, or at least not if one is used to the excellent support of Calendar in iOS.

> BUMMER! Calendar works signifficantly less good with TalkBack than the Calendar app on iOS does with VoiceOver.

### Multi-lingual input

Because I am writing in both English and German frequently, I wanted a way to quickly switch between these two input languages. The problem with one is that, if I write the other language, the auto-correct will often try to deduce German words out of English vocabulary, or vice versa. Fortunately, this is as convenient as on iOS once set up. In Languages and Input Settings, with the stock Android keyboard, one needs to disable the System Language checkbox and then enable the languages one wants to have supported. Next to the space bar, there is now a new button that cycles through available languages.

> BUMMER: iOS does announce the new language switched to, TalkBack doesn&#8217;t.

This can be a real productivity killer if one uses more than two languages frequently.

The next problem arises with German umlauts. Sighted people long-tap the a, o and u characters for the ä, ö and ü characters, and s for the ß character. TalkBack users have a big problem here, since neither TalkBack nor the alternate screen reader Spiel allow for keys to be long-tapped. On iOS, when in touch-typing mode, one touches the letter in question and leaves the finger there, taps the screen with a second finger, and can then double-tap and hold to simulate a long-tap on the letter, and finally choose the relevant special character. Since iOS 6, a German keyboard with dedicated umlaut characters is also available, and on the iPad, even the ß character has a dedicated key.

On Android, the stock keyboard does not come with such extra keys, and accessibility does not allow to bring up the umlauts. Alternative keyboards from the Play Store such as the SwiftKey or the &#8220;German keyboard with Umlauts&#8221; app offer no accessible keyboards. It appears that accessibility is tightly integrated with the Android keyboard alone. Asking around in the community did also not yield any positive result on this matter.

> BUMMER! No umlauts for blind users on Android! This also is true for accented characters in French, Spanish or other languages.

Text editing is another problem that lags behind terribly in Android if you do not use an external keyboard. On iOS, one can control the cursor, do text selection, do editing functions such as cut, copy and paste. On Android, there are gestures to move by character, word, or paragraph, but there is no way to select text or bring up the editing functions of a text field in a controlled fashion. I do not want to have to always use an external keyboard!

Moreover, if you do not swipe, but use the one-finger exploration method, it depends on where on a text field your finger lands, where the cursor goes once you double-tap. Unlike on iOS, where it always goes to the beginning or end first, or indicates where the cursor goes once you touch a text field&#8217;s contents, on Android there is no such speech feedback.

> BUMMER! No controlled or advanced text editing is possible with TalkBack.

### Apps

If you|d like to read up on some of the stock apps and their TalkBack support, or lack thereof, I would like to point you to Kiran Kaja|s excellent Nexus 7 reviews [part 1](http://kirankaja12.wordpress.com/2012/08/02/random-thoughts-on-android-jellybean-and-google-nexus-7-accessibility/) and [part 2](http://kirankaja12.wordpress.com/2012/08/12/android-jellybean-accessibility-continued-books-music-movies-and-youtube/). Here, I would like to add a few impressions of apps I use regularly.

But before I do that, I would like to point out one big common denominator: Unlabeled graphical buttons. They are everywhere! This includes Android apps stock on the device, but more so many apps from the app store. This is the more bewildering considering that the Android app compilers even warn developers of missing contentDescription attributes, which are used to give accessibility labels to image buttons or image views. One developer who I contacted with a request to add those, said in his reply e-mail, paraphrased: &#8220;Oh I got those warnings, but always ignored them because I didn&#8217;t know what they meant. Oh yeah I know TalkBack, but always thought it useless. Now I know what this is all for, and you&#8217;ll get the buttons labeled in the next update.&#8221; So there is a warning, but the compiler does not indicate what this is used for, and that ignoring this warning basically means excluding a potential group of customers from using one&#8217;s app!

Twitter: There were several Twitter clients mentioned in the comments to Kiran&#8217;s posts above, and even Plume, the one considered most accessible, has several unlabeled buttons in the New Tweet screen, leading me to try three different ones before I found the one that sent my tweet. I guess &#8220;accessible&#8221; means a much lower bar in much of the Android community compared to others, or?

App.net: Another social network I use frequently.There are two clients out there that are quite popular: Dash and Robin. Both added accessibility contentDescriptions upon my request and are fully accessible.

WordPress: I found several unlabeled buttons in the UI of that app. Since it is open source, I decided to go in and fix them myself. I found that the current trunk version has a much revamped UI, using a component that adds accessibility by default, so the next version will actually be much nicer for free. I had to add only a few contentDescription strings to buttons that don&#8217;t take part in this new mechanism.

WhatsApp: Works except for some buttons that aren&#8217;t labeled. Because the layout is very similar to the iOS version, I figured out quickly that the right one of the text field sends the message, the left one adds media.

Amazon: With a few exceptions, works as well as the iOS version.

Push notifications on the lock screen: One thing I dearly missed when I started using Android was the fact that new notifications were not pushed to my lock screen immediately, and didn&#8217;t wake up the device. i am so used to the workflow of tapping a push notification to act on it from the lock screen that this really felt like a serious drawback. Fortunately, there is an app for that called Notification Lock Screen Widget. The instalation has to be done by a sighted person, since it requires adding a widget to the lock screen, but after that, it works quite well with TalkBack. One double-taps the notification one wants to act on, then finds the slide area and unlocks the phone. App is opened, one can reply or do whatever is necessary.

### The camera

Yes, this blind guy talks about the camera! I use it quite frequently on iOS to take shots of stuff around me, sometimes even to send them to social networks to ask what something is, or if the milk has reached its due date yet. Since iOS 6 and on the iPhone 4S, I even use panorama shots frequently. VoiceOver gives me instructions if I hold the camera too high or too low, if I&#8217;m turning too fast or too slowly. If I want to take a picture of a person, face recognition tells me if a face has moved into the camera view and where the face is located. Once it&#8217;s centered, I can take a shot, and these are usually pretty good I&#8217;m told!

> BUMMER! None of the above is possible with the Camera app on Android. I can take pictures, but panorama or facial recognition is not possible.

Once I&#8217;ve taken photos, I may want to re-use them later. In iOS, this has been a no-brainer for ages. VoiceOver tells me what orientation the photo is in when I&#8217;m in the gallery, if it&#8217;s a photo or a video, and when it was shot.

> BUMMER! The Gallery in Android is totally inaccessible. There is onlya Cancel button and a blank screen, nothing more.

I also use ABBYY TextGrabber to do optical character recognition on letters or other written stuff. On iOS, I can easily take a snapshot and have it recognized. The result is usually also pretty good.

> BUMMER! TextGrabber on Android, although usable with TalkBack, suffers from the above mentioned inaccessibility of the camera and gives bad results in 50% of the time, and no result in the oter 50%. A sighted user can achieve similarly good results on both iOS and Android, so this is clearly a shortcoming in the way the camera cannot be accessed.

I also use LookTel Money Reader on every travel to the U.S. or Canada to recognize different bank notes.

> BUMMER! The Ideal Accessibility currency recognizer only works with U.S. money, not with Canadian, Euros or British pounds.

### Scrolling in lists

In iOS, when I have a list of a hundred tweets in Twitterrific or TweetList, I can simply swipe through and read them continuously. This is not possible on Android. Swiping in TalkBack only gives me the elements currently visible on the screen. In order to continue reading, I have to stop my flow, do the gesture to advance a screen, then touch at the top most list item, and continue reading by swiping right. The alternative screen reader Spiel offers continuous swiping in some lists, but I found that this does not work reliably everywhere. For me, this is a huge productivity killer. It interrupts my flow every 6 or 7 items, breaks concentration and is a distraction. it requires me to think about where to put my finger next i norder to not miss anything.

> BUMMER! No continuous reading of long lists is possible in a reliable fashion. TalkBack doesn&#8217;t offer it at all, Spiel only in some limited lists.

### Navigation and travel

I travel quite a bit, and also like to find out about my surroundings. The Maps application in iOS 6 is a magnificent piece of software in accessibility terms. I&#8217;ve never had such accessible maps at my finger tips. When walking, I get announcements spoken to me of upcoming cross roads etc. Previously, one would have to purchase expensive extra devices like the Trekker Breeze to get some of this functionality. Alternatively, one can also use Ariadne GPS to get some more features tailored towards the needs of the visually impaired.

> BUMMER! The Maps app on Android only offers limited navigation capabilities. Maps themselves aren&#8217;t accessible at all.

And if I want to go somewhere in Germany, I most often will use the German railway company Deutsche Bahn. They offer apps for both iOS and Android, one for looking up travel routes, one to purchase and store electronic train tickets to later show to the on-board service personnel to have them scan it. Information about seating and when and where to change trains is all accessible on iOS. Of course, finding routes, too. Standard date and time pickers are being used, and everything works just nicely.

> BUMMER! While the Tickets app looks like it could be equally accessible on Android, the app for finding one&#8217;s travel route doesn&#8217;t allow a TalkBack user to specify a departure or arrival date and time. Because Android does not offer a standard date and time picker, or at least I&#8217;ve never seen one anywhere, the company decided to use an animated spinning wheel to adjust the values for date and time. This custom view is totally inaccessible, and there is no alternative method of input. I contacted the railway company with this problem, and they said they&#8217;d look into it, but the only way I see that this can be solved is by using an alternative UI if TalkBack or another screen reader is being detected. Until then, there is no way I can find my travel routes using just the Nexus 4.

### eBooks

On iOS, ever since the first iPad was announced in February of 2010, the iBooks application has been a fully accessible eBook reader. Along with Apple&#8217;s iBooks, it supports ePub and PDF. In iOS 6, PDF support even got raised to a level almost comparable to that of ePub and iBooks. One can review text, read it on a refreshable braille display, even in grade 2 if one so desires, find individual words and review them, etc.

More recently, Adobe Reader on iOS also became accessible by supporting the relevant protocols within the UIKit framework.

Kiran already hints at it in his post, and even the Bookshare GoRead application does not improve the situation. The only way one can consume eBooks on Android is by letting them be dumped into one&#8217;s ears through the speech synthesizer in chunks. No way to rewind, no way to review words or phrases. No way to read on a braille display. It&#8217;s basically like listening to an audio book on a cassette player with broken rewind and fast-forward keys.

The screen where the eBook content is being displayed is a total black hole for TalkBack. Nothing there.

> BUMMER! eBooks are close to inaccessible! And there are no APIs to support developers to improve the situation. While other platforms offer rich content display/editing, Android doesn&#8217;t.

### Braille

Braille support needs to be installed separately via an application from the Play Store called BrailleBack. It is new, as new as Jelly Bean itself is. My braille display isn&#8217;t supported yet. However I&#8217;ve opened an issue against BrailleBack and even provided some info about my display, so in hopes that BRLTTY will support it soon, Brailleback also will.

On iOS, the display is fully supported right out of the box.

### In conclusion

If I replaced my iPhone with the Nexus 4 full-time at this point, I would be missing out on all &#8220;BUMMER!&#8221; items above. It would be like stepping back a few years in accessibility, but taking the knowledge with me that there is something out there that offers me all these things.

Despite my desire to use Firefox for Android on a daily basis, meaning whenever I open a web page on a mobile device, I am not prepared to do that for this big a sacrifice. I am also not prepared to constantly carry two phones around with me except when I know I&#8217;ll be working professionally with them at my destination.

In short: The experiment, tailored towards my usage patterns at this point in time, has failed.

However, I will keep the Nexus 4 and use it for testing, because it is so nice and fast. And I will use it to keep close tabs on future Android development. Android 5.0 is around the corner, and I will definitely check against the above points when it is released to see if any of these items have improved.

This experiment has also led to some conclusions regarding Firefox OS accessibility which you all will hopefully see the results of in a few months! So stay tuned! 🙂

### Update Aug 3, 2014

16 months later, I wrote a [new post](http://www.marcozehe.de/2014/08/03/revisiting-the-switch-to-android-full-time-experiment/) on how things developed since this post was written.
