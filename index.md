---
layout: default
title: Home
---

{% for product in site.shop %}
{% if product.featured %}
<h2>Featured Product: <a href="{{ product.url }}">{{ product.name }}</a></h2>

<div class="featured">
	<img src="/shop/{{ product.images | first }}" alt="{{ product.name }}" /><br/>
	<div class="price">${{ product.price }}</div>
	<button class="buy snipcart-add-item"
			data-item-name="{{ product.name }}"
			data-item-image="/shop/{{ product.images | first }}"
			data-item-id="{{ product.identifier }}"
			data-item-price="{{ product.price }}"
			data-item-url="{{ product.url }}"
			data-item-max-quantity="{{ product.quantity }}">
			Add To Cart
	</button>
	<div style="clear: both;"></div>
</div>
{{ product.excerpt }}
<div style="clear: both;"></div>
<hr />
{% endif %}
{% endfor %}

<h2 class="latest_news">Latest News: <a href="{{ site.posts.last.url }}">{{ site.posts.last.title }}</a></h2>
{{ site.posts.last.date | date_to_string }}

{{ site.posts.last.content }}
