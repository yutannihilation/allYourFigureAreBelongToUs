---
title: |
  Draw a text label or mathematical expression.
rdname: draw_label
date: 2015-10-22
output: html_document
layout: article
category: cowplot
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-draw_label//draw_label-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-draw_label//draw_label-2.png
---




{% highlight r %}
p <- ggplot(mtcars, aes(mpg, disp)) + geom_line(colour = "blue") + background_grid(minor='none')
c <- cor.test(mtcars$mpg, mtcars$disp, method='sp')
{% endhighlight %}



{% highlight text %}
## Warning in cor.test.default(mtcars$mpg, mtcars$disp, method = "sp"):
## Cannot compute exact p-value with ties
{% endhighlight %}



{% highlight r %}
label <- substitute(paste("Spearman ", rho, " = ", estimate, ", P = ", pvalue),
                    list(estimate = signif(c$estimate, 2), pvalue = signif(c$p.value, 2)))
# adding label via ggdraw, in the ggdraw coordinates
ggdraw(p) + draw_label(label, .7, .9)
{% endhighlight %}

![plot of chunk draw_label](/allYourFigureAreBelongToUs/figure/source/1991-05-31-draw_label/draw_label-1.png) 

{% highlight r %}
# adding label directly to plot, in the data coordinates
p + draw_label(label, 20, 400, hjust = 0, vjust = 0)
{% endhighlight %}

![plot of chunk draw_label](/allYourFigureAreBelongToUs/figure/source/1991-05-31-draw_label/draw_label-2.png) 