$(function () {
    //single book
    $('#mybook').booklet({
        //width:  900,
        //heigh: 550 ,
        width: '87%',
        heigh: 550,
        easing: null,
        easeIn: null,
        easeOut: null,

        keyboard: true,

        next: '#custom-next',
        prev: '#custom-prev'
    });

    if (window.matchMedia('(max-width: 768px)').matches) {

        $('#mybook').booklet({

            width: '100%'
        });

    } else {
        //alert();
        // the width of browser is less then 700px
    }




    //multiple books with ID's
    //$('#mybook1, #mybook2').booklet();

    //multiple books with a class
    //$('.mycustombooks').booklet();
});