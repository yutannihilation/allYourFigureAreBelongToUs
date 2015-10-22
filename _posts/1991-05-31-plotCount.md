---
title: |
  Plot count data with ggplot2
rdname: plotCount
date: 2015-10-22
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotCount//plotCount-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotCount//plotCount-2.png
---




{% highlight r %}
plotCount(table(infert$education))
{% endhighlight %}

![plot of chunk plotCount](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotCount/plotCount-1.png) 

{% highlight r %}
df <- data.frame("vehicle" = c("bicycle", "car", "unicycle", "Boeing747"),
                 "NumWheels" = c(2, 4, 1, 16))
plotCount(df) + removeGridX()
{% endhighlight %}

![plot of chunk plotCount](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotCount/plotCount-2.png) 