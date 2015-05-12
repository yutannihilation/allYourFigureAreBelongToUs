---
title: |
  Bank Slopes to 45 degrees
rdname: bank_slopes
date: 2015-05-12
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-bank_slopes//bank_slopes-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-bank_slopes//bank_slopes-2.png
---




{% highlight r %}
# Use the classic sunspot data from Cleveland's orig paper
x <- seq_along(sunspot.year)
y <- as.numeric(sunspot.year)
# Without banking
m <- qplot(x, y, geom="line")
m
{% endhighlight %}

![plot of chunk bank_slopes](/allYourFigureAreBelongToUs/figure/source/2015-05-12-bank_slopes/bank_slopes-1.png) 

{% highlight r %}
## Using the default method, Median Absolute Slope
ratio <- bank_slopes(x, y)
m + coord_fixed(ratio = ratio)
{% endhighlight %}

![plot of chunk bank_slopes](/allYourFigureAreBelongToUs/figure/source/2015-05-12-bank_slopes/bank_slopes-2.png) 

{% highlight r %}
## Alternative methods to calculate the banking
bank_slopes(x, y, method="ms")
{% endhighlight %}



{% highlight text %}
## [1] 0.04554598
{% endhighlight %}



{% highlight r %}
## Using culling
bank_slopes(x, y, method="ms", cull=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.04554598
{% endhighlight %}



{% highlight r %}
## Average Absolute Slope
bank_slopes(x, y, method="as")
{% endhighlight %}



{% highlight text %}
## [1] 0.03682336
{% endhighlight %}



{% highlight r %}
bank_slopes(x, y, method="as", cull=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.0366955
{% endhighlight %}



{% highlight r %}
## Average Orientation
bank_slopes(x, y, method="ao")
{% endhighlight %}



{% highlight text %}
## [1] 0.03921636
{% endhighlight %}



{% highlight r %}
bank_slopes(x, y, method="ao", cull=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.03920218
{% endhighlight %}



{% highlight r %}
## Average Orientation (Weighted)
bank_slopes(x, y, method="ao", weight=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.03921636
{% endhighlight %}



{% highlight r %}
bank_slopes(x, y, method="ao", cull=TRUE, weight=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.03920218
{% endhighlight %}



{% highlight r %}
## Global Orientation Resolution
bank_slopes(x, y, method="gor")
{% endhighlight %}



{% highlight text %}
## [1] 0.05008701
{% endhighlight %}



{% highlight r %}
bank_slopes(x, y, method="gor", cull=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.0500918
{% endhighlight %}



{% highlight r %}
## Local Orientation Resolution
bank_slopes(x, y, method="lor")
{% endhighlight %}



{% highlight text %}
## [1] 0.04771283
{% endhighlight %}



{% highlight r %}
bank_slopes(x, y, method="lor", cull=TRUE)
{% endhighlight %}



{% highlight text %}
## [1] 0.0477209
{% endhighlight %}