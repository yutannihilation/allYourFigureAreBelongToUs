---
title: |
  Show or Hide the Axis (Apex) Titles
rdname: theme_showtitles
date: 2015-06-07
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_showtitles/theme_showtitles-1.png
---




{% highlight r %}
#Load data
 data(Feldspar)
 ggtern(data=Feldspar,aes(An,Ab,Or)) + geom_point() + theme_bw() + theme_hidetitles()
{% endhighlight %}

![plot of chunk theme_showtitles](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_showtitles/theme_showtitles-1.png) 