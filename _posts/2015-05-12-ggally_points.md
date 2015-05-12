---
title: |
  Plots the Scatter Plot
rdname: ggally_points
date: 2015-05-12
output: html_document
layout: article
category: GGally
images:
 - figure/source/2015-05-12-ggally_points//ggally_points-1.png
 - figure/source/2015-05-12-ggally_points//ggally_points-2.png
 - figure/source/2015-05-12-ggally_points//ggally_points-3.png
---




{% highlight r %}
data(mtcars)
{% endhighlight %}



{% highlight text %}
## Warning in data(mtcars): data set 'mtcars' not found
{% endhighlight %}



{% highlight r %}
ggally_points(mtcars, mapping = ggplot2::aes(x = disp, y = hp))
{% endhighlight %}

![plot of chunk ggally_points](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_points/ggally_points-1.png) 

{% highlight r %}
ggally_points(mtcars, mapping = ggplot2::aes_string(x = "disp", y = "hp"))
{% endhighlight %}

![plot of chunk ggally_points](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_points/ggally_points-2.png) 

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

![plot of chunk ggally_points](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_points/ggally_points-3.png) 