---
title: |
  Plotting of a population graph edge set using ggplot neumonic
rdname: geom_edgeset
date: 2015-06-07
output: html_document
layout: article
category: popgraph
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgeset/geom_edgeset-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgeset/geom_edgeset-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgeset/geom_edgeset-3.png
---




{% highlight r %}
a <- matrix( c(0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0),nrow=4)
rownames(a) <- colnames(a) <- LETTERS[1:4]
graph <- as.popgraph(a)
igraph::V(graph)$x <- runif(4)
igraph::V(graph)$y <- runif(4)
require(ggplot2)
ggplot() + geom_edgeset( aes(x=x,y=y), graph )
{% endhighlight %}

![plot of chunk geom_edgeset](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgeset/geom_edgeset-1.png) 

{% highlight r %}
ggplot() + geom_edgeset( aes(x=x,y=y), graph, color="darkblue" )
{% endhighlight %}

![plot of chunk geom_edgeset](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgeset/geom_edgeset-2.png) 

{% highlight r %}
require(grid)
{% endhighlight %}



{% highlight text %}
## Loading required package: grid
{% endhighlight %}



{% highlight r %}
ggplot() + geom_edgeset( aes(x=x,y=y), graph, directed=TRUE, arrow=arrow(length=unit(0.5,"cm")) )
{% endhighlight %}

![plot of chunk geom_edgeset](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_edgeset/geom_edgeset-3.png) 