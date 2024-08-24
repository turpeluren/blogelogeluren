---
author: turpelurpeluren
pubDatetime: 2024-08-24T23:18:00+01:00
title: Ung i Världen
postSlug: ung-i-världen
featured: false
project: false
microblog: false
image: false
draft: false
tags:
  - dev
  - web
description: Development of the website for EU youth organisation Ung i Världen.
share: "true"
---
Ung i Världen is a EU-funded non-profit organisation empowering Swedish youth to explore the development sector, the aid industry and global careers. Basically it is a platform for youth who want to be a part in making the world a better place.

Since one of the founders of Ung i Världen is a close friend of mine, I volunteered to make the [website](https://ungivarlden.se). For both the challenge and merits of making an “actual” site, and to just help out with a good cause.

The development went very much in parallel with that of [Bar Total](/posts/bar-total), which came to act as a lower stakes, more minimalistic, lawless testing ground for much the same tech used for Ung i Världen. 

## Tech

The site is built using Astro, based on the free [AstroWind theme](https://astro.build/themes/details/astrowind/) by onwidget, and deploys with Netlify. My client editors can publish through the Decap Content Management System (formerly Netlify CMS) which integrates easily with Netlify Identity for editor access. I’ve long wanted to make sites for others but couldn’t find a good way combining both total freedom to customise and an easy way for the client to update content, until I found this CMS!

New members sign up using a form on the site which is hooked up to Netlify forms and sends an email on new submissions. My novice developer friend almost had the submissions hook up straight to a google spreadsheet and if I had more time to work on the project, this would definitely be a priority.

Another priority would probably be some basic level of search engine optimisation. I don’t think the site even shows up on googling “Ung i världen” so it really needs to be added to some indexes for potential members to even find the site they are looking for. This is easy to fix however when I have the time.

## Evaluation

With the help of my family members, a small amount of user experience evaluation was conducted which informed me of some caveats in the website flow as well as some confusion regarding both the nature of the organisation and the different types of member applications. Some of this boils down to the sites copy, which since testing its editors has made clearer on a few points. I also received detailed instructions from the client on how to organise the site, some of which I would have laid up differently to ease the flow of information for the user. (E.g. linking quicker to the about page)

## Final notes

This project has been really valuable for me in working with an actual client with demands and producing a professional looking website. We were obviously a really small team (I developed the site in close collaboration with my founder friend who started learning to code along the way, going of design mock-ups by another founder) and didn’t have a lot of resources or experience but we managed to make something I’m proud of. In retrospect, me and the client could have cleared up some of the demands a bit earlier, as well as communicated more tightly along the way, but now I’ve done my first work as “consultant hired by an organisation to make a website“ (except I was paid 0 of the \$\$\$ a web dev earns).

A lot of my work on this site came down to the front end design, which I find quite fun to work on. The look really went from corporate SaaS site to youthful organisation in a way I’m very happy about! I am also very particular with the details and have spent way to long fixing small CSS issues etc. Please let me know if you find any problems with the site!

## Link 😸
- https://ungivarlden.se


---
## Backlinks

- [Bar Total](/posts/bar-total)
