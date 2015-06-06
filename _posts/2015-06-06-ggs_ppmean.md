---
title: |
  Posterior predictive plot comparing the outcome mean vs the distribution of the predicted posterior means.
rdname: ggs_ppmean
date: 2015-06-06
output: html_document
layout: article
category: ggmcmc
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggs_ppmean/ggs_ppmean-1.png
---




{% highlight r %}
data(linear)
ggs_ppmean(ggs(s.y.rep), outcome=y)
{% endhighlight %}

![plot of chunk ggs_ppmean](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggs_ppmean/ggs_ppmean-1.png) 