$('.sc').slick(
    {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerPadding: '60px',
        centerMode: true,
        variableWidth: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });