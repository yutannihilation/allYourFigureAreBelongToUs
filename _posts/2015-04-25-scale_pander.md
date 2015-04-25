---
title: "Color scale from the pander package"
rdname: "scale_pander"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-scale_pander//scale_pander-1.png
---




{% highlight r %}
library(reshape2) # for melt
library(plyr) # for ddply
library(ggplot2)
ecm <- melt(economics, id = "date")
rescale01 <- function(x) {(x - min(x)) / diff(range(x))}
ecm <- ddply(ecm, "variable", transform, value = rescale01(value))
qplot(date, value, data=ecm, geom="line", linetype=variable) + scale_linetype_stata()
{% endhighlight %}

![plot of chunk scale_pander](/allYourFigureAreBelongToUs/figure/source/2015-04-25-scale_pander/scale_pander-1.png) 