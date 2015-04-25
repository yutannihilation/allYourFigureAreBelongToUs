---
title: "Theme with Google Docs Chart defaults"
rdname: "theme_gdocs"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-theme_gdocs//theme_gdocs-1.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- qplot(carat, price, data=dsamp, colour=clarity)
 + theme_gdocs()
 + ggtitle("Diamonds")
 + scale_color_gdocs())
{% endhighlight %}

![plot of chunk theme_gdocs](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_gdocs/theme_gdocs-1.png) 