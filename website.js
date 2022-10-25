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
}
