---
title: |
  Separation plot for models with binary response variables
rdname: ggs_separation
date: 2015-06-06
output: html_document
layout: article
category: ggmcmc
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggs_separation/ggs_separation-1.png
---




{% highlight r %}
data(binary)
ggs_separation(ggs(s.binary, family="mu"), outcome=y.binary)
{% endhighlight %}

![plot of chunk ggs_separation](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggs_separation/ggs_separation-1.png) 