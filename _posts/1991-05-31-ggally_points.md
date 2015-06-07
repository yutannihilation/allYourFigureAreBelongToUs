---
title: |
  Plots the Scatter Plot
rdname: ggally_points
date: 2015-06-07
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_points/ggally_points-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_points/ggally_points-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_points/ggally_points-3.png
---




{% highlight r %}
data(mtcars)
ggally_points(mtcars, mapping = ggplot2::aes(x = disp, y = hp))
{% endhighlight %}

![plot of chunk ggally_points](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_points/ggally_points-1.png) 

{% highlight r %}
ggally_points(mtcars, mapping = ggplot2::aes_string(x = "disp", y = "hp"))
{% endhighlight %}

![plot of chunk ggally_points](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_points/ggally_points-2.png) 

{% highlight r %}
ggally_points(
  mtcars,
  mapping = ggplot2::aes_string(
    x     = "disp",
    y     = "hp",
    color = "as.factor(cyl)",
    size  = "gear"
  )
)
{% endhighlight %}

![plot of chunk ggally_points](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_points/ggally_points-3.png) 