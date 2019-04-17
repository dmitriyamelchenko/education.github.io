// ------------- VARIABLES ------------- //
    var ticking = false;
    var isFirefox = (/Firefox/i.test(navigator.userAgent));
    var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
    var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    var slideDurationSetting = 600; //Amount of time for which slide is "locked"
    var currentSlideNumber = 0;
    var totalSlideNumber = $(".background").length;


/////// for future navigation on mobile devices
// let  startTouchY = 0;
// let  endTouchY = 0;
//  window.addEventListener('ontouchstart', (evt) => {
//    startTouchY = evt.clientY;
//  });
// window.addEventListener('ontouchend', (evt) => {
//     endTouchY = evt.clientY;
//     mobileEventUpOrDown(endTouchY - startTouchY);
// });
//
// function mobileEventUpOrDown(direction){
//     direction < 0 ? parallaxScroll(-120) : parallaxScroll(120);
// }
// window.addEventListener('touch', parallaxScroll);
// window.addEventListener('ontouchstart', parallaxScroll);
// window.addEventListener('click', parallaxScroll);
// ||||\\\\\\\\\\|||||\/////////\\\\\\/\/\/\/\/\/\/\/\/\///////||||



// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt) {
        if (isFirefox) {
            //Set delta for Firefox
            delta = evt.detail * (-120);
        } else if (isIe) {
            //Set delta for IE
            delta = -evt.deltaY;
        }
        else if(evt.type === 'click'){
            delta = -120;
        }
        else if(evt.type === 'touch'){
            console.log('lol');
            delta = -120;
        }
        else if(evt.type === 'ontouchstart'){
            delta = -120;
        }
        else if(evt === -120){
            console.log('lol');
            delta = -120;
        }

        else {
            //Set delta for all other browsers
            delta = evt.wheelDelta;
            // console.log('evt.wheelDelta  - ', evt.wheelDelta)
        }



        if (ticking != true) {
            if (delta <= -scrollSensitivitySetting) {
                //Down scroll
                ticking = true;
                if (currentSlideNumber !== totalSlideNumber - 1) {
                    currentSlideNumber++;
                    nextItem();
                }
                slideDurationTimeout(slideDurationSetting);
            }
            if (delta >= scrollSensitivitySetting) {
                //Up scroll
                ticking = true;
                if (currentSlideNumber !== 0) {
                    currentSlideNumber--;
                }
                previousItem();
                slideDurationTimeout(slideDurationSetting);
            }
        }
    }

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration) {
        setTimeout(function() {
            ticking = false;
        }, slideDuration);
    }

// ------------- ADD EVENT LISTENER ------------- //
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);



// ------------- SLIDE MOTION ------------- //
    function nextItem() {
        var $previousSlide = $(".background").eq(currentSlideNumber - 1);
        $previousSlide.removeClass("up-scroll").addClass("down-scroll");
    }

    function previousItem() {
        var $currentSlide = $(".background").eq(currentSlideNumber);
        $currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }
