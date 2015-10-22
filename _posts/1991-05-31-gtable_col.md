---
title: |
  Create a single column gtable.
rdname: gtable_col
date: 2015-10-22
output: html_document
layout: article
category: gtable
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_col//gtable_col-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_col//gtable_col-2.png
---




{% highlight r %}
a <- rectGrob(gp = gpar(fill = "red"))
b <- circleGrob()
c <- linesGrob()
gt <- gtable_col("demo", list(a, b, c))
gt
{% endhighlight %}



{% highlight text %}
## TableGrob (3 x 1) "demo": 3 grobs
##   z     cells name                  grob
## 1 1 (1-1,1-1) demo     rect[GRID.rect.1]
## 2 2 (2-2,1-1) demo circle[GRID.circle.2]
## 3 3 (3-3,1-1) demo   lines[GRID.lines.3]
{% endhighlight %}



{% highlight r %}
plot(gt)
{% endhighlight %}

![plot of chunk gtable_col](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_col/gtable_col-1.png) 

{% highlight r %}
gtable_show_layout(gt)
{% endhighlight %}

![plot of chunk gtable_col](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_col/gtable_col-2.png) 