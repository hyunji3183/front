$('body').prepend('<header></header>');
$('header').load('./html/header.html', head);

function head(){
    $('header .head ul li a').on('click',function(){
        localStorage.setItem('num', $(this).index());
        location.href = $(this).attr('href');
    })}

$('main').append('<footer></footer>');
$('footer').load('./html/footer.html');



const videos = document.querySelectorAll('#games');
function startPreview(video) {
    video.muted = true;
    video.currentTime = 0;
    video.play();
}

function stopPreview(video) {
    video.load();
    video.currentTime = 0;
    video.pause();
}

[].forEach.call(videos, function (video) {
    stopPreview(video);

    video.addEventListener("mouseenter", () => {

        startPreview(video);
    });
    video.addEventListener("mouseleave", () => {
        stopPreview(video);
    });
});





var swiper = new Swiper(".slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    speed: 20000,
    loop: true,
    slidesPerGroup: 6,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    }
});






// const elCount = document.querySelector('.WORLD_WIDE_FANDOM .count h4')
// let count = 45000000;
// let maxNum = 46000000

// let startcount = function(){
//     setInterval(function(){
//         if(count < maxNum) count++;
//     },1000)
// }

// elCount.forEach(function(v){
//     startcount(v)
// })