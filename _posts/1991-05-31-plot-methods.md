---
title: |
  plot method
rdname: plot-methods
date: 2015-06-07
output: html_document
layout: article
category: ggtree
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plot-methods/plot-methods-1.png
---




{% highlight r %}
### ** Examples

file <- system.file("extdata/BEAST", "beast_mcc.tree", package="ggtree")
beast <- read.beast(file)
plot(beast, annotation="length_0.95_HPD", branch.length="none") + theme_tree()
{% endhighlight %}



{% highlight text %}
## Warning in loop_apply(n, do.ply): Removed 1 rows containing missing
## values (geom_text).
{% endhighlight %}

![plot of chunk plot-methods](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plot-methods/plot-methods-1.png) 