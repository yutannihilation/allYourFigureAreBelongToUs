---
layout: archive
permalink: /
title: "Latest Posts"
---

{% for cat in site.categories %}
<div class="wrap">
   <div class="page-title">
     <h1>{{ cat[0] }}</h1>
   </div>
   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {% for post in cat[1] %}
            {% include post-grid.html %}
         {% endfor %}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
{% endfor %}
