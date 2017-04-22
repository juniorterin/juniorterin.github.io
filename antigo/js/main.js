/* função de chacoalhar o celular e ser redirecionado */
var myShakeEvent = new Shake({
    threshold: 15, 
    timeout: 1000
});
myShakeEvent.start();
window.addEventListener('shake', shakeEventDidOccur, false);
function shakeEventDidOccur () {
    
    swal({   title: "Tem certeza?",   
      text: "Dá um OK aí para entrar no meu Facebook! Agradeço a estadia e espero que tenha gostado :3",   
      type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   
      confirmButtonText: "OK",
      cancelButtonText: "Nop...",
      closeOnConfirm: false }, 
      function(){   
      window.open('https://www.facebook.com/juniorterin0', '_blank'); });
};

/* menu pra celular */
$( document ).ready(function() {
		$.fatNav();
});

/* analytics */
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-34221412-2', 'auto');
	ga('send', 'pageview');