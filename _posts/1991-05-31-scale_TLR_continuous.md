---
title: |
  Ternary Continuous Scales
rdname: scale_TLR_continuous
date: 2015-06-07
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_TLR_continuous/scale_TLR_continuous-1.png
---




{% highlight r %}
###   scale_labels.continuous_ternary scale_transform.continuous_ternary

### ** Examples

data(Feldspar)
  plot <- ggtern(data=Feldspar,aes(An,Ab,Or)) + geom_point() +
          scale_T_continuous(breaks=seq(0,1,0.2),minor_breaks=seq(0,1,0.1)) +
          scale_L_continuous(breaks=seq(0,1,0.2),minor_breaks=seq(0,1,0.1))
  plot
{% endhighlight %}

![plot of chunk scale_TLR_continuous](/allYourFigureAreBelongToUs/figure/source/1991-05-31-scale_TLR_continuous/scale_TLR_continuous-1.png) 