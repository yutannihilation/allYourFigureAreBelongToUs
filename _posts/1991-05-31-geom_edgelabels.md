---
title: |
  Plotting of a population graph edge labels using ggplot neumonic
rdname: geom_edgelabels
date: 2015-06-07
output: html_document
layout: article
category: popgraph
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgelabels/geom_edgelabels-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgelabels/geom_edgelabels-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgelabels/geom_edgelabels-3.png
---




{% highlight r %}
a <- matrix( c(0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0),nrow=4)
rownames(a) <- colnames(a) <- LETTERS[1:4]
graph <- as.popgraph(a)
igraph::V(graph)$x <- runif(4)
igraph::V(graph)$y <- runif(4)
igraph::E(graph)$Label <- LETTERS[1:4]
require(ggplot2)
p <- ggplot() + geom_edgeset( aes(x=x,y=y), graph )
p + geom_edgelabels(aes(x=x,y=y,label=Label),graph)
{% endhighlight %}

![plot of chunk geom_edgelabels](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgelabels/geom_edgelabels-1.png) 

{% highlight r %}
p + geom_edgelabels(aes(x=x,y=y,label=Label),graph,color="red")
{% endhighlight %}

![plot of chunk geom_edgelabels](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgelabels/geom_edgelabels-2.png) 

{% highlight r %}
p + geom_edgelabels(aes(x=x,y=y,label=Label),graph,color="red", offset=c(.005,-0.004))
{% endhighlight %}

![plot of chunk geom_edgelabels](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgelabels/geom_edgelabels-3.png) 