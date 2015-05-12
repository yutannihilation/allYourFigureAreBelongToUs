---
title: |
  Correlation from the Scatter Plot
rdname: ggally_cor
date: 2015-05-12
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_cor//ggally_cor-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_cor//ggally_cor-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_cor//ggally_cor-3.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_cor(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "tip"))
{% endhighlight %}

![plot of chunk ggally_cor](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_cor/ggally_cor-1.png) 

{% highlight r %}
 ggally_cor(
   tips,
   mapping = ggplot2::aes_string(x = "total_bill", y = "tip", size = 15, colour = "red")
 )
{% endhighlight %}

![plot of chunk ggally_cor](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_cor/ggally_cor-2.png) 

{% highlight r %}
 ggally_cor(
   tips,
   mapping = ggplot2::aes_string(x = "total_bill", y = "tip", color = "sex"),
   size = 5
 )
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}

![plot of chunk ggally_cor](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_cor/ggally_cor-3.png) 