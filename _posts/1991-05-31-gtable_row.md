---
title: |
  Create a single row gtable.
rdname: gtable_row
date: 2015-06-07
output: html_document
layout: article
category: gtable
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_row/gtable_row-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_row/gtable_row-2.png
---




{% highlight r %}
a <- rectGrob(gp = gpar(fill = "red"))
b <- circleGrob()
c <- linesGrob()
gt <- gtable_row("demo", list(a, b, c))
gt
{% endhighlight %}



{% highlight text %}
## TableGrob (1 x 3) "demo": 3 grobs
##   z     cells name                  grob
## 1 1 (1-1,1-1) demo     rect[GRID.rect.1]
## 2 2 (1-1,2-2) demo circle[GRID.circle.2]
## 3 3 (1-1,3-3) demo   lines[GRID.lines.3]
{% endhighlight %}



{% highlight r %}
plot(gt)
{% endhighlight %}

![plot of chunk gtable_row](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_row/gtable_row-1.png) 

{% highlight r %}
gtable_show_layout(gt)
{% endhighlight %}

![plot of chunk gtable_row](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_row/gtable_row-2.png) 