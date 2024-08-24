---
author: turpelurpeluren
pubDatetime: 2024-08-24T21:57:00+01:00
title: Bar Total
postSlug: bar-total
featured: true
project: true
microblog: false
image: false
draft: false
tags:
  - web
  - dev
description: Bar Total is live on the www!
share: "true"
---
Bar Total is an all encompassing concept by my friend group which I brought into the www this summer in the form of a webpaper (read: blog). Located at https://bartotal.se, or my favourite https://batotal.digital, the Swedish Gothenburg based journal enables me and my friends (some of which are actual journalists in training) to dabble in the written arts and engage in the cultural sphere.

I learned a lot from building the site and I think the look came out clean and focused. Since it’s been such a fun project I’ve put a lot of time not only in the website but also doing art and “”marketing”” lol. Writing about whatever in Swedish under pseudonyms and in collaboration has also been freeing!

The development went very much in parallel with that of [Ung i Världen](/posts/ung-i-världen), with Bar Total acting as a lower stakes, more minimalistic, lawless testing ground for much the same tech used for Ung i Världen. 

## Tech

The site is built using Astro, based on the [Astro Cactus theme](https://astro.build/themes/details/astro-cactus/) by Chris Williams, and deploys with Netlify. My fellow editors can publish through the Decap Content Management System (formerly Netlify CMS) which integrates easily with Netlify Identity for editor access. I’ve long wanted to make sites for others but couldn’t find a good way combining both total freedom to customise and an easy way for the client to update content, until I found this CMS!

I am proud to have improved on the comment system of this site by adding easy moderation of new comments, with no need to `git push` from my computer. The sites static contents are updated using Netlify functions via a password protected form accessed and populated through a link in the new-comment-notification email. Thanks to GreenAsh’s [amazing article](https://greenash.net.au/thoughts/2022/03/email-based-comment-moderation-with-netlify-functions/) detailing this kid of setup! Netlify really does all the heavy lifting but the system works like a charm and all comments gets happily stored in plain json in the repo and thus will live forever.

Next up is figuring out how to best send emails to the newsletter subscribers at every new post. Since we’re very small I am still storing the mailing-list manually and have been sending plain text emails to notify of new posts. Even though the subscriber numbers most likely will stay very manageable I want to send out good looking html-emails soon.

## Final notes

This project has been and continues to be great fun! It’s great to work creatively with others and so nice to have our own little platform! We are still finding our footing regarding what exactly to write about and really what Bar Total even “is” — a process I am throughly enjoying. As uni is starting I am however grateful the site is working without hassle. Stickers are coming soon!

## Links 😸
- https://bartotal.digital
- https://bartotal.se

We also have a Twitter/X and an Instagram which you can find on the site.