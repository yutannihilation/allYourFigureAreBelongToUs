---
title: |
  Extract data from classification tree object for plotting using ggplot.
rdname: dendro_data.rpart
date: 2015-05-12
output: html_document
layout: article
category: ggdendro
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-dendro_data.rpart//dendro_data.rpart-1.png
---




{% highlight r %}
require(rpart)
{% endhighlight %}



{% highlight text %}
## Loading required package: rpart
{% endhighlight %}



{% highlight r %}
require(ggplot2)
fit <- rpart(Kyphosis ~ Age + Number + Start, method="class", data=kyphosis)
fitr <- dendro_data(fit)
ggplot() +
    geom_segment(data=fitr$segments, aes(x=x, y=y, xend=xend, yend=yend)) +
    geom_text(data=fitr$labels, aes(x=x, y=y, label=label)) +
    geom_text(data=fitr$leaf_labels, aes(x=x, y=y, label=label)) +
    theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data.rpart](/allYourFigureAreBelongToUs/figure/source/2015-05-12-dendro_data.rpart/dendro_data.rpart-1.png) 