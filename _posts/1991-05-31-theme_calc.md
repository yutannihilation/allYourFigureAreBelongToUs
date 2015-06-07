---
title: |
  Theme Calc
rdname: theme_calc
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_calc/theme_calc-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_calc/theme_calc-2.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- qplot(carat, price, data=dsamp, colour=clarity)
  + theme_calc()
  + scale_color_calc())
{% endhighlight %}

![plot of chunk theme_calc](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_calc/theme_calc-1.png) 

{% highlight r %}
(d <- qplot(carat, price, data=dsamp, shape=cut)
 + theme_calc()
 + scale_shape_calc())
{% endhighlight %}

![plot of chunk theme_calc](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_calc/theme_calc-2.png) 