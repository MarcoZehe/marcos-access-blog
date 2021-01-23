---
title: Progress on automated testing for the accessibility module
slug: progress-on-automated-testing-for-the-accessibility-module
date_published: 2008-08-05T21:31:52.000Z
date_updated: 2008-08-05T21:31:52.000Z
---

Today, I checked in two changes that allow the unit tests we&#8217;ve developed for the accessibility module so far, to run on what we call a staging server. A staging server is a server that simulates production conditions, but isn&#8217;t the live thing just yet. It allows us to test new features in build, testing, web sites etc., in close-to-real-life conditions before finally pushing them to production.

Obviously, getting these tests running on the production tinderboxes so we immediately see when we broke something is the next step. But until that can be done, we need to find a solution for [bug 441974](https://bugzilla.mozilla.org/show_bug.cgi?id=441974). Basically what is happening is that tests pass when each test file is run stand-alone, but some of these tests fail randomly when running all files in one big batch. But I made some good connections at the Mozilla summit last week, and as soon as we get these passing we&#8217;ll start running those tests. They&#8217;ll then run along with the many other unit tests we have for Firefox and the Mozilla platform.

I&#8217;d like to thank our intern Lukas Blakk and a bunch of other members of the QA and build teams to help me with getting these configs for buildbot right!
