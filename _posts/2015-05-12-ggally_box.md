---
title: |
  Plots the Box Plot
rdname: ggally_box
date: 2015-05-12
output: html_document
layout: article
category: GGally
images:
 - figure/source/2015-05-12-ggally_box//ggally_box-1.png
 - figure/source/2015-05-12-ggally_box//ggally_box-2.png
 - figure/source/2015-05-12-ggally_box//ggally_box-3.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_box(tips, mapping = ggplot2::aes(x = total_bill, y = sex))
{% endhighlight %}

![plot of chunk ggally_box](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_box/ggally_box-1.png) 

{% highlight r %}
 ggally_box(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "sex"))
{% endhighlight %}

![plot of chunk ggally_box](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_box/ggally_box-2.png) 

{% highlight r %}
 ggally_box(
   tips,
   mapping        = ggplot2::aes_string(y = "total_bill", x = "sex", color = "sex"),
   outlier.colour = "red",
   outlier.shape  = 13,
   outlier.size   = 8
 )
{% endhighlight %}

![plot of chunk ggally_box](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_box/ggally_box-3.png) 