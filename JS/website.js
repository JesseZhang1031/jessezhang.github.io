function validate() 
{
     if( document.getElementById("fname").value.length == 0 ) {
     alert( "Please enter your first name!" );
    }

    if( document.getElementById("lname").value.length == 0 ) {
     alert( "Please enter your last name!" );
    }

    if( document.getElementById("emailAddr").value.length == 0 ) {
     alert( "Please enter your Email!" );
    }

    if( (document.getElementById("emailAddr").value.length >= 1 ) & ( document.getElementById("lname").value.length >= 1 ) & ( document.getElementById("emailAddr").value.length >= 1 )){
        alert( "Thank you! I will contact you back as soon as possible." );
       }
}
