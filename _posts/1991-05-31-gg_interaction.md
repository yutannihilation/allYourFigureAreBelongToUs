---
title: |
  Minimal Depth Variable Interaction data object (list("randomForestSRC::find.interaction")).
rdname: gg_interaction
date: 2015-06-07
output: html_document
layout: article
category: ggrandomforests
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-5.png
---




{% highlight r %}
## Examples from randomForestSRC package...
## ------------------------------------------------------------
## find interactions, classification setting
## ------------------------------------------------------------
## -------- iris data
## iris.obj <- rfsrc(Species ~., data = iris)
## TODO: VIMP interactions not handled yet....
## find.interaction(iris.obj, method = "vimp", nrep = 3)
## interaction_iris <- find.interaction(iris.obj)
data(interaction_iris, package="ggRandomForests")
gg_dta <- gg_interaction(interaction_iris)

plot(gg_dta, xvar="Petal.Width")
{% endhighlight %}

![plot of chunk gg_interaction](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-1.png) 

{% highlight r %}
plot(gg_dta, panel=TRUE)
{% endhighlight %}

![plot of chunk gg_interaction](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-2.png) 

{% highlight r %}
## ------------------------------------------------------------
## find interactions, regression setting
## ------------------------------------------------------------
## Not run: 
##D ## -------- air quality data
##D ## airq.obj <- rfsrc(Ozone ~ ., data = airquality)
##D ##
##D ## TODO: VIMP interactions not handled yet....
##D ## find.interaction(airq.obj, method = "vimp", nrep = 3)
##D ## interaction_airq <- find.interaction(airq.obj)
##D data(interaction_airq, package="ggRandomForests")
##D gg_dta <- gg_interaction(interaction_airq)
##D 
##D plot(gg_dta, xvar="Temp")
##D plot(gg_dta, xvar="Solar.R")
##D 
##D plot(gg_dta, panel=TRUE)
## End(Not run)

## -------- Boston data
data(interaction_Boston, package="ggRandomForests")
gg_dta <- gg_interaction(interaction_Boston)

plot(gg_dta, panel=TRUE)
{% endhighlight %}

![plot of chunk gg_interaction](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-3.png) 

{% highlight r %}
## Not run: 
##D ## -------- mtcars data
##D data(interaction_mtcars, package="ggRandomForests")
##D gg_dta <- gg_interaction(interaction_mtcars)
##D 
##D plot(gg_dta, panel=TRUE)
## End(Not run)

## ------------------------------------------------------------
## find interactions, survival setting
## ------------------------------------------------------------
## -------- pbc data
## data(pbc, package = "randomForestSRC")
## pbc.obj <- rfsrc(Surv(days,status) ~ ., pbc, nsplit = 10)
## interaction_pbc <- find.interaction(pbc.obj, nvar = 8)
data(interaction_pbc, package="ggRandomForests")
gg_dta <- gg_interaction(interaction_pbc)

plot(gg_dta, xvar="bili")
{% endhighlight %}

![plot of chunk gg_interaction](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-4.png) 

{% highlight r %}
plot(gg_dta, panel=TRUE)
{% endhighlight %}

![plot of chunk gg_interaction](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_interaction/gg_interaction-5.png) 

{% highlight r %}
## Not run: 
##D ## -------- veteran data
##D data(interaction_veteran, package="ggRandomForests")
##D gg_dta <- gg_interaction(interaction_veteran)
##D 
##D plot(gg_dta, panel=TRUE)
## End(Not run)
{% endhighlight %}