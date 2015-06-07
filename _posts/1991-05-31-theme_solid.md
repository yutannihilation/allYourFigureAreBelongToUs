---
title: |
  Theme with nothing other than a background color
rdname: theme_solid
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_solid/theme_solid-1.png
---




{% highlight r %}
(ggplot(mtcars, aes(wt, mpg))
 + geom_point()
 + theme_solid(fill = "white"))
{% endhighlight %}

![plot of chunk theme_solid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_solid/theme_solid-1.png) 