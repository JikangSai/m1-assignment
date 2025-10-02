(function($){
  $(function(){
    $('#gallery').on('click', 'li img', function(e){
      if($(e.target).closest('.description').length) return;

      var $img = $(this);
      var large = $img.attr('data-large') || $img.attr('src');
      var title = $img.attr('alt') || '';

      $('.box__title').text(title || 'Preview');
      $('.box__body').empty().append($('<img>', { src: large, alt: title }));

      $('.backdrop').css('display','block').animate({opacity:0.5}, 200, 'linear');
      $('.box').fadeIn(150);
    });
    $(document).on('click', '.backdrop, .box__close', function(){
      $('.box').fadeOut(150);
      $('.backdrop').animate({opacity:0}, 200, 'linear', function(){ $(this).hide(); });
    });

  });
})(jQuery);
