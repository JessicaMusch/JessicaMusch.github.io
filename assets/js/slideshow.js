let slideIndex = 1;
showSlides(slideIndex);

// control of scrolling through slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// first image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// main function for slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}