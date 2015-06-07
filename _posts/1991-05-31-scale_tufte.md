---
title: |
  Axis breaks inclusive of extreme values
rdname: scale_tufte
date: 1991-05-31
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_tufte/scale_tufte-1.png
---




{% highlight r %}
(ggplot(mtcars, aes(x = wt + runif(1), y = mpg))
 + geom_point()
 + geom_rangeframe()
 + theme_tufte()
 + scale_x_tufte()
 + scale_y_tufte()
 )
{% endhighlight %}

![plot of chunk scale_tufte](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_tufte/scale_tufte-1.png) 