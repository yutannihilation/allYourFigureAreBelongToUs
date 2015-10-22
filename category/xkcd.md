---
layout: archive
permalink: /xkcd/
title: "package:xkcd"
showAllPosts: true
---

<div class="wrap">

   <nav class="breadcrumbs">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
         <a href="{{ site.baseurl }}" itemprop="url">
            <span itemprop="title">Home</span>
         </a>
          ›
         <a href="{{ site.baseurl }}/xkcd" itemprop="url">
            <span itemprop="title">xkcd</span>
         </a>
      </span>
   </nav>

   <div class="page-title">
     <h1>xkcd</h1>
   </div>

   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {% for post in site.categories.xkcd %}
            {% include post-grid.html %}
         {% endfor %}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
