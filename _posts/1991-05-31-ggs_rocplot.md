---
title: |
  Receiver-Operator Characteristic (ROC) plot for models with binary outcomes
rdname: ggs_rocplot
date: 2015-10-22
output: html_document
layout: article
category: ggmcmc
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggs_rocplot//ggs_rocplot-1.png
---




{% highlight r %}
data(binary)
ggs_rocplot(ggs(s.binary, family="mu"), outcome=y.binary)
{% endhighlight %}

![plot of chunk ggs_rocplot](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggs_rocplot/ggs_rocplot-1.png) 