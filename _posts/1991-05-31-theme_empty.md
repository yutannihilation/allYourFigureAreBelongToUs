---
title: |
  A blank theme for plotting networks
rdname: theme_empty
date: 2015-10-22
output: html_document
layout: article
category: popgraph
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty//theme_empty-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty//theme_empty-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty//theme_empty-3.png
---




{% highlight r %}
data(lopho)
require(ggplot2)
require(igraph)
layout <- layout.fruchterman.reingold( lopho )
{% endhighlight %}



{% highlight text %}
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
{% endhighlight %}



{% highlight r %}
V(lopho)$x <- layout[,1]
{% endhighlight %}



{% highlight text %}
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
{% endhighlight %}



{% highlight r %}
V(lopho)$y <- layout[,2]
{% endhighlight %}



{% highlight text %}
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
{% endhighlight %}



{% highlight r %}
p <- ggplot() + geom_edgeset( aes(x,y), lopho)
{% endhighlight %}



{% highlight text %}
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
{% endhighlight %}



{% highlight r %}
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
{% endhighlight %}



{% highlight text %}
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
## This graph was created by an old(er) igraph version.
##   Call upgrade_graph() on it to use with the current igraph version
##   For now we convert it on the fly...
{% endhighlight %}



{% highlight r %}
p
{% endhighlight %}

![plot of chunk theme_empty](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_empty/theme_empty-3.png) 