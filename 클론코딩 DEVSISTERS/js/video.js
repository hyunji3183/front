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

    video.addEventListener("mouseenter", ()=>
    {
        startPreview(video);
    });
    video.addEventListener("mouseleave", ()=>
    {
        stopPreview(video);
    });
});