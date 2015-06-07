---
title: |
  Show shapes
rdname: show_shapes
date: 1991-05-31
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-show_shapes/show_shapes-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-show_shapes/show_shapes-2.png
---




{% highlight r %}
library(scales)
show_shapes(shape_pal()(5))
{% endhighlight %}

![plot of chunk show_shapes](/allYourFigureAreBelongToUs/figure/source/1991-05-31-show_shapes/show_shapes-1.png) 

{% highlight r %}
show_shapes(shape_pal()(3), labels=TRUE)
{% endhighlight %}

![plot of chunk show_shapes](/allYourFigureAreBelongToUs/figure/source/1991-05-31-show_shapes/show_shapes-2.png) 