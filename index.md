---
layout: archive
permalink: /
title: "Home"
---

{% for cat in site.categories %}
<div class="wrap">
   <div class="page-title">
     <a href="{{ site.baseurl }}/{{ cat[0] }}/"><h1>{{ cat[0] }}</h1></a>
   </div>
   <div class="archive-wrap">
      <div class="page-content">
         <div class="tiles">
         {% for post in cat[1] limit:8 %}
            {% include post-grid.html %}
         {% endfor %}
         </div><!-- /.tiles -->
      </div><!-- /.page-content -->
   </div><!-- /.archive-wrap -->
</div><!-- /.wrap -->
{% endfor %}
