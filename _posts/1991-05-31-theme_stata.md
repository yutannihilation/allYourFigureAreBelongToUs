---
title: |
  Themes based on Stata graph schemes
rdname: theme_stata
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-10.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-6.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-7.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-8.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-9.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
q1 <- (qplot(carat, price, data=dsamp, colour=clarity)
       + ggtitle("Diamonds"))
q2 <- (qplot(carat, price, data=dsamp)
       + facet_wrap(~ clarity)
       + ggtitle("Diamonds"))
q1mono <- (qplot(carat, price, shape=clarity, color=clarity,
           data=dsamp)
           + scale_shape_stata()
           + ggtitle("Diamonds"))
## s2color
(q1 + theme_stata() + scale_colour_stata(scheme = "s2color"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-1.png) 

{% highlight r %}
(q2 + theme_stata())
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-2.png) 

{% highlight r %}
## s2mono
(q1mono + theme_stata(scheme = "s2mono") + scale_colour_stata("mono"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-3.png) 

{% highlight r %}
(q2 + theme_stata(scheme = "s2mono"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-4.png) 

{% highlight r %}
## s1color
(q1 + theme_stata(scheme = "s1color") + scale_colour_stata("s1color"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-5.png) 

{% highlight r %}
(q2 + theme_stata(scheme = "s1color"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-6.png) 

{% highlight r %}
## s1rcolor
(q1 + theme_stata(scheme = "s1rcolor") + scale_colour_stata("s1rcolor"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-7.png) 

{% highlight r %}
(ggplot(dsamp, aes(x=carat, y=price)) + geom_point(colour="white")
 + facet_wrap(~ clarity) + scale_colour_stata("s1rcolor")
 + ggtitle("Diamonds"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-8.png) 

{% highlight r %}
## s1mono
(q1mono + theme_stata(scheme = "s1mono") + scale_colour_stata("mono"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-9.png) 

{% highlight r %}
(q2 + theme_stata(scheme = "s1mono"))
{% endhighlight %}

![plot of chunk theme_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_stata/theme_stata-10.png) 