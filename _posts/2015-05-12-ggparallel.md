---
title: |
  Variations of parallel coordinate plots
rdname: ggparallel
date: 2015-05-12
output: html_document
layout: article
category: ggparallel
images:
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-1.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-2.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-3.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-4.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-5.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-6.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-7.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-8.png
 - /allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel//ggparallel-9.png
---




{% highlight r %}
data(mtcars)
{% endhighlight %}



{% highlight text %}
## Warning in data(mtcars): data set 'mtcars' not found
{% endhighlight %}



{% highlight r %}
ggparallel(list("gear", "cyl"), data=mtcars)
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-1.png) 

{% highlight r %}
ggparallel(list("gear", "cyl"), data=mtcars, method="hammock")
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-2.png) 

{% highlight r %}
## combination of common angle plot and hammock adjustment:
ggparallel(list("gear", "cyl"), data=mtcars, method="adj.angle")
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-3.png) 

{% highlight r %}
## compare with method='parset'
ggparallel(list("gear", "cyl"), data=mtcars, method='parset')
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-4.png) 

{% highlight r %}
## flip plot and rotate text
ggparallel(list("gear", "cyl"), data=mtcars, text.angle=0) + coord_flip()
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-5.png) 

{% highlight r %}
## change colour scheme
ggparallel(list("gear", "cyl"), data=mtcars, text.angle=0) + coord_flip() +
  scale_fill_brewer(palette="Set1") +
  scale_colour_brewer(palette="Set1")
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-6.png) 

{% highlight r %}
## example with more than two variables:
titanic <- as.data.frame(Titanic)
ggparallel(names(titanic)[c(1,4,2,1)], order=0, titanic, weight="Freq") +
  scale_fill_brewer(palette="Paired", guide="none") +
  scale_colour_brewer(palette="Paired", guide="none")
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-7.png) 

{% highlight r %}
## hammock plot with same width lines
ggparallel(names(titanic)[c(1,4,2,3)], titanic, weight=1, asp=0.5, method="hammock", ratio=0.2, order=c(0,0)) +
theme( legend.position="none") +
scale_fill_brewer(palette="Paired") +
scale_colour_brewer(palette="Paired")
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-8.png) 

{% highlight r %}
## hammock plot with line widths adjusted by frequency
ggparallel(names(titanic)[c(1,4,2,3)], titanic, weight="Freq", asp=0.5, method="hammock", order=c(0,0)) +
theme( legend.position="none")
{% endhighlight %}



{% highlight text %}
## Warning: attributes are not identical across measure variables; they
## will be dropped
{% endhighlight %}

![plot of chunk ggparallel](/allYourFigureAreBelongToUs/figure/source/2015-05-12-ggparallel/ggparallel-9.png) 

{% highlight r %}
## Not run: 
##D ## biological examples: genes and pathways
##D data(genes)
##D genes$chrom <- factor(genes$chrom, levels=c(paste("chr", 1:22, sep=""), "chrX", "chrY"))
##D ggparallel(list("path", "chrom"), text.offset=c(0.03, 0,-0.03), data = genes,  width=0.1, order=c(1,0), text.angle=0, color="white",
##D    factorlevels =  c(sapply(unique(genes$chrom), as.character),
##D      unique(genes$path))) +
##D    scale_fill_manual(values = c(   brewer.pal("YlOrRd", n = 9), rep("grey80", 24)), guide="none") +
##D    scale_colour_manual(values = c(   brewer.pal("YlOrRd", n = 9), rep("grey80", 24)), guide="none") +
##D    coord_flip()
## End(Not run)
{% endhighlight %}