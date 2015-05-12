---
title: |
  Get Plot Type
rdname: get_plot_type
date: 2015-05-12
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-get_plot_type//get_plot_type-1.png
---




{% highlight r %}
data(tips, package = "reshape")
 plotMatrix2 <- ggpairs(tips[,3:2], upper = list(combo = "denstrip"))
 getPlot(plotMatrix2, 1, 2)
{% endhighlight %}

![plot of chunk get_plot_type](/allYourFigureAreBelongToUs/figure/source/2015-05-12-get_plot_type/get_plot_type-1.png) 