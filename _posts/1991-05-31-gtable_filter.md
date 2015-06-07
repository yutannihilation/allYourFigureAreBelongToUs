---
title: |
  Filter cells by name.
rdname: gtable_filter
date: 2015-06-07
output: html_document
layout: article
category: gtable
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-4.png
---




{% highlight r %}
gt <- gtable(unit(rep(5, 3), c("cm")), unit(5, "cm"))
rect <- rectGrob(gp = gpar(fill = "black"))
circ <- circleGrob(gp = gpar(fill = "red"))

gt <- gtable_add_grob(gt, rect, 1, 1, name = "rect")
gt <- gtable_add_grob(gt, circ, 1, 3, name = "circ")

plot(gtable_filter(gt, "rect"))
{% endhighlight %}

![plot of chunk gtable_filter](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-1.png) 

{% highlight r %}
plot(gtable_filter(gt, "rect", trim = FALSE))
{% endhighlight %}

![plot of chunk gtable_filter](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-2.png) 

{% highlight r %}
plot(gtable_filter(gt, "circ"))
{% endhighlight %}

![plot of chunk gtable_filter](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-3.png) 

{% highlight r %}
plot(gtable_filter(gt, "circ", trim = FALSE))
{% endhighlight %}

![plot of chunk gtable_filter](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_filter/gtable_filter-4.png) 