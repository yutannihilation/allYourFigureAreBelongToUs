---
title: |
  Rotate x axis labels
rdname: rotateTextX
date: 2015-10-22
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-rotateTextX//rotateTextX-1.png
---




{% highlight r %}
df <- data.frame(x = paste("Letter", LETTERS, sep = "_"),
                 y = seq_along(LETTERS))
p <- ggplot2::ggplot(df, ggplot2::aes(x, y)) + ggplot2::geom_point()
p + rotateTextX()
{% endhighlight %}

![plot of chunk rotateTextX](/allYourFigureAreBelongToUs/figure/source/1991-05-31-rotateTextX/rotateTextX-1.png) 