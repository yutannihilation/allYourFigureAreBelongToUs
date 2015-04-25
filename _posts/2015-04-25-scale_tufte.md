---
title: "Axis breaks inclusive of extreme values"
rdname: "scale_tufte"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-scale_tufte//scale_tufte-1.png
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

![plot of chunk scale_tufte](/allYourFigureAreBelongToUs/figure/source/2015-04-25-scale_tufte/scale_tufte-1.png) 