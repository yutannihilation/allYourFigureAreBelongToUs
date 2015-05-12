---
title: |
  Excel color scales
rdname: scale_excel
date: 2015-05-12
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_excel//scale_excel-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(qplot(carat, price, data=dsamp, colour=clarity)
 + theme_igray()
 + scale_colour_excel("new"))
{% endhighlight %}

![plot of chunk scale_excel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_excel/scale_excel-1.png) 