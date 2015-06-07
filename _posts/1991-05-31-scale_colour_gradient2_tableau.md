---
title: |
  Tableau diverging colour scales (continuous)
rdname: scale_colour_gradient2_tableau
date: 1991-05-31
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient2_tableau/scale_colour_gradient2_tableau-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient2_tableau/scale_colour_gradient2_tableau-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient2_tableau/scale_colour_gradient2_tableau-3.png
---




{% highlight r %}
dsub <- subset(diamonds, x > 5 & x < 6 & y > 5 & y < 6)
dsub$diff <- with(dsub, sqrt(abs(x-y))* sign(x-y))
d <- qplot(x, y, data=dsub, colour=diff)
d + scale_colour_gradient2_tableau()
{% endhighlight %}

![plot of chunk scale_colour_gradient2_tableau](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient2_tableau/scale_colour_gradient2_tableau-1.png) 

{% highlight r %}
d + scale_colour_gradient2_tableau("Orange-Blue")
{% endhighlight %}

![plot of chunk scale_colour_gradient2_tableau](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient2_tableau/scale_colour_gradient2_tableau-2.png) 

{% highlight r %}
d + scale_colour_gradient2_tableau("Temperature")
{% endhighlight %}

![plot of chunk scale_colour_gradient2_tableau](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_colour_gradient2_tableau/scale_colour_gradient2_tableau-3.png) 