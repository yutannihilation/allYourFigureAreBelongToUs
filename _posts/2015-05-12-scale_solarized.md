---
title: |
  Solarized color scales
rdname: scale_solarized
date: 2015-05-12
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_solarized//scale_solarized-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- qplot(carat, price, data=dsamp, colour=clarity)
               + theme_solarized()
               + scale_colour_solarized() )
{% endhighlight %}

![plot of chunk scale_solarized](/allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_solarized/scale_solarized-1.png) 