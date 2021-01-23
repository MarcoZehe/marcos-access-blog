---
title: How to use Element and Matrix with a screen reader
slug: how-to-use-element-and-matrix-with-a-screen-reader
date_published: 2020-07-20T08:13:19.000Z
date_updated: 2020-07-20T12:19:38.000Z
tags: [Chat, ElementIO, MatrixOrg]
excerpt: In this blog post, I give an introduction to the Matrix communication network and the most popular client named Element. I will show you the main elements of the web and desktop user interface and how you can quickly navigate around it using a screen reader.
---

On December 19, 2019, [Mozilla announced that it will switch to Matrix](https://discourse.mozilla.org/t/synchronous-messaging-at-mozilla-the-decision/50620) and Riot as the main synchronous communication platform, replacing IRC. In July 2020, Riot was [renamed to Element](https://element.io/blog/welcome-to-element/), along with some other rebranding that happened around the software and services. This post is aimed to give you an introduction to using [Element](https://element.io/), the most popular Matrix client, with a screen reader.

Matrix itself is an open standard protocol that defines how a chat client, such as Element, talks to a server, such as Synapse, and how servers communicate to each other to exchange messages in shared, or as is the jargon, federated, rooms. In the Matrix network, rooms can be federated across the whole network, so no matter which server you choose as your home server, you’ll get the messages in rooms you join no matter where they originated from.

You can imagine this as if you were signing up to a particular e-mail or news server, and then getting messages from other servers depending on which newsgroups you subscribe to or e-mail lists you joined.

IRC, on the other hand, is pretty self-contained. You have to connect to a particular server to join a particular network. And federation was not built into the platform. There are a few non-standard ways for servers to communicate with one another to share the load on any single network, but as this is non-standard, it is also error-prone. Ever heard of net splits? Pretty not pretty.

But one thing both networks have in common is the fact that there are client choices available. There are clients for mobile platforms, the command line, the web, and first native offerings are also in the works. Check out [this non-exhaustive list](https://matrix.org/clients/) of clients for inspiration.

The client most people will, however, probably come in contact with initially is Element, the client primarily developed by Element Matrix Services, a company behind many Matrix offerings. Element for web/desktop, iOS, and Android are all open-source, with repositories on Github. Filing issues or submitting pull requests is therefore possible for anyone who wants to improve them.

Initially, accessibility was terrible across the board. And there are still [a number of issues open](https://github.com/vector-im/riot-web/issues?utf8=%E2%9C%93&amp;q=is%3Aissue+is%3Aopen+label%3AAccessibility) for the web client. But things have [improved massively](https://blog.riot.im/riot-web-1-5/) since the [one-month trial](https://discourse.mozilla.org/t/synchronous-messaging-at-mozilla-trial-servers-feedback/44871) Mozilla did in September and October 2019.

But the team didn’t stop there and is improving accessibility, with also some help by yours truly, until now and beyond. So by the time you read this, there may already be more things working than described here.

## The web client

The web client, once you signed up and logged in, consists of a top part that has a header, a Communities button which currently doesn’t do much, and a User sub menu button. That sub menu, when opened, has shortcuts to notifications, privacy, and all settings, feedback and Logout options.

The Settings, when opened, come up in a modal dialog. The buttons at the top are actually kind of tabs, just not exposed that way yet. They control various settings which then appear below. The settings apply once you change them. Some screens offer a Save button at the bottom. To close the dialog, choose the Close button at the top.

Back in the main UI, following the top bar is the left side bar. You first get a Search field. This is to filter your active rooms shown in the room list below. You can press DownArrow to move straight from the search field to the room list. This is arranged as a tree view. The top-level nodes are direct messages and rooms, and sometimes system alerts. Below those, when expanded, are the actual persons, rooms, and bots that sent those alerts. Use standard navigation like in Explorer’s folder tree to navigate.

Direct messages are private messages. They can be one-on-one, or small groups of people. You can focus the edit field for search, then tab forward once and use the arrow keys to navigate. Press Enter to switch to the selected room. You can also invoke a context menu by usual means to access more options. You can also start a new chat when in the People group, or create your own room when within the Rooms group.

If from the search field, you press Tab instead, you land on an Explore button. This allows you to explore other rooms on the server or the whole Matrix network. Type in a phrase you want to search for, and below, you will get a table of found rooms that you can either preview or join. Matrix usually keeps a history of what was being said, so if you are allowed to view the contents as a non-member, you will get a list showing recent messages. Otherwise, you can also join the room either from the table or the preview.

Press tab again, and depending on your settings, you may reach a toolbar of recently visited rooms. Use left and right arrows to navigate in this toolbar, Space to jump to that room, or tab to move to the room list that was described above.

If you are in a room, the main area, also denoted by a landmark, contains the room view. At the top, there is the name and topic, a Room Settings button, a means to manage Integrations, such as Github or other bots you have connected, or perform a Search.

Below that, you will find a set of tabs like Members List, Files, and Notifications. These pertain to the landmark right below them. Initially, no tab is selected, so the complementary landmark may not be there yet. Select one of the tabs to make it appear.

Below those tabs is that landmark with the side bar content in it. Visually, this side bar is displayed to the right of the main chat area. This can contain either the list of members in this room, files, or your Notifications. This depends on which tab is selected above.

If the room member list is displayed, you can invite others to the room as well if you know their handle. You can jump from button to button for each member. If you press Enter or Space, you’ll get more info about that member below the list. You can also bring up a context menu to get more options. You do this via regular shift+F10 or Applications Key. There is also a search facility available.

The Files tab contains files shared within this room.

Once that landmark ends, the main chat area begins. The first two elements are either a Jump To First Unread button, or one that is labeled Jump To The Latest Message. The other may or may not be there, and is labeled Mark Channel As Read. The Jump To the Latest Message button will often mark the whole room as read as well. Only if you haven’t visited a room in a long time and there are many unread messages, the Mark Channel As Read button, or hitting Escape while focused in the message composer, will mark all messages as read.

So, to get to the first unread messages, press the „Go To First Unread message „button. This will scroll the message list up. The list of messages is a live region, which means your screen reader will speak updates as they come in. After pressing the button, once your screen reader starts speaking, press s (in JAWS or NVDA) to move to the first separator. That is then usually the beginning of new messages.

*Tip*: The new messages separator disappears after 3 seconds, or 3,000 milliseconds, when the room is being displayed, by default. In the Settings dialog, on the tab also named Settings, you can change this threshold to a larger value, for example 15,000. This will give you much more time to actually jump to that separator, depending on how fast your screen reader is speaking. I found this to work much more reliably, too, when coming back to a room, and the new messages separator is being displayed right on the screen I arrive at. Adjusting this setting makes keeping up with channels regularly over the course of a day much more efficient.

Below those buttons, the main list of messages is shown. It is dynamically updating, so when you get close to either edge, new messages are pulled in. A separator marks where each new day begins, and also is the unread marker in case you have viewed this room before. You navigate either using the virtual cursor arrow keys, or by skipping between list items. In NVDA and JAWS, you press i and shift+i quick navigation keys, for example. Refer to your screen reader documentation on how this is done.

Once focused within a message, action items become available following the message, like adding a reaction, replying, or more options. If you are on your own message, you can also edit that, to correct typos, for example. Those are all labeled buttons. These appear either on mouse hover or when focus is within the message container. However, due to some browser quirks, sometimes things may disappear still, so if things aren’t working as you expect them to, route the mouse there to hover. Also, these buttons are contained within a toolbar, which responds to the usual pattern that arrow keys on the keyboard move between buttons, and tab moves out of the container to the next element. That is, if you are using a keyboard, or your screen reader is in focus or forms mode.

Full keyboard support for the message list, similar to what Slack is offering, for example, is planned, but not implemented yet. For screen reader users, it is best to rely on browse or virtual cursor mode to navigate around.

Below the messages, outside the list, is the composition area for new messages or replies if you chose to reply to a message. You can type as usual, use Markdown, and autocomplete people starting with an @ sign, or emojis starting with a colon. These auto-completes are accessible, although right now, you should complete with Space, not Enter or Tab yet. This is being worked on to meet expectations and comply with the WAI-ARIA authoring practices, but as of this writing, isn’t in a release yet.

Below that compose area, there are buttons to add files, start an audio or video call, and add stickers.

### Things that don’t work well yet

Apart from the problem that the messages list cannot yet be navigated with the keyboard, there are a few other things that don’t work so well yet, but which are in the works of getting improved. One of them is the members list itself. It should be easier to navigate with the keyboard.

One other area that is currently problematic is adding a reaction to a message. The emoji picker for that is not keyboard accessible yet, and the screen reader list has only menu items. Using NVDA, I can indeed add a reaction reliably, by using character or word navigation when in virtual mode inside the list, but it isn’t pretty.

Also, the fact that things you can do with a message are not as reliable as desired can pose some problems still. It is far better than it was, but the true solution will come with the work that makes the whole thing fully keyboard accessible. So, sometimes, for the messages list, you will need your screen reader’s mouse emulation commands to pull the mouse somewhere in order for certain controls to appear. But use this as a last resort if, for some reason, you get stuck.

## Element on mobile

Both Element for iOS and Element (formerly RiotX) for Android, the newer of the two flavours that are on the Google Play Store, have received accessibility improvements and are much more usable than they were a few months ago.

On iOS, I suggest ignoring the Home tab for now, since that doesn’t work at all with VoiceOver. Instead, use the Direct Messages and Rooms tabs to navigate your messages and room chats. You can also add some to favourites, which is the second tab, which also works. Communities are in the same “in development” state as they are on the web. Inside chats, double-tap and hold or [use the context menu gesture](https://marcozehe.de/2019/12/05/quickly-bringing-up-context-menus-in-voiceover-in-ios-13-2/) to interact with elements. There is a button in the top middle below the header that allows you to jump to the first unread message. From there, you can swipe to the right to read through your chat log. Sometimes, if something in the room changes, the position may shift slightly, and you may lose position. This also happens to sighted people and is nothing VoiceOver specific.

On Android, the former Riot app has been deprecated, and people are migrated over to Element. This is also the only app that gets the attention and is a continuation of the former app named RiotX. That also gets the new TalkBack enhancements when there are some. I must admit I haven’t used it myself, since all this started when I already had switched back to iOS, but I hear good things from others in the [#element-accessibility:matrix.org](https://matrix.to/#/!aDqOGCgMtPXQREzAWj:pvagner.tk?via=pvagner.tk&amp;via=matrix.org&amp;via=privacytools.io) channel.

## Conclusion

I must say I share the excitement the Matrix team [expressed in their announcement](https://matrix.org/blog/2019/12/19/welcoming-mozilla-to-matrix/) of the collaboration with Mozilla. It is an open standard, with open-source software, with choices for clients to use, and the possibility to improve the accessibility by reporting issues or fixing bugs. New Element versions are released frequently, so those fixes also will get deployed to the Mozilla instance and other hosted Matrix offerings which also use Element as their front-end.

I hope this guide helps you find your way around Element and the Matrix Eco system more easily. It still has issues, but so have proprietary offerings like Slack or the like. And as we all know, accessibility is a process of constant improvement.

I would personally like to thank my colleagues for making accessibility one of the deciding factors for choosing the replacement. Big thanks also go out to the members of the Matrix and Element teams who were super responsive to accessibility concerns, and have kept the momentum going even after the trial was over and nobody knew if Matrix would be chosen in the end. It is a pleasure working with you all!

See you in the Matrix!
