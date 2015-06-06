---
title: |
  Extract line segment and label data from dendrogram or hclust object.
rdname: dendro_data.dendrogram
date: 2015-06-06
output: html_document
layout: article
category: ggdendro
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-4.png
---




{% highlight r %}
require(ggplot2)
#
# Demonstrate dendro_data.dendrogram
#
hc <- hclust(dist(USArrests), "ave")
dhc <- as.dendrogram(hc)
# Rectangular lines
ddata <- dendro_data(dhc, type="rectangle")
ggplot(segment(ddata)) + geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) +
		coord_flip() + scale_y_reverse(expand=c(0.2, 0)) + theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data.dendrogram](/allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-1.png) 

{% highlight r %}
# Triangular lines
ddata <- dendro_data(dhc, type="triangle")
ggplot(segment(ddata)) + geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) + theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data.dendrogram](/allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-2.png) 

{% highlight r %}
#
# Demonstrate dendro_data.hclust
#
require(ggplot2)
hc <- hclust(dist(USArrests), "ave")
# Rectangular lines
hcdata <- dendro_data(hc, type="rectangle")
ggplot(segment(hcdata)) + geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) +
   coord_flip() + scale_y_reverse(expand=c(0.2, 0)) + theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data.dendrogram](/allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-3.png) 

{% highlight r %}
# Triangular lines
hcdata <- dendro_data(hc, type="triangle")
ggplot(segment(hcdata)) + geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) +
  theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data.dendrogram](/allYourFigureAreBelongToUs/figure/source/2015-06-06-dendro_data.dendrogram/dendro_data.dendrogram-4.png) 