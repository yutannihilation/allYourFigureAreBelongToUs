---
title: |
  Returns the image object to show the heat map of degrees between the inputted set of vertices
rdname: plotDegMatrix
date: 2015-10-22
output: html_document
layout: article
category: ggenealogy
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotDegMatrix//plotDegMatrix-1.png
---




{% highlight r %}
data(sbGeneal)
ig = dfToIG(sbGeneal)
varieties=c("Bedford", "Calland", "Narow", "Pella", "Tokyo", "Young", "Zane")
p = plotDegMatrix(varieties, ig, sbGeneal, "Soybean label", "Soybean label", "Degree")
p + ggplot2::scale_fill_continuous(low="white", high="darkgreen")
{% endhighlight %}

![plot of chunk plotDegMatrix](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotDegMatrix/plotDegMatrix-1.png) 