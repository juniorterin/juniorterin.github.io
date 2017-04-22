$(document).ready(function() {
    $(window).on('resize', function() {
        $('.box-centralizado-img').matchHeight({
            target: $('.box-centralizado-txt')
        });

        $('#vitrine').css({
            height: $(window).outerHeight()
        })
        
        var windowsize = $(window).width();
        if (windowsize < 768) {
            $('.alimentos-imagem').css({
                height: ($('.alimentos-imagem-mobile').outerHeight() * 0.9)
            })
        }

        else {
            $('.alimentos-imagem').matchHeight({
                target: $('.alimentos-texto')
            });
        }
        $('.tira').css({
        	bottom: -($('.tira').outerHeight() * 0.26)
        });
    }).resize();
    $('#vitrine-carrossel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right' aria-hidden='true'></i>"
        ],
        items: 1,
        responsiveClass: true,
        dots: true,
        responsive: {
            769: {
                nav: true,
                dots: false
            },
        }
    });
})