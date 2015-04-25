---
title: "Factory function to control list("ggplot2::geom_xxx") functions"
rdname: "get_geom_function"
date: "2015-04-25"
output: html_document
layout: article
category: "ggfortify"
images: ""
---




{% highlight r %}
ggfortify:::get_geom_function('point')
{% endhighlight %}



{% highlight text %}
## function (mapping = NULL, data = NULL, stat = "identity", position = "identity", 
##     na.rm = FALSE, ...) 
## {
##     GeomPoint$new(mapping = mapping, data = data, stat = stat, 
##         position = position, na.rm = na.rm, ...)
## }
## <environment: namespace:ggplot2>
{% endhighlight %}



{% highlight r %}
ggfortify:::get_geom_function('line', allowed = c('line'))
{% endhighlight %}



{% highlight text %}
## function (mapping = NULL, data = NULL, stat = "identity", position = "identity", 
##     ...) 
## {
##     GeomLine$new(mapping = mapping, data = data, stat = stat, 
##         position = position, ...)
## }
## <environment: namespace:ggplot2>
{% endhighlight %}