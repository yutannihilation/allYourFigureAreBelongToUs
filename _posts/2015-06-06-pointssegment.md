---
title: |
  
  Interpolates between two points
  
rdname: pointssegment
date: 2015-06-06
output: html_document
layout: article
category: xkcd
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-pointssegment/pointssegment-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-pointssegment/pointssegment-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-pointssegment/pointssegment-3.png
---




{% highlight r %}
plot(pointssegment(xbegin=0, ybegin=0, xend=10, yend=10))
{% endhighlight %}

![plot of chunk pointssegment](/allYourFigureAreBelongToUs/figure/source/2015-06-06-pointssegment/pointssegment-1.png) 

{% highlight r %}
plot(pointssegment(xbegin=0, ybegin=0, xend=10, yend=10,
                   xjitteramount=2,yjitteramount=2))
{% endhighlight %}

![plot of chunk pointssegment](/allYourFigureAreBelongToUs/figure/source/2015-06-06-pointssegment/pointssegment-2.png) 

{% highlight r %}
plot(pointssegment(xbegin=0, ybegin=0, xend=10, yend=10,
                   xjitteramount=2,yjitteramount=2,bezier=FALSE))
{% endhighlight %}

![plot of chunk pointssegment](/allYourFigureAreBelongToUs/figure/source/2015-06-06-pointssegment/pointssegment-3.png) 