﻿// ==UserScript==
// @name	Habr Users Blocker
// @namespace	https://wiki.greasespot.net/Metadata_Block
// @description	Hides sellers, highlights yellow press and hides comments
// @author	bopoh13
// @license	GPL-3.0+; http://gnu.org/licenses/gpl-3.0.txt
// @downloadURL	https://github.com/bopoh13/docs/raw/master/vendor/firefox/habrusers_blocker_gm.user.js
// @homepageURL	https://github.com/bopoh13/docs/tree/master/vendor/firefox
// @supportURL	https://github.com/bopoh13/docs/issues
// @version	1.2.5
// @icon	https://habr.com/images/favicon-32x32.png
// @require	https://dr.habracdn.net/gt/javascripts/1521637170/libs/jquery-1.8.3.min.js
// @include	https://habr.com/*
// @include	https://geektimes.com/*
// @exclude	https://habr.com/company/*
// @exclude	https://habr.com/search/*
// @exclude	https://geektimes.com/search/*
// @exclude	https://habr.com/users/*
// @exclude	https://geektimes.com/users/*
// @grant	none
// @run-at	document-end
// ==/UserScript==
/**
 * По статье "Делаем пространство чище" //geektimes.com/post/272164/#comment_9074942
 */

var fablers = [
  'alizar',
  'andorro',
  'atomlib',
  'Boomburum',
  'ilya42',
  'ivansychev',
  'jeston',
  'krasandm',
  'lozga',
  'marks',
  'ragequit',
  'SLY_G',
  'vconst',
  
  'alconost',
  'Alexandra_Varonis',
  'esetnod32',
  'estet',
  'habrahabr',
  'holymay',
  'LKulakova',
  'Mary_Golubeva',
  'PayOnline',
  'semen_grinshtein',
  'Shapelez',
  'shulyndina',
  'SmirkinDA',
  'YuliaSinyanskaya'
];
var slob = [
  'display_adv',
  'ios_dev',
  'sci-fi'
];
// Only for companies
var pr = [
  'alconost',
  'blog_potok',
  'haysrussia',
  'hosting-cafe',
  'hygger',
  'icanchoose',
  'infobip',
  'JetBrains',
  'miip',
  'mobio',
  'odnoklassniki',
  'plarium',
  'ptsecurity',
  'redmond',
  'regionsoft',
  'superjob',
  'tuturu',
  'varonis',
  'yamoney'
];
/*
  '380365'
  'latimeria'
  'maghamed'
  'nmivan'
*/
// Only for companies
var sellers = [
  '3dtool',
  'arttel',
  'advocam',
  'coptertime',
  'cvetmir3d',
  'dadget',
  'epson',
  'gadgetfreaks',
  'gearbest',
  'itinvest',
  'kingston_technology',
  'maccentre',
  'madrobots',
  'medgadgets',
  'mishiko',
  'mvideo',
  'piter',
  'pocketbook',
  'top3dshop'
];
var wampus = [
  '1MK-Ultra',
  'AlexPu',
  'askv',
  'deNULL',
  'devop-su',
  'dipsy',
  'DrZlodberg',
  'Gnuava',
  'ilyasok',
  'Ilyasyakubov',
  'izhanov',
  'lakegull',
  'mistik_max',
  'odissey_nemo',
  'Olga_Voronova',
  'Sormovich',
  'VenomBlood',
  'Welran',
  'Y1975',
  'yarric'
];
$('.post__user-info').filter(function() {
    return this.href.match(new RegExp('/users/(' + fablers.join('|') + ')/$'));
}).parents('.post').css("background", "#ffe");
$('.hub-link').filter(function() {
    return this.href.match(new RegExp('/hub/(' + slob.join('|') + ')/$'));
}).parents('.post_preview.post').hide();
$('.post__title_link').filter(function() {
    return this.href.match(new RegExp('/company/(' + pr.join('|') + ')/\\w+/\\d+/$'));
}).parents('.post_preview.post').hide();
$('.post__title_link').filter(function() {
    return this.href.match(new RegExp('/company/(' + sellers.join('|') + ')/\\w+/\\d+/$'));
}).parents('.post').css("background", "#def");
$('.user-info_inline.user-info').filter(function() {
    return this.href.match(new RegExp('/users/(' + wampus.join('|') + ')/$'));
}).parents('.comment').html('<div class="comment__message comment__message_banned">РЕДИСКА опубликовала эту надпись здесь</div>');
$('.is_blocked.for_users_only_msg').html(function() {
    return $(this).text().replace(new RegExp('[^\\s\\w,А-яЁё]'), `$& Впрочем, можно <a href="https://${location.hostname}/info/help/registration/#invite">откупиться</a>.`);
});
