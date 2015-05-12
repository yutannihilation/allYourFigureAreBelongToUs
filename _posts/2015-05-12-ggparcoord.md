---
title: |
  ggparcoord - A ggplot2 Parallel Coordinate Plot
rdname: ggparcoord
date: 2015-05-12
output: html_document
layout: article
category: GGally
images: ""
---




{% highlight r %}
# use sample of the diamonds data for illustrative purposes
data(diamonds, package="ggplot2")
diamonds.samp <- diamonds[sample(1:dim(diamonds)[1],100),]

# basic parallel coordinate plot, using default settings
# ggparcoord(data = diamonds.samp,columns = c(1,5:10))

# this time, color by diamond cut
gpd <- ggparcoord(data = diamonds.samp,columns = c(1,5:10),groupColumn = 2)
# gpd

# underlay univariate boxplots, add title, use uniminmax scaling
gpd <- ggparcoord(data = diamonds.samp,columns = c(1,5:10),groupColumn = 2,
  scale = "uniminmax",boxplot = TRUE,title = "Parallel Coord. Plot of Diamonds Data")
# gpd

# utilize ggplot2 aes to switch to thicker lines
gpd <- ggparcoord(data = diamonds.samp,columns = c(1,5:10),groupColumn = 2,
  title="Parallel Coord. Plot of Diamonds Data",mapping = ggplot2::aes(size = 1))
# gpd

# basic parallel coord plot of the msleep data, using 'random' imputation and
# coloring by diet (can also use variable names in the columns and groupColumn
# arguments)
data(msleep, package="ggplot2")
gpd <- ggparcoord(data = msleep, columns = 6:11, groupColumn = "vore", missing =
  "random", scale = "uniminmax")
# gpd

# center each variable by its median, using the default missing value handler,
# 'exclude'
gpd <- ggparcoord(data = msleep, columns = 6:11, groupColumn = "vore", scale =
  "center", scaleSummary = "median")
# gpd

# with the iris data, order the axes by overall class (Species) separation using
# the anyClass option
gpd <- ggparcoord(data = iris, columns = 1:4, groupColumn = 5, order = "anyClass")
# gpd

# add points to the plot, add a title, and use an alpha scalar to make the lines
# transparent
gpd <- ggparcoord(data = iris, columns = 1:4, groupColumn = 5, order = "anyClass",
  showPoints = TRUE, title = "Parallel Coordinate Plot for the Iris Data",
  alphaLines = 0.3)
# gpd

# color according to a column
iris2 <- iris
iris2$alphaLevel <- c("setosa" = 0.2, "versicolor" = 0.3, "virginica" = 0)[iris2$Species]
gpd <- ggparcoord(data = iris2, columns = 1:4, groupColumn = 5, order = "anyClass",
  showPoints = TRUE, title = "Parallel Coordinate Plot for the Iris Data",
  alphaLines = "alphaLevel")
# gpd

## Use splines on values, rather than lines (all produce the same result)
columns <- c(1, 5:10)
gpd <- ggparcoord(diamonds.samp, columns, groupColumn = 2, splineFactor = TRUE)
# gpd
gpd <- ggparcoord(diamonds.samp, columns, groupColumn = 2, splineFactor = 3)
# gpd
splineFactor <- length(columns) * 3
gpd <- ggparcoord(diamonds.samp, columns, groupColumn = 2, splineFactor = I(splineFactor))
# gpd
{% endhighlight %}