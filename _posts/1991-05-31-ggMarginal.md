---
title: |
  Add marginal density/histogram to ggplot2 scatterplots
rdname: ggMarginal
date: 2015-10-22
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-10.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-11.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-12.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-13.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-6.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-7.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-8.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal//ggMarginal-9.png
---




{% highlight r %}
# basic usage
p <- ggplot2::ggplot(mtcars, ggplot2::aes(wt, mpg)) + ggplot2::geom_point()
ggMarginal(p)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-1.png) 

{% highlight r %}
# using some parameters
set.seed(30)
df <- data.frame(x = rnorm(500, 50, 10), y = runif(500, 0, 50))
p2 <- ggplot2::ggplot(df, ggplot2::aes(x, y)) + ggplot2::geom_point()
ggMarginal(p2)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-2.png) 

{% highlight r %}
ggMarginal(p2, type = "histogram")
{% endhighlight %}



{% highlight text %}
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-3.png) 

{% highlight r %}
ggMarginal(p2, margins = "x")
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-4.png) 

{% highlight r %}
ggMarginal(p2, size = 2)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-5.png) 

{% highlight r %}
ggMarginal(p2, colour = "red")
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-6.png) 

{% highlight r %}
ggMarginal(p2, colour = "red", xparams = list(colour = "blue", size = 3))
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-7.png) 

{% highlight r %}
ggMarginal(p2, type = "histogram", bins = 10)
{% endhighlight %}



{% highlight text %}
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-8.png) 

{% highlight r %}
# specifying the data directly instead of providing a plot
ggMarginal(data = df, x = "x", y = "y")
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-9.png) 

{% highlight r %}
# more examples showing how the marginal plots are properly aligned even when
# the main plot axis/margins/size/etc are changed
set.seed(30)
df2 <- data.frame(x = c(rnorm(250, 50, 10), rnorm(250, 100, 10)),
                  y = runif(500, 0, 50))
p2 <- ggplot2::ggplot(df2, ggplot2::aes(x, y)) + ggplot2::geom_point()
ggMarginal(p2)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-10.png) 

{% highlight r %}
p2 <- p2 + ggplot2::ggtitle("Random data") + ggplot2::theme_bw(30)
ggMarginal(p2)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-11.png) 

{% highlight r %}
p3 <- ggplot2::ggplot(df2, ggplot2::aes(log(x), y - 500)) + ggplot2::geom_point()
ggMarginal(p3)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-12.png) 

{% highlight r %}
p4 <- p3 + ggplot2::scale_x_continuous(limits = c(2, 6)) + ggplot2::theme_bw(50)
ggMarginal(p4)
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggMarginal/ggMarginal-13.png) 