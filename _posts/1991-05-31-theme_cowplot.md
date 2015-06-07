---
title: |
  Create the default cowplot theme
rdname: theme_cowplot
date: 2015-06-07
output: html_document
layout: article
category: cowplot
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_cowplot/theme_cowplot-1.png
---




{% highlight r %}
qplot(1:10, (1:10)^2) + theme_cowplot(font_size = 15)
{% endhighlight %}

![plot of chunk theme_cowplot](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_cowplot/theme_cowplot-1.png) 