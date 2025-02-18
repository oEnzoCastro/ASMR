const AlbumCard = ({ Album }) => {
  return (
    <a
      href={"https://open.spotify.com/search/" + Album.title + " " + Album.artist}
      className="album"
      target="_blank"
    >
      <div className="albumArtist">{Album.artist}</div>
      <div className="albumArtist">{Album.title}</div>
      <div className="albumArtist">{Album.cover}</div>
    </a>
  );
};

export default AlbumCard;
