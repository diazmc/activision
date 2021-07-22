$(document).ready(function() {

  let clicked = false;
  let youtubeURL = 'https://www.youtube.com/embed/MQEowg63d9E';

  $('.cta').click(function() {
    $('.modal').addClass('active');
    clicked = true;

    if(clicked) {
      $('.video').attr('src', youtubeURL);
    }
  })

  $('.close').click(function() {
    $('.modal').removeClass('active');
    $('.video').attr('src', '');
  })
})