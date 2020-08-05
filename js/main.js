$(function(){


    $('.services__sliader').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="services__arrow services__arrow--prev slick-prev">назад</button>',
        nextArrow: '<button type="button" class="services__arrow services__arrow--next slick-next">след</button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                dots: true,
              }
            }
          ]
    });

    $('.header__btn').on('click', function(){
        $('.firstline__menu').slideToggle();
      });


  });