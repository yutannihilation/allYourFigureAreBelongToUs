---
title: |
  Fluctuation plot
rdname: ggfluctuation2
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-4.png
---




{% highlight r %}
data(movies, package = "ggplot2")
ggfluctuation2(table(movies$Action, movies$Comedy))
{% endhighlight %}

![plot of chunk ggfluctuation2](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-1.png) 

{% highlight r %}
ggfluctuation2(table(movies$Action, movies$mpaa))
{% endhighlight %}

![plot of chunk ggfluctuation2](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-2.png) 

{% highlight r %}
ggfluctuation2(table(movies[,c("Action", "mpaa")]))
{% endhighlight %}

![plot of chunk ggfluctuation2](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-3.png) 

{% highlight r %}
ggfluctuation2(table(warpbreaks$breaks, warpbreaks$tension))
{% endhighlight %}

![plot of chunk ggfluctuation2](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggfluctuation2/ggfluctuation2-4.png) 