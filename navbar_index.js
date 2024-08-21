$(document).ready(function () {
    
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
  
        // Close the navbar after clicking a link if in mobile view
        if ($(".navbar-toggle").is(":visible")) {
          $(".navbar-toggle").click();
        }
      }
    });
  
    // Close the navbar when clicking outside of it
    $(document).click(function (event) {
      var clickOver = $(event.target);
      var opened = $(".navbar-collapse").hasClass("in"); // Check if the navbar is open
      if (opened && !clickOver.closest('.navbar').length) {
        // Close the navbar if a click occurs outside of it
        $(".navbar-toggle").click();
      }
    });
  
    // Trigger slide animation on scroll
    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
      });
    });
  });
  