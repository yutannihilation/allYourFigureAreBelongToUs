---
title: |
  Plotting of a population graph edge set using ggplot neumonic
rdname: geom_nodeset
date: 2015-06-07
output: html_document
layout: article
category: popgraph
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_nodeset/geom_nodeset-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_nodeset/geom_nodeset-2.png
---




{% highlight r %}
library(igraph)
a <- matrix( c(0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0),nrow=4)
rownames(a) <- colnames(a) <- LETTERS[1:4]
graph <- as.popgraph(a)
igraph::V(graph)$x <- runif(4)
igraph::V(graph)$y <- runif(4)
require(ggplot2)
ggplot() + geom_nodeset( aes(x=x,y=y), graph )
{% endhighlight %}

![plot of chunk geom_nodeset](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_nodeset/geom_nodeset-1.png) 

{% highlight r %}
igraph::V(graph)$group <- c("A","A","B","B")
ggplot() + geom_nodeset( aes(x=x,y=y,color=group), graph, size=4 )
{% endhighlight %}

![plot of chunk geom_nodeset](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_nodeset/geom_nodeset-2.png) 