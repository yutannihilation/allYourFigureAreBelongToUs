---
title: |
  Adjust y range of ggplot-objects
rdname: adjust_plot_range
date: 2015-10-22
output: html_document
layout: article
category: sjplot
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-adjust_plot_range//adjust_plot_range-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-adjust_plot_range//adjust_plot_range-2.png
---




{% highlight r %}
# sample data set
library(sjmisc)
data(efc)
# show frequencies of relationship-variable and
# retrieve plot object
gp <- sjp.frq(efc$e15relat, printPlot = FALSE)
# show current plot
plot(gp$plot)
{% endhighlight %}

![plot of chunk adjust_plot_range](/allYourFigureAreBelongToUs/figure/source/1991-05-31-adjust_plot_range/adjust_plot_range-1.png) 

{% highlight r %}
# show adjusted plot
adjust_plot_range(gp$plot)
{% endhighlight %}



{% highlight text %}
## Scale for 'y' is already present. Adding another scale for 'y', which will replace the existing scale.
## Scale for 'y' is already present. Adding another scale for 'y', which will replace the existing scale.
{% endhighlight %}

![plot of chunk adjust_plot_range](/allYourFigureAreBelongToUs/figure/source/1991-05-31-adjust_plot_range/adjust_plot_range-2.png) 