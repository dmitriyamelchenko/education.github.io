// var slideqty = $('#featured .item').length;
//
// for (var i = 0; i<slideqty; i++) {
// 	var insertText = '<li data-target="#featured" data-slide-to="'+ i + '"> </li>';
// 	$('#featured ol').append(insertText);
// }



/*first slider indicators*/
var slideqty = $('#featured .item').length;

for (var i = 0; i<slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="'+ i + '"> </li>';
    $('#featured ol').append(insertText);
}
/**/

/*second slider indicators*/
var slideqty1 = $('#featured1 .item').length;

for (var i = 0; i<slideqty1; i++) {
    var insertText = '<li data-target="#featured1" data-slide-to="'+ i + '"> </li>';
    $('#featured1 ol').append(insertText);
}
/**/

/*third slider indicators*/
var slideqty2 = $('#featured2 .item').length;

for (var i = 0; i<slideqty2; i++) {
    var insertText = '<li data-target="#featured2" data-slide-to="'+ i + '"> </li>';
    $('#featured2 ol').append(insertText);
}
/**/


/*button section*/
var buttonNew = document.querySelector('#buttonNew');
var buttonPopular = document.querySelector('#buttonPopular');
var buttonRecomended = document.querySelector('#buttonRecomended');
var firstSlider = document.querySelector('#firstSlider');
var secondSlider = document.querySelector('#secondSlider');


function switchSliderPopular() {
    firstSlider.classList.add("hidden")
    secondSlider.classList.remove("hidden");
    thirdSlider.classList.add("hidden");
    buttonPopular.classList.add("slider-button-color-active");
    buttonRecomended.classList.remove("slider-button-color-active");
    buttonNew.classList.remove("slider-button-color-active");

}

function switchSliderNew() {
    firstSlider.classList.remove("hidden")
    secondSlider.classList.add("hidden");
    thirdSlider.classList.add("hidden");
    buttonNew.classList.add("slider-button-color-active");
    buttonPopular.classList.remove("slider-button-color-active");
    buttonRecomended.classList.remove("slider-button-color-active");


}

function switchSliderRecomended() {
    firstSlider.classList.add("hidden")
    secondSlider.classList.add("hidden");
    thirdSlider.classList.remove("hidden");
    buttonRecomended.classList.add("slider-button-color-active");
    buttonNew.classList.remove("slider-button-color-active");
    buttonPopular.classList.remove("slider-button-color-active");
}

buttonPopular.addEventListener('click', switchSliderPopular);
buttonNew.addEventListener('click', switchSliderNew);
buttonRecomended.addEventListener('click', switchSliderRecomended);