app.controller('HomeCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   $scope.pageClass = 'inicio';
   $(function(){
        $(".h1 span").typed({
            strings: ["Oie!", "Olar!", "Bem vindo^1000!"],
            typeSpeed: 50,
			startDelay: 1000,
			smartBack: true
        });
		$(".texto")
			.blast({ delimiter: "word" })
			.velocity("transition.slideRightIn", { 
			display: null,
			duration: 500,
			stagger: 10,
			delay: 0
		});
    });
});

app.controller('EuCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   $scope.pageClass = 'eu';
      $(function(){
        $(".h1 span").typed({
            strings: ["Eu por eu mesmo.", "Sobre mim."],
            typeSpeed: 50,
			startDelay: 500
        });
		$(".texto")
			.blast({ delimiter: "word" })
			.velocity("transition.slideRightIn", { 
			display: null,
			duration: 500,
			stagger: 10,
			delay: 0
		});
    });
});

app.controller('HabilidadesCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   $scope.pageClass = 'habilidades';
	      $(function(){
        $(".h1 span").typed({
            strings: ["Skills.", "~aptidões~", "Habilidades."],
            typeSpeed: 50,
			startDelay: 500
        });
		$(".texto")
			.blast({ delimiter: "word" })
			.velocity("transition.flipXIn", { 
			display: null,
			duration: 5000,
			stagger: 10,
			delay: 0
		});
    });
});

app.controller('ProjetosCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   $scope.pageClass = 'projetos';
	      $(function(){
        $(".h1 span").typed({
            strings: ["W.I.P. ♥", "Projetos."],
            typeSpeed: 50,
			startDelay: 500
        });
		$(".texto")
			.blast({ delimiter: "word" })
			.velocity("transition.slideRightIn", { 
			display: null,
			duration: 500,
			stagger: 10,
			delay: 0
		});
    });
});
 
app.controller('ContatoCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   $scope.pageClass = 'contato';
	      $(function(){
        $(".h1 span").typed({
            strings: ["Keep on touch.", "Me liga.", "Me manda um telegrama.", "Contato."],
            typeSpeed: 50,
			startDelay: 500
        });
		$(".texto")
			.blast({ delimiter: "word" })
			.velocity("transition.slideRightIn", { 
			display: null,
			duration: 500,
			stagger: 10,
			delay: 0
		});
    });
});