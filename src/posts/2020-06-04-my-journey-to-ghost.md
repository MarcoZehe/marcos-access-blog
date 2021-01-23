---
title: My Journey To Ghost
slug: my-journey-to-ghost
date_published: 2020-06-04T11:30:13.000Z
date_updated: 2020-06-04T17:32:55.000Z
tags: [WordPress, Ghost]
excerpt: In this post, I discuss some aspects of my migration of this blog from WordPress to Ghost, and what pitfalls I encountered.
---

As I [wrote in my last post](/welcome-to-marcos-accessibility-blog-2-0/), this blog has moved from WordPress to Ghost recently. [Ghost](https://ghost.org/) is a modern publishing platform that focuses on the essentials. Unlike WordPress, it doesn't try to be the one-stop solution for every possible use case. Instead, it is a CMS geared towards bloggers, writers, and publishers of free and premium content. In other words, people like me. :-)

After a lot of research, some pros and cons soul searching, and some experimentation, last week I decided to go through with the migration. This blog is hosted with the Ghost Foundation's [Ghost(Pro)](https://ghost.org/pricing/) offering. So not only do I get excellent hosting, but my monthly fee will also be a donation to the foundation and help future development. They also take care of updates for me and that everything runs smoothly. And through a worldwide CDN, the site is now super fast no matter where my visitors come from.

The following should, however, also work the same on a self-hosted Ghost installation. I am not consciously aware of anything particular that would only work on the hosted Ghost(Pro) instances. So no matter how you have your Ghost site running, the following all assumes that you have, but the details are up to you.

## Publishing from iPad

One of the main reasons to choose Ghost also was the ability to publish from my iPad without any hassle. My favorite writing app, [Ulysses](https://www.ulysses.app/), has had the ability to publish to Ghost since June 2019. Similar to its years long capabilities to publish to WordPress and Medium, it now also does the same with Ghost through their open APIs. The Markdown I write, images, tags, and other bits of information is automatically translated to concepts Ghost understands. For a complete walk-through, read the [post on the Ulysses blog about this integration](https://ulysses.app/integrations/publish-to-ghost).

## Migrating from WordPress

My journey began by following the [Ghost tutorial on migrating from WordPress](https://ghost.org/tutorials/wordpress-to-ghost/). In a nutshell, this consists of:

- Installing an official exporter plugin into your WordPress site.
- Exporting your content using that plugin.
- Importing the export into your Ghost site.
- Check that everything works.

Sounds easy, eh? Well, it was, except for some pitfalls. With some trial and error, and deleting and importing my content from and into my Ghost site a total of three times, I got it working, though. Here's what I learned.

### Match the author

Before exporting your content from WordPress, make sure that the author's profile e-mail address matches that of the author account in Ghost. Otherwise, a new author will be created, and the posts won't be attributed to you. That is, of course, assuming that you are doing this import for yourself, not for a team mate. The match this is done by is the e-mail address of the actual author profile, not the general admin e-mail from the WordPress general settings.

### Check your image paths

This is another bit that differs between Ghost and WordPress. WordPress puts images into a wp-content/uploads/year/mo/filename folder. The Ghost exporter tries to mimic that, puts the images in content/wordpress/year/mo/filenames. But the links in the actually exported JSON file are not adjusted, you have to do that manually in your favorite text editor with a find and replace operation. And don't forget to zip up the changed JSON file back into the export you want to upload to the Ghost importer.

### Permalink redirects

This was actually the hardest part for me, and with which I struggled for a few hours before I got it working. In default WordPress installations, the permalink structure looks something like `mysite.com/yyyy/mm/dd/post-slug/`. Some may omit the day part, but this is how things usually stand with WordPress. Ghost's permalink structure, which you [can also change](https://ghost.org/docs/api/v3/handlebars-themes/routing/), by the way, is different. Its default permalinks look something like `mysite.com/post-slug/`. Since this was all new, I wanted to stick with the defaults and not reproduce the WordPress URL structure with custom routing.

The solution, of course, is one that, if someone brings up a link to my previous posts from another site, or a not yet updated index from Google searches, they will still get my post displayed, not a 404 Page Not Found error. And the proper way to do that is by permanent 301 redirects. Those are actually quite powerful, because they support regular expressions, or RegEx.

Regular expressions are powerful search phrases. They can, for example, do things like „Look for a string that starts somewhere with a forward slash, followed by 4 digits, followed by another slash, followed by 2 digits, another slash, another 2 digits, another slash, and some arbitrary string of characters until you reach the end of that string“. And if you've found that, return me only that arbitrary string so I can process it further. You guessed it, that is, in plain English, the search we need to do to get WordPress permalinks processed. We then only have to use the extracted slug so we can actually redirect to an URL that only contains that slug part.

The tricky part was how to get that right. I have been notoriously bad with Regex syntax. Its machine readable form is something not everyone can understand, much less compose, easily. And I thought: Someone must have run into this problem before, so let's ask Aunt Google.

What I found was, not surprisingly, something that pertained to changing the permalink structure in WordPress from the default to something that was exactly what Ghost is using. And the people who offer such a conversion tool are the makers of the YOAST SEO plugin. It is called [YOAST permalink helper](https://yoast.com/research/permalink-helper.php) and is an awesome web tool that outputs the redirect entries for both Apache and NGINX configuration files.

Equipped with that, I started by looking at another web tool called [Regex101](https://regex101.com/). This is another awesome, although not fully accessible, tool that can take Regex of four flavors, you also give it a search string, and it tells you not only what the Regex does, but also if it works on the string you gave it. So I tried it out and could even generate a JavaScript snippet that then translated my Regex into the flavor that JavaScript uses. Because, you know, Regex isn't complicated enough as it is, it also needs flavors for many languages and systems. And they sometimes bite each other, like flavors in food can also do.

The Ghost team has a [great tutorial on permanent redirects](https://ghost.org/tutorials/implementing-redirects/). but as I found out, the Ghost implementation has a few catches that took me a while to figure out. For example, to search for a forward slash, you usually escape that with a backslash character. However, in Ghost, the very first forward slash in the „from“ value must *not* be escaped. All others, yes please. But if you actually try the JavaScript flavor out on the Regex 101 page the tutorial recommends, it shows *all* forward slashes as to be escaped. Also, you better not conclude with a slash, but let the regex end in whatever character comes before that last forward slash Regex101 recommends.

The „To:“ value then also starts with a forward slash, and can then take one of the groups, in my case the 4th group, denoted by the `$4` notation. I banged my head against these subtleties for a few hours, even went out on a completely different tangent there for a while only to discover that my initial approach was still the best bet I was getting.

Compared to the above, redirecting the RSS `/feed/` to the Ghost style `/rss/` was, after that previous ordeal, a piece of cake. Some RSS readers may struggle with this, so if yours doesn't pick up new posts any more, please change your feed URL setting.

My final redirect JSON file looks like this. If you plan to migrate to Ghost from WordPress, and have a similar permalink structure, feel free to use it.

    [{
        "from": "/([0-9]{4})\/([0-9]{2})\/([0-9]{2})\/(.*)",
        "to": "/$4",
        "permanent": true
    },
    {
        "from": "/feed/",
        "to": "/rss/",
        "permanent": true
    }]

### Tags and categories

There are some more things that only partially translate between WordPress and Ghost. For example, while tags carry over, categories don't. The only way to do that is via a plugin that converts categories to tags. It is mentioned in Ghost‘s tutorial, but as I was looking at it, I saw that it had been updated last 6 years ago, and the last tested version was equally old. And while I don't think this part of WordPress has changed much, at least from the looks of it, I didn't trust such an old plugin to mess with my data. Yes, I had a backup anyway, but still.

## And then there was CodeMirror

So here I was, having imported all my stuff, and opening one of the posts for editing in the Ghost admin. And to my surprise, I could not edit it! I found that the post was put into an instance of the [CodeMirror](https://www.codemirror.net/) editor.

CodeMirror has, at least in all versions before the upcoming version 6, a huge accessibility issue which makes it impossible for screen readers to read any text. It uses a hidden textarea for input, and this is actually where the focus is at all times. But as you type, the text gets grabbed and removed, and put into a contentEditable mirror that never gets focus. It also does some more fancy stuff like code syntax highlighting and line numbers. Version 6 will address accessibility, but it is not production-ready yet.

But wait, Ghost was said to work with Markdown? And I had actually tested the regular editor with Markdown. That was a contentEditable that I could read fine with my screen reader. So why was this different?

The answer is simple: To make things as seamless as possible, the Ghost WordPress Exporter exports the full HTML of the post, and imports it in Ghost as something called an HTML card. Cards are some special blocks that allow for code or HTML formatting. They are inserted as blocks into the regular content. And no, this is not actually a Gutenberg clone, it is more like some special areas of the post. Only that with these imported posts, the whole post was this special area.

Fortunately, if you need to work on such an older post after the import, for most simple formatting, there is a way to do it. You edit the HTML card, and when focused in the text area, press CTRL+A to select all, CTRL+X to cut the whole contents, then escape out of that card once. Back in the regular contentEditable, paste the clipboard contents. For not too complicated formatting, this will simply put the HTML into your contentEditable, and you get headings, lists, links, etc. The one thing I found that doesn't translate, are tables. This is probably because Markdown has such different and differing implementations in its flavors for tables.

If you need to insert HTML, write it in your favorite code editor first. Then, insert an HTML card, and paste the HTML there. I did so while updating my guide on how to use NVDA and Firefox to test your web pages for accessibility. Worked flawlessly. Also, the JSON code snippet above was input the same way.

But believe me, that moment where I opened an older post and could actually not edit it, was a scary moment that almost made me give up on the Ghost effort. Thankfully, there was help. So here we are.

## A special thank you

I would like to extend a special thank you to [Dave](https://david.darn.es/), the Ghost Foundation's developer advocate, who took it upon himself early on to help me with the migration. He answered quite a number of very different questions I was having, sent me helpful links, and also was a great assistant in understanding some of the quirks of the Ghost publishing screen. Some of which has led to some pull requests I sent in to fix these quirks. You know, I can't help it, I'm just that kind of accessibility guy. ;-)

But John O'Nolan, Ghost's founder, and others from the team have been very helpful and welcoming, merging my pull requests literally from day 1.5 of me using Ghost, answering more questions and offering to help.

## In conclusion

This was a pleasurable experience through and through. And even the two hiccups I encountered were dealt with eventually, or are, in the case of the inaccessible CodeMirror bits, things I can somehow work around.

My blog has been running smoothly since May 29, and I hope to have some of the kinks with the theme smoothed out next, especially the color contrast bit, and the bit about the fonts some people have given me feedback on. I will work with the maintainer of the Attila theme to work through these.

Again, welcome to this new blogging chapter!
