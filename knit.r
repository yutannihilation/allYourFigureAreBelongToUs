#! /usr/local/bin/r

local({
  # fall back on '/' if baseurl is not specified
  baseurl = servr:::jekyll_config('.', 'baseurl', '/')
  knitr::opts_knit$set(base.url = paste0(baseurl, '/'))
  # fall back on 'kramdown' if markdown engine is not specified
  markdown = servr:::jekyll_config('.', 'markdown', 'kramdown')
  # see if we need to use the Jekyll render in knitr
  if (markdown == 'kramdown') {
    knitr::render_jekyll()
  } else knitr::render_markdown()
  
  # input/output filenames are passed as two additional arguments to Rscript
  a = commandArgs(TRUE)
  d = gsub('^_|[.][a-zA-Z]+$', '', argv[1])
  knitr::opts_chunk$set(
    fig.path   = sprintf('figure/%s/', d),
    cache.path = sprintf('cache/%s/', d)
  )
  knitr::opts_knit$set(width = 70)
  knitr::knit(argv[1], argv[2], quiet = TRUE, encoding = 'UTF-8', envir = .GlobalEnv)
  
  figures <- list.files(knitr::opts_chunk$get("fig.path"), full.names = TRUE)
  if(length(figures) > 0){
    images <- paste0(sprintf(" - %s/%s", baseurl, figures), collapse = "\n")
  } else {
    images <- ' ""'
  }
  
  txt <- sub("FRONTFOMATTER_IMAGES", 
      images, 
      paste(readLines(argv[2]), collapse = "\n"))
  cat(txt, file = argv[2])
})
