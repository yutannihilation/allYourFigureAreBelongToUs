---
title: |
  Color Palettes based on Tableau (discrete)
rdname: tableau_color_pal
date: 2015-06-07
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-10.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-6.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-7.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-8.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-9.png
---




{% highlight r %}
library(scales)
show_col(tableau_color_pal("tableau20")(20))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-1.png) 

{% highlight r %}
show_col(tableau_color_pal("tableau10")(10))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-2.png) 

{% highlight r %}
show_col(tableau_color_pal("tableau10medium")(10))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-3.png) 

{% highlight r %}
show_col(tableau_color_pal("tableau10light")(10))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-4.png) 

{% highlight r %}
show_col(tableau_color_pal("colorblind10")(10))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-5.png) 

{% highlight r %}
show_col(tableau_color_pal("trafficlight")(10))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-6.png) 

{% highlight r %}
show_col(tableau_color_pal("purplegray12")(12))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-7.png) 

{% highlight r %}
show_col(tableau_color_pal("bluered12")(12))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-8.png) 

{% highlight r %}
show_col(tableau_color_pal("greenorange12")(12))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-9.png) 

{% highlight r %}
show_col(tableau_color_pal("cyclic")(20))
{% endhighlight %}

![plot of chunk tableau_color_pal](/allYourFigureAreBelongToUs/figure/source/1991-05-31-tableau_color_pal/tableau_color_pal-10.png) 