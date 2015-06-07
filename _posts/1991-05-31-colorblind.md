---
title: |
  Colorblind Color Palette (Discrete) and Scales
rdname: colorblind
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-colorblind/colorblind-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-colorblind/colorblind-2.png
---




{% highlight r %}
library(scales)
show_col(colorblind_pal()(8))
{% endhighlight %}

![plot of chunk colorblind](/allYourFigureAreBelongToUs/figure/source/1991-05-31-colorblind/colorblind-1.png) 

{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
p <- qplot(carat, price, data=dsamp, colour=clarity) + theme_igray()
p + scale_colour_colorblind()
{% endhighlight %}

![plot of chunk colorblind](/allYourFigureAreBelongToUs/figure/source/1991-05-31-colorblind/colorblind-2.png) 