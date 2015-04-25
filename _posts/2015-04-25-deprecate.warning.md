---
title: "Show deprecate warning"
rdname: "deprecate.warning"
date: "2015-04-25"
output: html_document
layout: article
category: "ggfortify"
images: ""
---




{% highlight r %}
ggfortify:::deprecate.warning('old', 'new')
{% endhighlight %}



{% highlight text %}
## Warning: Argument 'old' is being deprecated. Use 'new' instead.
{% endhighlight %}