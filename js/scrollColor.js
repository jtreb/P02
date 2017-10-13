// scrollColor jQuery
// changing background-color opacity of header
$(document).ready(function() {
  $(window).scroll(function() {
    if ($ (this).scrollTop() > 0) {
      $('.headerBoxDark').css('background-color','rgba(0,0,0,0.9)');
      $('.headerBoxLight').css('background-color','rgba(255,255,255,0.9)');
    } else {
      $('.headerBoxDark').css('background-color','rgba(0,0,0,0)');
      $('.headerBoxLight').css('background-color','rgba(255,255,255,0.9)');
    }
  })
})
