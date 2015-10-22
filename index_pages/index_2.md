---
layout: archive
permalink: /2/
title: "Page 2"
---

{% for package in site.data.navigation[1].packages %}
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
