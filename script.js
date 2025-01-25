
      AOS.init();

      // Carousel Initialization
      $(document).ready(function () {
        $(".carousel").slick({
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        });
      });

      // Contact Form Validation
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          Swal.fire(
            "¡Gracias por tu mensaje!",
            "Nos pondremos en contacto pronto.",
            "success"
          );
        });

      // Initialize Slick Carousel
      $("#testimonialCarousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      });
  