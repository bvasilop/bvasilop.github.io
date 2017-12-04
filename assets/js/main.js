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
sr.reveal('.header', { duration: 900 });
sr.reveal('.about section', { duration: 1200 });
sr.reveal('.img-circle', { duration: 2000 });
sr.reveal('.header .profile-content .name', { duration: 2300 });
sr.reveal('.header .profile-content .desc', { duration: 2500 });
sr.reveal('.section-inner', { duration: 700 });
sr.reveal('.skills aside section', { duration: 2000 });
sr.reveal('.footer', { duration: 700 },50);



