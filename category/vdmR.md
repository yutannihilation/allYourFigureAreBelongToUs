---
layout: archive
permalink: /vdmr/
title: "package:vdmR"
showAllPosts: true
---

<div class="wrap">

   <nav class="breadcrumbs">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
         <a href="{{ site.baseurl }}" itemprop="url">
            <span itemprop="title">Home</span>
         </a>
          ›
         <a href="{{ site.baseurl }}/vdmR" itemprop="url">
            <span itemprop="title">vdmR</span>
         </a>
      </span>
   </nav>

   <div class="page-title">
     <h1>vdmR</h1>
   </div>

   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {% for post in site.categories.vdmr %}
            {% include post-grid.html %}
         {% endfor %}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
