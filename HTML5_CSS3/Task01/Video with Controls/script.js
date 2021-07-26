var video = document.getElementById("videoPlayer");
        video.ontimeupdate=function(){
            document.getElementById("demo").innerHTML=video.currentTime;
        }
        function playPause() {
            if (video.paused)
                video.play();
            else
                video.pause();
        }
        function reload() {
            video.load();
        }
        function makeLarge() {
            video.width = 1000;
        }
        function makeSmall() {
            video.width = 250;
        }
        function makeNormal() {
            video.width = 500;
        }
        function muted() {
            video.muted = true;
        }
        function unmuted() {
            video.muted = false;
        }
        function speed() {
            video.playbackRate = 3;
            video.play();
        }
        function forward() {
            video.currentTime+=5;
        }
           function forward2() {
            video.currentTime+=10;
        }
        function backword() {
            video.currentTime-=5;
        }
        function backword2() {
            video.currentTime-=10;
        }
        function stop() {
        video.pause();
        video.currentTime=0;
        }