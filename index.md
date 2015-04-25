---
layout: archive
permalink: /
title: "Latest Posts"
---

<div class="tiles">
{% for cat in site.categories %}
<div class="page-title">
  <h1>{{ cat[0] }}</h1>
</div>
<div>
{% for post in cat[1] %}
	{% include post-grid.html %}
{% endfor %}
</div>
{% endfor %}
</div><!-- /.tiles -->
