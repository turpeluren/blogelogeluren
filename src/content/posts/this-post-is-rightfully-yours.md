---
author: turpelurpeluren
pubDatetime: 2024-03-12T13:23:00+01:00
title: This post is rightfully yours
postSlug: this-post-is-rightfully-yours
featured: false
project: false
microblog: false
image: false
draft: true
tags:
  - art
description: Come and claim it!
---
This post currently belongs to:
# turpelurpeluren

But ***you*** can claim it! Fill in your name below and become the rightful owner of this post!

<form class="contactFormBox"
    name="contact"
    netlify-honeypot="bot-field"
    >
    <label><p style="display: inline;">Name: </p><input type="text" name="name" id="name" placeholder="Name"></label><br>
    <label><p style="display: inline;">Website: </p><input type="text" name="website" id="website" placeholder="(Optional) Your website"></label><br>
    <label><p style="display: inline;">Email/@: </p><input type="text" name="email" id="email" placeholder="(Optional) Where can I reach you?"></label>

    <textarea rows="4" cols="50" id="question" name="message" 
placeholder="Anything about this page you would like to change?"></textarea>

    <flexbox id="bottom"><button type="submit" id="send">I hereby claim this page!</button></flexbox>

    <label id="hidden" style="display:none;">Don’t fill this out if you’re human: <input name="bot-field" /></label>
 </form>



<script>
    (function () {
    'use strict';
    // Send to discord webhook
    
    document.getElementById('send').onclick = function() {
        const question = document.getElementById("question") as HTMLTextAreaElement;
        const nameInput = document.getElementById("name") as HTMLInputElement;
        const webInput = document.getElementById("website") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;
        
        var request = new XMLHttpRequest();
        request.open("POST", "https://discordapp.com/api/webhooks/1039221226712875170/COYPEqaVrlKTWCnqrjCPjyea9nlrHi-wdBpvLwXW4VyswzOeNogUbkkVoCuSEu2MdMKK");
        request.setRequestHeader('Content-type', 'application/json');

        // the below variables combine a label (text) + the textarea value + a newline (\n)
        // add up to 2,000 characters (Discord's character limit)
        var name = nameInput.value;
        var web = 'Mail: ' + emailInput.value + "\n";
        var email = 'Website: ' + webInput.value + "\n";
        var message = 'Message: ' + question.value;

        // you have to combine both into one single variable before you can pass it to discord
        var date = new Date();
        var f_date = date.toLocaleDateString('sv-SE');
        var username = name + " " + f_date;
        var msg = email + web + message;

        // play with it a bit until you get a feel for how you want the incoming messages to look!
        var params = {
        // you can set the username to anything you want
            username: username,
            content: msg,
        }

        request.send(JSON.stringify(params));
        // below gives your user some helpful feedback letting them know their message has been sent
        //alert('Thanks, your message has been sent.'); //Handled in netlify AJAX instead
    }