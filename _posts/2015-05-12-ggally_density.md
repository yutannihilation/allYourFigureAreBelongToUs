---
title: |
  Plots the Scatter Density Plot
rdname: ggally_density
date: 2015-05-12
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density//ggally_density-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density//ggally_density-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density//ggally_density-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density//ggally_density-4.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_density(tips, mapping = ggplot2::aes(x = total_bill, y = tip))
{% endhighlight %}

![plot of chunk ggally_density](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density/ggally_density-1.png) 

{% highlight r %}
 ggally_density(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "tip"))
{% endhighlight %}

![plot of chunk ggally_density](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density/ggally_density-2.png) 

{% highlight r %}
 ggally_density(
   tips,
   mapping = ggplot2::aes_string(x = "total_bill", y = "tip", fill = "..level..")
 )
{% endhighlight %}

![plot of chunk ggally_density](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density/ggally_density-3.png) 

{% highlight r %}
 ggally_density(
   tips,
   mapping = ggplot2::aes_string(x = "total_bill", y = "tip", fill = "..level..")
 ) + ggplot2::scale_fill_gradient(breaks = c(0.05, 0.1,0.15,0.2))
{% endhighlight %}

![plot of chunk ggally_density](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_density/ggally_density-4.png) 