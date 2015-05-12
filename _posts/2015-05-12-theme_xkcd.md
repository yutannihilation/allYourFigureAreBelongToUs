---
title: |
  Creates an XKCD theme
rdname: theme_xkcd
date: 2015-05-12
output: html_document
layout: article
category: xkcd
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_xkcd//theme_xkcd-1.png
---




{% highlight r %}
p <- ggplot() + geom_point(aes(mpg, wt), data=mtcars) +
     theme_xkcd()
p
{% endhighlight %}

![plot of chunk theme_xkcd](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_xkcd/theme_xkcd-1.png) 