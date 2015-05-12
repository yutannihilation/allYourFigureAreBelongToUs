---
title: |
  Find Plot Types
rdname: find_plot_type
date: 2015-05-12
output: html_document
layout: article
category: GGally
images:
 - figure/source/2015-05-12-find_plot_type//find_plot_type-1.png
---




{% highlight r %}
data(diamonds, package="ggplot2")
 diamonds.samp <- diamonds[sample(1:dim(diamonds)[1],1000),]
 ggpairs(diamonds.samp, columns = 5:7,
  upper = list(continuous = "cor", aes_string = ggplot2::aes_string(color = "clarity")),
  lower = list(continuous = "cor", aes_string = ggplot2::aes_string(color = "cut")),
  color = "color",
  title = "Diamonds Sample")
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}



{% highlight text %}
## Warning: The plyr::rename operation has created duplicates for the
## following name(s): (`colour`)
{% endhighlight %}

![plot of chunk find_plot_type](/allYourFigureAreBelongToUs/figure/source/2015-05-12-find_plot_type/find_plot_type-1.png) 