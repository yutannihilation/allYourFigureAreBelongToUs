---
title: |
  Remove grid lines from ggplot2
rdname: removeGrid
date: 2015-05-12
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-removeGrid//removeGrid-1.png
---




{% highlight r %}
if (requireNamespace("ggplot2", quietly = TRUE)) {
  df <- data.frame(x = 1:50, y = 1:50)
  p <- ggplot2::ggplot(df, ggplot2::aes(x, y)) + ggplot2::geom_point()
  p + removeGrid()
  p + removeGrid(y = FALSE)
  p + removeGridX()
}
{% endhighlight %}

![plot of chunk removeGrid](/allYourFigureAreBelongToUs/figure/source/2015-05-12-removeGrid/removeGrid-1.png) 