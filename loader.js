let barcodeSpans = $("#barcode").children();

function barcodeAnimation() {
  barcodeSpans.each(function(i) {
    let span = $(this);
    setTimeout(function() {
      // highlight each individual span with 200ms between each
      span.toggleClass("highlighted");
      // span.fadeToggle("slow");
    }, 200 * i);
  });

  barcodeSpans.each(function(i) {
    let span = $(this);
    setTimeout(function() {
      // remove the highlighting from each span with 20ms between each
      span.toggleClass("highlighted");
    }, 20 * i);
  });
}

$(document).ready(function() {
  setInterval(barcodeAnimation, 3000);
});
