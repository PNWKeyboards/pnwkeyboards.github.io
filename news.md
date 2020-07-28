---
layout: default
title: News
---

{% for post in site.posts %}
<h2>{{ post.title }}</h2>
{{ post.date | date_to_string }}

{{ post.content }}
{% if site.posts.last != post %}<hr />{% endif %}
{% endfor %}
