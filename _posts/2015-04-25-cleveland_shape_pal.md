---
title: "Shape palette from Cleveland "Elements of Graphing Data" (discrete)."
rdname: "cleveland_shape_pal"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-cleveland_shape_pal//cleveland_shape_pal-1.png
 - figure/source/2015-04-25-cleveland_shape_pal//cleveland_shape_pal-2.png
---




{% highlight r %}
# overlapping symbol palette
dsamp <- diamonds[sample(nrow(diamonds), 100), ]
(qplot(carat, price, data=dsamp, shape=cut)
+ theme_bw() + scale_shape_cleveland())
{% endhighlight %}

![plot of chunk cleveland_shape_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-cleveland_shape_pal/cleveland_shape_pal-1.png) 

{% highlight r %}
# non-overlapping symbol palette
(qplot(carat, price, data=dsamp, shape=cut)
+ theme_bw() + scale_shape_cleveland(overlap=FALSE))
{% endhighlight %}

![plot of chunk cleveland_shape_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-cleveland_shape_pal/cleveland_shape_pal-2.png) 