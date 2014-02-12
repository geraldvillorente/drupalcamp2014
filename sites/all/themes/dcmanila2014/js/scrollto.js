/**
 * Created by pauldepaula on 2/12/14.
 */

jQuery(document).ready(function(){
    jQuery('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = jQuery(target);

        jQuery('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});

