---
title: |
  ggscatmat - a traditional scatterplot matrix for purely quantitative variables
rdname: ggscatmat
date: 2015-10-22
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggscatmat//ggscatmat-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggscatmat//ggscatmat-2.png
---




{% highlight r %}
data(flea)
ggscatmat(flea, columns = 2:4)
{% endhighlight %}

![plot of chunk ggscatmat](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggscatmat/ggscatmat-1.png) 

{% highlight r %}
ggscatmat(flea, columns = 2:4, color="species")
{% endhighlight %}

![plot of chunk ggscatmat](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggscatmat/ggscatmat-2.png) 