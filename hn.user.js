// ==UserScript==
// @name Hacked News
// @match https://news.ycombinator.com/*
// @match http://news.ycombinator.com/*
// @description For a tidier Hacker News
// @version 0.0.1
// ==/UserScript==

var css = '<style type="text/css">'
+ 'body { margin:0; } '
+ 'body > center > table > tbody > tr:first-child > td { padding:5px 0 }'
+ 'body > center > table > tbody > tr:first-child > td > table { padding:0 5px !important }'
+ 'body > center > table > tbody > tr:first-child > td td:nth-child(2) img { width:30px !important }'
+ '</style>';

var head = document.getElementsByTagName('head')[0];
head.innerHTML += css;
