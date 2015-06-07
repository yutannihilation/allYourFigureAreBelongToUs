---
title: |
  geom_tippoint
rdname: geom_tippoint
date: 2015-06-07
output: html_document
layout: article
category: ggtree
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tippoint/geom_tippoint-1.png
---




{% highlight r %}
require(ape)
{% endhighlight %}



{% highlight text %}
## Loading required package: ape
{% endhighlight %}



{% highlight r %}
tr <- rtree(10)
ggtree(tr) + geom_tippoint()
{% endhighlight %}

![plot of chunk geom_tippoint](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tippoint/geom_tippoint-1.png) 