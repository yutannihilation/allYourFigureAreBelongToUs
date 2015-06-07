---
title: |
  Elemental Graphic Display for Contrast Effect of ANOVA
rdname: granovagg.contr
date: 2015-06-07
output: html_document
layout: article
category: granovagg
images:
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-1.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-2.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-3.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-4.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-5.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-6.png
 - /allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-7.png
---




{% highlight r %}
data(arousal)  
contrasts22 <- data.frame( c(-.5,-.5,.5,.5), 
  c(-.5,.5,-.5,.5), c(.5,-.5,-.5,.5) )
names(contrasts22) <- c("Drug.A", "Drug.B", "Drug.A.B")
granovagg.contr(arousal, contrasts = contrasts22)
{% endhighlight %}



{% highlight text %}
## No id variables; using all as measure variables
## 
## Linear Model Summary
{% endhighlight %}



{% highlight text %}
## 
## Call:
## lm(formula = Response ~ Contrast)
## 
## Residuals:
##    Min     1Q Median     3Q    Max 
## -5.910 -2.015 -0.075  1.885  6.290 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  24.0825     0.4657  51.712  < 2e-16 ***
## Contrast1     3.4650     0.9314   3.720 0.000676 ***
## Contrast2     3.9150     0.9314   4.203 0.000166 ***
## Contrast3     0.0750     0.9314   0.081 0.936267    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 2.945 on 36 degrees of freedom
## Multiple R-squared:  0.4668,	Adjusted R-squared:  0.4223 
## F-statistic:  10.5 on 3 and 36 DF,  p-value: 4.173e-05
{% endhighlight %}



{% highlight text %}
## 
## (Weighted) means, mean differences, and standardized effect size
{% endhighlight %}



{% highlight text %}
##            neg  pos  diff stEftSze
## Contrast1 22.4 25.8 3.465   1.1764
## Contrast2 22.1 26.0 3.915   1.3292
## Contrast3 24.0 24.1 0.075   0.0255
{% endhighlight %}



{% highlight text %}
## 
## Summary statistics by group
{% endhighlight %}



{% highlight text %}
##   group group.mean standard.deviation pooled.standard.deviation
## 1     1      20.43              2.414                     2.945
## 2     2      24.27              2.809                     2.945
## 3     3      23.82              2.738                     2.945
## 4     4      27.81              3.672                     2.945
{% endhighlight %}



{% highlight text %}
## 
## The contrasts you specified
{% endhighlight %}



{% highlight text %}
##      Drug.A Drug.B Drug.A.B
## [1,]   -0.5   -0.5      0.5
## [2,]   -0.5    0.5     -0.5
## [3,]    0.5   -0.5     -0.5
## [4,]    0.5    0.5      0.5
{% endhighlight %}



{% highlight text %}
## Since you elected to print four plots per page
## granovagg.contr won't return any plot objects.
{% endhighlight %}

![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-1.png) 

{% highlight text %}
## NULL
{% endhighlight %}



{% highlight r %}
data(rat)
dat6 <- matrix(c(1, 1, 1, -1, -1, -1, -1, 1, 0, -1, 1, 0, 1, 1, -2, 
    1, 1, -2, -1, 1, 0, 1, -1, 0, 1, 1, -2, -1, -1, 2), ncol = 5)
granovagg.contr(rat[,1], contrasts = dat6, ylab = "Rat Weight Gain", 
  xlab = c("Amount 1 vs. Amount 2", "Type 1 vs. Type 2", 
  "Type 1 & 2 vs Type 3", "Interaction of Amount and Type 1 & 2", 
  "Interaction of Amount and  Type (1, 2), 3"))
{% endhighlight %}



{% highlight text %}
## No id variables; using all as measure variables
## 
## Linear Model Summary
{% endhighlight %}



{% highlight text %}
## 
## Call:
## lm(formula = Response ~ Contrast)
## 
## Residuals:
##    Min     1Q Median     3Q    Max 
## -29.90  -8.75   2.20  10.80  27.30 
## 
## Coefficients:
##               Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  8.787e+01  1.891e+00  46.465  < 2e-16 ***
## Contrast1    2.202e+01  5.730e+00   3.843 0.000322 ***
## Contrast2   -5.000e-01  4.632e+00  -0.108 0.914440    
## Contrast3    5.933e+00  5.349e+00   1.109 0.272205    
## Contrast4    2.547e-15  4.632e+00   0.000 1.000000    
## Contrast5    1.253e+01  5.349e+00   2.343 0.022827 *  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 14.65 on 54 degrees of freedom
## Multiple R-squared:  0.2848,	Adjusted R-squared:  0.2185 
## F-statistic:   4.3 on 5 and 54 DF,  p-value: 0.002299
{% endhighlight %}



{% highlight text %}
## 
## (Weighted) means, mean differences, and standardized effect size
{% endhighlight %}



{% highlight text %}
##            neg  pos  diff stEftSze
## Contrast1 80.6 95.1 14.53   0.9922
## Contrast2 89.6 89.1 -0.50  -0.0341
## Contrast3 84.9 89.3  4.45   0.3038
## Contrast4 89.3 89.3  0.00   0.0000
## Contrast5 81.3 94.5 13.20   0.9012
{% endhighlight %}



{% highlight text %}
## 
## Summary statistics by group
{% endhighlight %}



{% highlight text %}
##   group group.mean standard.deviation pooled.standard.deviation
## 1     1      100.0              15.14                     14.65
## 2     2       99.5              10.92                     14.65
## 3     3       85.9              15.02                     14.65
## 4     4       79.2              13.89                     14.65
## 5     5       78.7              16.55                     14.65
## 6     6       83.9              15.71                     14.65
{% endhighlight %}



{% highlight text %}
## 
## The contrasts you specified
{% endhighlight %}



{% highlight text %}
##      [,1] [,2] [,3] [,4] [,5]
## [1,]    1   -1    1   -1    1
## [2,]    1    1    1    1    1
## [3,]    1    0   -2    0   -2
## [4,]   -1   -1    1    1   -1
## [5,]   -1    1    1   -1   -1
## [6,]   -1    0   -2    0    2
{% endhighlight %}



{% highlight text %}
## Since you elected to print four plots per page
## granovagg.contr won't return any plot objects.
{% endhighlight %}

![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-2.png) ![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-3.png) 

{% highlight text %}
## NULL
{% endhighlight %}



{% highlight r %}
#Polynomial Contrasts 
granovagg.contr(rat[,1],contrasts = contr.poly(6))
{% endhighlight %}



{% highlight text %}
## No id variables; using all as measure variables
## 
## Linear Model Summary
{% endhighlight %}



{% highlight text %}
## 
## Call:
## lm(formula = Response ~ Contrast)
## 
## Residuals:
##    Min     1Q Median     3Q    Max 
## -29.90  -8.75   2.20  10.80  27.30 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)    
## (Intercept)   87.864      1.891  46.464  < 2e-16 ***
## Contrast1    -19.135      4.968  -3.851 0.000314 ***
## Contrast2      9.669      5.054   1.913 0.061050 .  
## Contrast3      8.339      5.519   1.511 0.136643    
## Contrast4     -4.405      5.260  -0.837 0.406018    
## Contrast5      1.343      4.678   0.287 0.775079    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 14.65 on 54 degrees of freedom
## Multiple R-squared:  0.2848,	Adjusted R-squared:  0.2185 
## F-statistic:   4.3 on 5 and 54 DF,  p-value: 0.002299
{% endhighlight %}



{% highlight text %}
## 
## (Weighted) means, mean differences, and standardized effect size
{% endhighlight %}



{% highlight text %}
##            neg  pos    diff stEftSze
## Contrast1 95.1 80.6 -14.533  -0.9922
## Contrast2 85.8 92.0   6.125   0.4182
## Contrast3 86.0 89.8   3.800   0.2594
## Contrast4 89.1 87.2  -1.850  -0.1263
## Contrast5 88.2 87.5  -0.667  -0.0455
{% endhighlight %}



{% highlight text %}
## 
## Summary statistics by group
{% endhighlight %}



{% highlight text %}
##   group group.mean standard.deviation pooled.standard.deviation
## 1     1      100.0              15.14                     14.65
## 2     2       99.5              10.92                     14.65
## 3     3       85.9              15.02                     14.65
## 4     4       79.2              13.89                     14.65
## 5     5       78.7              16.55                     14.65
## 6     6       83.9              15.71                     14.65
{% endhighlight %}



{% highlight text %}
## 
## The contrasts you specified
{% endhighlight %}



{% highlight text %}
##          .L     .Q     .C     ^4     ^5
## [1,] -0.598  0.546 -0.373  0.189 -0.063
## [2,] -0.359 -0.109  0.522 -0.567  0.315
## [3,] -0.120 -0.436  0.298  0.378 -0.630
## [4,]  0.120 -0.436 -0.298  0.378  0.630
## [5,]  0.359 -0.109 -0.522 -0.567 -0.315
## [6,]  0.598  0.546  0.373  0.189  0.063
{% endhighlight %}



{% highlight text %}
## Since you elected to print four plots per page
## granovagg.contr won't return any plot objects.
{% endhighlight %}

![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-4.png) ![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-5.png) 

{% highlight text %}
## NULL
{% endhighlight %}



{% highlight r %}
#based on random data 
data.random <- rt(64, 5)
granovagg.contr(data.random, contrasts = contr.helmert(8), 
  ylab = "Random Data")
{% endhighlight %}



{% highlight text %}
## No id variables; using all as measure variables
## 
## Linear Model Summary
{% endhighlight %}



{% highlight text %}
## 
## Call:
## lm(formula = Response ~ Contrast)
## 
## Residuals:
##     Min      1Q  Median      3Q     Max 
## -2.2270 -0.7073  0.1021  0.7726  2.7805 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)   
## (Intercept) -0.01788    0.14838  -0.121  0.90450   
## Contrast1   -0.09857    0.29676  -0.332  0.74101   
## Contrast2    0.84677    0.34358   2.465  0.01681 * 
## Contrast3   -0.12647    0.36273  -0.349  0.72865   
## Contrast4    0.35195    0.37598   0.936  0.35325   
## Contrast5   -0.60975    0.38312  -1.592  0.11711   
## Contrast6   -1.04724    0.38811  -2.698  0.00919 **
## Contrast7   -0.01996    0.39218  -0.051  0.95959   
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 1.187 on 56 degrees of freedom
## Multiple R-squared:  0.2332,	Adjusted R-squared:  0.1373 
## F-statistic: 2.433 on 7 and 56 DF,  p-value: 0.02999
{% endhighlight %}



{% highlight text %}
## 
## (Weighted) means, mean differences, and standardized effect size
{% endhighlight %}



{% highlight text %}
##               neg     pos    diff stEftSze
## Contrast1 -0.0833 -0.2805 -0.1971  -0.1661
## Contrast2 -0.1819  1.0849  1.2668   1.0672
## Contrast3  0.2403  0.0691 -0.1712  -0.1442
## Contrast4  0.1975  0.6348  0.4373   0.3684
## Contrast5  0.2850 -0.4488 -0.7338  -0.6182
## Contrast6  0.1627 -1.0622 -1.2249  -1.0319
## Contrast7 -0.0123 -0.0378 -0.0255  -0.0215
{% endhighlight %}



{% highlight text %}
## 
## Summary statistics by group
{% endhighlight %}



{% highlight text %}
##   group group.mean standard.deviation pooled.standard.deviation
## 1     1   -0.08334             1.5083                     1.187
## 2     2   -0.28048             1.0235                     1.187
## 3     3    1.08486             1.4168                     1.187
## 4     4    0.06913             1.0794                     1.187
## 5     5    0.63483             0.9599                     1.187
## 6     6   -0.44883             1.4692                     1.187
## 7     7   -1.06224             1.0597                     1.187
## 8     8   -0.03785             0.7580                     1.187
{% endhighlight %}



{% highlight text %}
## 
## The contrasts you specified
{% endhighlight %}



{% highlight text %}
##   [,1] [,2] [,3] [,4] [,5] [,6] [,7]
## 1   -1   -1   -1   -1   -1   -1   -1
## 2    1   -1   -1   -1   -1   -1   -1
## 3    0    2   -1   -1   -1   -1   -1
## 4    0    0    3   -1   -1   -1   -1
## 5    0    0    0    4   -1   -1   -1
## 6    0    0    0    0    5   -1   -1
## 7    0    0    0    0    0    6   -1
## 8    0    0    0    0    0    0    7
{% endhighlight %}



{% highlight text %}
## Since you elected to print four plots per page
## granovagg.contr won't return any plot objects.
{% endhighlight %}

![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-6.png) ![plot of chunk granovagg.contr](/allYourFigureAreBelongToUs/figure/source/1991-05-31-granovagg.contr/granovagg.contr-7.png) 

{% highlight text %}
## NULL
{% endhighlight %}