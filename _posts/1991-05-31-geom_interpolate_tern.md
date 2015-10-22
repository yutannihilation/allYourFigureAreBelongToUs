---
title: |
  Ternary Interpolation
rdname: geom_interpolate_tern
date: 2015-10-22
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_interpolate_tern//geom_interpolate_tern-1.png
---




{% highlight r %}
data(Feldspar)
ggtern(Feldspar,aes(x=Or,y=An,z=Ab)) +
geom_interpolate_tern(aes(value=P.Gpa,color=..level..),binwidth=20) +
geom_point()
{% endhighlight %}

![plot of chunk geom_interpolate_tern](/allYourFigureAreBelongToUs/figure/source/1991-05-31-geom_interpolate_tern/geom_interpolate_tern-1.png) 