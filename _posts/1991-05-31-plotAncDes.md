---
title: |
  Returns the image object to show the ancestors and descendants of a variety
rdname: plotAncDes
date: 2015-10-22
output: html_document
layout: article
category: ggenealogy
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotAncDes//plotAncDes-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-plotAncDes//plotAncDes-2.png
---




{% highlight r %}
data(sbGeneal)
plotAncDes("Essex", sbGeneal, 2, 3, "blue") + ggplot2::labs(x="Generation index",y="")
{% endhighlight %}

![plot of chunk plotAncDes](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotAncDes/plotAncDes-1.png) 

{% highlight r %}
plotAncDes("Tokyo", sbGeneal, vColor="red")
{% endhighlight %}

![plot of chunk plotAncDes](/allYourFigureAreBelongToUs/figure/source/1991-05-31-plotAncDes/plotAncDes-2.png) 