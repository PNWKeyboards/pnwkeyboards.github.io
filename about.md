---
layout: default
title: About
start_date: 2017-01-01
---

{% assign today = site.time | date: '%Y' %}
{% assign start = page.start_date | date: '%Y' %}
{% assign years = today | minus: start %}

![Me](/assets/images/me.jpeg){:.about_image}

## Pacific Northwest Keyboards

We are a small shop in the Pacific Northwest (PNW) dedicated to bringing
mechanical keyboards to everyone. We have {{ years }} years of experience
designing and creating unique mechanical keyboard PCBs.

We create components that are customizable. Everyone is different
and prefers their own personal typing habits. The end results are components
with snappable sections, exchangeable daughter boards, hot-swap switch socket
support, etc.

We create cost-friendly keyboards. A trope in the mechanical keyboard community
is to choose between rent and a keyboard. At PNWKeyboards, we make affordable
keyboard components in order for _everyone_ to enjoy typing.

## Contact

We have many different methods of contact using social media platforms. We
currently use&nbsp;
{%- for social in site.data.social -%}
{%- assign cap_a = social.name | capitalize -%}
{%- assign a = '<a href="' | append: social.href | append: '" target="_new">' | append: cap_a | append: '</a>' -%}

{%- if social == site.data.social.first -%}
	{{ a }}
{%- elsif social == site.data.social.last -%}
	{{ ', and ' | append: a }}
{%- else -%}
	{{ ', ' | append: a }}
{%- endif -%}

{%- endfor -%}
. Click on the links to the left or below on the website footer to contact us
on your preferred social platform. We will try to reply as soon as possible.

<div style="text-align: center;">
<social>
	{% for icon in site.data.social %}
	<a class="{{ icon.name }}" href="{{ icon.href }}" title="{{ icon.tooltip }}" target="_new">
		<img src="/assets/images/fontawesome/{{ icon.name }}.svg" />
	</a>
	{% endfor %}
</social>
</div>

## Policies

We offer a **30 day** return policy for **defective items**. Please contact us
and we will attempt to make things right, but please be patient; we are a small
shop.

We will work hard to help you with any technical issues that may arise.

## Website

We attempted to make an accessible, fast, and responsive website. If there are
ways to improve the site, please make a pull request against the [Github Repository][website_repo].
We welcome any improvements, especially for accessibility!

Here are a few more interesting facts about the website:
- PNWKeyboards is hosted via [Github Pages](https://pages.github.com/){:target="_new"}.
- The source code for the website can be found in our [Github Repository][website_repo]{:target="_new"}.
- The website itself is created using a custom [Jekyll](https://jekyllrb.com/) theme.
- The website is licensed under the [MIT License]("https://github.com/dnlglsn/dnlglsn.github.io/blob/master/LICENSE"){:target="_new"}.
- We use [Snipcart](https://snipcart.com/){:target="_new"} for the online store, shopping cart, and payment service.

[website_repo]: https://github.com/PNWKeyboards/pnwkeyboards.github.io  "Github Repository"
