---
title: |
  Plot a path between two vertices over the full genealogy
rdname: plotPathOnAll
date: 2015-06-07
output: html_document
layout: article
category: ggenealogy
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotPathOnAll/plotPathOnAll-1.png
---




{% highlight r %}
data(sbGeneal)
ig = dfToIG(sbGeneal)
path = getPath("Brim","Bedford",ig,sbGeneal)
binVector=sample(1:12, 12)
plotTotalImage <- plotPathOnAll(path=path, geneal=sbGeneal, ig=ig, binVector=sample(1:12, 12))
plotTotalImage
{% endhighlight %}



{% highlight text %}
## Warning in loop_apply(n, do.ply): Removed 39 rows containing missing
## values (geom_segment).
{% endhighlight %}



{% highlight text %}
## Warning in loop_apply(n, do.ply): Removed 41 rows containing missing
## values (geom_text).
{% endhighlight %}

![plot of chunk plotPathOnAll](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotPathOnAll/plotPathOnAll-1.png) 