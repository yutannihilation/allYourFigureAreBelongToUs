---
title: |
  Blank
rdname: ggally_blank
date: 2015-05-12
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_blank//ggally_blank-1.png
---




{% highlight r %}
data(movies, package = "ggplot2")
ggally_barDiag(movies, mapping = ggplot2::aes(x = mpaa))
{% endhighlight %}

![plot of chunk ggally_blank](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_blank/ggally_blank-1.png) 

{% highlight r %}
# ggally_barDiag(movies, mapping = ggplot2::aes_string(x = "mpaa"))
# ggally_barDiag(movies, mapping = ggplot2::aes_string(x ="rating", binwidth = ".1"))
{% endhighlight %}