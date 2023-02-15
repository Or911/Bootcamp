const SongsManager = function () {
  const _songs = {};

  const AddSong = function (name, link) {
    let shortenLink = link.slice(link.search("=") + 1);
    _songs[name] = [shortenLink];
    console.log(`the ${name} add to list`);
  };

  const GetSong = function (name) {
    if (_songs[name] != undefined) {
      console.log(name);
      console.log(`https://www.youtube.com/watch?v=${_songs[name]}`);
      console.log(`******************`);
    }
  };

  return {
    addSong: AddSong,
    getSong: GetSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("אתה תשיר", "https://www.youtube.com/watch?v=KsNN8B74LdE");
songsManager.addSong(
  "תן לי אור",
  "https://www.youtube.com/watch?v=pJMXeJRm7cg"
);
songsManager.addSong(
  "מאמין בניסים",
  "https://www.youtube.com/watch?v=6GXaxixoi2c"
);

songsManager.getSong("אתה תשיר"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("תן לי אור");
