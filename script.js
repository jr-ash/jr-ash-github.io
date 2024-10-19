document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.addEventListener('play', function() {
        console.log('视频开始播放');
    });
    videoPlayer.addEventListener('pause', function() {
        console.log('视频暂停');
    });
});