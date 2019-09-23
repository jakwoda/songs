function get() {
  fetch("https://bands-765d.restdb.io/rest/songs", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887d26fd86cb75861e2624",
      "cache-control": "no cache"
    }
  })
    .then(e => e.json())
    .then(songs => {
      songs.forEach(song => {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);
        copy.querySelector("h1").textContent = song.title;
        copy.querySelector("h2").textContent = song.artist;
        copy.querySelector("h3").textContent = song.album;
        copy.querySelector("h4").textContent = song.year;

        document.querySelector(".app").appendChild(copy);
      });
    });
}
get();
