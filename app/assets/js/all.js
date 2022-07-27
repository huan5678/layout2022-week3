$('.menu').on('click', () => {
  $('.nav--list').toggleClass('none-sm');
  setTimeout(() => {
    $('.nav--list').toggleClass('active');
  }, 300);
});
