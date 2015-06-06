---
title: |
  
  Calculates a handwritten circunference
  
rdname: pointscircunference
date: 2015-06-06
output: html_document
layout: article
category: xkcd
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-pointscircunference/pointscircunference-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-pointscircunference/pointscircunference-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-pointscircunference/pointscircunference-3.png
---




{% highlight r %}
plot(pointscircunference(x=0, y=0), ylim=c(-1,1), xlim=c(-1,1))
{% endhighlight %}

![plot of chunk pointscircunference](/allYourFigureAreBelongToUs/figure/source/2015-06-06-pointscircunference/pointscircunference-1.png) 

{% highlight r %}
plot(pointscircunference(x=0, y=0), ylim=c(-1,1), xlim=c(-2,2))
{% endhighlight %}

![plot of chunk pointscircunference](/allYourFigureAreBelongToUs/figure/source/2015-06-06-pointscircunference/pointscircunference-2.png) 

{% highlight r %}
plot(pointscircunference(x=0, y=0, ratioxy=2),  ylim=c(-1,1), xlim=c(-2,2))
{% endhighlight %}

![plot of chunk pointscircunference](/allYourFigureAreBelongToUs/figure/source/2015-06-06-pointscircunference/pointscircunference-3.png) 