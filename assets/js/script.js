$('body').fadeIn('slow');
document.addEventListener("DOMContentLoaded", function(event){
  $('#logo123').append('<iframe id="logoframe" src="logo.html"></iframe>')
  // your code here

    setTimeout(function() {
      $(".intro > header").fadeTo("slow", 1);
      setTimeout(function() { $("#shape1").fadeTo("fast", 0.1) }, 0)
      setTimeout(function() { $("#shape2").fadeTo("fast", 0.1) }, 0)
      setTimeout(function() { $("#shape3").fadeTo("fast", 0.1) }, 0)
      setTimeout(function() { $("#shape4").fadeTo("fast", 0.1) }, 0)

      setTimeout(function() {
        $('#wrapper::before').addClass('hover')
        $("#shape4").addClass('hover')

        setTimeout(function() {
          $("#shape2").addClass('hover')
          $("#shape4").addClass('hover')
        }, 600)

        setTimeout(function() {
          $("#shape3").addClass('hover')
          $("#shape2").addClass('hover')
          $("#perspek").addClass('hover')
          $('#adress').fadeIn('fast')
          $('#wrapper').before().fadeIn('fast')
        }, 200)
        setTimeout(function () {
          $("#shape2").removeClass('hover')
        },1400)

      }, 100)

      setTimeout(function () {
        $('#shape3').removeClass('hover');

        setTimeout(function() {
          $("#perspek").removeClass('hover')
        }, 100)

        setTimeout(function() {
          $("#shape4").removeClass('hover')
        }, 600)

      },1400)

      if ($(window).width() === 1152 || $(window).width() < 1152) {
        setTimeout(function() {
          $('html, body').animate({
            scrollTop: (0, window.innerHeight / 1)
          }, 1000);
        }, 2300)
      }

    }, 1400)

});
var lastscroll;
window.onscroll = function (e) {
  var speedX = 0.021;
  var speedY = 0.021;
  var pos = $('#bglayer').css('background-position').split(' ');
  var posX = pos[0].substring(0, pos[0].length - 1);
  var posY = pos[1].substring(0, pos[1].length - 1);
  if (lastscroll) {
    if (lastscroll > e.pageY){
      if (Math.sign(posX) === -1){
        var posX = parseFloat(posX) - speedX
      }else {
        var posX = parseFloat(posX) + speedX
      }
      if (Math.sign(posY) === -1){
        var posY = parseFloat(posY, 10) - speedY
      }else {
        var posY = parseFloat(posY, 10) - speedY
      }
    }else {
      if (Math.sign(posX) === -1){
        var posX = parseFloat(posX) - speedX
      }else {
        var posX = parseFloat(posX) + speedX
      }
      if (Math.sign(posY) === -1){
        var posY = parseFloat(posY, 10) - speedY
      }else {
        var posY = parseFloat(posY, 10) + speedY
      }
    }
    lastscroll = e.pageY;
  }else {
    lastscroll = e.pageY;
  }
  $('#bglayer').css('background-position', '' + posX + '%' + ' ' + posY + '%' + '');
}
