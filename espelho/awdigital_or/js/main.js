

$( document ).ready(function() {
    $('.circulo').hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover') }
);
    $( ".pontos" ).click(function() {
  		$( ".revela-numero" ).removeClass('revela-numero');
  		$( ".pontos" ).addClass('some');
});
    $.fatNav();
});