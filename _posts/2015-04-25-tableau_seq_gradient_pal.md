---
title: "Tableau sequential colour gradient palettes (continuous)"
rdname: "tableau_seq_gradient_pal"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-tableau_seq_gradient_pal//tableau_seq_gradient_pal-1.png
 - figure/source/2015-04-25-tableau_seq_gradient_pal//tableau_seq_gradient_pal-2.png
 - figure/source/2015-04-25-tableau_seq_gradient_pal//tableau_seq_gradient_pal-3.png
---




{% highlight r %}
library(scales)
x <- seq(0, 1, length = 25)
show_col(tableau_seq_gradient_pal("Red")(x))
{% endhighlight %}

![plot of chunk tableau_seq_gradient_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-tableau_seq_gradient_pal/tableau_seq_gradient_pal-1.png) 

{% highlight r %}
show_col(tableau_seq_gradient_pal("Blue")(x))
{% endhighlight %}

![plot of chunk tableau_seq_gradient_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-tableau_seq_gradient_pal/tableau_seq_gradient_pal-2.png) 

{% highlight r %}
show_col(tableau_seq_gradient_pal("Purple Sequential")(x))
{% endhighlight %}

![plot of chunk tableau_seq_gradient_pal](/allYourFigureAreBelongToUs/figure/source/2015-04-25-tableau_seq_gradient_pal/tableau_seq_gradient_pal-3.png) 