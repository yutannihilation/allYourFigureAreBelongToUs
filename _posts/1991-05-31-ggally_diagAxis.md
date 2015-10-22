---
title: |
  Internal Axis Labeling Plot for ggpairs
rdname: ggally_diagAxis
date: 2015-10-22
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_diagAxis//ggally_diagAxis-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_diagAxis//ggally_diagAxis-2.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_diagAxis(tips, ggplot2::aes(x=tip))
{% endhighlight %}

![plot of chunk ggally_diagAxis](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_diagAxis/ggally_diagAxis-1.png) 

{% highlight r %}
 ggally_diagAxis(tips, ggplot2::aes(x=sex))
{% endhighlight %}

![plot of chunk ggally_diagAxis](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_diagAxis/ggally_diagAxis-2.png) 