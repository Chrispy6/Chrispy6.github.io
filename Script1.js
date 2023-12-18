//event1
d3.select('#showPdfLink').on('click', function () {
            var pdfContainer = d3.select('#pic1');
            pdfContainer.style('visibility', pdfContainer.style('visibility') === 'hidden' ? 'visible' : 'hidden');
        });
