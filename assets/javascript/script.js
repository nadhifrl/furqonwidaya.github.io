function back() {
  alert("Ini adalah Halaman Pertama");
}
function forward() {
  alert("Ini adalah Halaman Terakhir");
}

function validasi() {
		var nama = document.getElementById("nama").value;
		var password = document.getElementById("password").value;
		if (nama != "" && password !="") {
			alert('login berhasil');
		}else{
      alert('Anda harus mengisi data dengan lengkap !');
    }
}
	
var input = document.getElementById("password");
var text = document.getElementById("text");
input.addEventListener("keyup", function(event) {

  if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
})

function pass(){
 var pass = document.getElementById('password');
 var show = document.getElementById('show');
 if(pass.type == 'password'){
  pass.type = 'text';
  show.innerHTML = 'Sembunyikan';
 }else{
  pass.type = 'password';
  show.innerHTML = 'Lihat Password'; 
 }
}
