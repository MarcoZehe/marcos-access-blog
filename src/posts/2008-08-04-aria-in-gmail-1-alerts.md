---
title: "ARIA in Gmail #1: Alerts"
slug: aria-in-gmail-1-alerts
date_published: 2008-08-04T14:45:40.000Z
date_updated: 2008-08-04T14:45:40.000Z
---

[Google](http://www.google.com) have recently started to put [ARIA (Accessible Rich Internet Applications)](http://developer.mozilla.org/en/docs/Accessible_DHTML) into [GMail](http://mail.google.com). This means that ARIA is now getting a lot more exposure than it used to, with GMail being probably one of the most widely used web applications today. It&#8217;s great to see that the hard work Mozilla, IBM, the W3C and especially [Aaron Leventhal](http://accessgarage.wordpress.com/) put into this standard recommendation is getting this prominent placement so soon!

As an appreciation for the work devs at Google such as Srinivas Annam are doing to provide better access to GMail, this post starts a series of articles on the subject of putting ARIA into GMail, either after I&#8217;ve been pointed to specific areas or by finding new features myself.

The first in this series of reviews of GMail ARIA features concerns a very simple, yet effective, one: Alerts. As I already mentioned in my [Easy ARIA Tip #3](http://www.marcozehe.de/2008/07/16/easy-aria-tip-3-aria-invalid-and-role-alert/), alerts are a great way to immediately notify users about important status updates, but without taking focus away from where you are currently working.

As I found out rather by accident, GMail now uses an ARIA landmark role of &#8220;alert&#8221; for the piece of the UI that pops up with an important status message for a few seconds after certain actions have been performed. It disappears again after a few seconds, but because this is an alert, screen readers pick it up and speak it automatically as soon as it appears. Alerts, in the assistive technology terminology, are important status messages that can pop up anywhere on the screen and should be spoken or otherwise indicated to the user immediately. Another example of an alert is the notification box that appears when Firefox asks the user whether they want to remember the password just entered. It is an important notification the user might want to act upon, but still less intrusive than a modal dialog.

Actions that cause this alert to appear are such ones as moving a contact from the &#8220;Recommended contacts&#8221; to &#8220;My Contacts&#8221;, deleting a label, sending an invitation to someone for Google Talk/Chat, adding a contact, etc.

This way, actions that previously used to only pop up a message now provide immediate feedback. There is no need to look for the message, and when one finds it, find out that it just disappeared after the timeout.
