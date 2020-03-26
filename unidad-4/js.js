var pianoAndMicrophone = [
  "17 Days",
  "Purple Rain",
  "A Case of You",
  "Mary Don´t You Weep",
  "Strange Relationship",
  "International Lover",
  "Wednesday",
  "Cold Coffee & Cocaine",
  "Why the butterflies"
];

function createAlbum() {
  var album = document.querySelector(".album");

  pianoAndMicrophone.forEach(function(elemento) {
    var singleSong = document.createElement("li");
    singleSong.innerHTML = elemento;
    album.appendChild(singleSong);
  });
}

createAlbum();

pianoAndMicrophone.forEach(function(elemento, index, arrayOrigen) {
  console.log(elemento, index, arrayOrigen);
});
