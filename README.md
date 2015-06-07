All Your Figure Are Belong To Us
==============================

## Overview

There are a lot of packages that make [ggplot2](https://github.com/hadley/ggplot2) more powerful. But, unfortunately,
we cannot know what kind of nice visualizations will be possible with a package WITHOUT INSTALLING IT! It's annoying.

This repository is an attempt to create a gallery where we can see example charts by ggplot2-related packages at a glance.

## How to Build Github Pages

### Requirements

* [Jekyll](http://jekyllrb.com/)
* [knitr](https://github.com/yihui/servr)
* [docopt.R](https://github.com/docopt/docopt.R)

### Procedure

To build this website, there are six steps:

1. List up package names in [packages.txt](https://github.com/yutannihilation/allYourFigureAreBelongToUs/blob/gh-pages/packages.txt) and install those packages.
2. Generate Rmarkdown files by `make generate`. This executes  [generateRmd.r](https://github.com/yutannihilation/allYourFigureAreBelongToUs/blob/gh-pages/generateRmd.r) for all packages written in packages.txt.
3. Knit markdown files by `make knit`. This executes [knit.r](https://github.com/yutannihilation/allYourFigureAreBelongToUs/blob/gh-pages/knit.r) for all Rmarkdown files.(This script is a forked version of [build.R in knitr-jekyll](https://github.com/yihui/knitr-jekyll/blob/gh-pages/build.R))
4. Build HTML files by `make build` or `bundle exec jekyll build`
5. Check the result by `make serve` or `bundle exec jekyll serve` and browse http://localhost:4000/
6. Commit and push changes by `make push`.

## How to Contribute

Please feel free to create Issues, for example, when you want me to include some other packages.

## Design Theme

[Skinny Bones](http://mmistakes.github.io/skinny-bones-jekyll/) is a nice design theme distributed under the MIT License.
