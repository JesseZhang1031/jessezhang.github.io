function validate() {
            
    if( document.ordForm.fname.value.length<1 ) {
        alert( "Please enter your first name!" );
        return false;
    }
    if(( document.ordForm.lname.value < 1) ||
        (document.ordForm.lname.value > 150)) {
        alert( "Please enter your last name!" );
        return false;
    }
    if (( document.ordForm.emailAddr.value.length < 4) ||
        (document.ordForm.emailAddr.value.indexOf("@"))>
        (document.ordForm.emailAddr.value.indexOf("."))){
        alert( "Please enter your email!" );
        return false;                  
        }
    return true;
    }
