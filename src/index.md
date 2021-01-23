---
title: "Marco's Accessibility Blog"
metaDesc: "Marco Zehe's personal blog about accessibility and other tech"
layout: "layouts/home.html"
intro:
  eyebrow: "Welcome on"
  main: "Marco's Accessibility Blog"
  summary: "Helping to make accessibility accessible since 2007. Here you'll find lots of content on the topic of accessibility, and other technology I find interesting."
pagination:
  data: collections.blog
  size: 10
permalink: "{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber }}{% endif %}/index.html"
paginationPrevText: "Newer entries"
paginationNextText: "Older entries"
paginationAnchor: "#post-list"
---

If you can still read this, something's amiss.
