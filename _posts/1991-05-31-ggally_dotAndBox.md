---
title: |
  Plots either Box Plot or Dot Plots
rdname: ggally_dotAndBox
date: 2015-06-07
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_dotAndBox/ggally_dotAndBox-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_dotAndBox/ggally_dotAndBox-2.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_dotAndBox(
   tips,
   mapping = ggplot2::aes(x = total_bill, y = sex, color = sex),
   boxPlot = TRUE
 )
{% endhighlight %}

![plot of chunk ggally_dotAndBox](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_dotAndBox/ggally_dotAndBox-1.png) 

{% highlight r %}
 ggally_dotAndBox(tips, mapping = ggplot2::aes(x = total_bill, y = sex, color = sex), boxPlot=FALSE)
{% endhighlight %}

![plot of chunk ggally_dotAndBox](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_dotAndBox/ggally_dotAndBox-2.png) 