---
title: |
  Stata color scales
rdname: scale_stata
date: 2015-10-22
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_stata//scale_stata-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_stata//scale_stata-2.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(d <- qplot(carat, price, data=dsamp, colour=clarity)
               + theme_bw()
               + scale_color_stata())
{% endhighlight %}

![plot of chunk scale_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_stata/scale_stata-1.png) 

{% highlight r %}
(d <- qplot(carat, price, data=dsamp, colour=clarity)
               + theme_bw()
               + scale_color_stata("s1color"))
{% endhighlight %}

![plot of chunk scale_stata](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_stata/scale_stata-2.png) 