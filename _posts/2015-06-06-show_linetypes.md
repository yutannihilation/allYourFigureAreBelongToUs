---
title: |
  Show linetypes
rdname: show_linetypes
date: 2015-06-06
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-show_linetypes/show_linetypes-1.png
---




{% highlight r %}
library(scales)
show_linetypes(linetype_pal()(3))
show_linetypes(linetype_pal()(3), labels=TRUE)
{% endhighlight %}

![plot of chunk show_linetypes](/allYourFigureAreBelongToUs/figure/source/2015-06-06-show_linetypes/show_linetypes-1.png) 