---
title: "fivethirtyeight.com color scales"
rdname: "scale_fivethirtyeight"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-scale_fivethirtyeight//scale_fivethirtyeight-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(qplot(carat, price, data=dsamp, colour=clarity)
 + theme_igray()
 + scale_colour_excel("new"))
{% endhighlight %}

![plot of chunk scale_fivethirtyeight](/allYourFigureAreBelongToUs/figure/source/2015-04-25-scale_fivethirtyeight/scale_fivethirtyeight-1.png) 