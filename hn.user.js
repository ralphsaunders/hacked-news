// ==UserScript==
// @name Hacked News
// @match https://news.ycombinator.com/*
// @match http://news.ycombinator.com/*
// @description For a tidier Hacker News
// @version 0.0.1
// ==/UserScript==

var css = '<style type="text/css">'
// Wildcards
+ '* { font-family:Helvetica, Sans-serif }'

// Header
+ 'body { margin:0; } '
+ 'body > center > table > tbody > tr:first-child { color:#47260F }'
+ 'body > center > table > tbody > tr:first-child > td { padding:5px 0 }'
+ 'body > center > table > tbody > tr:first-child > td a:hover { color:#fff }'
+ 'body > center > table > tbody > tr:first-child > td > table { padding:0 5px !important }'
+ 'body > center > table > tbody > tr:first-child > td td:nth-child(2) img { width:28px !important }'
+ 'body > center > table > tbody > tr:first-child > td td:nth-child(2) a { text-transform:capitalize }'

// INDEX
// Body
+ 'body > center > table > tbody > tr:nth-child(3) tr a { color:#262626 }'
+ 'body > center > table > tbody > tr:nth-child(3) tr a:hover { text-decoration:underline }'
+ 'body > center > table > tbody > tr:nth-child(3) tr a:visited { color:#828282 }'
+ 'body > center > table > tbody > tr:nth-child(3) tr > td.title:first-child { visibility:hidden; overflow:hidden; text-indent:-999px }'
+ 'body > center > table > tbody > tr:nth-child(3) tr > td:nth-child(2) > center > a { width:30px; height:16px; display:block }'
+ 'body > center > table > tbody > tr:nth-child(3) tr > td:nth-child(2) > center > a:hover img { opacity:1 }'
+ 'body > center > table > tbody > tr:nth-child(3) tr > td:nth-child(2) img { margin:0 !important; opacity:.5 }'
+ 'body > center > table > tbody > tr:nth-child(3) tr:nth-child(3n) { height:10px !important }'
+ '</style>';

var head = document.getElementsByTagName('head')[0];
head.innerHTML += css;
