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
});
