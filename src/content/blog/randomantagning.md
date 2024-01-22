---
author: turpelurpeluren
pubDatetime: 2024-01-16T16:54:00+01:00
title: Randomantagning.se
postSlug: randomantagning.se
featured: false
project: true
draft: false
tags:
  - web
description:
  A website for finding random university courses & programs.
---

Back in 2021 while I was "studing" Spanish in Barcelona, me and my friend were looking for what courses to apply for next semester. For context, all university corses and programs are free in Sweden and you apply to them through a central website called [Antagning.se](https://antagning.se). They have many filters and tools to find what's right for you, but me and my friend were not ready to commit to our lifes true path quite yet. What we really wanted was a button that would generate a totally random course from the tens of thousand avaliable. 

Back then we didn't know how an implementation of this was possible, but around a year later, I hacked together [Randomantagning.se](https://randomantagning.se) with the little Javascript I had managed to learn and a python package called [Selenium](https://pypi.org/project/selenium/).

The solution is really sub-optimal and I need to scrape the site every semester (which takes a whole night, and works like a snapshot of the current state of antagning.se) to keep the site updated. At least it has it's own domain and people think its funny. In the future maybe I can find a way to update it dymanically.

Below are some of the best courses I found from spring 2024:

![Some courses from spring 2024](@assets/images/randomantagning_vt24.jpg)

Translates to:
> The horse's senses and behaivors

> Pain in children and youths

> The surface of the eye and dry eyes

> Vampire fiction

> Corruption in politics and management

> Persian percussion tradition