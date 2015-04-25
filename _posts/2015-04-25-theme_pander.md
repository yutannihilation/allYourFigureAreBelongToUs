---
title: "A ggplot theme originated from the pander package"
rdname: "theme_pander"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images: ""
---




{% highlight r %}
## Not run: 
##D p <- qplot(mpg, wt, data = mtcars)
##D p + theme_pander()
##D 
##D panderOptions('graph.grid.color', 'red')
##D p + theme_pander()
##D 
##D p <- ggplot(mtcars, aes(wt, mpg, colour = factor(cyl))) + geom_point()
##D p + theme_pander() + scale_color_pander()
##D 
##D ## standard examples of the ggtheme package
##D qplot(carat, price, data = diamonds, colour = cut) +
##D   theme_pander() +
##D   scale_colour_pander()
##D ggplot(diamonds, aes(clarity, fill = cut)) +
##D   geom_bar() +
##D   scale_fill_pander() +
##D   theme_pander()
## End(Not run)
{% endhighlight %}