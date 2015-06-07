---
title: |
  Trim off empty cells.
rdname: gtable_trim
date: 2015-06-07
output: html_document
layout: article
category: gtable
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-6.png
---




{% highlight r %}
rect <- rectGrob(gp = gpar(fill = "black"))
base <- gtable(unit(c(2, 2, 2), "cm"), unit(c(2, 2, 2), "cm"))

center <- gtable_add_grob(base, rect, 2, 2)
plot(center)
{% endhighlight %}

![plot of chunk gtable_trim](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-1.png) 

{% highlight r %}
plot(gtable_trim(center))
{% endhighlight %}

![plot of chunk gtable_trim](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-2.png) 

{% highlight r %}
col <- gtable_add_grob(base, rect, 1, 2, 3, 2)
plot(col)
{% endhighlight %}

![plot of chunk gtable_trim](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-3.png) 

{% highlight r %}
plot(gtable_trim(col))
{% endhighlight %}

![plot of chunk gtable_trim](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-4.png) 

{% highlight r %}
row <- gtable_add_grob(base, rect, 2, 1, 2, 3)
plot(row)
{% endhighlight %}

![plot of chunk gtable_trim](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-5.png) 

{% highlight r %}
plot(gtable_trim(row))
{% endhighlight %}

![plot of chunk gtable_trim](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_trim/gtable_trim-6.png) 