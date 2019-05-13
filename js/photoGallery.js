$(document).ready(function () {

    /************************** list/grid script *************************/

    $('#list').click(function (event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');

        $('#list>i').addClass('selectedView');
        $('#grid>i').removeClass('selectedView');
    });

    $('#grid').click(function (event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');

        $('#list>i').removeClass('selectedView');
        $('#grid>i').addClass('selectedView');
    });

    /************************** popup script *************************/
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                //return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                return item.el.attr('title') + '';
            }
        }
    });



});