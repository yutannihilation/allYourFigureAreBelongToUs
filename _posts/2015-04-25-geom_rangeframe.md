---
title: "Range Frames"
rdname: "geom_rangeframe"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-geom_rangeframe//geom_rangeframe-1.png
---




{% highlight r %}
(ggplot(mtcars, aes(wt, mpg))
 + geom_point() + geom_rangeframe()
 + theme_tufte())
{% endhighlight %}

![plot of chunk geom_rangeframe](/allYourFigureAreBelongToUs/figure/source/2015-04-25-geom_rangeframe/geom_rangeframe-1.png) 