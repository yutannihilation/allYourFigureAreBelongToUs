---
title: |
  GGplot Text
rdname: ggally_text
date: 2015-06-06
output: html_document
layout: article
category: ggally
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_text/ggally_text-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_text/ggally_text-2.png
---




{% highlight r %}
ggally_text("Example 1")
{% endhighlight %}

![plot of chunk ggally_text](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_text/ggally_text-1.png) 

{% highlight r %}
ggally_text("Example\nTwo", mapping = ggplot2::aes_string(size = 15, color = "red"))
{% endhighlight %}

![plot of chunk ggally_text](/allYourFigureAreBelongToUs/figure/source/2015-06-06-ggally_text/ggally_text-2.png) 