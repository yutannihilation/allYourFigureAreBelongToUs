---
title: |
  Tableau sequential colour scale (continuous)
rdname: scale_colour_gradient_tableau
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient_tableau/scale_colour_gradient_tableau-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient_tableau/scale_colour_gradient_tableau-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient_tableau/scale_colour_gradient_tableau-3.png
---




{% highlight r %}
### ** Examples

dsub <- subset(diamonds, x > 5 & x < 6 & y > 5 & y < 6)
d <- qplot(x, y, data=dsub, colour=z)
d + scale_colour_gradient_tableau("Red", limits=c(3, 4))
{% endhighlight %}

![plot of chunk scale_colour_gradient_tableau](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient_tableau/scale_colour_gradient_tableau-1.png) 

{% highlight r %}
d + scale_colour_gradient_tableau("Blue", limits=c(3, 4))
{% endhighlight %}

![plot of chunk scale_colour_gradient_tableau](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient_tableau/scale_colour_gradient_tableau-2.png) 

{% highlight r %}
d + scale_colour_gradient_tableau("Green", limits=c(3, 4))
{% endhighlight %}

![plot of chunk scale_colour_gradient_tableau](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient_tableau/scale_colour_gradient_tableau-3.png) 