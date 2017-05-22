(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#video-modal', '#video-iframe');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '33.8646783,-84.4668918', '33.8646783,-84.4668918');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    items: 1,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>'
    ]
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-associations-carousel', {
    nav: false,
    items: 2,
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-review-carousel', {
    items: 1,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:false,
    nav: true,
    dots: false,
    margin: 40,
    navText: [
      '<img src="assets/review-arrow.png"/>',
      '<img src="assets/review-arrow__next.png"/>'
    ],
    responsive: {
      768: {
        items: 2,
        dots: true
      },
      992: {
        items: 3,
        dots: true
      }
    }
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');



}(jQuery, HelloWorldDevsTysonSteele));

