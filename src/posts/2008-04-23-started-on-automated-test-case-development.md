---
title: Started on automated test case development
slug: started-on-automated-test-case-development
date_published: 2008-04-23T11:30:52.000Z
date_updated: 2008-04-23T11:30:52.000Z
tags: [AutomatedTesting]
---

As some of you may already have read on the newsgroups, or heard through statements from me or other accessibility developers at the Firefox project, one of my tasks is to develop automated test cases for our accessibility module. I started this project after the all-hands work week end of January. The first tests have been implemented, and pace is picking up speed. So far, I&#8217;ve implemented tests for the following interfaces:

- nsIAccessibleHyperLink, which has to do with all things hyperlink in its various forms.
- nsIAccessibleHyperText, which is basically text run with hyperlinks in it.
- nsIAccessibleImage, which was a result of the enhancement to put the SRC attribute in for images. I needed to write a test for that, and morphed it into a general image testing suite instead.

Also, community member Bernd helped a huge amount with writing various tests for the nsIAccessibleTable interface. Alexander Surkov is also contributing test cases for bugs he fixes, and in general we try to provide tests for most of the bugs we fix.

Mozilla uses the [Mochikit](http://mochikit.com/) JavaScript library for most test development. The tests run in what we call the browser chrome, which gives the HTML or XUL pages access to our scriptable interfaces. When tests run, Firefox is in a special mode, not in our day-to-day browsing mode, so there are different security models in place.

Each test consists of two parts: A bigger JavaScript part in the head, and a body consisting of a top part which sets up everything for getting the results later, a reference to the bug number etc. Below that, the actual HTML or XUL starts which puts the pieces to test. For the nsIAccessibleHyperLink chrome tests, i put various links, without and with images, image maps, ARIA links, a named anchor which needs special state flags set to not be recognized as a link accidentally, etc.

In the top part, one or more functions are defined that perform various tests. At the end, one of these functions is set to execute upon page load. That function first gets an accessibleRetrieval object which allows us to get the accessible for any HTML or XUL element. That accessible can then be queried for various properties, or whether it implements, for example, the nsIAccessibleHyperLink interface. Testing for this interface alone is one test that may succeed or fail, so we immediately catch whether something got broken in implementing interfaces, not just in the interface method implementations themselves.

This all works on the platform independent Gecko interfaces, not the platform specific ATK/IA2/Universal Access (once we have that), which allows us to implement one set of tests that runs on all platforms. Implementing platform-specific tests comes later.

In parallel, I&#8217;ve started working with colleague Robcee to get the test runs up on a staging server, with the eventual goal of running them on tinderboxes as regular tests along with the other many tests that already contribute in huge parts to the stability and quality of Firefox.

In manual runs of patches against these tests, we&#8217;ve already been able to catch a few regressions that would have otherwise been introduced into the product, and been discovered maybe days later. This proves that these tests really help us produce better accessibility code in the future with less chances of regressions.

My current big project is testing the most generic nsIAccessible interface against all kinds of HTML form controls and similar XUL widgets. As you can imagine, there are a lot of ways in HTML to achieve the same result, and each wants to be tested thoroughly. More on this when I get it done.

Update: Henrik pointed out in the below comment that I neglected to post the bug numbers, for those of you who are interested. So here are a few:

- There is one [bug to track overall Mochitest bugs](https://bugzilla.mozilla.org/show_bug.cgi?id=417472). It branches off to other bugs that have patches, or to other meta bugs where appropriate.
- The [bug for the nsIAccessibleHyperLink Mochitests](https://bugzilla.mozilla.org/show_bug.cgi?id=418368) shows how the development progressed and how the final patch came together. As you may notice, we took this opportunity to polish a few of the older interfaces to bring them up to more current standards.
- And for those who want to see a Mochitest in its whole beauty: [This one&#8217;s for the table indexes lovers among you](http://mxr.mozilla.org/seamonkey/source/accessible/tests/mochitest/test_table_indexes.html?force=1)!
