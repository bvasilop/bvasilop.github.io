$(function() {


    /*======= Skillset Section =======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset Section*/
    $('.level-label').tooltip();




    /* Github Calendar - https://github.com/IonicaBizau/github-calendar
    GitHubCalendar("#github-graph", "bvasilop");*/


    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "bvasilop", selector: "#ghfeed" });

    //Scroll Reveal


});


window.sr = ScrollReveal({ reset: true });
sr.reveal('.header', { duration: 700 });
sr.reveal('.about section', { duration: 1200 });
//sr.reveal('.container sections-wrapper', { duration: 800 });
//sr.reveal('.latest section', { duration: 900 });
sr.reveal('.section-inner', { duration: 600 });
sr.reveal('.skills aside section', { duration: 2000 });
sr.reveal('.footer', { duration: 600 });



