//fungsi untuk memunculkan save
function save(){
	alert("Saved Data")
}
function cancel() {
            document.getElementById("preview").innerHTML = "";
        }
//fungsi untuk set mendapatkan data inputan setelah input gambar
function preview(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('#anon').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
   }
}


//jquery untuk menampilkan gambar
$("#preview").change(function(){
   preview(this);
});
