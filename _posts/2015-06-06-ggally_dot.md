---
title: |
  Plots the Box Plot with Dot
rdname: ggally_dot
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-4.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_dot(tips, mapping = ggplot2::aes(x = total_bill, y = sex))
{% endhighlight %}

![plot of chunk ggally_dot](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-1.png) 

{% highlight r %}
 ggally_dot(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "sex"))
{% endhighlight %}

![plot of chunk ggally_dot](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-2.png) 

{% highlight r %}
 ggally_dot(
   tips,
   mapping = ggplot2::aes_string(y = "total_bill", x = "sex", color = "sex")
 )
{% endhighlight %}

![plot of chunk ggally_dot](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-3.png) 

{% highlight r %}
 ggally_dot(
   tips,
   mapping = ggplot2::aes_string(y = "total_bill", x = "sex", color = "sex", shape = "sex")
 ) + ggplot2::scale_shape(solid=FALSE)
{% endhighlight %}

![plot of chunk ggally_dot](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_dot/ggally_dot-4.png) 