---
layout: archive
permalink: /xkcd/
title: "package:xkcd"
showAllPosts: true
---

<div class="wrap">
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
