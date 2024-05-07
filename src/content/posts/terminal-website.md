---
author: turpelurpeluren
pubDatetime: 2024-02-03T15:02:00+01:00
title: Terminal Website
postSlug: terminal-website
featured: false
project: true
microblog: false
image: false
draft: false
tags:
  - web
description: A home page in terminal format for my website.
share: "true"
---

## Background
During the autumn I stumpled upon the existence of the VRChat rave scene through an epic Dj set by [woodgraves](https://www.youtube.com/watch?v=ycqykVmylKQ). The aesthetics and the total internetness of the scene mesmerized me, especially that of big VR club SHELTER, whose [posters](https://imgur.com/a/Fed0ln5) I adored. [Their website](https://sheltervr.club), is in terminal format and I thought it was the coolest! I looked through the source code (they even have a little easter egg there) and found that the site was just copied and re-skinned from [Sat Naing](https://terminal.satnaing.dev/) who in turn was inspired by [m4tt72](https://term.m4tt72.com/) and [Forrest](https://fkcodes.com/). There are probably plenty more terminal pages out there, feel free to send them to me! It was also through Sat Naing and his [Astro Paper](https://astro-paper.pages.dev/) theme for Astro that I eventually got working on this blog! 

Obviously I had to create my own terminal page. I didn't do anything fancy, just went with what I knew and html'd and JS'd it with minimal CSS. It is currently the index page of the [turpelurpeluren.online](/posts/turpelurpeluren-online) domain.
## Commands
I am no pro when it comes to the command line and have probably not stuck to conventions when it comes to the commands and arguments etc. These are the commands implemented so far and the list you see when typing `help`.

    about                   - about me and the page  
    cat [file]              - prints contents of a file as text  
    cathtml [file]          - prints contents of a file as a webpage  
    clear                   - clears the screen  
    goto [subpath]          - follows the URL path (from turpelurpeluren.online/)  
    help                    - displays information about builtin commands  
    history                 - view command history  
    index                   - indexes site pages  
    links                   - lists my external links  
    message [name] [cont... - sends me a message  
    welcome                 - displays the boot message

The most interesting (and messy and weird) command is probably `cathtml` which prints an iframe with the contents of a sub page. I like recursion so of course you can print out the terminal page multiple times and use the terminal in multiple layers of itself.

## Link 😸
- https://turpelurpeluren.online

| Backlinks                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- |
| <ul><li>[organizing-ideas](/posts/organizing-ideas)</li><li>[crying-out](/posts/crying-out)</li></ul> |
