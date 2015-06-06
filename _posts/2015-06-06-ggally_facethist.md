---
title: |
  Plots the Histograms by Faceting
rdname: ggally_facethist
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
FRONTFOMATTER_IMAGES
---




{% highlight r %}
data(tips, package = "reshape")
ggally_facethist(tips, mapping = ggplot2::aes(x = tip, y = sex))
{% endhighlight %}

![plot of chunk ggally_facethist](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_facethist/ggally_facethist-1.png) 

{% highlight r %}
ggally_facethist(tips, mapping = ggplot2::aes_string(x = "tip", y = "sex"), binwidth = 0.1)
{% endhighlight %}



{% highlight text %}
## Warning in loop_apply(n, do.ply): position_stack requires constant
## width: output may be incorrect
{% endhighlight %}



{% highlight text %}
## Warning in loop_apply(n, do.ply): position_stack requires constant
## width: output may be incorrect
{% endhighlight %}

![plot of chunk ggally_facethist](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_facethist/ggally_facethist-2.png) 
