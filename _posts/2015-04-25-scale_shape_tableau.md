---
title: "Tableau shape scales"
rdname: "scale_shape_tableau"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-scale_shape_tableau//scale_shape_tableau-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
p <- qplot(carat, price, data=dsamp, shape=clarity)
p + scale_shape_tableau()
{% endhighlight %}

![plot of chunk scale_shape_tableau](/allYourFigureAreBelongToUs/figure/source/2015-04-25-scale_shape_tableau/scale_shape_tableau-1.png) 