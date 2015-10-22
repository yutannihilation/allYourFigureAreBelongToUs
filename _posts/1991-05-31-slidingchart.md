---
title: |
  Sliding square plot
rdname: slidingchart
date: 2015-10-22
output: html_document
layout: article
category: paireddata
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-slidingchart//slidingchart-1.png
---




{% highlight r %}
data(PrisonStress)
with(PrisonStress,slidingchart(paired(PSSbefore,PSSafter)))
{% endhighlight %}

![plot of chunk slidingchart](/allYourFigureAreBelongToUs/figure/source/1991-05-31-slidingchart/slidingchart-1.png) 