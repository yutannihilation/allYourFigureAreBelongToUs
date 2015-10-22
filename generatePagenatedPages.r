#! /usr/bin/env Rscript

"
Usage: generatePagenatedPages.r PACKAGE_LIST
" -> doc

opts <- docopt::docopt(doc)
pkglist <- opts[["PACKAGE_LIST"]]

#----- read packages.txt -----

PER_PAGE <- 5

pkgnames       <- readLines(pkglist)
pkgnames_lower <- tolower(pkgnames)
# Sort by case-insensitive order
pkgnames       <- pkgnames[order(pkgnames_lower)]
pkgnames_lower <- pkgnames_lower[order(pkgnames_lower)]

pkgitems <- paste0("  - name: ", pkgnames,
                        "\n    category: ", pkgnames_lower)
pkgitems_split <- split(pkgitems,
                       ((seq_along(pkgitems) - 1) %/% PER_PAGE) + 1)

#----- generate navigation.yml ------
cat(paste0(
  sprintf('- page: %s\n', names(pkgitems_split)),
  sprintf('  packages: \n%s',
          lapply(pkgitems_split,
                 paste0, collapse = '\n')),
  collapse = "\n"
), file = file.path("_data", "navigation.yml"))


#----- generate index.md -----

tmpl <- '---
layout: archive
permalink: /%s
title: "%s"
---

{%% for package in site.data.navigation[%d].packages %%}
<div class="wrap">
   <div class="page-title">
     <a href="{{ site.baseurl }}/{{ package.category }}/"><h1>{{ package.name }}</h1></a>
   </div>
   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {%% for post in site.categories[package.category] limit:8 %%}
            {%% include post-grid.html %%}
         {%% endfor %%}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
{%% endfor %%}
'

cat(sprintf(tmpl, "", "Home", 0), file = "index.md")

#----- generate pagenated pages -----

lapply(seq_along(pkgitems_split), function(x) {
  cat(
    sprintf(tmpl, sprintf('%d/', x), sprintf("Page %d", x), (x - 1)),
    file = file.path("index_pages", sprintf("index_%d.md", x))
  )
})
