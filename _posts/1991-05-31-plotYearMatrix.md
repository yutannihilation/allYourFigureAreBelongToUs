---
title: |
  Returns the image object to show the heat map of years between the inputted set of vertices
rdname: plotYearMatrix
date: 2015-06-07
output: html_document
layout: article
category: ggenealogy
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotYearMatrix/plotYearMatrix-1.png
---




{% highlight r %}
data(sbGeneal)
varieties=c("Bedford", "Calland", "Narow", "Pella", "Tokyo", "Young", "Zane")
p = plotYearMatrix(varieties,sbGeneal,"Variety", "Variety", "Degree")
p + ggplot2::scale_fill_continuous(low="white", high="darkgreen")
{% endhighlight %}

![plot of chunk plotYearMatrix](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotYearMatrix/plotYearMatrix-1.png) 