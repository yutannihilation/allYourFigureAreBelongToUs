---
title: "Google Docs color scales"
rdname: "scale_gdocs"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-scale_gdocs//scale_gdocs-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(qplot(carat, price, data=dsamp, colour=clarity)
 + theme_igray()
 + scale_colour_excel("new"))
{% endhighlight %}

![plot of chunk scale_gdocs](/allYourFigureAreBelongToUs/figure/source/2015-04-25-scale_gdocs/scale_gdocs-1.png) 