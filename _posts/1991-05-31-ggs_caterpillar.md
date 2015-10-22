---
title: |
  Caterpillar plot with thick and thin CI
rdname: ggs_caterpillar
date: 2015-10-22
output: html_document
layout: article
category: ggmcmc
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggs_caterpillar//ggs_caterpillar-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggs_caterpillar//ggs_caterpillar-2.png
---




{% highlight r %}
data(linear)
ggs_caterpillar(ggs(s))
{% endhighlight %}

![plot of chunk ggs_caterpillar](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggs_caterpillar/ggs_caterpillar-1.png) 

{% highlight r %}
ggs_caterpillar(list(A=ggs(s), B=ggs(s))) # silly example duplicating the same model
{% endhighlight %}

![plot of chunk ggs_caterpillar](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggs_caterpillar/ggs_caterpillar-2.png) 