---
title: "Mac OS X accessibility: A success story"
slug: mac-os-x-accessibility-a-success-story
date_published: 2008-11-19T12:41:16.000Z
date_updated: 2008-11-19T12:41:16.000Z
---

Over the past couple of years, accessibility options have become more widely available than just on the Windows platform. Since GNOME 2.18, Orca has become part of the desktop package, offering a way for some distributions to be installed with some speech guidance.

Also, Apple entered the same field during the Mac OS 10.4 Tiger timeframe and offered the [VoiceOver](http://www.apple.com/accessibility/voiceover/) screen reader as part of the operating system. This is not new, since Mac OS X has since moved on to Leopard 10.5. But I recently had the first chance to play with it, and I must say I am deeply impressed! Once you turn on a Mac that you just bought, it prompts you that if you can&#8217;t see the screen, you can press Cmd+F5 to turn on VoiceOver. From that point on, it talks you through the Setup Assistant using a clear, very intelligible voice named Alex. This speech engine is built with a &#8220;breathing&#8221; algorithm making it sound even more natural than other current TTS engines. Once I had mine set up, I was wirelessly connected and ready to go.

For the fun of it, I also booted from the DVD. This boots a copy of the operating system and automatically launches the installer. However, even here you can press Cmd+F5 to get instant VoiceOver speech and full access to the installer and other utilities such as the Disk Utility that Apple offers for maintenance.

By comparison, on Windows, only part of the installer is accessible, and then only on English language versions of the operating system. And, it uses a voice called Microsoft Sam on Windows XP, and an only slightly better sounding female voice whose name escapes me right now for Vista. The part of the installer that, even under Vista, still runs in text mode, is not accessible at all. So disk partitioning, formatting etc., are all without speech support. The alternative way many of us use is an answer file that sucks in all the information and then lets the installer run automatically.

On Linux, the story can be slightly better depending on the distribution and the version of that distribution you&#8217;re using. Ubuntu 8.04 Hardy Heron was pretty good in that you only had to press a rather straight-forward series of keystrokes, but in right order, to get a talking installer. Ubuntu 8.10 made a huge lapse backwards unfortunately, again requiring the use of the command line, sudo, Ubiquity and the hope that you typed it all right while you had to quit Orca to get it running with administrative privileges.

I haven&#8217;t looked at the new Open Solaris, which is supposed to also have an accessible installer, so cannot comment on its story. Other distributions require other forms of blind-flying to get to a talking or brailling installer, which is nothing for the faint of heart.

Both Windows and Linux also suffer from the additional risk that the hardware in the computer you&#8217;re trying to install them on is not recognized. In worst case, the sound card won&#8217;t be recognized, leaving you completely in the dark. There, binding the operating system to specific hardware, like Apple does, has a clear advantage: They know what&#8217;s in their boxes and can make sure it always runs.

And again, nothing is as easy as pressing a single keystroke to get speech.

And the wwealth of applications that is already accessible on Mac OS X is breathtaking as well. Not only programs that come with the operating system or the additional applications package such as TextEdit, Mail, Safari, QuickTime and iTunes, but also third-party applications often used, or needed, by blind users are accessible. One is Skype, which is the preferred Voice-Over-IP application used by the blind community. Another is OpenOffice, which, starting at version 3.0, is a Cocoa application and has full VoiceOver support.

On Linux, Skype, for example, isn&#8217;t accessible yet. This is one of the most frequently asked-for applications, so it is hoped that with the migration from Corba to D-Bus for the accessibility infrastructure, this will become easier to do, but for now, the GNOME desktop accessibility story definitely misses out on this important application.

On Windows, Narrator is not even enough to get you to a point where you can download NVDA. So if you have to reinstall, make sure you put a portable version onto a USB pen drive before so you have good access to your system once it&#8217;s up and running.

In comparing these three platforms, it can be said that Apple took their time to come to the accessibility party, but what they came up with simply works great out of the box. In my opinion, this is a real alternative to Windows. So if you think about buying a new notebook or desktop computer in the near future, why not walk up to a Mac shop and take a look at the models there?

For the Mozilla story, this underlines that we better continue our effort soon to get Firefox accessible on the Mac so people can take advantage of things like WebVisum there, too.

If you&#8217;d like to listen to some demos of VoiceOver support on the Mac, there is a great three-part podcast series on [Blind Cool Tech](http://www.blindcooltech.com/) made by Mike Arrigo that is definitely worth the time listening to!
