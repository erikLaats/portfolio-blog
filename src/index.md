---
title: "Home"
layout: layout.njk
---

<h1>Welcome to My Blogz</h1>
<p>This is a minimalist personal blog built with Eleventy (11ty).</p>

{% for post in collections.posts %}
- Hi[{{ post.data.title }}]({{ post.url}})
{% endfor %}
