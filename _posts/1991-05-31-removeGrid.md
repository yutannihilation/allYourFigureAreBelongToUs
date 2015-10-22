---
title: |
  Remove grid lines from ggplot2
rdname: removeGrid
date: 2015-10-22
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-removeGrid//removeGrid-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-removeGrid//removeGrid-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-removeGrid//removeGrid-3.png
---




{% highlight r %}
df <- data.frame(x = 1:50, y = 1:50)
p <- ggplot2::ggplot(df, ggplot2::aes(x, y)) + ggplot2::geom_point()
p + removeGrid()
{% endhighlight %}

![plot of chunk removeGrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-removeGrid/removeGrid-1.png) 

{% highlight r %}
p + removeGrid(y = FALSE)
{% endhighlight %}

![plot of chunk removeGrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-removeGrid/removeGrid-2.png) 

{% highlight r %}
p + removeGridX()
{% endhighlight %}

![plot of chunk removeGrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-removeGrid/removeGrid-3.png) 