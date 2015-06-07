---
title: |
  Plot distribution
rdname: ggdistribution
date: 2015-06-07
output: html_document
layout: article
category: ggfortify
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdistribution/ggdistribution-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdistribution/ggdistribution-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdistribution/ggdistribution-3.png
---




{% highlight r %}
ggdistribution(dnorm, seq(-3, 3, 0.1), mean = 0, sd = 1)
{% endhighlight %}

![plot of chunk ggdistribution](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdistribution/ggdistribution-1.png) 

{% highlight r %}
ggdistribution(ppois, seq(0, 30), lambda = 20)
{% endhighlight %}

![plot of chunk ggdistribution](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdistribution/ggdistribution-2.png) 

{% highlight r %}
p <- ggdistribution(pchisq, 0:20, df = 7, fill = 'blue')
ggdistribution(pchisq, 0:20, p = p, df = 9, fill = 'red')
{% endhighlight %}

![plot of chunk ggdistribution](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggdistribution/ggdistribution-3.png) 