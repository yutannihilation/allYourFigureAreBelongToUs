---
title: |
  Shape scales from Tremmel (1995)
rdname: scale_shape_tremmel
date: 2015-05-12
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel//scale_shape_tremmel-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel//scale_shape_tremmel-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel//scale_shape_tremmel-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel//scale_shape_tremmel-4.png
---




{% highlight r %}
(ggplot(mtcars, aes(x=mpg, y=hp, shape=factor(cyl)))
 + geom_point() + scale_shape_tremmel())
{% endhighlight %}

![plot of chunk scale_shape_tremmel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel/scale_shape_tremmel-1.png) 

{% highlight r %}
(ggplot(mtcars, aes(x=mpg, y=hp, shape=factor(cyl)))
 + geom_point() + scale_shape_tremmel(n3alt=FALSE))
{% endhighlight %}

![plot of chunk scale_shape_tremmel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel/scale_shape_tremmel-2.png) 

{% highlight r %}
(ggplot(mtcars, aes(x=mpg, y=hp, shape=factor(am)))
 + geom_point() + scale_shape_tremmel())
{% endhighlight %}

![plot of chunk scale_shape_tremmel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel/scale_shape_tremmel-3.png) 

{% highlight r %}
(ggplot(mtcars, aes(x=mpg, y=hp, shape=factor(am)))
 + geom_point() + scale_shape_tremmel(overlap=TRUE))
{% endhighlight %}

![plot of chunk scale_shape_tremmel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-scale_shape_tremmel/scale_shape_tremmel-4.png) 