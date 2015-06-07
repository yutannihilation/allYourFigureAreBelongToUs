---
title: |
  Change Axis labels and legend titles
rdname: ggtern-labels
date: 2015-06-07
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-ggtern-labels/ggtern-labels-1.png
---




{% highlight r %}
data(Feldspar)
plot <- ggtern(data=Feldspar,aes(Ab,An,Or)) +  geom_point() +
        xlab("ABC") + ylab("DEF") + zlab("GHI")

#Alternatives, and Arrow Label
plot + Tlab("TOP") + Llab("LHS") + Rlab("RHS") +
  theme_showarrows() + Wlab("WEIGHT")
{% endhighlight %}

![plot of chunk ggtern-labels](/allYourFigureAreBelongToUs/figure/source/1991-05-31-ggtern-labels/ggtern-labels-1.png) 