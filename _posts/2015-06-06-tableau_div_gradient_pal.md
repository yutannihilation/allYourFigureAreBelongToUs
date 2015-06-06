---
title: |
  Tableau diverging colour gradient palettes (continuous)
rdname: tableau_div_gradient_pal
date: 2015-06-06
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-tableau_div_gradient_pal/tableau_div_gradient_pal-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-tableau_div_gradient_pal/tableau_div_gradient_pal-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-tableau_div_gradient_pal/tableau_div_gradient_pal-3.png
---




{% highlight r %}
x <- seq(-1, 1, length = 100)
r <- sqrt(outer(x^2, x^2, "+"))
image(r, col = tableau_div_gradient_pal()(seq(0, 1, length = 12)))
{% endhighlight %}

![plot of chunk tableau_div_gradient_pal](/allYourFigureAreBelongToUs/figure/source/2015-06-06-tableau_div_gradient_pal/tableau_div_gradient_pal-1.png) 

{% highlight r %}
image(r, col = tableau_div_gradient_pal("Orange-Blue")(seq(0, 1, length = 12)))
{% endhighlight %}

![plot of chunk tableau_div_gradient_pal](/allYourFigureAreBelongToUs/figure/source/2015-06-06-tableau_div_gradient_pal/tableau_div_gradient_pal-2.png) 

{% highlight r %}
image(r, col = tableau_div_gradient_pal("Temperature")(seq(0, 1, length = 12)))
{% endhighlight %}

![plot of chunk tableau_div_gradient_pal](/allYourFigureAreBelongToUs/figure/source/2015-06-06-tableau_div_gradient_pal/tableau_div_gradient_pal-3.png) 