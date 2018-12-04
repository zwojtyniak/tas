var video = document.querySelector("#ex-video");

video.onplaying = function () {
  document.getElementById("ex-playing").innerHTML = 'ODTWARZANIE';
}
video.onpause = function () {
  document.getElementById("ex-playing").innerHTML = 'ZATRZYMANO';
}
video.onended = function () {
  document.getElementById("ex-playing").innerHTML = 'ZAKOŃCZONO';
}
function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}
