---
title: |
  Inverse gray theme
rdname: theme_igray
date: 2015-10-22
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_igray//theme_igray-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- qplot(carat, price, data=dsamp, colour=clarity)
               + theme_igray())
{% endhighlight %}

![plot of chunk theme_igray](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_igray/theme_igray-1.png) 