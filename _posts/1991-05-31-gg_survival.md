---
title: |
  Nonparametric survival estimates.
rdname: gg_survival
date: 2015-06-07
output: html_document
layout: article
category: ggrandomforests
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-5.png
---




{% highlight r %}
## -------- pbc data
data(pbc, package="randomForestSRC")
pbc$time <- pbc$days/364.25

# This is the same as kaplan
gg_dta <- gg_survival(interval="time", censor="status",
                     data=pbc)

plot(gg_dta, error="none")
{% endhighlight %}

![plot of chunk gg_survival](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-1.png) 

{% highlight r %}
plot(gg_dta)
{% endhighlight %}

![plot of chunk gg_survival](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-2.png) 

{% highlight r %}
# Stratified on treatment variable.
gg_dta <- gg_survival(interval="time", censor="status",
                     data=pbc, by="treatment")

plot(gg_dta, error="none")
{% endhighlight %}

![plot of chunk gg_survival](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-3.png) 

{% highlight r %}
plot(gg_dta)
{% endhighlight %}

![plot of chunk gg_survival](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-4.png) 

{% highlight r %}
# ...with smaller confidence limits.
gg_dta <- gg_survival(interval="time", censor="status",
                     data=pbc, by="treatment", conf.int=.68)

plot(gg_dta, error="lines")
{% endhighlight %}

![plot of chunk gg_survival](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_survival/gg_survival-5.png) 