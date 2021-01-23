---
title: "WAI-ARIA showcase: Microsoft Office web apps"
slug: wai-aria-showcase-microsoft-office-web-apps
date_published: 2014-01-22T12:11:00.000Z
date_updated: 2014-01-22T12:11:00.000Z
tags: [IE, JAWS, Microsoft, Office, Safari, WAI-ARIA, Window-Eyes]
---

Prompted by the recent Microsoft and GW Micro [partnership announcement](http://www.windoweyesforoffice.com/), I took a long overdue look at Microsoft&#8217;s [Office 365 product offerings](http://office.microsoft.com/en-us/products/microsoft-office-365-for-home-or-for-business-office-online-FX101825692.aspx?CTT=97). The Home Premium edition not only gives you five installations of full Office Professional versions in your household, Windows and Mac combined, but also the apps for iOS and Android on up to five mobile devices, extra SkyDrive cloud storage space, and access to the Office in the browser offerings. Considering the cost of shelf Office products, the subscription prices are an amazing end user benefit!

### Quick test: Office on the desktop and in mobile apps

I first tested the current desktop versions. Office 2013 for Windows is, of course, largely accessible to NVDA, JAWS, Window-Eyes and others. I heard that there seem to be some problems with Outlook, but I didn&#8217;t test that.

The Mac version of Office is, although superficially seeming accessible, not usable because in Word 2011 for Mac, for example, you don&#8217;t see the document content with VoiceOver.

The iOS version of Office Mobile has some major accessibility issues as well, primarily because of flaky document content and appearing and disappearing toolbars.

### Firefox for Windows

I was hesitant to look at the Office in the Browser offerings at first, given the dismal situation of both Google Docs and Apple iWork in the browser. But boy, was I surprised! I brought up SkyDrive and created a new Word document from within Firefox on Windows and using NVDA.

The first thing I heard was the fact that I landed in the editing area, and that I could leave this by pressing control+f6. And if I wanted more help on the accessibility, I should press Alt+Shift+a. The latter brings you to [this help page](https://support.office.com/en-au/article/Office-Online-d6018be1-d9fb-450f-8a13-b5a88e0e329e), which contains a lot of good information.

When I started typing into Word, I immediately noticed that my braille display was following along nicely. This can not be said for Google Docs which uses pure live region magic, which is completely speech-only, to convey information. I then also found out that NVDA was reporting to me font information. So when I bolded text and then asked NVDA to report to me the font and color, I heard the formatting information. Also when I formatted one paragraph as a heading, I was told the different font info.

I then pressed the above mentioned Control+F6 and cycled to the status bar. I saw the word count, language my document was in, and other info. I pressed the keystroke again and was taken to the Ribbon controls. NVDA immediately picked up all the info MS provides in their web app, that this is a ribbon toolbar, that I am on this and that tab of so many tabs, etc. The only means to navigate currently is by using the tab and shift+tab keystrokes, and Space or Enter to activate buttons. You first tab through all tabs, the Share button and the Minimize Ribbons button. Focus then moves into the ribons of the actually selected tab. While tabbing through, I noticed that all tabs were announced as selected. This seems to be a small bug still, in that the aria-selected=&#8221;true&#8221; should only be present on one of the tabs, meaning the tab whose content is shown below. All others should have aria-selected=&#8221;false&#8221;. Also, MS could optimize the keystrokes by allowing left and right arrows between the tabs, and the adjacent buttons which are always visible, and let the Tab key move straight into the active ribbon, like is done in the desktop version of Word.

Speaking of the ribbons: NVDA speaks the grouping information when passing through each ribbon. So you always hear when transitioning between different sub groups inside the ribbon. This helps immensely when you want to find the right group quickly.

Another press of Control+F6 brought me back to the document, and I could continue editing right away. Many of the shortcuts familiar from the desktop version of Word also work here, for example Control+B to bold text.

A slightly technical note: MS always feed the current paragraph only to the screen reader. This guarantees quite good performance. The fact that they&#8217;re doing this with all formatting intact means that they are using something more powerful than a simple textarea element. It is pretty amazing!

And all this time, I did not have to switch modes with NVDA. MS were [mindful of the application role](http://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) and used it wisely while developing this app. They provide all keyboard access to all controls, and since the document is in editing mode, there is also no problem reading the document content.

As described in the help document linked above, the best way to view your document is by going to Reading Mode from the View ribbon, clicking the &#8220;Accessible reading mode&#8221; link, and viewing the generated accessible PDF in Adobe Reader. Yup, that&#8217;s right, MS create a tagged PDF right out of the Word Web App for you! Note that if you&#8217;re using Firefox, you&#8217;ll probably first get a web view with pdf.js presenting the PDF. pdf.js does not yet use Accessibility tags, so the best is to click Tools, Download, and then save or open the PDF in Adobe Reader. This is the Tools item in the virtual buffer, not the Firefox menu item.

After I finished some testing with NVDA, I went back and did the same with JAWS and Window-Eyes. For both screen readers, it is recommended that you follow the hint given in the MS Office web app help document to turn off virtual mode. Both screen readers have some difficulty handling role &#8220;application&#8221; correctly, so they need to be forced into non-virtual mode for everything to work correctly.

The Window-Eyes experience was rather dismal despite of this, though. It barely picked up changes in the text content, navigation was slow and unpleasant. It spoke the ribbons OK, but not as fully fledged as NVDA did. Most importantly, it didn&#8217;t pick up changing group info.

JAWS did very well with Office web apps and Firefox. It even picked up the paragraph format used each time the paragraphs changed. Nice touch! It did, however, capture the Ctrl+F6 keys, so it would not allow Word to process them correctly. Navigation between the document and other elements was therefore quite cumbersome, since one needed to tab from the browser controls back to the document and into the ribbons. Since Control+F6 is no keystroke in Firefox, it is probably some funky scripting that is intercepting this keystroke and doing what would otherwise be done with F6 alone. I consider this a pretty annoying bug on Freedom Scientific&#8217;s part. JAWS also spoke the ribbon groups in a flattened manner, leaving out group transitioning mostly. Formatting information in the document was picked up just like by NVDA.

### Internet Explorer

After I finished tests with Firefox, with those overwhelmingly pleasant experiences with NVDA in particular, I also went to see how Microsoft&#8217;s own browser and screen readers which, with the exception of NVDA, focus primarily on IE, would fare.

NVDA worked, but was very slow when navigating the document. Again, it handled role &#8220;application&#8221; best without the need to switch any modes. Formatting info was picked up.

JAWS worked OK once I turned off virtual mode. Here, it also didn&#8217;t capture Control+F6. Its speaking of the ribbons was rather flat, though, not picking up changes in ribbon groups. It also picked up formatting information.

Window-Eyes, again, left the most flaky impression, with document content not always being picked up, navigation being slow, and focus often being stuck or lost.

With the exception of the NVDA sluggishness I saw, which is probablz something that can be fixed in a timely manner, I would compare the results as almost equal between Firefox and IE, with a slight edge for Firefox.

### Safari on OS X

After I completed my testing on Windows, I looked at OS X, where the most popular combination is Safari and VoiceOver. The result was rather disappointing. Both latest Safari on Mountain Lion and Mavericks only pick up the very first paragraph, and if you type something new. Everything else simply isn&#8217;t spoken when navigating through the document with up and down arrow. The ribbons are spoken rather flat, again, with grouping information not being picked up inside the individual ribbons. If you are looking to edit Word documents on Mac, I recommend you use Pages, Nisus Writer Pro or such. Especially the new Pages on Mavericks is much better in terms of accessibility than it was previously.

### On mobile devices

In Firefox for Android, MS doesn&#8217;t render a full Word UI. Instead, one gets only the loosely formatted document and a page number indicator. Trying to request the desktop site from the menu brings you to the general Office.com web site instead. The document can be read, and the login process into your Microsoft Account works as expected.

QuickOffice, available on the Play Store, seems to be pretty accessible, from a quick test with my simple document opened from the MS SkyDrive app.

On an iPad using Safari and VoiceOver, you do get a full UI, and tabs and buttons, combo boxes etc., in the ribbons are spoken when touching or swiping, but grouping information is once again not available. Also, it is not possible to get into a consistent editing mode to work on a document. It is possible in theory, and outside of VoiceOver usage, may even work just fine, but once VoiceOver comes into play, support is not really available. Either the keyboard doesn&#8217;t come up, or if it does, the cursor cannot be tracked. Also, the shortcuts like Control+F6 don&#8217;t work with an attached keyboard.

If you want to use an iPad to do office document processing, I suggest you grab Pages, Numbers, and Keynote from the App Store and edit documents there. The new versions of these apps are amazing in terms of accessibility, in some points even surpassing their Mac counterparts.

### Conclusion

Microsoft did an awesome job with the Office web apps. I only tried Word in this test, but according to the documentation, there is also support for PowerPoint, and at least some for Excel. The fact that Firefox and NVDA work so seamlessly with this web app shows that Microsoft did the coding right, and that their implementation of the WAI-ARIA standard is correct. I was particularly pleased that braille is also working. While it may not be important in some areas of the world, braille isn&#8217;t dead, and the fact that this works is very important to many users.

This is an excellent mainstream example of a well-implemented web app using WAI-ARIA! It should be an incentive to Google and Apple to also implement proper support into Docs and iWork respectively. While Docs has some live region magic, this leaves out braille users completely, and it doesn&#8217;t transport formatting information. I can edit Google Docs documents, yes, but I have no control over the formatting, unless I go into the tool bars, tab through to the various combo boxes and buttons and slowly gather the needed information that way. ChromeVox may or may not be able to gather some more information from Chrome than other screen readers do in all other browsers, but ChromeVox isn&#8217;t the only solution people are using to access documents, and the solution implemented by Google should be universal, not singling out any one browser/AT combo.

And Apple&#8217;s iWork in the browser isn&#8217;t accessible. Nuff said.

It is awesome to see how Microsoft has come along in accepting and implementing web standards. Office Web apps is one great example, and as someone who has worked on improving the WAI-ARIA support for Firefox and helped flesh out various user scenarios by providing testing, blog posts and such for years, it makes me extremely proud to see that Firefox and NVDA are the best to work with is at the time of this writing!
