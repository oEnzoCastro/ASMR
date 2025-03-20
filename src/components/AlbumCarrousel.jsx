import AlbumCard from "./AlbumCard";

const AlbumCarrousel = ({albums, ref}) => {
  return (
    <div ref={ref} className="albunsCarousel">
      {albums.map((album) => {
        return <AlbumCard key={album._id} Album={album}></AlbumCard>;
      })}
      </div>
  );
};

export default AlbumCarrousel;
