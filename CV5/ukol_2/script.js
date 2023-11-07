$(document).ready(function(){
    $('#pass1').on('input', isMatching);
    $('#pass2').on('input', isMatching);

    function isMatching() {
        if($('#pass1').val() === $('#pass2').val()) {
            $('#passMatch').css("color", "green");
            $('#passMatch').html('Matching');
        } else {
            $('#passMatch').css("color", "red");
            $('#passMatch').html('Not matching');
        }
    }
});