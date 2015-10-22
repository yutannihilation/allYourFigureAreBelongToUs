---
title: |
  Switches the axis position of the x or y axis in a ggplot2 plot.
rdname: switch_axis_position
date: 2015-10-22
output: html_document
layout: article
category: cowplot
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-switch_axis_position//switch_axis_position-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-switch_axis_position//switch_axis_position-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-switch_axis_position//switch_axis_position-3.png
---




{% highlight r %}
p <- ggplot(mtcars, aes(mpg, disp)) + geom_line(colour = "blue")
ggdraw(switch_axis_position(p, axis = 'y'))
{% endhighlight %}

![plot of chunk switch_axis_position](/allYourFigureAreBelongToUs/figure/source/1991-05-31-switch_axis_position/switch_axis_position-1.png) 

{% highlight r %}
ggdraw(switch_axis_position(p, axis = 'x'))
{% endhighlight %}

![plot of chunk switch_axis_position](/allYourFigureAreBelongToUs/figure/source/1991-05-31-switch_axis_position/switch_axis_position-2.png) 

{% highlight r %}
ggdraw(switch_axis_position(p + theme_bw(), axis = 'xy', keep = 'x'))
{% endhighlight %}

![plot of chunk switch_axis_position](/allYourFigureAreBelongToUs/figure/source/1991-05-31-switch_axis_position/switch_axis_position-3.png) 