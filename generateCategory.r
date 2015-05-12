#!/usr/bin/env r

tmpl <- '---
layout: archive
permalink: /%s/
title: "package:%s"
showAllPosts: true
---

<div class="wrap">

   <nav class="breadcrumbs">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
         <a href="{{ site.baseurl }}" itemprop="url">
            <span itemprop="title">Home</span>
         </a>
          ›
         <a href="{{ site.baseurl }}/%s" itemprop="url">
            <span itemprop="title">%s</span>
         </a>
      </span>
   </nav>

   <div class="page-title">
     <h1>%s</h1>
   </div>

   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {%% for post in site.categories.%s %%}
            {%% include post-grid.html %%}
         {%% endfor %%}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
'

if (is.null(argv) | length(argv) != 1) {
  cat("Usage: generateCategory.r pkg1\n")
  q()
}

pkgname <- argv[1]
out <- file.path("category", sprintf("%s.md", pkgname))

# Note that categories are downcase
cat(sprintf(tmpl, tolower(pkgname), pkgname, pkgname, pkgname, pkgname, tolower(pkgname)), file = out)
