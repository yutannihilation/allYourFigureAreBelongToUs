---
title: |
  Plots the Density Plots by Using Diagonal
rdname: ggally_densityDiag
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_densityDiag/ggally_densityDiag-1.png
---




{% highlight r %}
data(tips, package = "reshape")
 ggally_densityDiag(tips, mapping = ggplot2::aes(x = total_bill))
{% endhighlight %}

![plot of chunk ggally_densityDiag](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_densityDiag/ggally_densityDiag-1.png) 

{% highlight r %}
 #data(movies)
 #ggally_densityDiag(movies, mapping = ggplot2::aes_string(x="rating"))
 #ggally_densityDiag(movies, mapping = ggplot2::aes_string(x="rating", color = "mpaa"))
{% endhighlight %}