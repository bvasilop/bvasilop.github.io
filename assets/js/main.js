/**
 * Register ServiceWorker Section.
 */

// Register service worker after the page has been completely loaded
if ('serviceWorker' in navigator) {

  window
    .addEventListener('load', function () {
      navigator
        .serviceWorker
        .register('/assets/js/sw.js')
        .then(() => console.log('SW is registered!'));
      //.catch(function() {  console.log('Registration failed!');

    });
}

//Scroll Reveal
window.sr = ScrollReveal({reset: true});
// sr.reveal('a', { duration: 1100 }); sr.reveal('h2', { duration: 1000 });
// sr.reveal('p', { duration: 1200 }); sr.reveal('h3', { duration: 1000 });
// sr.reveal('li', { duration: 1000 });
sr.reveal('.header', {duration: 800});
//sr.reveal('.about section', { duration: 1100 });
sr.reveal('.img-circle', {duration: 1800});
sr.reveal('.header .profile-content .name', {duration: 2100});
sr.reveal('.header .profile-content .desc', {duration: 2300});
// sr.reveal('.section-inner', { duration: 600 }); sr.reveal('.skills aside
// section', { duration: 1800 }); sr.reveal('.footer', { duration: 600 });

/**** auto current year ****/
function currentYear() {
  const date = new Date();
  //console.log(date);
  let year = date.getFullYear();
  //console.log(year);

  document
    .getElementById('currentYear')
    .innerText = year;
}
currentYear();

$(function () {
  /*======= Skillset Section =======*/

  $('.level-bar-inner').css('width', '0');

  $(window).on('load', function () {
    $('.level-bar-inner')
      .each(function () {
        var itemWidth = $(this).data('level');

        $(this).animate({
          width: itemWidth
        }, 800,);
      });
  });

  /* Bootstrap Tooltip for Skillset Section*/
  $('.level-label').tooltip();

  /* Github Calendar - https://github.com/IonicaBizau/github-calendar
    GitHubCalendar("#github-graph", "bvasilop");*/

  /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
  GitHubActivity.feed({username: 'bvasilop', selector: '#ghfeed'});

  $('[data-toggle="tooltip"]').tooltip();
  // Added smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Used jQuery's animate() method to add smooth page scroll Used (900)
      // milliseconds for how long it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash)
          .offset()
          .top
      }, 1000, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
});
