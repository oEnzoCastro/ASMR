const AlbumCard = ({ Album }) => {
  return (
    <a
      href={
        "https://open.spotify.com/search/" + Album.title + " " + Album.artist
      }
      className="album"
      target="_blank"
    >
      <img className="albumCover" src={Album.cover} />
      <div className="albumInfo">
        <div className="albumTitle">{Album.title}</div>
        <div className="albumArtist">{Album.artist}</div>
      </div>
    </a>
  );
};

{
  /* <div className="albumTitle">{Album.title}</div>
<div className="albumArtist">{Album.artist}</div> */
}
export default AlbumCard;
