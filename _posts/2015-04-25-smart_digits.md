---
title: "Format numbers with automatic number of digits"
rdname: "smart_digits"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-smart_digits//smart_digits-1.png
 - figure/source/2015-04-25-smart_digits//smart_digits-2.png
---




{% highlight r %}
library(scales)
show_shapes(shape_pal()(5))
{% endhighlight %}

![plot of chunk smart_digits](/allYourFigureAreBelongToUs/figure/source/2015-04-25-smart_digits/smart_digits-1.png) 

{% highlight r %}
show_shapes(shape_pal()(3), labels=TRUE)
{% endhighlight %}

![plot of chunk smart_digits](/allYourFigureAreBelongToUs/figure/source/2015-04-25-smart_digits/smart_digits-2.png) 