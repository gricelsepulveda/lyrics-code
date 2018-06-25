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
    }
  });
  var neumann = new Waypoint({
    element: document.getElementById('neumann-trigger'),
    handler: function() {
      $('#neumann i.ly-neumann').addClass('active');
      $('#neumann img.ly-section-product-img').addClass('active');
    }
  });
  var se = new Waypoint({
    element: document.getElementById('se-trigger'),
    handler: function() {
      $('#se-electronics img.ly-img-logo-section').addClass('active');
      $('#se-electronics img.ly-section-product-img').addClass('active');
    }
  });
  var glyph = new Waypoint({
    element: document.getElementById('glyph-trigger'),
    handler: function() {
      $('#glyph img.ly-img-logo-section').addClass('active');
      $('#glyph img.ly-section-product-img').addClass('active');
      $('#owc img.ly-img-logo-section').addClass('active');
      $('#owc img.ly-section-product-img').addClass('active');
    }
  });

  //BANNER MARCAS
 
  function moveBrands(){
    var vueltas = document.getElementById('ly-brands-rotator-ul').childNodes.length - 1;
    var manipulator =   document.getElementById('ly-brands-rotator-ul').childNodes[0];
    console.log(manipulator.style.marginLeft);
    manipulator.style.marginLeft = '-'+ -100 +'%';
    console.log(manipulator.style.marginLeft);
  }

  setInterval(moveBrands, 5000);

});
