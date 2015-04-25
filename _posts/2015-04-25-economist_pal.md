---
title: "Economist color palette (discrete)"
rdname: "economist_pal"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-economist_pal//economist_pal-1.png
 - figure/source/2015-04-25-economist_pal//economist_pal-2.png
---




{% highlight r %}
library(scales)
show_col(economist_pal()(6))
## fill palette
show_col(economist_pal(fill=TRUE)(6))
{% endhighlight %}

![plot of chunk economist_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-economist_pal/economist_pal-1.png) 

{% highlight r %}
## RGB values from Stata's economist scheme
show_col(economist_pal(stata=TRUE)(16))
{% endhighlight %}

![plot of chunk economist_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-economist_pal/economist_pal-2.png) 