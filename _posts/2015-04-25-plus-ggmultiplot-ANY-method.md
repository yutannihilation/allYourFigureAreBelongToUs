---
title: "Generic add operator for list("ggmultiplot")"
rdname: "plus-ggmultiplot-ANY-method"
date: "2015-04-25"
output: html_document
layout: article
category: "ggfortify"
images:
 - figure/source/2015-04-25-plus-ggmultiplot-ANY-method//plus-ggmultiplot-ANY-method-1.png
---




{% highlight r %}
d <- fortify(stats::acf(AirPassengers, plot = FALSE))
p <- ggplot(data = d, mapping = aes(x = Lag))
ggfortify:::plot_confint(p, data = d)
{% endhighlight %}

![plot of chunk plus-ggmultiplot-ANY-method](/allYourFigureAreBelongToUs/figure/source/2015-04-25-plus-ggmultiplot-ANY-method/plus-ggmultiplot-ANY-method-1.png) 