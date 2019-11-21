$(document).ready(function(){
    // Mengatur variabel
    let speed = 200;            // kecepatan fade
    let autoswitch = true;      // set automatis berganti
    let autoswitch_speed = 3000 // kecepatan berganti

    // menambahkan class slide pertama
    $('.slide').first().addClass('active');

    // menyembuyikan semua class slide
    $('.slide').hide();

    // menampilkan slide pertama
    $('.active').show();

    // intruksi auto slide
    if(autoswitch == true){
        setInterval(nextSlide,autoswitch_speed);
    }

    // berganti ke slide selanjutnya
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
        });

