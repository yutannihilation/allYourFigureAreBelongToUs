---
title: |
  Plots a tile plot with facets
rdname: ggally_denstrip
date: 2015-10-22
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_denstrip//ggally_denstrip-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_denstrip//ggally_denstrip-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_denstrip//ggally_denstrip-3.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_denstrip(tips, mapping = ggplot2::aes(x = total_bill, y = sex))
{% endhighlight %}



{% highlight text %}
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
{% endhighlight %}

![plot of chunk ggally_denstrip](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_denstrip/ggally_denstrip-1.png) 

{% highlight r %}
 ggally_denstrip(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "sex"))
{% endhighlight %}



{% highlight text %}
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
{% endhighlight %}

![plot of chunk ggally_denstrip](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_denstrip/ggally_denstrip-2.png) 

{% highlight r %}
 ggally_denstrip(
   tips,
   mapping = ggplot2::aes_string(x = "sex", y = "tip", binwidth = "0.2")
 ) + ggplot2::scale_fill_gradient(low = "grey80", high = "black")
{% endhighlight %}



{% highlight text %}
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
## stat_bin: binwidth defaulted to range/30. Use 'binwidth = x' to adjust this.
{% endhighlight %}

![plot of chunk ggally_denstrip](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_denstrip/ggally_denstrip-3.png) 