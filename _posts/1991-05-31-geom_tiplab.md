---
title: |
  geom_tiplab
rdname: geom_tiplab
date: 2015-06-07
output: html_document
layout: article
category: ggtree
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tiplab/geom_tiplab-1.png
---




{% highlight r %}
require(ape)
{% endhighlight %}



{% highlight text %}
## Loading required package: ape
{% endhighlight %}



{% highlight r %}
tr <- rtree(10)
ggtree(tr) + geom_tiplab()
{% endhighlight %}

![plot of chunk geom_tiplab](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tiplab/geom_tiplab-1.png) 