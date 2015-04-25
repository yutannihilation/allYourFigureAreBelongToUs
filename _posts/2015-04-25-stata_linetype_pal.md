---
title: "Stata linetype palette (discrete)"
rdname: "stata_linetype_pal"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-stata_linetype_pal//stata_linetype_pal-1.png
 - figure/source/2015-04-25-stata_linetype_pal//stata_linetype_pal-2.png
 - figure/source/2015-04-25-stata_linetype_pal//stata_linetype_pal-3.png
---




{% highlight r %}
library(scales)
show_col(solarized_pal()(2))
{% endhighlight %}

![plot of chunk stata_linetype_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-stata_linetype_pal/stata_linetype_pal-1.png) 

{% highlight r %}
show_col(solarized_pal()(3))
{% endhighlight %}

![plot of chunk stata_linetype_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-stata_linetype_pal/stata_linetype_pal-2.png) 

{% highlight r %}
show_col(solarized_pal("red")(4))
{% endhighlight %}

![plot of chunk stata_linetype_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-stata_linetype_pal/stata_linetype_pal-3.png) 