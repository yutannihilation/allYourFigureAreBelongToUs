---
title: |
  Plots a density plot with facets or a tile plot with facets
rdname: ggally_facetdensitystrip
date: 2015-05-12
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip//ggally_facetdensitystrip-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip//ggally_facetdensitystrip-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip//ggally_facetdensitystrip-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip//ggally_facetdensitystrip-4.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip//ggally_facetdensitystrip-5.png
---




{% highlight r %}
example(ggally_facetdensity)
{% endhighlight %}



{% highlight text %}
## 
## gglly_> data(tips, package = "reshape")
## 
## gglly_>  ggally_facetdensity(tips, mapping = ggplot2::aes(x = total_bill, y = sex))
{% endhighlight %}

![plot of chunk ggally_facetdensitystrip](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip/ggally_facetdensitystrip-1.png) 

{% highlight text %}
## 
## gglly_>  ggally_facetdensity(
## gglly_+    tips,
## gglly_+    mapping = ggplot2::aes_string(y = "total_bill", x = "sex", color = "sex")
## gglly_+  )
{% endhighlight %}

![plot of chunk ggally_facetdensitystrip](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip/ggally_facetdensitystrip-2.png) 

{% highlight r %}
example(ggally_denstrip)
{% endhighlight %}



{% highlight text %}
## 
## gglly_> data(tips, package = "reshape")
## 
## gglly_>  ggally_denstrip(tips, mapping = ggplot2::aes(x = total_bill, y = sex))
{% endhighlight %}

![plot of chunk ggally_facetdensitystrip](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip/ggally_facetdensitystrip-3.png) 

{% highlight text %}
## 
## gglly_>  ggally_denstrip(tips, mapping = ggplot2::aes_string(x = "total_bill", y = "sex"))
{% endhighlight %}

![plot of chunk ggally_facetdensitystrip](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip/ggally_facetdensitystrip-4.png) 

{% highlight text %}
## 
## gglly_>  ggally_denstrip(
## gglly_+    tips,
## gglly_+    mapping = ggplot2::aes_string(x = "sex", y = "tip", binwidth = "0.2")
## gglly_+  ) + ggplot2::scale_fill_gradient(low = "grey80", high = "black")
{% endhighlight %}

![plot of chunk ggally_facetdensitystrip](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggally_facetdensitystrip/ggally_facetdensitystrip-5.png) 