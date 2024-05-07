---
author: turpelurpeluren
pubDatetime: 2024-03-18T17:00:00+01:00
title: Randomantagning.se update
postSlug: random-rewrite
featured: false
project: false
microblog: true
image: false
draft: false
tags:
  - web
description: Updated my web scraper for randomantagning.se.
share: "true"
---

Slightly updated my web scraping methods for [randomantagning.se](/posts/randomantagningse). [Chromedriver-autoinstaller](https://pypi.org/project/chromedriver-autoinstaller/) finally let me run the scraper script without having to download a new driver for Chrome every time. I am now saving to JSON files and importing them with [webpack](https://webpack.js.org/) instead of writing to a text file and copy the contents into a massive array in my Javascript (which webpack now does for me). The scraper can now be run with command line arguments of which semesters to download. 

I have also switched hosting from [Neocities](https://neocities.org/) to [Netlify](https://www.netlify.com/) (same as this site) because it's free, even though supporting neocities was nice. 

Next step is importing the JSON data more dynamically/lazily to avoid the slow page load. 

| Backlinks                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------- |
| <ul><li>[randomantagningse](/posts/randomantagningse)</li><li>[now2024-03-18](/now)</li></ul> |
