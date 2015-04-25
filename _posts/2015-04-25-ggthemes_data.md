---
title: "Palette data for ggthemes package"
rdname: "ggthemes_data"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-ggthemes_data//ggthemes_data-1.png
 - figure/source/2015-04-25-ggthemes_data//ggthemes_data-2.png
 - figure/source/2015-04-25-ggthemes_data//ggthemes_data-3.png
---




{% highlight r %}
p <- ggplot(mtcars, aes(factor(cyl), mpg))
## with only a point
p + geom_tufteboxplot()
{% endhighlight %}

![plot of chunk ggthemes_data](/allYourFigureAreBelongToUs/figure/source/2015-04-25-ggthemes_data/ggthemes_data-1.png) 

{% highlight r %}
## with a middle box
p + geom_tufteboxplot(median.type="box", fatten=1)
{% endhighlight %}

![plot of chunk ggthemes_data](/allYourFigureAreBelongToUs/figure/source/2015-04-25-ggthemes_data/ggthemes_data-2.png) 

{% highlight r %}
## using lines
p + geom_tufteboxplot(median.type="line")
{% endhighlight %}

![plot of chunk ggthemes_data](/allYourFigureAreBelongToUs/figure/source/2015-04-25-ggthemes_data/ggthemes_data-3.png) 