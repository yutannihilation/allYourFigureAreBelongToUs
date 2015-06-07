---
title: |
  A blank theme for plotting networks
rdname: theme_empty
date: 2015-06-07
output: html_document
layout: article
category: popgraph
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-3.png
---




{% highlight r %}
data(lopho)
require(ggplot2)
require(igraph)
layout <- layout.fruchterman.reingold( lopho )
V(lopho)$x <- layout[,1]
V(lopho)$y <- layout[,2]
p <- ggplot() + geom_edgeset( aes(x,y), lopho)
p <- p + geom_nodeset( aes(x,y), lopho )
p
{% endhighlight %}

![plot of chunk theme_empty](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-1.png) 

{% highlight r %}
p + theme_empty()
{% endhighlight %}

![plot of chunk theme_empty](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-2.png) 

{% highlight r %}
p <- ggplot() + geom_edgeset( aes(x,y,color=weight), lopho)
p
{% endhighlight %}

![plot of chunk theme_empty](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-3.png) 