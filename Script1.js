//event1
d3.select('#showPdfLink').on('click', function () {
            // Toggle the visibility of the PDF container
            var pdfContainer = d3.select('#pic1');
            pdfContainer.style('visibility', pdfContainer.style('visibility') === 'hidden' ? 'visible' : 'hidden');
        });
//event2
document.addEventListener("DOMContentLoaded", function () {
    var textElement = d3.select("#picdes2");

    function updateOpacity() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        // Calculate the visibility ratio
        var textVisibility = 1 - Math.max(0, Math.min(1, (textElement.node().offsetTop - scrollPosition) / windowHeight));

        // Update opacity
        textElement.style("opacity", textVisibility);
    }

    // Listen to the scroll event
    window.addEventListener("scroll", updateOpacity);

    // Initial update
    updateOpacity();
});
