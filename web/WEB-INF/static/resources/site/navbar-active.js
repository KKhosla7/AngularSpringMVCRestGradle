/**
 * Created by karan.khosla on 3/13/14.
 */


$(document).ready(function () {
    $('.nav li a').click(function (e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});
