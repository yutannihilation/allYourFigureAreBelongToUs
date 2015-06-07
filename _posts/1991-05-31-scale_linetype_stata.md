---
title: |
  Stata linetype palette (discrete)
rdname: scale_linetype_stata
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_linetype_stata/scale_linetype_stata-1.png
---




{% highlight r %}
library(reshape2) # for melt
library(plyr) # for ddply
library(ggplot2)
ecm <- melt(economics, id = "date")
rescale01 <- function(x) {(x - min(x)) / diff(range(x))}
ecm <- ddply(ecm, "variable", transform, value = rescale01(value))
{% endhighlight %}



{% highlight text %}
## Error:  関数 "rescale01" を見つけることができませんでした
{% endhighlight %}



{% highlight r %}
qplot(date, value, data=ecm, geom="line", linetype=variable) + scale_linetype_stata()
{% endhighlight %}

![plot of chunk scale_linetype_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_linetype_stata/scale_linetype_stata-1.png) 