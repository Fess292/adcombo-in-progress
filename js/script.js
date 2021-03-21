$(document).ready(function(){
    $('.carousel_inner').slick({
        dots: true,
        
        speed: 1000,
        appendArrows: '.arrows-div',
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        responsive: [
          // {
          //   breakpoint: 1200,
          //   accordion("destroy"),
          //   settings: {
          //     accessibility: false,
          //   }
          // },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              
              // slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          },
         
        ]
        // responsive: [
        //     {
        //     breakpoint: 992,
        //     settings: {
        //         arrows: true
        //     }
        // }
        // ]

});
$( '.spoiler_wrapper' ).accordion({
    collapsible:true,
    autoHeight:false,
    icons: {
        header: "ui-icon-zoomin",
        headerSelected: "ui-icon-zoomout"
    },
    closedSign: '<img src="(../img/arrow_down.png"/>',
    openedSign: '<img src="../../images/arrow-down.png"/>'
    
})
$('button').button();
    

});