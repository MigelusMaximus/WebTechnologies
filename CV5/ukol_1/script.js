$(document).ready(function(){
    $('#yesButton').click(function(){
        window.location.href='secondSite.php?answer=yes';
    });

    $('#noButton').click(function(){
        window.location.href='secondSite.php?answer=no';
    });
});