---
title: |
  lowertriangle - rearrange dataset as the preparation of ggscatmat function
rdname: lowertriangle
date: 2015-05-12
output: html_document
layout: article
category: GGally
images: ""
---




{% highlight r %}
data(flea)
head(lowertriangle(flea, columns= 2:4))
{% endhighlight %}



{% highlight text %}
##   xvalue yvalue xslot yslot  xlab  ylab
## 1    191     NA     1     1 tars1 tars1
## 2    185     NA     1     1 tars1 tars1
## 3    200     NA     1     1 tars1 tars1
## 4    173     NA     1     1 tars1 tars1
## 5    171     NA     1     1 tars1 tars1
## 6    160     NA     1     1 tars1 tars1
{% endhighlight %}



{% highlight r %}
head(lowertriangle(flea))
{% endhighlight %}



{% highlight text %}
##   xvalue yvalue xslot yslot  xlab  ylab
## 1    191     NA     1     1 tars1 tars1
## 2    185     NA     1     1 tars1 tars1
## 3    200     NA     1     1 tars1 tars1
## 4    173     NA     1     1 tars1 tars1
## 5    171     NA     1     1 tars1 tars1
## 6    160     NA     1     1 tars1 tars1
{% endhighlight %}



{% highlight r %}
head(lowertriangle(flea, color="species"))
{% endhighlight %}



{% highlight text %}
##   xvalue yvalue xslot yslot  xlab  ylab colorcolumn
## 1    191     NA     1     1 tars1 tars1    Concinna
## 2    185     NA     1     1 tars1 tars1    Concinna
## 3    200     NA     1     1 tars1 tars1    Concinna
## 4    173     NA     1     1 tars1 tars1    Concinna
## 5    171     NA     1     1 tars1 tars1    Concinna
## 6    160     NA     1     1 tars1 tars1    Concinna
{% endhighlight %}