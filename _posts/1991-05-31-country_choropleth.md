---
title: |
  Create a country-level choropleth
rdname: country_choropleth
date: 2015-06-07
output: html_document
layout: article
category: choroplethr
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-country_choropleth/country_choropleth-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-country_choropleth/country_choropleth-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-country_choropleth/country_choropleth-3.png
---




{% highlight r %}
# demonstrate default options
data(df_pop_country)
country_choropleth(df_pop_country, "2012 World Bank Populate Estimates")
{% endhighlight %}



{% highlight text %}
## Warning in self$bind(): The following regions were missing and are
## being set to NA: namibia, western sahara, taiwan, antarctica, kosovo
{% endhighlight %}

![plot of chunk country_choropleth](/allYourFigureAreBelongToUs/figure/source/1991-05-31-country_choropleth/country_choropleth-1.png) 

{% highlight r %}
# demonstrate continuous scale
country_choropleth(df_pop_country, "2012 World Bank Populate Estimates", num_colors=1)
{% endhighlight %}



{% highlight text %}
## Warning in self$bind(): The following regions were missing and are
## being set to NA: namibia, western sahara, taiwan, antarctica, kosovo
{% endhighlight %}

![plot of chunk country_choropleth](/allYourFigureAreBelongToUs/figure/source/1991-05-31-country_choropleth/country_choropleth-2.png) 

{% highlight r %}
# demonstrate zooming
country_choropleth(df_pop_country,
                   "2012 World Bank Population Estimates",
                   num_colors=1,
                   zoom=c("united states of america", "canada", "mexico"))
{% endhighlight %}

![plot of chunk country_choropleth](/allYourFigureAreBelongToUs/figure/source/1991-05-31-country_choropleth/country_choropleth-3.png) 