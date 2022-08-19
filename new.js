var bad_color = "red"
function checkpass_1(){
    let pass = document.getElementById('pass').value
    // console.log(pass.length);
    
    
    var message = document.getElementById('error'); 
    if(pass.length < 6){
        message.style.Color = bad_color;
        message.innerText =  " you have to enter at least 6 digit!"
        // console.log("uuuuu")
    }
    else{
        message.style.color = good_color;
    }

}
function check_email(){
    let email = document.getElementById("checkemail").value;
    console.log(email);
    let message1 = document.getElementById('error1');
    if( email.length < 1 ){
        message1.style.Color = bad_color;
        message1.innerText =  " Field is Empty"

    }


}