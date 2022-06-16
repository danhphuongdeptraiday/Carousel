var indexValue = 1;
showSlide(indexValue);
function slide_but(e) {
    showSlide(indexValue = e);
}

function arrow_slide(e) {
    showSlide(indexValue += e);
}

function showSlide(e){
    var i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btn-slide span');
    if(e > img.length){
        indexValue = 1;
    }
    // Back to the last img
    if(e < 1) {
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < slider.length; i++){
        slider[i].style.background = "Silver";
    }
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "white";
}