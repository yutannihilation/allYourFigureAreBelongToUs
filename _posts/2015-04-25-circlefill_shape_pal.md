---
title: "Filled Circle Shape palette (discrete)"
rdname: "circlefill_shape_pal"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-circlefill_shape_pal//circlefill_shape_pal-1.png
---




{% highlight r %}
(ggplot(mtcars, aes(x=mpg, y=hp, shape=factor(cyl)))
 + geom_point() + scale_shape_tremmel())
{% endhighlight %}

![plot of chunk circlefill_shape_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-circlefill_shape_pal/circlefill_shape_pal-1.png) 