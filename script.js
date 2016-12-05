$(document).ready(function () {

    var gridSize = 16;
    var gridWidthHeight = 600 / gridSize;

    var newGridSize = 16;
    var newGridWidth = 600 / newGridSize;

    //creates a grid of 16 and appends to container div
    var createGrid = function (tileNumber, tileSize) {
        for (var x = 0; x < tileNumber; x++) {
            for (var y = 0; y < tileNumber; y++) {
                var unit = $("<div class='unit'></div>");
                unit.appendTo('#container');
                $('.unit').css('height', tileSize).css('width', tileSize);
            }
        }
    }

    createGrid(gridSize, gridWidthHeight);

    //mouse over effect to change color
    $('.unit').hover(function () {
        $(this).addClass('hover');
    });

    //reset grid
    $('#reset').click(function () {
        $('.unit').remove();
        newGridSize = prompt('Enter grid size:');
        console.log(newGridSize);
        console.log(newGridWidth);
    });

});