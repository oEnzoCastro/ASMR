const AlbumCard = ({ Album }) => {
  return (
    <a
      href={"https://open.spotify.com/search/" + Album.title + " " + Album.artist}
      className="album"
      target="_blank"
    >
      <img className="albumCover" src={Album.cover} alt="" srcset="" />
      <div className="albumTitle">{Album.title}</div>
      <div className="albumArtist">{Album.artist}</div>
    </a>
  );
};

export default AlbumCard;
