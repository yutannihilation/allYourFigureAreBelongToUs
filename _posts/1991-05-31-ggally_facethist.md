---
title: |
  Plots the Histograms by Faceting
rdname: ggally_facethist
date: 2015-10-22
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facethist//ggally_facethist-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facethist//ggally_facethist-2.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_facethist(tips, mapping = ggplot2::aes(x = tip, y = sex))
{% endhighlight %}



{% highlight text %}
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
{% endhighlight %}

![plot of chunk ggally_facethist](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facethist/ggally_facethist-1.png) 

{% highlight r %}
 ggally_facethist(tips, mapping = ggplot2::aes_string(x = "tip", y = "sex"), binwidth = 0.1)
{% endhighlight %}

![plot of chunk ggally_facethist](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_facethist/ggally_facethist-2.png) 