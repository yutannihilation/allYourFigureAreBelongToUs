---
layout: archive
permalink: /8/
title: "Page 8"
---

{% for package in site.data.navigation[7].packages %}
<div class="wrap">
   <div class="page-title">
     <a href="{{ site.baseurl }}/{{ package.category }}/"><h1>{{ package.name }}</h1></a>
   </div>
   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {% for post in site.categories[package.category] limit:8 %}
            {% include post-grid.html %}
         {% endfor %}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
{% endfor %}
