---
title: |
  Require packages
rdname: require_pkgs
date: 2015-05-12
output: html_document
layout: article
category: GGally
images: ""
---




{% highlight r %}
custom_car <- ggpairs(mtcars[,c("mpg","wt","cyl")], upper = "blank", title = "Custom Example")
# ggplot example taken from example(geom_text)
  plot <- ggplot2::ggplot(mtcars, ggplot2::aes(x=wt, y=mpg, label=rownames(mtcars)))
  plot <- plot +
    ggplot2::geom_text(ggplot2::aes(colour=factor(cyl)), size = 3) +
    ggplot2::scale_colour_discrete(l=40)
custom_car <- putPlot(custom_car, plot, 1, 2)
personal_plot <- ggally_text(
  "ggpairs allows you\nto put in your\nown plot.\nLike that one.\n <---"
)
custom_car <- putPlot(custom_car, personal_plot, 1, 3)
# custom_car
{% endhighlight %}