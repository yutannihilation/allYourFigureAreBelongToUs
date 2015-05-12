#!/usr/bin/env r

tmpl <- '---
layout: archive
permalink: /%s/
title: "package:%s"
showAllPosts: true
---

<div class="wrap">
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
cat(sprintf(tmpl, pkgname, pkgname, pkgname), file = out)
