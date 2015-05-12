#!/usr/bin/env r

header_tmpl <- '---
title: "%s"
rdname: "%s"
date: "%s"
output: html_document
layout: article
category: "%s"
images:FRONTFOMATTER_IMAGES
---

```{r, echo = FALSE, message = FALSE}
library(%s)
```

```{r %s, cache = TRUE}
'

footer <- '
```'

if (is.null(argv) | length(argv) != 1) {
  cat("Usage: createRmd.r pkg1\n")
  q()
}

pkgname <- argv[1]

library(pkgname, character.only = TRUE)
RdDB <- tools::Rd_db(pkgname)

f <- tempfile()

for(Rdname in names(RdDB)) {
  Rd <- RdDB[[Rdname]]
  title <- paste0(as.character(Rd[[which(tools:::RdTags(Rd) == "\\title")]]), collapse = "")
  rdname <- sub("\\.Rd$", "", Rdname)
  date  <- strftime(Sys.time(), "%Y-%m-%d")
  
  out <- file.path("_source", sprintf("%s-%s.Rmd", date, rdname))
  
  # header
  cat(sprintf(header_tmpl, title, rdname, date, pkgname, pkgname, rdname), file = out)
  
  # codes
  tools::Rd2ex(Rd, f)
  
  # dischard first six lines
  ex <- readLines(f)
  cat(paste0(ex[7:length(ex)], collapse = "\n"), file = out, append = TRUE)

  # footer
  cat(sprintf(footer, title), file = out, append = TRUE)
}
