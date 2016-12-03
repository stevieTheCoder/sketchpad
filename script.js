$(document).ready(function () {

var gridSize = 16;
var gridWidthHeight = 600/gridSize;
createGrid(gridSize);

    //creates a grid of 16 and appends to container div
function createGrid (a) {
    for (var x = 0; x < a; x++) {
        for (var y = 0; y < a; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
            $('unit').css('height', gridWidthHeight).css('width', gridWidthHeight);
        }
    }
}

    //mouse over effect to change color
    $('.unit').hover(function () {
        $(this).addClass('hover');
    });

    //reset grid
    $('#reset').click(function () {
        $('.unit').removeClass('hover');
        gridSize = prompt('Enter grid size:');
        createGrid(gridSize);
    });

});
