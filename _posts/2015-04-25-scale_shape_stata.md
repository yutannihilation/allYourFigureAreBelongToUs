---
title: "Stata shape scale"
rdname: "scale_shape_stata"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-scale_shape_stata//scale_shape_stata-1.png
---




{% highlight r %}
dsmall <- diamonds[sample(nrow(diamonds), 100), ]
(d <- qplot(carat, price, data=dsmall, shape=cut)
 + scale_shape_stata())
{% endhighlight %}

![plot of chunk scale_shape_stata](/allYourFigureAreBelongToUs/figure/source/2015-04-25-scale_shape_stata/scale_shape_stata-1.png) 