//event1
d3.select('#showPdfLink').on('click', function () {
            var pdfContainer = d3.select('#pic1');
            pdfContainer.style('visibility', pdfContainer.style('visibility') === 'hidden' ? 'visible' : 'hidden');
        });
document.addEventListener("DOMContentLoaded", function () {
    var textElement = d3.select("#picdes2");
    var pictureElement = d3.select("#pic2");

    function updateOpacity() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        var textVisibility = 1 - Math.max(0, Math.min(1, (textElement.node().offsetTop - scrollPosition) / windowHeight));
        var pictureVisibility = 1 - Math.max(0, Math.min(1, (pictureElement.node().offsetTop - scrollPosition) / windowHeight));


        textElement.style("opacity", textVisibility);
        pictureElement.style("opacity", pictureVisibility);
    }
    window.addEventListener("scroll", updateOpacity);
    updateOpacity();
});
