---
title: "Shape palette from Tremmel (1995) (discrete)"
rdname: "tremmel_shape_pal"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-tremmel_shape_pal//tremmel_shape_pal-1.png
 - figure/source/2015-04-25-tremmel_shape_pal//tremmel_shape_pal-2.png
---




{% highlight r %}
(qplot(hp, mpg, data=mtcars, geom="point")
+ scale_colour_wsj("colors6", "")
+ ggtitle("Diamond Prices")
+ theme_wsj())
{% endhighlight %}

![plot of chunk tremmel_shape_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-tremmel_shape_pal/tremmel_shape_pal-1.png) 

{% highlight r %}
## Use a gray background instead
(qplot(hp, mpg, data=mtcars, geom="point")
 + scale_colour_wsj("colors6", "")
 + ggtitle("Diamond Prices")
 + theme_wsj(color="gray"))
{% endhighlight %}

![plot of chunk tremmel_shape_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-tremmel_shape_pal/tremmel_shape_pal-2.png) 