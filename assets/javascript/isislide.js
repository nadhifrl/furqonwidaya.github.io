 //Inisiasi awal penggunaan jQuery
 $(document).ready(function(){
  //Pertama sembunyikan elemen class gambar
        $('.isislide').hide();        

  //Ketika elemen class tampil di klik maka elemen class gambar tampil
        $('.textslide').click(function(){
     $('.textslide').hide()
   $('.isislide').show();
        });

  //Ketika elemen class sembunyi di klik maka elemen class gambar sembunyi
        $('.show_hide').click(function(){
   //Sembunyikan elemen class gambar
   $('.isislide').hide();
    $('.textslide').show()        
        });
 });