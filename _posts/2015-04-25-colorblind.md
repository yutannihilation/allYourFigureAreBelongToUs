---
title: "Colorblind Color Palette (Discrete) and Scales"
rdname: "colorblind"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-colorblind//colorblind-1.png
 - figure/source/2015-04-25-colorblind//colorblind-2.png
---




{% highlight r %}
library(scales)
show_col(colorblind_pal()(8))
{% endhighlight %}

![plot of chunk colorblind](/allYourFigureAreBelongToUs/figure/source/2015-04-25-colorblind/colorblind-1.png) 

{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
p <- qplot(carat, price, data=dsamp, colour=clarity) + theme_igray()
p + scale_colour_colorblind()
{% endhighlight %}

![plot of chunk colorblind](/allYourFigureAreBelongToUs/figure/source/2015-04-25-colorblind/colorblind-2.png) 