// ==UserScript==
// @name Hacked News
// @match https://news.ycombinator.com/*
// @match http://news.ycombinator.com/*
// @description For a tidier Hacker News
// @version 0.0.1
// ==/UserScript==

var css = '<style type="text/css">'
// Wildcards
+ '* { font-family:Helvetica, Sans-serif !important }'

// Header
+ 'body { margin:0; } '
+ 'body > center > table > tbody > tr:first-child { color:#47260F }'
+ 'body > center > table > tbody > tr:first-child > td { padding:5px 0 }'
+ 'body > center > table > tbody > tr:first-child > td a:hover { color:#fff }'
+ 'body > center > table > tbody > tr:first-child > td b a { margin-left:1px }'
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

// ITEM
// Item Link
+ 'body > center > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > center > a > img { margin:0 }'
+ 'body > center > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > center > a { width:23px; display:block }'

// Comments
+ 'body > center > table > tbody > tr:nth-child(3) tr > td[valign=top] > center > a { width:10px; padding:3px 6px 0 0 }'
+ '.comment { max-width:400px; line-height:1.4; display:block }'
+ '.comment p { margin:1em 0 0 0 }'
+ '.default > div { margin-bottom:-6px !important }'

// PROFILE
// Form
+ 'body > center > table > tbody > tr:nth-child(3) form tbody > tr > td:first-child { padding-left:26px }'

// END OF CSS
+ '</style>';

var head = document.getElementsByTagName('head')[0];
head.innerHTML += css;
