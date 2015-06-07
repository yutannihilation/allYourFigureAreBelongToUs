---
title: |
  ggplot color theme based on old Excel plots
rdname: theme_excel
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_excel/theme_excel-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_excel/theme_excel-2.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
# Old line color palette
(qplot(carat, price, data=dsamp, colour=clarity)
 + theme_excel()
 + scale_colour_excel() )
{% endhighlight %}

![plot of chunk theme_excel](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_excel/theme_excel-1.png) 

{% highlight r %}
# Old fill color palette
(ggplot(diamonds, aes(clarity, fill=cut))
+ geom_bar()
+ scale_fill_excel("fill")
+ theme_excel())
{% endhighlight %}

![plot of chunk theme_excel](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_excel/theme_excel-2.png) 