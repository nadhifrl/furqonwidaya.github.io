function check_empty() {
var email=document.getElementById('email').value;
if (email == "") {
alert("No email address specified.");
} else {
document.getElementById('forgetpass').submit();
alert("Your password has been reset, please check Your email");
}
}
//Function To Display Popup
function show_popup() {
document.getElementById('isipopup').style.display = "block";
}
//Function to Hide Popup
function hide_popup(){
document.getElementById('isipopup').style.display = "none";
}