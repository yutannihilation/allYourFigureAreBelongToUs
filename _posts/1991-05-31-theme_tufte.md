---
title: |
  Tufte Maximal Data, Minimal Ink Theme
rdname: theme_tufte
date: 1991-05-31
output: html_document
layout: article
category: ggthemes
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_tufte/theme_tufte-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_tufte/theme_tufte-2.png
---




{% highlight r %}
# with ticks and range frames
(ggplot(mtcars, aes(wt, mpg))
 + geom_point() + geom_rangeframe()
 + theme_tufte())
{% endhighlight %}

![plot of chunk theme_tufte](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_tufte/theme_tufte-1.png) 

{% highlight r %}
# with geom_rug
(ggplot(mtcars, aes(wt, mpg))
 + geom_point() + geom_rug()
 + theme_tufte(ticks=FALSE))
{% endhighlight %}

![plot of chunk theme_tufte](/allYourFigureAreBelongToUs/figure/source/1991-05-31-theme_tufte/theme_tufte-2.png) 

{% highlight r %}
## Not run: 
##D ## Using the Bembo serif family
##D library(extrafont)
##D (ggplot(mtcars, aes(wt, mpg))
##D  + geom_point() + geom_rangeframe()
##D  + theme_tufte(base_family="BemboStd"))
##D ## Using the Gill Sans sans serif family
##D (ggplot(mtcars, aes(wt, mpg))
##D  + geom_point() + geom_rangeframe()
##D  + theme_tufte(base_family="GillSans"))
## End(Not run)
{% endhighlight %}