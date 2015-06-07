---
title: |
  Confidence Interval
rdname: geomconfidence
date: 2015-06-07
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geomconfidence/geomconfidence-1.png
---




{% highlight r %}
data(Feldspar)
  ggtern(data=Feldspar,aes(An,Ab,Or)) + geom_point() + geom_confidence()
{% endhighlight %}

![plot of chunk geomconfidence](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geomconfidence/geomconfidence-1.png) 