---
title: |
  uppertriangle - rearrange dataset as the preparation of ggscatmat function
rdname: uppertriangle
date: 2015-05-12
output: html_document
layout: article
category: GGally
images:
 ""
---




{% highlight r %}
data(flea)
head(uppertriangle(flea, columns=2:4))
{% endhighlight %}



{% highlight text %}
##    ylab  xlab    r xvalue yvalue
## 1 tars1 tars2 0.03  126.5  182.0
## 2 tars1  head -0.1   50.5  182.0
## 3 tars2  head 0.67   50.5  126.5
{% endhighlight %}



{% highlight r %}
head(uppertriangle(flea))
{% endhighlight %}



{% highlight text %}
##    ylab  xlab     r xvalue yvalue
## 1 tars1 tars2  0.03  126.5  182.0
## 2 tars1  head  -0.1   50.5  182.0
## 3 tars1 aede1 -0.33  136.5  182.0
## 4 tars1 aede2  0.78   12.0  182.0
## 5 tars1 aede3 -0.57   89.0  182.0
## 6 tars2  head  0.67   50.5  126.5
{% endhighlight %}



{% highlight r %}
head(uppertriangle(flea, color="species"))
{% endhighlight %}



{% highlight text %}
##    ylab  xlab colorcolumn    r xvalue yvalue
## 1 tars1 tars2    Concinna 0.77  126.5    152
## 2 tars1 tars2    Heikert. 0.64  126.5    182
## 3 tars1 tars2   Heptapot. 0.56  126.5    212
## 4 tars1  head    Concinna 0.68   50.5    152
## 5 tars1  head    Heikert. 0.65   50.5    182
## 6 tars1  head   Heptapot. 0.77   50.5    212
{% endhighlight %}