---
title: |
  Tableau color scales.
rdname: scale_color_tableau
date: 2015-06-06
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-10.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-4.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-5.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-6.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-7.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-8.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-9.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
p <- qplot(carat, price, data=dsamp, colour=clarity) + theme_igray()
p + scale_colour_tableau()
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-1.png) 

{% highlight r %}
p + scale_colour_tableau("tableau20")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-2.png) 

{% highlight r %}
p + scale_colour_tableau("tableau10medium")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-3.png) 

{% highlight r %}
p + scale_colour_tableau("tableau10light")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-4.png) 

{% highlight r %}
p + scale_colour_tableau("colorblind10")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-5.png) 

{% highlight r %}
p + scale_colour_tableau("trafficlight")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-6.png) 

{% highlight r %}
p + scale_colour_tableau("purplegray12")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-7.png) 

{% highlight r %}
p + scale_colour_tableau("bluered12")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-8.png) 

{% highlight r %}
p + scale_colour_tableau("greenorange12")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-9.png) 

{% highlight r %}
p + scale_colour_tableau("cyclic")
{% endhighlight %}

![plot of chunk scale_color_tableau](/allYourFigureAreBelongToUs/figure/source/2015-06-06-scale_color_tableau/scale_color_tableau-10.png) 