---
title: "Creates an XKCD theme"
rdname: "theme_xkcd"
date: "2015-04-25"
output: html_document
layout: article
category: "xkcd"
images:
 - figure/source/2015-04-25-theme_xkcd//theme_xkcd-1.png
---




{% highlight r %}
p <- ggplot() + geom_point(aes(mpg, wt), data=mtcars) +
     theme_xkcd()
p
{% endhighlight %}

![plot of chunk theme_xkcd](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_xkcd/theme_xkcd-1.png) 