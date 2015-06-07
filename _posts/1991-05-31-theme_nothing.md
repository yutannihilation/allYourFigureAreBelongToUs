---
title: |
  Create a completely empty theme
rdname: theme_nothing
date: 2015-06-07
output: html_document
layout: article
category: cowplot
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_nothing/theme_nothing-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_nothing/theme_nothing-2.png
---




{% highlight r %}
# plot with small amount of remaining padding
qplot(1:10, (1:10)^2) + theme_nothing()
{% endhighlight %}

![plot of chunk theme_nothing](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_nothing/theme_nothing-1.png) 

{% highlight r %}
# remaining padding removed
qplot(1:10, (1:10)^2) + theme_nothing() + labs(x = NULL, y = NULL)
{% endhighlight %}

![plot of chunk theme_nothing](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_nothing/theme_nothing-2.png) 