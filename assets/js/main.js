$(document).ready(function() {


// Add jQuery here


$(".main_square:contains('content')").html(function(_, html) {
   return html.replace(/(content)/g, '<span class="blue">$1</span>');
});

$(".main_square:contains('form')").html(function(_, html) {
   return html.replace(/(form)/g, '<span class="red">$1</span>');
});

$(".main_square:contains('form')").html(function(_, html) {
   return html.replace(/(design)/g, '<span class="red">$1</span>');
});

$('.menu').click(function() {
$('.nav').toggleClass('showme');
});

/* email function on home page */
$(function () {
   $('.author').on('click', function (event) {
      event.preventDefault();
   var email = 'ergre4@student.monash.edu';
   var subject = 'Hello!';
   window.location = 'mailto:' + email + '?subject=' + subject + '&body=';
   });
});

$(function () {
   $('.suggest').on('click', function (event) {
      event.preventDefault();
   var email = 'ergre4@student.monash.edu';
   var subject = 'Hello!';
   window.location = 'mailto:' + email + '?subject=' + subject + '&body=';
   });
});

/* info button all*/
   $('.info').on('click', function (event) {
      event.preventDefault();
      $('.info_text').toggleClass('show_info');
   }, function(event) {
      event.preventDefault();
      $('.info_text').toggleClass('show_info');
   });

/* spec main images */
   $('.page1a').hover(function() {
      $('.hi1').toggleClass('show_img');
   }, function() {
      $('.hi1').toggleClass('show_img');
   });

   $('.page2a').hover(function() {
      $('.hi3').toggleClass('show_img');
   }, function() {
      $('.hi3').toggleClass('show_img');
   });

   $('.page3a').hover(function() {
      $('.hi2').toggleClass('show_img');
   }, function() {
      $('.hi2').toggleClass('show_img');
   });

/* spec main footnotes */
   $('.page1a').hover(function() {
      $('.f1').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f1').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

   $('.page2a').hover(function() {
      $('.f3').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f3').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

   $('.page3a').hover(function() {
      $('.f2').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f2').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
    });












  });
