"use strict";

$('.menu').on('click', function () {
  $('.nav--list').toggleClass('none-sm');
  setTimeout(function () {
    $('.nav--list').toggleClass('active');
  }, 300);
});
//# sourceMappingURL=all.js.map
