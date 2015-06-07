---
title: |
  Tufte's Box Blot
rdname: geom_tufteboxplot
date: 1991-05-31
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tufteboxplot/geom_tufteboxplot-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tufteboxplot/geom_tufteboxplot-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tufteboxplot/geom_tufteboxplot-3.png
---




{% highlight r %}
p <- ggplot(mtcars, aes(factor(cyl), mpg))
## with only a point
p + geom_tufteboxplot()
{% endhighlight %}

![plot of chunk geom_tufteboxplot](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tufteboxplot/geom_tufteboxplot-1.png) 

{% highlight r %}
## with a middle box
p + geom_tufteboxplot(median.type="box", fatten=1)
{% endhighlight %}

![plot of chunk geom_tufteboxplot](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tufteboxplot/geom_tufteboxplot-2.png) 

{% highlight r %}
## using lines
p + geom_tufteboxplot(median.type="line")
{% endhighlight %}

![plot of chunk geom_tufteboxplot](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_tufteboxplot/geom_tufteboxplot-3.png) 