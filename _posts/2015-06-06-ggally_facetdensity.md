---
title: |
  Plots the density plots by faceting
rdname: ggally_facetdensity
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_facetdensity/ggally_facetdensity-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_facetdensity/ggally_facetdensity-2.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_facetdensity(tips, mapping = ggplot2::aes(x = total_bill, y = sex))
{% endhighlight %}

![plot of chunk ggally_facetdensity](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_facetdensity/ggally_facetdensity-1.png) 

{% highlight r %}
 ggally_facetdensity(
   tips,
   mapping = ggplot2::aes_string(y = "total_bill", x = "sex", color = "sex")
 )
{% endhighlight %}

![plot of chunk ggally_facetdensity](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_facetdensity/ggally_facetdensity-2.png) 