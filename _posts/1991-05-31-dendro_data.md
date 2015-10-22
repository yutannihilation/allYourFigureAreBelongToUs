---
title: |
  Extract cluster data from a model into a list of data frames.
rdname: dendro_data
date: 2015-10-22
output: html_document
layout: article
category: ggdendro
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data//dendro_data-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data//dendro_data-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data//dendro_data-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data//dendro_data-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data//dendro_data-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data//dendro_data-6.png
---




{% highlight r %}
require(ggplot2)

### Demonstrate dendro_data.dendrogram

model <- hclust(dist(USArrests), "ave")
dendro <- as.dendrogram(model)

# Rectangular lines
ddata <- dendro_data(dendro, type="rectangle")
ggplot(segment(ddata)) + 
  geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) + 
  coord_flip() + 
  scale_y_reverse(expand=c(0.2, 0)) + 
  theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data](/allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data/dendro_data-1.png) 

{% highlight r %}
# Triangular lines
ddata <- dendro_data(dendro, type="triangle")
ggplot(segment(ddata)) + 
  geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) + 
  theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data](/allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data/dendro_data-2.png) 

{% highlight r %}
# Demonstrate dendro_data.hclust

require(ggplot2)
hc <- hclust(dist(USArrests), "ave")

# Rectangular lines
hcdata <- dendro_data(hc, type="rectangle")
ggplot(segment(hcdata)) + 
  geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) + 
  coord_flip() + 
  scale_y_reverse(expand=c(0.2, 0)) + 
  theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data](/allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data/dendro_data-3.png) 

{% highlight r %}
# Triangular lines
hcdata <- dendro_data(hc, type="triangle")
ggplot(segment(hcdata)) + 
  geom_segment(aes(x=x, y=y, xend=xend, yend=yend)) +
  theme_dendro()
{% endhighlight %}

![plot of chunk dendro_data](/allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data/dendro_data-4.png) 

{% highlight r %}
### Demonstrate the twins of agnes and diana, from package cluster

if(require(cluster)){
  model <- agnes(votes.repub, metric = "manhattan", stand = TRUE)
  dg <- as.dendrogram(model)
  ggdendrogram(dg)
}
{% endhighlight %}



{% highlight text %}
## Loading required package: cluster
{% endhighlight %}

![plot of chunk dendro_data](/allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data/dendro_data-5.png) 

{% highlight r %}
if(require(cluster)){
  model <- diana(votes.repub, metric = "manhattan", stand = TRUE)
  dg <- as.dendrogram(model)
  ggdendrogram(dg)
}
{% endhighlight %}

![plot of chunk dendro_data](/allYourFigureAreBelongToUs/figure/source/1991-05-31-dendro_data/dendro_data-6.png) 