---
title: "Base colors for Solarized light and dark themes"
rdname: "solarized_rebase"
date: "2015-04-25"
output: html_document
layout: article
category: "ggthemes"
images:
 - figure/source/2015-04-25-solarized_rebase//solarized_rebase-1.png
 - figure/source/2015-04-25-solarized_rebase//solarized_rebase-2.png
 - figure/source/2015-04-25-solarized_rebase//solarized_rebase-3.png
---




{% highlight r %}
library(scales)
show_col(solarized_pal()(2))
{% endhighlight %}

![plot of chunk solarized_rebase](/allYourFigureAreBelongToUs/figure/source/2015-04-25-solarized_rebase/solarized_rebase-1.png) 

{% highlight r %}
show_col(solarized_pal()(3))
{% endhighlight %}

![plot of chunk solarized_rebase](/allYourFigureAreBelongToUs/figure/source/2015-04-25-solarized_rebase/solarized_rebase-2.png) 

{% highlight r %}
show_col(solarized_pal("red")(4))
{% endhighlight %}

![plot of chunk solarized_rebase](/allYourFigureAreBelongToUs/figure/source/2015-04-25-solarized_rebase/solarized_rebase-3.png) 