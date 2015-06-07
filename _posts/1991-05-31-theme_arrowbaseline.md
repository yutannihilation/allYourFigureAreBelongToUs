---
title: |
  Set The Ternary Arrow Baseline
rdname: theme_arrowbaseline
date: 2015-06-07
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_arrowbaseline/theme_arrowbaseline-1.png
---




{% highlight r %}
#Create plot object
plot <- ggtern(data=data.frame(x=1,y=1,z=1),mapping=aes(x,y,z)) +
  geom_point() + theme_rgbw() +
  tern_limits(labels=c(10,20,"","","","","",80,90,100),
             breaks=seq(0.1,1,by=0.1)) +
  theme(axis.tern.arrowstart=0.25,axis.tern.arrowfinish=0.75) +
  theme_ticksoutside() +
  #to illustrate the actual origin, set arrowsep to zero
  theme(axis.tern.arrowsep=unit(0,"npc"))

 #Default behaviour
 plot + theme_arrowbaseline(0)
{% endhighlight %}

![plot of chunk theme_arrowbaseline](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_arrowbaseline/theme_arrowbaseline-1.png) 

{% highlight r %}
 ##Alternatives, Uncomment below
 #plot + theme_arrowbaseline(1)
 #plot + theme_arrowbaseline(2)
 #plot + theme_arrowbaseline("axis")
 #plot + theme_arrowbaseline("ticks")
 #plot + theme_arrowbaseline("labels")
{% endhighlight %}