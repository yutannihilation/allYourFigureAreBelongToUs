---
title: |
  Plots a mosaic plots
rdname: ggally_ratio
date: 2015-10-22
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_ratio//ggally_ratio-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_ratio//ggally_ratio-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_ratio//ggally_ratio-3.png
---




{% highlight r %}
data(movies, package = "ggplot2")
ggally_ratio(movies[,c("mpaa","Action")])
{% endhighlight %}

![plot of chunk ggally_ratio](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_ratio/ggally_ratio-1.png) 

{% highlight r %}
ggally_ratio(movies[,c("mpaa","Action")]) + ggplot2::coord_equal()
{% endhighlight %}

![plot of chunk ggally_ratio](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_ratio/ggally_ratio-2.png) 

{% highlight r %}
nummpaa <- length(levels(movies[,"mpaa"]))
numAction <- length(levels(as.factor(movies[,"Action"])))
ggally_ratio(
  movies[,c("Action","mpaa")]
) + ggplot2::theme(
  aspect.ratio = nummpaa / numAction
)
{% endhighlight %}

![plot of chunk ggally_ratio](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggally_ratio/ggally_ratio-3.png) 