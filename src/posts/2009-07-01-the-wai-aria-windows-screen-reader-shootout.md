---
title: The WAI-ARIA Windows screen reader shootout
slug: the-wai-aria-windows-screen-reader-shootout
date_published: 2009-07-01T14:59:51.000Z
date_updated: 2009-07-01T14:59:51.000Z
---

Firefox 3.5 has been released, and now it&#8217;s time to take a look at what features of WAI-ARIA are being supported by which Windows screen reader. Competition is healthy in this market, and two new screen readers have started supporting Firefox during the 3.5 development cycle: [Dolphin&#8217;s](http://www.dolphinuk.co.uk) Hal/SuperNova and [Serotek&#8217;s](http://www.serotek.com) System Access (including the free SAToGo offering). So to document the current state of affairs, I&#8217;ve taken each one of the following screen readers running on the Windows platform on a tour through some WAI-ARIA implementations that are out there for everyone to use. I&#8217;ve chosen not to do a widget-by-widget walkthrough of the Dojo DIJIT Toolkit or some other JS library already including WAI-ARIA, but instead concentrated on stuff users will actually encounter while surfing the web under non-clinical conditions.

The following are the candidates:

- [NVDA](http://www.nvda-project.org), using the latest [snapshot](http://www.nvda-project.org/wiki/Snapshots) build, which actually does not behave much different from the current 0.6p3 release.
- [JAWS](http://www.freedomscientific.com/products/fs/jaws-product-page.asp) 10.0.1154.
- [Window-Eyes](http://www.gwmicro.com/Window-Eyes/) 7.1.
- [SuperNova](http://www.dolphinuk.co.uk/productdetail.asp?id=1) 11.02.
- [System Access](http://serotek.com/system-access-standalone) in the form of the free [System Access To Go](http://www.satogo.com/) service.

The scoring is simple: For each important feature that is fully supported, each screen reader gets 1 point. A particular web app may have more than 1 feature, so it is possible to score multiple points for web apps.

Note that, even if WAI-ARIA support is not explicitly documented, it is still possible to score points because Firefox exposes many widgets through MSAA and IAccessible2 that are not standard HTML widgets. The interesting question here is: Are the various forms of Forms/Focus mode flexible enough to deal with these?

### Landmarks

WAI-ARIA landmarks are one of the most widely used features of the spec already. They allow another means of navigating a web page, finding things such as the banner, main content, search, complementary or footer information. The newly relaunched [Mozilla Add-Ons website](http://addons.mozilla.org/) uses them now, as does this blog.
NVDANo.JAWSYes. Landmarks are announced, they can be navigated to using the Semicolon quick navigation key, and there&#8217;s a list of landmarks available through JAWSKey+Ctrl+SemiColon. **1 point**Window-EyesNo.SuperNovaNo.System Access To GoNo.
So after the first round, JAWS is in the lead with 1 points.

### Contact form from my Easy ARIA tips

The [example contact form](http://www.marco-zehe.de/examples/Tutorial_aria-invalid_and_role_alert.html) I created for my Easy Aria tip #3 offers several features that can be incorporated without having to create widgets, and which have appeared in some form or another on pages throughout the web already:

- Does the fact that the Name, E-Mail and Message fields are required get indicated by anything other than the label saying &#8220;required&#8221;?

- By navigating the virtual buffer
- When in forms/focus mode and tabbing around

- When entering an invalid name by just entering the first name:

- Does the alert get spoken when tabbing away?
- When tabbing back, does the field get indicated as having an invalid entry?
- Does the fact that this field has an invalid entry get indicated when navigating in the virtual buffer?

In total, there are 5 points to score for this test.
NVDANVDA indicates the field as being required in v cursor mode and when tabbing around. 2 points. It speaks the alert. 1 point. It indicates the invalid attribute both when navigating the virtual buffer and when in focus mode and tabbing around. 2 points. Total: **5 points**JAWSWhile the label gets spoken in virtual cursor mode, when JAWS switches to forms mode automatically when hitting the entry field, the plopping sound drowns out every indication of attributes such as required or invalid. Only when deviating from default settings and turning AutoFormsMode off one will hear those attributes in V cursor mode. No points for these two. The alert gets spoken. 1 point. When tabbing around, the attributes such as required and invalid do get announced with the default settings. 2 points for these. Total: **3 points**Window-EyesThe fact that the field is required gets spoken in both browse and focus modes. 2 points. The alert gets spoken. 1 point. The fact that the field has an invalid entry gets spoken in both browse and focus modes. 2 points. Total: **5 points**SuperNovaNone of the asked for features work. Sorry, **0 points**.System Access To GoThe alert gets spoken. 1 point. None of the attributes are spoken when navigating or tabbing. Total: **1 point**.
After round 2, NVDA and Window-Eyes take the lead with 5 points each, JAWS follows on third place with a total of 4 points, System Access has 1 point, and SuperNova has 0 points.

###  Yahoo! Search

The new [Yahoo! Search](http://www.ysearch.com) is an interactive widget allowing browsing of possible search terms and related concepts that fit the currently selected search term. It uses a whole range of WAI-ARIA widgets, properties and states, live regions etc. When performing a search, the following things should be working:

- When focusing the textbox:

- Does the screen reader speak the name &#8220;Search query&#8221;?
- Does the screen reader announce the description &#8220;Use the up and down arrow keys to select suggestions, or press down and then right to explore concepts.&#8221;?

- When typing, does the screen reader announce that search suggestions are available?
- When search suggestions are available, does pressing DownArrow properly announce that focus shifted to the list of suggested search terms, and what to do to get back to the search field?
- Does pressing RightArrow announce the shift to the &#8220;related concepts&#8221; list and the selected item?
- When arrowing through either list, does the highlighted/focused item get spoken, and does the search that will be performed when pressing Enter get announced by the screen reader?

So, there are 7 points to score for this one.
NVDAIt speaks the &#8220;Search query&#8221; label. 1 point. It speaks the &#8220;Use the..&#8221; description. 1 point. When search suggestions are available, the fact is announced. 1 point. When pressing DownArrow, the transition to the list of suggested terms is announced along with the full instructions and the selected item. 1 point. When arrowing left and right to the related concepts and back, each focus transition is properly announced and the highlighted item read. 1 point. When arrowing up and down through either list, the newly highlighted search term is announced, and the search that is going to be performed is announced automatically. 2 points. Total: **7 points**JAWSWhen focusing the search field, the &#8220;Search query&#8221; label is announced. 1 point. The &#8220;use &#8230;&#8221; description is not announced automatically. It is also not being announced when pressing JawsKey+Tab or Insert+F1. The only way to get to it is to use their HomeRow utility functions and cycling to the &#8220;Description&#8221; item with HomeRow+F10 and then listening to it with HomeRow+F9. For this almost non-discoverability I can&#8217;t give a point, sorry. When search results are available, this gets announced. 1 point. When pressing DownArrow, the transition to the list is announced along with the prompt. 1 point. When RightArrowing, the transition to the &#8220;Explore related concepts&#8221; list is announced. 1 point. When arrowing up and down, the newly highlighted item is not announced, and neither is the search that is going to be performed. One can get the currently focused item by using Insert+Tab, but the description is once again burried in HomeRow. I&#8217;m willing to give half a point for this one since initially it will be confusing to users that they don&#8217;t hear anything when arrowing up and down. Total: **4.5 points**Window-EyesThe label &#8220;Search query&#8221; is announced. 1 point. The &#8220;Use&#8230;&#8221; description is announced. 1 point. The availability of search results is not announced. The transition to the search term suggestions is partially announced: The focused item is, but the prompt is not. Half a point. The transition to the &#8220;Related concepts&#8221; and back is announced partially: The newly focused item is, but the prompt isn&#8217;t. half a point. When arrowing up and down, both the search suggestion and the search that is going to be performed are being announced. 2 points. Total: **5 points**.SuperNovaAnnouncing the &#8220;Search query&#8221; label works. 1 point. But unfortunately, that&#8217;s where the fun ends. The description is not announced, the availability of search term suggestions is neither. And the rest of the functionality of this widget is broken. DownArrow is captured by SuperNova and will not fall through to the widget, getting one stuck inside the textbox. Tabbing around will only get up to the &#8220;Submit your site&#8221; link, but the search terms aren&#8217;t reachable. SuperNova will say &#8220;bottom&#8221;, and no further can one go. Total: **1 point**.System Access To GoThe picture is roughly the same as with SuperNova. The label &#8220;Search query&#8221; is spoken. 1 point. The description is not spoken. The availability of search term suggestions neither. DownArrow gets you to the &#8220;Search&#8221; button instead of the list of search terms. In fact, this virtual buffer also ends at the &#8220;Submit your site&#8221; link. Total: **1 point**.
At the end of this round, NVDA leaps ahead with 12 points. Window-Eyes is second with 10 points, followed by JAWS with 8.5 points. System Access scores a total of 2, and SuperNova got their first point!

### GMail Chat

GMail has an integrated Google Talk widget that I talked about [before](http://www.marcozehe.de/2008/08/06/aria-in-gmail-2-enhancing-the-chat-experience/). The following should be working:

- Ability to activate the &#8220;Set status here&#8221; label by pressing Enter on it to input a personal status message.
- Ability to activate the &#8220;status menu&#8221; and navigate inside it with speech output.
- Navigate inside the list of buddies and hear their names and status.
- Inside the Chat window, announce typed and incoming messages.
- Track going to the Chat window toolbar.

Once again, there are 5 points to score. Let&#8217;s see how everyone fares!
NVDAPressing Enter on &#8220;Set status here&#8221; works fine, and one can input a status message. 1 point. Activating and navigating in the status menu works fine. 1 point. The list of buddies talks fine. 1 point. Chatting works fine. 1 point. Trying to access the toolbar items by first going out of focus mode with Escape made NVDA hang each time I tried it. It somehow has a conflict with the chat widget. Sorry, no point for this one. Total: **4 points**JAWSThe label to input a status message is not activable by pressing Enter. It can only be activated using the JAWS cursor emulation. Since this is a well-known workaround, I&#8217;m giving half a point. The Status menu is activable and works fine. 1 point. The list talks fine. 1 point. The incoming and typed messages are spoken in the chat output. 1 point. The chat toolbar to pop out the chat into its own window is accessible. 1 point. Total: **4.5 points**.Window-EyesAccessing the label to input a status message works with workaround of routing WE cursor to element, then mouse to WE cursor, and clicking with the mouse. However, I cannot input a status message afterwards, even though I hear the prompt for it. a quarter of a point for that. The status menu cannot be activated through any means. The list talks fine. 1 point. The chat window works with restrictions: It can be activated and typed in, but incoming messages are not read. half a point for that. Trying to access the toolbar items of the chat window sort of works by turning browse mode back on, and then searching, but since the last position is not retained, I can only give half a point for this one. Total: **2.25 points**.SuperNovaActivating the &#8220;Set status here&#8221; works. I can input a new status. 1 point. The status menu button does not work, cannot be activated or found through other means. The list of buddies talks. 1 point. Activating a chat with a buddy does not work. Consequently, since the chat window never comes up, the toolbar items for the chat window obsolete themselves. Total: **2 points**.System Access To GoThe &#8220;Set status here&#8221; and Status menu items are not accessible. The list talks fine. 1 point. Activating a chat works. 1 point. Finding the toolbar buttons is not possible, because the cursor gets stuck within the textbox of the chat window and there&#8217;s no way to move it out. Total: **2 points**.
### &#8230;and the winner is&#8230;

Congratulations go to the NV Access team and their screen reader! In this WAI-ARIA shootout, you scored 16 points.

Number 2 is JAWS by Freedom scientific, scoring a total of 12.5 points.

Window-Eyes by GW Micro is third with a total of **12.25 points**.

Fourth place goes to Serotek with their System Access screen reader product line, with a total of **4 points**.

And SuperNova by Dolphin receives **3 points**.

### In summary

This was a close match, although there is clearly a dividing line between the three screen readers that have been supporting Firefox for a longer period of time, and those that came on board fresh within the past year or so.

I hope this little competition encourages each of the vendors to better themselves for the benefit of the users. We&#8217;re here to help each and everyone of you with technical advice and discussion on how things should be implemented.

Keep on rockin&#8217;!
