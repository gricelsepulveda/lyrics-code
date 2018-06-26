//SCROLL THIRDPARTY SOLUTION
function no_scrollbody() {
  $html = $('html');
  $body = $('body');
  var initWidth = $body.outerWidth();
  var initHeight = $body.outerHeight();

  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];
  $html.data('scroll-position', scrollPosition);
  $html.data('previous-overflow', $html.css('overflow'));
  $html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  var marginR = $body.outerWidth() - initWidth;
  var marginB = $body.outerHeight() - initHeight;
  $body.css({
    'margin-right': marginR,
    'margin-bottom': marginB
  });
}

function scrollbody() {
  $html = $('html');
  $body = $('body');
  $html.css('overflow', $html.data('previous-overflow'));
  var scrollPosition = $html.data('scroll-position');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  $body.css({
    'margin-right': 0,
    'margin-bottom': 0
  });
  $("body, html").css({
    "overflow-x": 'hidden'
  });
}

$(document).ready(function () {
  //MOBILE MENU
  $('button.ly-button-mob').click(function(){
    console.log('entre');
    if ($('nav.ly-main-nav .flex').hasClass('active')) {
      $('nav.ly-main-nav .flex').removeClass('active');
    }
    else {
      $('nav.ly-main-nav .flex').addClass('active');
    }
  });
  $('nav.ly-main-nav .flex a').click(function(){
    $('nav.ly-main-nav .flex').removeClass('active');
  });

  //TRIGGERS ANIMATIONS 
  var diamond = new Waypoint({
    element: document.getElementById('diamond-trigger'),
    handler: function() {
      $('#diamond img.ly-img-logo-section').addClass('active');
      $('#diamond img.ly-section-product-img').addClass('active');
      this.destroy();
    }
  });
  var neumann = new Waypoint({
    element: document.getElementById('neumann-trigger'),
    handler: function() {
      $('#neumann i.ly-neumann').addClass('active');
      $('#neumann img.ly-section-product-img').addClass('active');
      this.destroy();
    }
  });
  var se = new Waypoint({
    element: document.getElementById('se-trigger'),
    handler: function() {
      $('#se-electronics img.ly-img-logo-section').addClass('active');
      $('#se-electronics img.ly-section-product-img').addClass('active');
      this.destroy();
    }
  });
  var glyph = new Waypoint({
    element: document.getElementById('glyph-trigger'),
    handler: function() {
      $('#glyph img.ly-img-logo-section').addClass('active');
      $('#glyph img.ly-section-product-img').addClass('active');
      $('#owc img.ly-img-logo-section').addClass('active');
      $('#owc img.ly-section-product-img').addClass('active');
      this.destroy();
    }
  });

  //BANNER MARCAS
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.outerWidth < 480 ) {
  }
  else {
    var slides = document.getElementsByClassName('ly-brands-rotator')[0].childNodes.length - 1;
    var times = slides * -530;
    var element = document.getElementsByClassName('ly-slide-brand-rotator')[0];
    
    setInterval(function(){
      if ( element.offsetLeft = 0 || element.offsetLeft != times){
        //AVOID WEIRD NUMBERS OUTSIDE RANGE WHEN USER CLICKS SLIDER NAVIGATION BUTTONS BETWEEN CYCLES
        if ( element.offsetLeft = 0 || element.offsetLeft % 530 == 0){
          element.style.marginLeft = element.offsetLeft - 530 + 'px';
          var indicator = Math.abs(element.offsetLeft / 530) + 1; 
          var buttons = document.getElementsByClassName('ly-rotator-brand-button');
          $('.ly-rotator-brand-button').removeClass('active');
          $(buttons[indicator]).addClass('active');
        }
        else {  
        }
      }
      else {
        element.style.marginLeft = 0 + 'px';
        var buttons = document.getElementsByClassName('ly-rotator-brand-button');
        $('.ly-rotator-brand-button').removeClass('active');
        $(buttons[0]).addClass('active');
      }
    }, 2000)  
  }
  $('.ly-rotator-brand-button').click(function(){
    $('.ly-rotator-brand-button').removeClass('active');
    $(this).addClass('active');
    var clicked = $(this).index();
    var element = document.getElementsByClassName('ly-slide-brand-rotator')[0];
    element.style.marginLeft = clicked * -530 + 'px';
  })
});
