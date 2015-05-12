---
title: |
  ggplot color theme based on the Economist
rdname: theme_economist
date: 2015-05-12
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-4.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-5.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-6.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist//theme_economist-7.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
q <- (qplot(carat, price, data=dsamp, colour=clarity)
      + ggtitle("Diamonds Are Forever"))

## Standard
q + theme_economist() + scale_colour_economist()
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-1.png) 

{% highlight r %}
## Stata colors
q + theme_economist(stata=TRUE) + scale_colour_economist(stata=TRUE)
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-2.png) 

{% highlight r %}
## Darker plot region
q + theme_economist(dkpanel=TRUE) + scale_colour_economist(stata=TRUE)
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-3.png) 

{% highlight r %}
## Darker plot region is best for for facets
dkblue <- ggthemes_data$economist$fg['blue_dark']
(ggplot(data=dsamp, aes(x=carat, y=price))
 + geom_point(colour=dkblue)
 + facet_grid(. ~ cut )
 + theme_economist(dkpanel=TRUE))
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-4.png) 

{% highlight r %}
##' ## Change axis lines to vertical
(q + theme_economist(horizontal=FALSE)
 + scale_colour_economist() + coord_flip())
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-5.png) 

{% highlight r %}
## White panel/light gray background
(q + theme_economist_white()
 + scale_colour_economist())
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-6.png) 

{% highlight r %}
## All white variant
(q + theme_economist_white(gray_bg=FALSE)
 + scale_colour_economist())
{% endhighlight %}

![plot of chunk theme_economist](/allYourFigureAreBelongToUs/figure/source/2015-05-12-theme_economist/theme_economist-7.png) 

{% highlight r %}
## Not run: 
##D ## The Economist uses ITC Officina Sans
##D library(extrafont)
##D (q + theme_economist(base_family="ITC Officina Sans")
##D + scale_colour_economist())
##D 
##D ## Verdana is a widely available substitute
##D (q + theme_economist(base_family="Verdana")
##D + scale_colour_economist())
## End(Not run)
{% endhighlight %}