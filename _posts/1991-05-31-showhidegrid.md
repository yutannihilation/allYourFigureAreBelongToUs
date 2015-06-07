---
title: |
  Show or Hide Grid
rdname: showhidegrid
date: 2015-06-07
output: html_document
layout: article
category: ggtern
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-4.png
---




{% highlight r %}
### ** Examples

#Load data
  data(Feldspar)
  plot <- ggtern(data=Feldspar,aes(Ab,An,Or)) +
          geom_point()   + #Layer
          theme_bw()     + #For clarity
          theme_hidegrid() #Turn off both major and minor
  plot
{% endhighlight %}

![plot of chunk showhidegrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-1.png) 

{% highlight r %}
  #Demonstrate switching on major, minor and both gridlines
  plot + theme_showgrid_minor() #show minor only
{% endhighlight %}

![plot of chunk showhidegrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-2.png) 

{% highlight r %}
  plot + theme_showgrid_major() #show major only
{% endhighlight %}

![plot of chunk showhidegrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-3.png) 

{% highlight r %}
  plot + theme_showgrid()       #show both major and minor
{% endhighlight %}

![plot of chunk showhidegrid](/allYourFigureAreBelongToUs/figure/source/1991-05-31-showhidegrid/showhidegrid-4.png) 

{% highlight r %}
  #Demonstrate switching OFF major, minor and both gridlines, Uncomment to run
  #plot <- plot + theme_showgrid() #as before
  #plot + theme_hidegrid_minor() #show major only (hide minor)
  #plot + theme_hidegrid_major() #show minor only (hide major)
  #plot + theme_hidegrid()       #show none (hide both major and minor)
{% endhighlight %}