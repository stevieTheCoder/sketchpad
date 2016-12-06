$(document).ready(function () {

    var createGrid = function (tileNumber, tileSize) {
        for (var x = 0; x < tileNumber; x++) {
            for (var y = 0; y < tileNumber; y++) {
                var unit = $("<div class='unit'></div>");
                unit.appendTo('#container');
                $('.unit').css('height', tileSize + "%").css('width', tileSize + "%");
            }
        }
    }

    function changeBlack() {
        $('.unit').hover(function () {
            $(this).addClass('hoverBlack');
        });
    }

    function changeRandom() {
        $('.unit').hover(function () {
            $(this).css('background-color', getRandomColor());
        });
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $('#reset').click(function () {
        $('.unit').remove();
        var tileNumber = prompt('Enter grid size:');
        var tileSize = (((600 / tileNumber) / 600) * 100);
        createGrid(tileNumber, tileSize);
        changeBlack();
    });

    $('#randomColor').click(function () {
        changeRandom();
    });

    createGrid(16, 6.25);
    changeBlack();

});