---
title: |
  Plots the Bar Plots Faceted by Conditional Variable
rdname: ggally_facetbar
date: 2015-10-22
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facetbar//ggally_facetbar-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facetbar//ggally_facetbar-2.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_facetbar(tips, ggplot2::aes(x = sex, y = smoker, fill = time))
{% endhighlight %}

![plot of chunk ggally_facetbar](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facetbar/ggally_facetbar-1.png) 

{% highlight r %}
 ggally_facetbar(tips, ggplot2::aes(x = smoker, y = sex, fill = time))
{% endhighlight %}

![plot of chunk ggally_facetbar](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facetbar/ggally_facetbar-2.png) 