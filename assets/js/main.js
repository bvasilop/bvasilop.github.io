$(function() {
  /*======= Skillset Section =======*/

  $('.level-bar-inner').css('width', '0');

  $(window).on('load', function() {
    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');

      $(this).animate(
        {
          width: itemWidth,
        },
        800,
      );
    });
  });

  /* Bootstrap Tooltip for Skillset Section*/
  $('.level-label').tooltip();

  /* Github Calendar - https://github.com/IonicaBizau/github-calendar
    GitHubCalendar("#github-graph", "bvasilop");*/

  /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
  GitHubActivity.feed({ username: 'bvasilop', selector: '#ghfeed' });

  $('[data-toggle="tooltip"]').tooltip();
  // Added smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Used jQuery's animate() method to add smooth page scroll
      // Used (900) milliseconds for how long it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //Scroll Reveal
});

//added resize function for center
/*const profile = new LI-badge-container.profile.Map(document.getElementById("headshot"),profileProp);
.LI-badge-container.addDomListener(window, "resize", function() {
    var center = profile.getCenter();
    .LI-badge-container.event.trigger(profile, "resize");
    profile.setCenter(center);
});
*/


window.sr = ScrollReveal({ reset: true });
sr.reveal('.header', { duration: 800 });
sr.reveal('.about section', { duration: 1100 });
sr.reveal('.img-circle', { duration: 1800 });
sr.reveal('.header .profile-content .name', { duration: 2100 });
sr.reveal('.header .profile-content .desc', { duration: 2300 });
sr.reveal('.section-inner', { duration: 600 });
sr.reveal('.skills aside section', { duration: 1800 });
sr.reveal('.footer', { duration: 600 });


