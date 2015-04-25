---
title: "Foundation Theme"
rdname: "theme_foundation"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-theme_foundation//theme_foundation-1.png
---




{% highlight r %}
(qplot(hp, mpg, data= subset(mtcars, cyl != 5), geom="point", color = factor(cyl))
 + ggtitle("Horsepower, mpg and cylinders")
 + geom_smooth(method = "lm", se = FALSE)
 + scale_color_fivethirtyeight()
 + theme_fivethirtyeight())
{% endhighlight %}

![plot of chunk theme_foundation](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_foundation/theme_foundation-1.png) 