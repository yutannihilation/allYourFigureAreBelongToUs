---
title: |
  Order axis variables
rdname: singleClassOrder
date: 2015-05-12
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-singleClassOrder//singleClassOrder-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-singleClassOrder//singleClassOrder-2.png
---




{% highlight r %}
data(flea)
scatmat(flea, columns=2:4)
{% endhighlight %}

![plot of chunk singleClassOrder](/allYourFigureAreBelongToUs/figure/source/2015-05-12-singleClassOrder/singleClassOrder-1.png) 

{% highlight r %}
scatmat(flea, columns= 2:4, color="species")
{% endhighlight %}

![plot of chunk singleClassOrder](/allYourFigureAreBelongToUs/figure/source/2015-05-12-singleClassOrder/singleClassOrder-2.png) 