const AlbumCard = ({ Album }) => {
  return (
    <a
      href={"https://open.spotify.com/search/" + Album.Album + " " + Album.Artist}
      className="album"
      target="_blank"
    >
      <div className="albumArtist">{Album.Artist}</div>
      <div className="albumArtist">{Album.Album}</div>
      <div className="albumArtist">{Album.Cover}</div>
    </a>
  );
};

export default AlbumCard;
