jQuery(document).ready(function($) {


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


});
