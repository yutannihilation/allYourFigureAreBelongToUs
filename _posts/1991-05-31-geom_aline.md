---
title: |
  geom_aline
rdname: geom_aline
date: 2015-06-07
output: html_document
layout: article
category: ggtree
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_aline/geom_aline-1.png
---




{% highlight r %}
require(ape)
{% endhighlight %}



{% highlight text %}
## Loading required package: ape
{% endhighlight %}



{% highlight r %}
tr <- rtree(10)
ggtree(tr) + geom_tiplab(align=TRUE) + geom_aline()
{% endhighlight %}

![plot of chunk geom_aline](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_aline/geom_aline-1.png) 