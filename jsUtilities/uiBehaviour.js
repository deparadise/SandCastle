/// CONTENT FADE BASED ON AN INITIAL PAGE POSITION

var fadeThreshold = null;
var contentFaders = [];
var sliderInterval = null;
clearInterval(sliderInterval);

function initSlideContentFaders (swiper) {
    //console.log('swiper:\n', swiper);
    var container = $(swiper.container);
    var slides = $(swiper.slides);
    // exits
    var exits = $(
        '.tmpl-header-directive-left-nav,' +
        '.home-nav .swiper-container .swiper-slide,' +
        '[gallery-carousel] .swiper-container .swiper-slide .slide-content-wrapper .slide-image-wrapper img'
    );
    // position fadeThreshold
    fadeThreshold = Math.round($(slides[0]).offset()['left']);
    // Confirm
    //console.log('container:\n',container);
    //console.log('slides:\n',slides);
    //console.log('fadeThreshold\n', fadeThreshold);

    // assign fade behavior to each slide content
    slides.each(function(slideIndex){
        var slideContent = $(this).find('.tmpl-carousel-content-container');

        contentFaders.push(
            function () {
                var currentOffset = slideContent.offset()['left'];
                //console.log('slide currentOffset', currentOffset);
                
                // Higher number widens the entry point for opacity fade-in
                var fadeThresholdExpansion = 3;

                var slidePosDiff = Math.round(Math.abs((fadeThreshold - currentOffset) / fadeThresholdExpansion));
                // prevents re-fade by caping slidePosDiff
                if (slidePosDiff > 100) {
                    slidePosDiff = 100;
                }
                //console.log('slidePosDiff', slidePosDiff);

                var opacityLevel = Math.abs((100 - slidePosDiff) / 100);
                //console.log('opacityLevel', opacityLevel);

                slideContent.css('opacity', opacityLevel);
            }
        );
    });
    
    sliderInterval = setInterval(function () {
        // console.log('fade tick...');
        // iterates opacity handle for each slide based on position relative to the fadeThreshold
        contentFaders.forEach(function (handle, i, arr) {
            handle();
        });
    },50);

    // cancels interval on template exits click
    exits.each(function(i) {
        $(this).click(function(){
            clearInterval(sliderInterval);
            //console.log('exit has been clicked!');
        });
    });
} // END initSlideContentFaders

if (currentDevice === 'iPad') {
    initSlideContentFaders(swiper); // using swiper carousel plugin for support reffrence http://idangero.us/swiper/api/#.VtdKyN-rRTZ
}