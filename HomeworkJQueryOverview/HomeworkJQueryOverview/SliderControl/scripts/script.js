var slides = [
    '<img src="images/anti-matter.jpg" />',
    '<div>This one is a div</div>',
    '<form>Here we have a form...<input/><br/>And an input</form>',
    '<img src ="images/billionDollars.jpg" />',
    '<img src ="images/smartDogs.jpg" />',
    '<img src ="images/stardust.jpg" />',
    '<img src ="images/theRichestCountry.jpg" />'
];

(function () {
    var currentSlide = 0;
    setSlideToCurrent();
    $('#prevBtn').on('click', prevSlide);
    $('#nextBtn').on('click', nextSlide);

    function nextSlide() {
        currentSlide++;
        if (currentSlide === slides.length) {
            currentSlide = 0;
        }

        setSlideToCurrent();
        resetTimer();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        setSlideToCurrent();
        resetTimer();
    }

    function setSlideToCurrent() {
        $('#container').html(slides[currentSlide]);
    }

    function resetTimer() {
        clearInterval(autoSlideChanger);
        autoSlideChanger = setInterval(nextSlide, 5000);
    }

    var autoSlideChanger = setInterval(nextSlide, 5000);
})();

