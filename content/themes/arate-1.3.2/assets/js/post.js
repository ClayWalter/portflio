/*
 * Koenig Editor - Gallery
 * ------------
 */
var images=document.querySelectorAll(".kg-gallery-image img");images.forEach(function(e){var a=e.closest(".kg-gallery-image"),t=e.attributes.width.value/e.attributes.height.value;a.style.flex=t+" 1 0%"});
/*
 * Reframe
 * ------------
 * Version : 2.1.18
 * Website : dollarshaveclub.github.io/reframe.js
 * Repo    : github.com/dollarshaveclub/reframe.js
 * Author  : Jeff Wainwright (@yowainwright)
 * License : MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(-1!==r.className.split(" ").indexOf(n))return;var f=r.offsetHeight/r.offsetWidth*100,d=document.createElement("div");d.className=n;var a=d.style;a.position="relative",a.width="100%",a.paddingTop=f+"%";var s=r.style;s.position="absolute",s.width="100%",s.height="100%",s.left="0",s.top="0",r.parentNode.insertBefore(d,r),r.parentNode.removeChild(r),d.appendChild(r)}}});

/* Custom settings for Reframe */
reframe('.kg-embed-card iframe, .post-wrap iframe');