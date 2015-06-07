---
title: |
  Minimal depth data object (list("randomForestSRC::var.select"))
rdname: gg_minimal_depth
date: 2015-06-07
output: html_document
layout: article
category: ggrandomforests
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_minimal_depth/gg_minimal_depth-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_minimal_depth/gg_minimal_depth-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_minimal_depth/gg_minimal_depth-3.png
---




{% highlight r %}
## Examples from RFSRC package...
## ------------------------------------------------------------
## classification example
## ------------------------------------------------------------
## -------- iris data
## You can build a randomForest
# rfsrc_iris <- rfsrc(Species ~ ., data = iris)
# varsel_iris <- var.select(rfsrc_iris)
# ... or load a cached randomForestSRC object
data(varsel_iris, package="ggRandomForests")

# Get a data.frame containing minimaldepth measures
gg_dta<- gg_minimal_depth(varsel_iris)

# Plot the gg_minimal_depth object
plot(gg_dta)
{% endhighlight %}

![plot of chunk gg_minimal_depth](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_minimal_depth/gg_minimal_depth-1.png) 

{% highlight r %}
## ------------------------------------------------------------
## Regression example
## ------------------------------------------------------------
## Not run: 
##D ## -------- air quality data
##D # rfsrc_airq <- rfsrc(Ozone ~ ., data = airquality, na.action = "na.impute")
##D # varsel_airq <- var.select(rfsrc_airq)
##D # ... or load a cached randomForestSRC object
##D data(varsel_airq, package="ggRandomForests")
##D 
##D # Get a data.frame containing error rates
##D gg_dta<- gg_minimal_depth(varsel_airq)
##D 
##D # Plot the gg_minimal_depth object
##D plot(gg_dta)
## End(Not run)

## -------- Boston data
data(varsel_Boston, package="ggRandomForests")

# Get a data.frame containing error rates
plot(gg_minimal_depth(varsel_Boston))
{% endhighlight %}

![plot of chunk gg_minimal_depth](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_minimal_depth/gg_minimal_depth-2.png) 

{% highlight r %}
## Not run: 
##D ## -------- mtcars data
##D data(varsel_mtcars, package="ggRandomForests")
##D 
##D # Get a data.frame containing error rates
##D plot.gg_minimal_depth(varsel_mtcars)
## End(Not run)

## ------------------------------------------------------------
## Survival example
## ------------------------------------------------------------
## Not run: 
##D ## -------- veteran data
##D ## veteran data
##D ## randomized trial of two treatment regimens for lung cancer
##D # data(veteran, package = "randomForestSRC")
##D # rfsrc_veteran <- rfsrc(Surv(time, status) ~ ., data = veteran, ntree = 100)
##D # varsel_veteran <- var.select(rfsrc_veteran)
##D # Load a cached randomForestSRC object
##D data(varsel_veteran, package="ggRandomForests")
##D 
##D gg_dta <- gg_minimal_depth(varsel_veteran)
##D plot(gg_dta)
## End(Not run)

## -------- pbc data
data(varsel_pbc, package="ggRandomForests")

gg_dta <- gg_minimal_depth(varsel_pbc)
plot(gg_dta)
{% endhighlight %}

![plot of chunk gg_minimal_depth](/allYourFigureAreBelongToUs/figure/source/1991-05-31-gg_minimal_depth/gg_minimal_depth-3.png) 