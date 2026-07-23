---
author: turpelurpeluren
pubDatetime: 2026-07-23T18:23:00+01:00
title: Online bar 🍺
postSlug: bar
featured: true
project: true
microblog: false
image: true
draft: false
tags:
  - web
  - dev
  - projects
  - beer
description: Enjoy a beer and have a chat with some lovely people at bar.turpelurpeluren.online!
share: "true"
---
Enjoy a beer and have a chat with some lovely people at [bar.turpelurpeluren.online](https://bar.turpelurpeluren.online)!

<a href="https://bar.turpelurpeluren.online">![Bar turpelurpeluren](@assets/images/kellys.jpg)</a>

## 🍺 What is this?
The bar is a live chat app i designed over the summer holidays as a fun project. People connecting get their own beer that they can drink while using the chat below. The live chat messages that u send can only be read by people that are online at the same time.

The very lovely table is borrowed from my favourite bar located in my hometown Gothenburg, Sweden, called Kellys (also pictured above).

I wanted to create a [third place](/posts/third-place) online where strangers can meet and have a rest from our busy world.

## 👾 Tech
I used [excalibur.js](https://excaliburjs.com/) for the beer table and websockets for the live chat. It was fun to experiment and create a simple protocol to sync drink levels across all connections. Since it is very unusual for two random people to be connected at the same time, I also added a guestbook (click the receipt) where messages can be left for the future, using a PostgreSQL database. For the web server I rented a droplet from Digital Ocean, thinking I could use my free GitHub student credits which they now discontinued and invalidated a month later:( I guess we'll see how long this project gets to live on for...

## Link 😽
- https://bar.turpelurpeluren.online