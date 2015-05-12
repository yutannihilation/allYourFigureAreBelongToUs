---
title: |
  Get x axis labels
rdname: get_x_axis_labels
date: 2015-05-12
output: html_document
layout: article
category: GGally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-get_x_axis_labels//get_x_axis_labels-1.png
---




{% highlight r %}
data(tips, package = "reshape")
 plotMatrix2 <- ggpairs(tips[,3:2], upper = list(combo = "denstrip"))
 getPlot(plotMatrix2, 1, 2)
{% endhighlight %}

![plot of chunk get_x_axis_labels](/allYourFigureAreBelongToUs/figure/source/2015-05-12-get_x_axis_labels/get_x_axis_labels-1.png) 