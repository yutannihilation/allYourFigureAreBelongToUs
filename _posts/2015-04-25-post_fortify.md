---
title: "Post process for fortify."
rdname: "post_fortify"
date: "2015-04-25"
output: html_document
layout: article
category: "ggfortify"
images:
 - figure/source/2015-04-25-post_fortify//post_fortify-1.png
---




{% highlight r %}
p <- qplot(Petal.Length, Petal.Width, data = iris)
ggfortify:::post_autoplot(p, xlim = c(1, 5), ylim = c(1, 5), log = 'xy', main = 'title',
                          xlab = 'x', ylab = 'y', asp = 1.5)
{% endhighlight %}



{% highlight text %}
## Scale for 'x' is already present. Adding another scale for 'x', which will replace the existing scale.
## Scale for 'y' is already present. Adding another scale for 'y', which will replace the existing scale.
{% endhighlight %}



{% highlight text %}
## Warning in loop_apply(n, do.ply): Removed 92 rows containing missing
## values (geom_point).
{% endhighlight %}

![plot of chunk post_fortify](/allYourFigureAreBelongToUs/figure/source/2015-04-25-post_fortify/post_fortify-1.png) 