function get_action(form)
{
    var v = grecaptcha.getResponse();

    if(v.length == 0 || v == undefined || v == "")
    {
        document.getElementById('captcha').innerHTML="Captcha obligatoire!<br>Cochez la case <span style='color:red;'>je ne suis pas un robot</span>";
        return false;
    }
    else
    {
        document.getElementById('captcha').innerHTML="Captcha completed";
        return true;
    }
}
// function non utilisee
/*

 $('#toaffich').on('click', function() {
        if(document.getElementById('a_manipuler').style.display == "none") {
            $('#a_manipuler').fadeIn();
            $('#toaffich').html('Lire -');
        } else {
            $('#a_manipuler').fadeOut();
            setTimeout(function() {
                $('#toaffich').html('Lire +');
            }, 450);
        }
    });
*/

