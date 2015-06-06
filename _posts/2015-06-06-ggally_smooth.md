---
title: |
  Plots the Scatter Plot with Smoothing
rdname: ggally_smooth
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_smooth/ggally_smooth-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_smooth/ggally_smooth-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_smooth/ggally_smooth-3.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_smooth(tips, mapping = ggplot2::aes(x = total_bill, y = tip))
{% endhighlight %}

![plot of chunk ggally_smooth](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_smooth/ggally_smooth-1.png) 

{% highlight r %}
 ggally_smooth(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "tip"))
{% endhighlight %}

![plot of chunk ggally_smooth](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_smooth/ggally_smooth-2.png) 

{% highlight r %}
 ggally_smooth(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "tip", color = "sex"))
{% endhighlight %}

![plot of chunk ggally_smooth](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_smooth/ggally_smooth-3.png) 