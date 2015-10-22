---
title: |
  Add padding around edges of table.
rdname: gtable_add_padding
date: 2015-10-22
output: html_document
layout: article
category: gtable
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding//gtable_add_padding-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding//gtable_add_padding-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding//gtable_add_padding-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding//gtable_add_padding-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding//gtable_add_padding-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding//gtable_add_padding-6.png
---




{% highlight r %}
gt <- gtable(unit(1, "null"), unit(1, "null"))
gt <- gtable_add_grob(gt, rectGrob(gp = gpar(fill = "black")), 1, 1)

plot(gt)
{% endhighlight %}

![plot of chunk gtable_add_padding](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding/gtable_add_padding-1.png) 

{% highlight r %}
plot(cbind(gt, gt))
{% endhighlight %}

![plot of chunk gtable_add_padding](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding/gtable_add_padding-2.png) 

{% highlight r %}
plot(rbind(gt, gt))
{% endhighlight %}

![plot of chunk gtable_add_padding](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding/gtable_add_padding-3.png) 

{% highlight r %}
pad <- gtable_add_padding(gt, unit(1, "cm"))
plot(pad)
{% endhighlight %}

![plot of chunk gtable_add_padding](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding/gtable_add_padding-4.png) 

{% highlight r %}
plot(cbind(pad, pad))
{% endhighlight %}

![plot of chunk gtable_add_padding](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding/gtable_add_padding-5.png) 

{% highlight r %}
plot(rbind(pad, pad))
{% endhighlight %}

![plot of chunk gtable_add_padding](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gtable_add_padding/gtable_add_padding-6.png) 