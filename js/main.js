( function ($) {

    $(window).on("scroll", function () {
    
        var isScrolled = true;
        
        $(".header").css({
            "box-shadow": "0 0 0.75em #dedede"
        });
        
        // remove the header animation 1 sec after scrolling
        setTimeout( function(){
        
            isScrolled = false;
            
            if (!isScrolled) {
                $(".header").css({
                    "box-shadow": "0 0 0.25em #dedede"
                });
            }
        
        }, 1000 );
        
    });

} (jQuery) );
