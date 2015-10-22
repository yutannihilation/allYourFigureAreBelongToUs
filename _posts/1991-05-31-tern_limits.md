---
title: |
  Restrict Ternary Limits
rdname: tern_limits
date: 2015-10-22
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tern_limits//tern_limits-1.png
---




{% highlight r %}
plot <- ggtern(data=data.frame(x=runif(100),
                               y=runif(100),
                               z=runif(100)), aes(x,y,z)) +
        geom_point() +
        tern_limits(0.7,0.3,0.4)
plot
{% endhighlight %}

![plot of chunk tern_limits](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tern_limits/tern_limits-1.png) 