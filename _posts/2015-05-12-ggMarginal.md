---
title: |
  Add marginal density/histogram to ggplot2 scatterplots
rdname: ggMarginal
date: 2015-05-12
output: html_document
layout: article
category: ggextra
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggMarginal//ggMarginal-1.png
---




{% highlight r %}
if (requireNamespace("ggplot2", quietly = TRUE)) {
  if (requireNamespace("gridExtra", quietly = TRUE)) {
    if (requireNamespace("grid", quietly = TRUE)) {
      p <- ggplot2::ggplot(mtcars, ggplot2::aes(wt, mpg)) + ggplot2::geom_point()
      ggMarginal(p)

      set.seed(30)
      df <- data.frame(x = rnorm(500, 50, 10), y = runif(500, 0, 50))
      p2 <- ggplot2::ggplot(df, ggplot2::aes(x, y)) + ggplot2::geom_point()
      ggMarginal(p2)
      ggMarginal(p2, type = "histogram")
      ggMarginal(p2, margins = "x")
      ggMarginal(p2, size = 2)
      p2 <- p2 + ggplot2::ggtitle("Random data") + ggplot2::theme_bw(30)
      ggMarginal(p2)

      ggMarginal(data = df, x = "x", y = "y")

      set.seed(30)
      df2 <- data.frame(x = c(rnorm(250, 50, 10), rnorm(250, 100, 10)),
                        y = runif(500, 0, 50))
      p3 <- ggplot2::ggplot(df2, ggplot2::aes(x, y)) + ggplot2::geom_point()
      ggMarginal(p3)
    }
  }
}
{% endhighlight %}

![plot of chunk ggMarginal](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggMarginal/ggMarginal-1.png) 