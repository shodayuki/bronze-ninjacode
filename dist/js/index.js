"use strict";

$(function () {
  var runScroll = function runScroll() {
    $('a[href^="#"]').on('click', function () {
      var speed = 400;
      var href = $(this).attr("href");
      var $target = $(href == "#" || href == "" ? 'html' : href);
      var position = $target.offset().top - 100;
      $('body, html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  };

  var unlockCheckBox = function unlockCheckBox() {
    var $trigger = $('.header__navi a');
    var $target = $('input[type = "checkbox"]');
    $trigger.on('click', function () {
      $target.prop('checked', false);
    });
  };

  runScroll();
  unlockCheckBox();
});