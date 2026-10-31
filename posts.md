---
layout: default
title: Posts
permalink: /posts/
---

# Posts

{% for post in site.posts %}
  {% unless post.hidden %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%B %-d, %Y" }}

{% if post.excerpt %}
{{ post.excerpt | strip_html | truncatewords: 35 }}
{% endif %}

---
  {% endunless %}
{% endfor %}
