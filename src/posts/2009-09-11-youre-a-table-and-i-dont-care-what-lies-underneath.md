---
title: You're a table, and I don't care what lies underneath
slug: youre-a-table-and-i-dont-care-what-lies-underneath
date_published: 2009-09-11T13:40:29.000Z
date_updated: 2009-09-11T13:40:29.000Z
---

Over  the past couple of weeks, Alex, David and I have been hard at work refactoring, discussing, and implementing better support for accessible tables in Gecko. Some of this has seen the light in Firefox 3.6alpha, but the heart of the work is currently only in mozilla-central (AKA Firefox 3.7). Update: As of October 29, these changes have also been ported to the Firefox 3.6 AKA the Gecko 1.9.2 branch and will be in the final release of Firefox 3.6. It will not yet appear in the upcoming release of Firefox 3.6b1, since that was branched off before we landed the IAccessibleTable2 support.

The goal was to:

1. Refactor our code to become more maintainable.
2. Expose the same kind of interface to assistive technologies regardless of what lies underneath is a true HTML table, an ARIA table, an ARIA data grid, a XUL tree table etc. There are so many commonalities that ATs should be able to expect similar, if not identical, information from any of these table types.
3. Implement the [IAccessibleTable2](http://dev.linuxfoundation.org/~ptbrunet/ia2/docs/html/interface_i_accessible_table2.html) interface that was defined within the IA2 group over the summer.
4. Get rid of many &#8220;todo&#8221; items in our Mochitest unit tests.

For The Minefield (Firefox 3.7a1pre) nightly build that will come out today, Friday September 11, the patch that implements IAccessibleTable2 has landed. All header/table cell relations are now defined through proper method calls rather than special forms of accessible relations. This was a big patch with almost 550 kb in size. A quarter of this were IDL changes for IA2, but the rest was all code that had to be reviewed and super-reviewed. It&#8217;s definitely the biggest patch I&#8217;ve been working on so far since I started working for Mozilla.

Over the past few weeks, Alex also refactored our XUL tree exposure to better meet our goal. With 235 KB, this was the second biggest patch I have been working on so far.

Other changes that went in concern selection of cells, rows, unselecting parts of tables etc. Some of these have caused our long &#8220;to do&#8221; item list of around 80 items to drop to a mere 7 throughout the whole a11y test suite. The table tests were among the first written when we started doing automated tests on a11y some 20 months ago, and it&#8217;s cool to finally see this area of the code properly addressed!

With these changes, our number of passing tests is now at 10205 and a total of 7 to-do items.

And this is where you come in! If you&#8217;re an accessible tables junkie, know a lot about HTML table make-up, or know of very weird tables out in the wild, go [download the latest nightly build](http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-mozilla-central/) and throw the tables at it! Let us know your results, for example by commenting here on the blog, and if you find something that definitely isn&#8217;t exposed right, [file a bug](https://bugzilla.mozilla.org/enter_bug.cgi?alias=&amp;assigned_to=nobody%40mozilla.org&amp;blocked=491681&amp;bug_file_loc=&amp;bug_severity=normal&amp;bug_status=NEW&amp;cf_status_192=---&amp;comment=&amp;component=Disability%20Access%20APIs&amp;contenttypeentry=&amp;contenttypemethod=autodetect&amp;contenttypeselection=text%2Fplain&amp;data=&amp;dependson=&amp;description=&amp;flag_type-203=X&amp;flag_type-270=X&amp;flag_type-271=X&amp;flag_type-325=X&amp;flag_type-369=X&amp;flag_type-37=X&amp;flag_type-370=X&amp;flag_type-385=X&amp;flag_type-4=X&amp;flag_type-422=X&amp;flag_type-479=X&amp;flag_type-480=X&amp;flag_type-485=X&amp;flag_type-486=X&amp;flag_type-5=X&amp;flag_type-536=X&amp;flag_type-540=X&amp;flag_type-541=X&amp;flag_type-542=X&amp;flag_type-543=X&amp;form_name=enter_bug&amp;keywords=access&amp;maketemplate=Remember%20values%20as%20bookmarkable%20template&amp;op_sys=All&amp;priority=--&amp;product=Core&amp;qa_contact=accessibility-apis%40core.bugs&amp;rep_platform=All&amp;short_desc=&amp;target_milestone=---&amp;version=Trunk)! We appreciate any and all help you can give us here!

If you&#8217;re an AT vendor and plan on implementing support for IAccessibleTable2, here&#8217;s a model you can use!

Finally, I&#8217;d like to thank all the cool people (module peers and super reviewers) who helped us accomplish what we&#8217;ve accomplished so far! With their knowledge and wisdom about the inner workings of Gecko and their respective modules, they helped make our code faster, better and more robust. Keep on rockin&#8217;!
