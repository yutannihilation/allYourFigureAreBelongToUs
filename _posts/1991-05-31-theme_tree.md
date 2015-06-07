---
title: |
  theme_tree
rdname: theme_tree
date: 2015-06-07
output: html_document
layout: article
category: ggtree
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_tree/theme_tree-1.png
---




{% highlight r %}
require(ape)
{% endhighlight %}



{% highlight text %}
## Loading required package: ape
{% endhighlight %}



{% highlight r %}
tr <- rtree(10)
ggtree(tr) + theme_tree()
{% endhighlight %}

![plot of chunk theme_tree](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_tree/theme_tree-1.png) 