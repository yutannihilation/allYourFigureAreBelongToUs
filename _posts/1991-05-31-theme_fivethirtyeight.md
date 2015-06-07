---
title: |
  Theme inspired by fivethirtyeight.com plots
rdname: theme_fivethirtyeight
date: 1991-05-31
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_fivethirtyeight/theme_fivethirtyeight-1.png
---




{% highlight r %}
(qplot(hp, mpg, data= subset(mtcars, cyl != 5), geom="point", color = factor(cyl))
 + ggtitle("Horsepower, mpg and cylinders")
 + geom_smooth(method = "lm", se = FALSE)
 + scale_color_fivethirtyeight()
 + theme_fivethirtyeight())
{% endhighlight %}

![plot of chunk theme_fivethirtyeight](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_fivethirtyeight/theme_fivethirtyeight-1.png) 