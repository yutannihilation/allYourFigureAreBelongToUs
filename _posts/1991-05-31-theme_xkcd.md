---
title: |
  Creates an XKCD theme
rdname: theme_xkcd
date: 2015-10-22
output: html_document
layout: article
category: xkcd
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_xkcd//theme_xkcd-1.png
---




{% highlight r %}
p <- ggplot() + geom_point(aes(mpg, wt), data=mtcars) +
     theme_xkcd()
{% endhighlight %}



{% highlight text %}
## Warning in theme_xkcd(): Not xkcd fonts installed! See vignette("xkcd-
## intro")
{% endhighlight %}



{% highlight r %}
p
{% endhighlight %}

![plot of chunk theme_xkcd](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_xkcd/theme_xkcd-1.png) 