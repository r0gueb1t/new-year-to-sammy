// IMAGE CAROUSEL
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
  "images/img10.jpg",
  "images/img11.jpg",
  "images/img12.jpg",
  "images/img13.jpg",
  "images/img14.jpg",
  "images/img15.jpg",
  
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
  currentIndex = (index + images.length) % images.length;
  carouselImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

// AUDIO PLAYLIST AUTOPLAY
const playlist = [
  { src: "audio/track1.mp3", name: "Track 1" },
  { src: "audio/track2.mp3", name: "Track 2" },
  { src: "audio/track3.mp3", name: "Track 3" },
];

let currentTrack = 0;
const audioPlayer = document.getElementById("audioPlayer");
const trackNameEl = document.getElementById("currentTrackName");

function loadTrack(index) {
  currentTrack = (index + playlist.length) % playlist.length;
  audioPlayer.src = playlist[currentTrack].src;
  trackNameEl.textContent = "Now playing: " + playlist[currentTrack].name;
  audioPlayer.play().catch(() => {
    // Browser may block autoplay; user can press play manually
  });
}

audioPlayer.addEventListener("ended", () => {
  loadTrack(currentTrack + 1);
});

// init
showImage(0);
loadTrack(0);
