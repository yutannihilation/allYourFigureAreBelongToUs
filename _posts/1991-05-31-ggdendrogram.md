---
title: |
  Creates dendrogram plot using ggplot.
rdname: ggdendrogram
date: 1991-05-31
output: html_document
layout: article
category: ggdendro
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdendrogram/ggdendrogram-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdendrogram/ggdendrogram-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdendrogram/ggdendrogram-3.png
---




{% highlight r %}
library(ggplot2)
hc <- hclust(dist(USArrests), "ave")
### demonstrate plotting directly from object class hclust
p <- ggdendrogram(hc, rotate=FALSE)
print(p)
{% endhighlight %}

![plot of chunk ggdendrogram](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdendrogram/ggdendrogram-1.png) 

{% highlight r %}
ggdendrogram(hc, rotate=TRUE)
{% endhighlight %}

![plot of chunk ggdendrogram](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdendrogram/ggdendrogram-2.png) 

{% highlight r %}
### demonstrate converting hclust to dendro using dendro_data first
hcdata <- dendro_data(hc)
ggdendrogram(hcdata, rotate=TRUE, size=2) + labs(title="Dendrogram in ggplot2")
{% endhighlight %}

![plot of chunk ggdendrogram](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdendrogram/ggdendrogram-3.png) 