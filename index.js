$("document").ready(()=>{
    $(".card-body").parent('.card').hover(
        function () {
            $(this).children('.collapse').collapse('show');
        }, function () {
            $(this).children('.collapse').collapse('hide');
        }
    );
});
