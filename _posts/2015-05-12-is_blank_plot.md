---
title: |
  Is Blank Plot?
  Find out if the plot equals a blank plot
rdname: is_blank_plot
date: 2015-05-12
output: html_document
layout: article
category: GGally
images:
 ""
---




{% highlight r %}
GGally:::is_blank_plot(ggally_blank())
{% endhighlight %}



{% highlight text %}
## [1] TRUE
{% endhighlight %}



{% highlight r %}
 GGally:::is_blank_plot(ggally_points(mtcars, ggplot2::aes_string(x = "disp", y = "hp")))
{% endhighlight %}



{% highlight text %}
## [1] FALSE
{% endhighlight %}