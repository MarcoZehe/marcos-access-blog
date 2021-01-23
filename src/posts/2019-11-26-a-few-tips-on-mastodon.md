---
title: A few tips on Mastodon
slug: a-few-tips-on-mastodon
date_published: 2019-11-26T13:00:00.000Z
date_updated: 2019-11-26T13:00:00.000Z
tags: [Federation, Mastodon, PeerTube, PixelFed, SocialNetworking]
---

In recent months, you may have come across the name Mastodon here and there. Especially two weeks ago, when Twitter again made headlines with some, possibly politically motivated, account suspensions that resulted in an [influx of users from India](https://www.bbc.com/news/world-asia-india-50343054) to the federated network. Time to look at it a bit, also with regards to accessibility.

[Mastodon](https://joinmastodon.org/) itself is merely the name of an application that, like many others, uses an open standard called [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) to exchange and manage social media content. The perk is that there is not one centralized service that manages all users or the content they generate. Instead, there are hundreds or thousands of servers all over the world running the Mastodon software and exchange the status messages, called toots, by their users. This is called a federated model. Most of these instances, as the servers are called, are run by private persons or small companies, but as its popularity catches on, one can expect to see more instances by bigger entities as well.

Users are addressed much like in an e-mail, which is also a decentralized service. The address is usually @<username>@<instance.domain>. Users can follow each other across instances. Most instances also have timelines that are only from the users of that instance, and one that is a collective federated view of recent toots from people of instances they exchange their toots with. More on the privacy settings follows further below that control how toots appear in these timelines, or not.

And here&#8217;s the amazing thing: ActivityPub is not limited to text-based content. While Mastodon has many concepts that are similar to Twitter, there are other pieces of software that have different emphasis. [PixelFed](https://pixelfed.org/), for example, is a federated photo sharing service, [PeerTube](https://joinpeertube.org/) one for videos. Other software implements part of the ActivityPub protocol. The service [micro.blog](https://micro.blog) offers paying users with their own domain a Mastodon-compatible user name so people from the federated network, called the fediverse, can directly follow, and reply to, posts from users of that service. WordPress can, via a plugin, also be made to act as an ActivityPub service, and blog authors can be followed so their posts appear on their followers&#8217; timelines.

And you probably guessed it, it is no problem whatsoever to follow a PixelFed or PeerTube user from Mastodon as well. Try that with Twitter, Instagram and YouTube, it won&#8217;t work unless those silos would one day start federating all of a sudden. 🙂

Most of the software from this federated network is open-source, and financial support for development, running instances etc., comes from the community of users through services like Patreon.

And to see this all in a video, if you prefer that, [watch this introduction to the Fediverse on PeerTube (opens in a new tab)](https://peertube.social/videos/watch/d9bd2ee9-b7a4-44e3-8d65-61badd15c6e6).

## Some comparisons between Mastodon and Twitter

Of those pieces of the fediverse, Mastodon is by now probably the most well-known. It is also the one service most resembling Twitter. Twitter is also probably a social network most blog readers know, so let&#8217;s have a look at some of the similarities and differences.

While on Twitter, posts have a length of 280 characters, that limit is 500 on Mastodon by default. Like tweets, these toots can also contain media like photos, videos or gifs, or even audio. Mastodon had image descriptions from the start, and unlike with Twitter, allows to apply descriptions also to gifs and videos. Some apps can even be set to not allow toots without images that don&#8217;t have a description. The number of described images from Mastodon users feels much higher than on Twitter. PixelFed also allows image descriptions, and these federate to Mastodon without a hitch.

For toots, there are four privacy levels that can be set.

- Public: The post will appear on the user&#8217;s profile page, in their followers&#8217; timelines, as well as both the local and federated timelines.
- Unlisted: The toot will appear on the user profile, visible to visitors, and in followers&#8217; timelines.
- Followers only: The toot will appear on the profile if visited by a user who is following you, as well as the timelines of followers.
- Direct: Only those mentioned in the toot will see it. This is the equivalent of direct messages on Twitter, one-on-one or group. But unlike Twitter, which has a separate length for direct messages, direct toots are also 500 characters max.

There are also some conventions around these privacy settings that many instance administrators ask users to uphold. For example when writing a thread, the first post can be public, but subsequent ones should be set to unlisted as to avoid flooding the federated and local timeslines with several toots sent in rapid succession on the same subject. These timeslines are for discovery of new users, and to easily start conversations and should be kept mostly clean from conversational traffic. Consequently, replies to public toots should also be sent as unlisted or followers-only (if more private).

One of the biggest advantages of Mastodon over Twitter is a concept called content warnings, or CWs. These can be applied to whole toots, or images posted be marked as sensitive. Clients will then only show the text of the content warning, but not the whole toot, or only show the sensitive media when the user explicitly taps/clicks on them. Mastodon&#8217;s goal is to create a safer environment for people of various backgrounds, so these mechanisms are there to foster a more inclusive environment. Some people, for example, don&#8217;t want to read about politics, food, or be immediately exposed to selfie photos that may make eye contact with them. So, it is good practice and well-mannered behavior to not force everybody to read about the newest U.S. politics, or Brexit chaos, news. Photos or toots about food matters are also often hidden behind content warnings. Selfies are often tagged with &#8220;Selfie, possible eye contact&#8221; so users can choose to see or not see those photos of people who may make eye contact with them. The examples are endless.

This all is aimed at fostering a more relaxed, harrassment-free and therefore safe environment for everybody. Of course, humans make mistakes, so if someone is new to the fediverse and not yet hiding every selfie or sensitive toot behind a content warning, they are usually asked in a friendly manner to adopt these conventions. This request can come from other users or moderators of an instance.

Of course, sometimes things can go wrong especially with Mastodon growing more popular, so there are instances that post misogynistic or racist content as well. But most other instances quickly find out about those instances, and there are mechanisms in place to block or mute such instances so that even public toots from those instances don&#8217;t harrass users of well-behaved instances.

## Notes on accessibility

I already mentioned that Mastodon supports image descriptions from the start. The default Mastodon interface is also quite accessible, and because Mastodon is open source software, everybody can file issues on the Github repository, or even submit pull requests to fix problems and improve the software. In my previous interactions, I have found the maintainers to be open to almost every suggestion. The one instance where the accessibility community has failed so far surrounds a question around underlining links. Some software like Pinafore (see below) therefore offer various options to customize the appearance of various elements far beyond just theming.

And because Mastodon is open and has an unrestricted public API, anyone can write an own client to interact with that. There are very accessible alternatives. Mastodon is OK for most things, too, but a really enjoyable experience is delivered by some other software. See the next section for a few names.

So if you&#8217;re a software developer who encounters something on Mastodon they would like to improve, maybe even in the field of accessibility, feel free to dive in and improve! Or if you are a user and know someone who is a developer, offer them an invitation to their favorite restaurant and ask them if they would like to fix something. 😉

## Some accessible apps

Here&#8217;s a non-exhaustive list of apps for Mastodon. These are all apps I have been, or am using, or watching closely, myself and found them to be accessible to screen reader users, and hopefully many more, too.

- [Pinafore](https://pinafore.social/): A very accessible web client that works great on desktop and mobile with various browsers and screen readers. Pinafore&#8217;s author Nolan Lawson recently published a blog post about what he learned about accessibility while working on Pinafore. I [wrote about that here](https://marcozehe.de/2019/11/05/nolan-lawson-shares-what-he-has-learned-about-accessibility/).
- [Toot!](https://itunes.apple.com/app/toot/id1229021451?ls=1&amp;mt=8): An iOS client that recently became very accessible. Its author is also very open and supportive of various marginalized groups.
- [Tusky](https://tusky.app/): A very accessible Android client with great features that take advantage of newest platform features such as custom actions and more. The Tusky developers are very open and often super quick to implement feature requests.

Have I peaked your curiosity? Well then, [find an instance](https://joinmastodon.org/), or [run one yourself](https://masto.host/), and explore the Fediverse. If you wish, you can [follow me](https://toot.cafe/@MarcoZehe) as well. Enjoy, and maybe I&#8217;ll see you there!
