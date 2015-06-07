---
title: |
  Plots the Bar Plots by Using Diagonal
rdname: ggally_barDiag
date: 1991-05-31
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_barDiag/ggally_barDiag-1.png
---




{% highlight r %}
data(movies, package = "ggplot2")
ggally_barDiag(movies, mapping = ggplot2::aes(x = mpaa))
{% endhighlight %}

![plot of chunk ggally_barDiag](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_barDiag/ggally_barDiag-1.png) 

{% highlight r %}
# ggally_barDiag(movies, mapping = ggplot2::aes_string(x = "mpaa"))
# ggally_barDiag(movies, mapping = ggplot2::aes_string(x ="rating", binwidth = ".1"))
{% endhighlight %}