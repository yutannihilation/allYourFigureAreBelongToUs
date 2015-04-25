---
title: "ggfortify"
rdname: "ggfortify"
date: "2015-04-25"
output: html_document
layout: article
category: "ggfortify"
images:
 - figure/source/2015-04-25-ggfortify//ggfortify-1.png
 - figure/source/2015-04-25-ggfortify//ggfortify-2.png
 - figure/source/2015-04-25-ggfortify//ggfortify-3.png
---




{% highlight r %}
ggdistribution(dnorm, seq(-3, 3, 0.1), mean = 0, sd = 1)
{% endhighlight %}

![plot of chunk ggfortify](/allYourFigureAreBelongToUs/figure/source/2015-04-25-ggfortify/ggfortify-1.png) 

{% highlight r %}
ggdistribution(ppois, seq(0, 30), lambda = 20)
{% endhighlight %}

![plot of chunk ggfortify](/allYourFigureAreBelongToUs/figure/source/2015-04-25-ggfortify/ggfortify-2.png) 

{% highlight r %}
p <- ggdistribution(pchisq, 0:20, df = 7, fill = 'blue')
ggdistribution(pchisq, 0:20, p = p, df = 9, fill = 'red')
{% endhighlight %}

![plot of chunk ggfortify](/allYourFigureAreBelongToUs/figure/source/2015-04-25-ggfortify/ggfortify-3.png) 