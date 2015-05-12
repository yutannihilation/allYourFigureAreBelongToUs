---
title: |
  Plot count data with ggplot2
rdname: plotCount
date: 2015-05-12
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-plotCount//plotCount-1.png
---




{% highlight r %}
if (requireNamespace("ggplot2", quietly = TRUE)) {
  plotCount(table(infert$education))
  df <- data.frame("vehicle" = c("bicycle", "car", "unicycle", "Boeing747"),
                   "NumWheels" = c(2, 4, 1, 16))
  plotCount(df) + removeGridX()
}
{% endhighlight %}

![plot of chunk plotCount](/allYourFigureAreBelongToUs/figure/source/2015-05-12-plotCount/plotCount-1.png) 