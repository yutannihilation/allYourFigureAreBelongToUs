---
layout: archive
permalink: /mcmc.otu/
title: "package:MCMC.OTU"
showAllPosts: true
---

<div class="wrap">

   <nav class="breadcrumbs">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
         <a href="{{ site.baseurl }}" itemprop="url">
            <span itemprop="title">Home</span>
         </a>
          ›
         <a href="{{ site.baseurl }}/MCMC.OTU" itemprop="url">
            <span itemprop="title">MCMC.OTU</span>
         </a>
      </span>
   </nav>

   <div class="page-title">
     <h1>MCMC.OTU</h1>
   </div>

   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {% for post in site.categories.mcmc.otu %}
            {% include post-grid.html %}
         {% endfor %}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
