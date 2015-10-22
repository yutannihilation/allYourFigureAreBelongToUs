---
title: |
  Tableau sequential colour gradient palettes (continuous)
rdname: tableau_seq_gradient_pal
date: 2015-10-22
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_seq_gradient_pal//tableau_seq_gradient_pal-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_seq_gradient_pal//tableau_seq_gradient_pal-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_seq_gradient_pal//tableau_seq_gradient_pal-3.png
---




{% highlight r %}
library(scales)
x <- seq(0, 1, length = 25)
show_col(tableau_seq_gradient_pal('Red')(x))
{% endhighlight %}

![plot of chunk tableau_seq_gradient_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_seq_gradient_pal/tableau_seq_gradient_pal-1.png) 

{% highlight r %}
show_col(tableau_seq_gradient_pal('Blue')(x))
{% endhighlight %}

![plot of chunk tableau_seq_gradient_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_seq_gradient_pal/tableau_seq_gradient_pal-2.png) 

{% highlight r %}
show_col(tableau_seq_gradient_pal('Purple Sequential')(x))
{% endhighlight %}

![plot of chunk tableau_seq_gradient_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_seq_gradient_pal/tableau_seq_gradient_pal-3.png) 