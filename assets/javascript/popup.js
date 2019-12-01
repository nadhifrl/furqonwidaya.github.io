function check_empty() {
var email=document.getElementById('email').value;
if (email == "") {
alert("Fill All Fields !");
} else {
document.getElementById('forgetpass').submit();
alert("Form Submitted Successfully...");
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