---
title: |
  Add new rows in specified position.
rdname: gtable_add_rows
date: 2015-06-07
output: html_document
layout: article
category: gtable
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_rows/gtable_add_rows-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_rows/gtable_add_rows-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_rows/gtable_add_rows-3.png
---




{% highlight r %}
rect <- rectGrob(gp = gpar(fill = "#00000080"))
tab <- gtable(unit(rep(1, 3), "null"), unit(rep(1, 3), "null"))
tab <- gtable_add_grob(tab, rect, t = 1, l = 1, r = 3)
tab <- gtable_add_grob(tab, rect, t = 1, b = 3, l = 1)
tab <- gtable_add_grob(tab, rect, t = 1, b = 3, l = 3)
dim(tab)
{% endhighlight %}



{% highlight text %}
## [1] 3 3
{% endhighlight %}



{% highlight r %}
plot(tab)
{% endhighlight %}

![plot of chunk gtable_add_rows](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_rows/gtable_add_rows-1.png) 

{% highlight r %}
# Grobs will continue to span over new rows if added in the middle
tab2 <- gtable_add_rows(tab, unit(1, "null"), 1)
dim(tab2)
{% endhighlight %}



{% highlight text %}
## [1] 4 3
{% endhighlight %}



{% highlight r %}
plot(tab2)
{% endhighlight %}

![plot of chunk gtable_add_rows](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_rows/gtable_add_rows-2.png) 

{% highlight r %}
# But not when added to top (0) or bottom (-1, the default)
tab3 <- gtable_add_rows(tab, unit(1, "null"))
tab3 <- gtable_add_rows(tab3, unit(1, "null"), 0)
dim(tab3)
{% endhighlight %}



{% highlight text %}
## [1] 5 3
{% endhighlight %}



{% highlight r %}
plot(tab3)
{% endhighlight %}

![plot of chunk gtable_add_rows](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_rows/gtable_add_rows-3.png) 