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
 
    

        
    
    });