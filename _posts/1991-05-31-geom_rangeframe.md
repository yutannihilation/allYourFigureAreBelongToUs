---
title: |
  Range Frames
rdname: geom_rangeframe
date: 2015-10-22
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_rangeframe//geom_rangeframe-1.png
---




{% highlight r %}
(ggplot(mtcars, aes(wt, mpg))
 + geom_point() + geom_rangeframe()
 + theme_tufte())
{% endhighlight %}

![plot of chunk geom_rangeframe](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_rangeframe/geom_rangeframe-1.png) 