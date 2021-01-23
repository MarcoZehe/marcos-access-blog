---
title: Welcome to Marco's Accessibility Blog 2.0!
slug: welcome-to-marcos-accessibility-blog-2-0
date_published: 2020-05-29T14:29:53.000Z
date_updated: 2020-05-29T14:29:53.000Z
tags: [Blogging, Ghost, JAMstack, Eleventy, Hugo, GatsbyJS, Netlify, OpenSource]
excerpt: This blog has launched on a new platform. Find out a bit about the background and motivation in this post.
---

Yes, you read that right! This blog has just relaunched. It runs on a new platform. And it is a lot faster, and has a very slick look and feel to it. Read on to find out some more details.

## Why the switch?

Well, after 13 years, I felt it was time for something new. Also, as I wrote recently, Mozilla now has a [dedicated accessibility blog](https://blog.mozilla.org/accessibility/), so I feel that I am free to do other things with my blog now. As a sign of that, I wanted to migrate it to a new platform.

This is not to say the old platform, WordPress, is bad or anything like that. But for my needs, it has become much too heavy-weight in features, and also in the way how it feels when performing day to day tasks. 80% of features it offers are features I don't use. This pertains both to the blog system itself as well as its new block editor. But those features don't get out of the way easily, so over the months and actually last two to three years, I felt that I was moving mountains just to accomplish simple things. It has nothing to do with the steadily improving accessibility, either. That is, as I said, getting better all the time. It just feels heavy-weight to the touch and keyboard when using it.

So one day earlier this year, I read a post on my favorite publishing editor's web site, where they told the [story how they migrated to the Ghost platform](https://blog.ulysses.app/the-new-blog/). I must admit I had never heard of [Ghost](https://www.ghost.org/) before, but was curious, so I started poking around.

## Discovering the JAMstack

As I did so, I quickly stumbled on the term [JAMstack](https://www.netlify.com/blog/2015/11/16/what-is-the-jamstack/). Some of you may now ask: "Stumbled upon? What rock have you been living under these past 5 or 6 years?" Well, you know, I had heard of some of the software packages I am going to mention, but I didn't have the time, and more recently, energy, to actually dig into these technology stacks at all.

The truth is, I started asking myself this question as I became more familiar with Ghost itself, static site generators, and how this can all hang together. JAM stands for JavaScript, APIs and Markup, and describes the mental separation between how and where content is created, how it's being transferred, and then finally, output to the world.

In a nutshell - and this is just the way I understand things so far -, applications like WordPress or Drupal serve the content from a database every time someone visits a site or page. So every time an article on my blog was being brought up, database queries were made, HTML was put together, and then served to the recipient. This all happens in the same place.

### Better efficiency

However, there are other ways to do that, aren't there? Articles usually don't change every day, so it is actually not necessary to regenerate the whole thing each time. Granted, there are caching options for these platforms, but  from past experience, I know that these weren't always that reliable, even when they came from the same vendor as the main platform.

JAMstack setups deal with this whole thing in a different way. The content is generated somewhere, by writers who feel comfortable with a certain platform. This can, for all intents and purposes, even be WordPress nowadays since it also offers a REST API. But it can also be Ghost. Or [NetlifyCMS](https://netlifycms.org/) together with a static site generator. Once the content is done, like this blog post, it is being published to that platform.

What can happen then depends on the setup. Ghost has its own front-end, written in [Ember](https://emberjs.com/), and can serve the content directly using one of the many templates available now. This is how my blog is set up right now. So this is not that much different from WordPress, only that Ghost is much more light-weight and faster, and built entirely, not just partially, on modern JS stacks.

However, it doesn't have to be that way. Through integrations, web hooks and by leveraging source code management systems like Github or Gitlab, every time my content updates, a machinery can be set in motion that publishes my posts to a static site generator or fast JavaScript application framework. That then serves the content statically, and thus much faster than a constant rebuild, whenever it is being called from a visitor.

Such static site generators are, for example, [Hugo](https://gohugo.io/) or [Eleventy](https://11ty.dev/), which both serve static HTML pages to the audience with only minimal JavaScript. Or they can be application frameworks like [Gatsby.js](https://gatsbyjs.org/), which is a single page application serving the content blazing fast from a local build which is based off of the content created in the publishing platform. That way, the actual presentation is completely decoupled from the publishing workflow, and the developer who works on the front-end doesn't even have to know Ghost, WordPress, or what not, just the API, to get the content and present it, in a way they feel most comfortable with.

As I mentioned, my blog currently serves the content directly from Ghost. But if I feel like it, I might also set up a Gatsby mirror on another domain that will also be up to date whenever something is being published here. The [steps to do that](https://ghost.org/docs/api/v3/gatsby/) are not that difficult at all.

## Were there alternatives?

One path I was researching as a possible alternative to Ghost was going with Hugo. To get started, I read this [excellent migration report by Sara Soueidan](https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/), and did some more research. One show stopper was that I like to blog from an iPad nowadays, and there was not a very elegant way to integrate Ulysses with Hugo or a Github repository. Yes, there is a workflow (umm, Siri Shortcut) available that could do that with an iOS Github client named WorkingCopy, but this all felt too fragile and cumbersome. So in the end, because I want to concentrate on the writing most, I decided not to go that route. Nothing beats native publishing from an app to the CMS.

The same was true for Eleventy, which I looked at just because there is such a great diverse community behind it, including quite a number of people I know and highly respect. And as hinted above, none of these packages is out of my mind yet when it comes to tinkering, researching, and getting up to speed with modern web technologies. After all, these packages are all interoperating with one another in an open fashion. They are the modern versioon of what the web stands for, an open, collaborative, interoperable resource for everyone.

And let's be honest, there are enough silos out there. Yes, even when open source, a platform that powers over a third of the web sites out there can be considered its own silo.

## What about accessibility?

Here's another piece of good news: All these communities, which are interconnected and exchanging knowledge and wisdom, also have members with accessibility in mind. Some are strong advocates, some more the background worker, but all have in common that accessibility is no stranger to them. Ghost itself welcomes reports and pull requests, some theme authors have mentions of accessibility in their goals and theme features. Projects like Gatsby and Eleventy have people with strong voices among their staff or supporters, and just by looking at the project web sites shows that.

As for this blog, before I officially launched, I submitted some fixes to the theme I wanted to use, as well as Ghost itself, which were all quickly accepted. I am using a copy of the theme with these fixes on this blog already.

## So where are the comments?

Yes, those have indeed gone from this site. They proved to be more trouble than they were worth in the last few years. Most of them were spam, and hardly any other comments came through. A recent informal survey I conducted on Twitter also showed that two thirds of my readers actually don't care much for comments.

> Informal survey: When you read a blog post by someone, how important is the ability of publicly commenting on it?
> &mdash; Marco Zehe (@MarcoInEnglish) [May 25, 2020](https://twitter.com/MarcoInEnglish/status/1264768539526860802?ref_src=twsrc%5Etfw)

So I decided that I am not going to integrate any commenting system into my Ghost setup for now, even though it is certainly [possible using some 3rd party](https://ghost.org/tutorials/adding-comments/) providers. If I change my mind in the future again, there are certainly some options available.

## Conclusion

I hope you'll enjoy this new chapter of the journey with me, and stay a loyal reader! This blog will, as previously hinted, in the future focus more on personal topics, research, and other related items. For a glimpse, well, reread this post. ;-) 

In a future article, I will go into some of the Ghost-specific details I dealt with when migrating from my WordPress setup.

Let's do this!
