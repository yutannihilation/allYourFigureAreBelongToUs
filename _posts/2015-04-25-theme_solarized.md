---
title: "ggplot color themes based on the Solarized palette"
rdname: "theme_solarized"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-theme_solarized//theme_solarized-1.png
 - figure/source/2015-04-25-theme_solarized//theme_solarized-2.png
 - figure/source/2015-04-25-theme_solarized//theme_solarized-3.png
 - figure/source/2015-04-25-theme_solarized//theme_solarized-4.png
---




{% highlight r %}
dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
(qplot(carat, price, data=dsamp, colour=clarity)
 + theme_solarized()
 + scale_colour_solarized("blue"))
{% endhighlight %}

![plot of chunk theme_solarized](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_solarized/theme_solarized-1.png) 

{% highlight r %}
## Dark version
(qplot(carat, price, data=dsamp, colour=clarity)
 + theme_solarized(light=FALSE)
 + scale_colour_solarized("blue"))
{% endhighlight %}

![plot of chunk theme_solarized](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_solarized/theme_solarized-2.png) 

{% highlight r %}
## With panels
 (ggplot(dsamp, aes(x = carat, y = price))
  + geom_point(color = ggthemes_data$solarized$base['base00'])
  + facet_wrap(~ clarity)
  + theme_solarized())
{% endhighlight %}

![plot of chunk theme_solarized](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_solarized/theme_solarized-3.png) 

{% highlight r %}
## Alternative version
 (qplot(carat, price, data=dsamp, color=clarity)
  + theme_solarized_2(light=FALSE)
  + scale_colour_solarized("blue"))
{% endhighlight %}

![plot of chunk theme_solarized](/allYourFigureAreBelongToUs/figure/source/2015-04-25-theme_solarized/theme_solarized-4.png) 