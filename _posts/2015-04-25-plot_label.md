---
title: "Attach label to list("ggplot2::ggplot")"
rdname: "plot_label"
date: "2015-04-25"
output: html_document
layout: article
category: "ggfortify"
images:
 - figure/source/2015-04-25-plot_label//plot_label-1.png
---




{% highlight r %}
d <- fortify(stats::acf(AirPassengers, plot = FALSE))
p <- ggplot(data = d, mapping = aes(x = Lag))
ggfortify:::plot_confint(p, data = d)
{% endhighlight %}

![plot of chunk plot_label](/allYourFigureAreBelongToUs/figure/source/2015-04-25-plot_label/plot_label-1.png) 