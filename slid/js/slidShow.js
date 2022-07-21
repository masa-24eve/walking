let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/1.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/2.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/3.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/4.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/5.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/6.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/7.jpg",
"http://www.cc.kyoto-su.ac.jp/~atsushi/Programs/VisualWorks/Exercises/Exercise_ParaPara/thumbnails/8.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 70);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
