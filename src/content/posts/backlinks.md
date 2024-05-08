---
author: turpelurpeluren
pubDatetime: 2024-05-07T17:35:00+01:00
title: Backlinks with Astro and Obsidian
postSlug: backlinks
featured: false
project: false
microblog: false
image: false
draft: false
tags:
  - thoughts
description: How I added backlinks to my site using Astro and Obsidian
share: "true"
---
## Table of contents

**The site now has backlinks!** This is something I've wanted to do for a long time but couldn't quite figure out how to. I was already writing my posts in Obsidian which supports backlinks internally – but the backlinks are not saved within the markdown file itself. With a few Obsidian plugins I've now got the backlinks to render to the document and work on the published website!

## Tech
- The site is built with [Astro](https://astro.build/), a static site generator, which generates html pages from blogposts written in markdown. *(There are many great free themes available with Astro. My site is originally based on the [Astro paper](https://astro-paper.pages.dev/) theme. There are also other static site generators like [Jekyll](https://jekyllrb.com/) , [Hugo](https://gohugo.io/), [Gatsby](https://jamstack.org/generators/gatsby/), [11ty](https://www.11ty.dev/) [etc.](https://jamstack.org/generators/), which would work just as well for this purpose.)*

- Since the blog posts are just plain markdown, I use [Obsidian](https://obsidian.md) to edit them. Obsidian supports backlinks between your 'notes' and has a myriad of great community plugins easily installable from inside the app/program-settings.

- I publish the site to [Github](https://github.com/).

- And it is then deployed via [Netlify](https://www.netlify.com/). Netlify picks up on changes in the Github repo so everything that's pushed is automatically live in a few minutes (if nothing breaks).

#### Obsidian plugins
- [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) is a popular plugin for creating data queries within your vault. This is used to generate a table of the backlinks.

- [Github Publisher](https://github.com/ObsidianPublisher/obsidian-github-publisher) is used to publish the notes straight to Github. This was the key to actually get the backlinks *inside* the document, since it can render Dataview queries as plain markdown.

## Step by step
I copied my 'content' (containing all my markdown posts) folder out of the site repo and made it a new Obsidian vault. In the vault I installed Dataview and Github Publisher.

#### Dataview query
To generate a table of backlinks with Dataview, I use this code at the end of all my posts:
````
``` dataview
table without id link(file.link, title) as Backlinks
where contains(this.file.inlinks, file.link)
sort date desc
```
````

Or a list version which would need a header above it: (Used at the end of this document)
````
``` dataview
list without id link(file.link, title)
where contains(this.file.inlinks, file.link)
sort date desc
```
````

This one generates a table with both backlinks and outgoing links (does not work well if the vault contains files with identical names):
````
``` dataview
table without id link(file.inlinks, file.inlinks.title) as Backlinks, link(file.outlinks, file.outlinks.title) as "Links to"
where file.name = this.file.name
```
````

#### Github Publisher setup
In the settings of the Github Publisher plugin, I set it up with the name of my repository on Github and an access token under the tab 'GitHub config'. 

Under 'File paths' I selected to use the Obsidian Path as file tree (since the folders in my vault are named the same as in the repository) and specified the root folder as the content folder in my repo. 

Under 'Content' i checked `[Wikilinks](Wikilinks.md) to [MDlinks](links)` and in Text Replacer I put the following:
- Replace `/\(/posts//` with `(/posts/`
- Replace `/now/.*\)/` with `/now)`
- Replace `` with nothing, since it was adding a double file extension to my Dataview links for some reason.

**Disclaimer:** These configurations are very specific for my setup and file structure and there is probably a better way for you to do this. Github Publisher has an option to use 'Test mode' which renders the output to a specified folder. I had to fiddle a lot to get all the links to work as they should.

#### Templating
In the Obsidian settings for Templates, under Core plugins, I specified a folder for my templates and added the Dataview backlink query to a file. This can now be added easily to any file.

#### Publishing
All files that should be published by Github Publisher should contain the key `share: true` in the YAML frontmatter. You could change this key or choose to publish all notes in the plugin options. Like so:
```
---
share: true
---
```

To publish a note marked as shared, open the Command palette all the way to the left in Obsidian and choose `GitHub Publisher: Upload single current active note` from within the note.

You can also choose to publish all shared notes at once.

## Using it!
The best thing I got out of this except from the backlinks is that I can publish straight from my phone. Earlier I had to `git push` from my computer every time I updated the blog but thanks to Github Publisher enabled in my phone app I can publish straight from there. With the plugin [Remotely save](https://github.com/remotely-save/remotely-save) I also started to save my files to Dropbox back and forth between my computer and phone. Hello blogging on the bus!!:-)


---
## Backlinks

- [Internet free week](/posts/internet-free-week)

