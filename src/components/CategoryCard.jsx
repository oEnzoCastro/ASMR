import AlbumCard from "./AlbumCard";

const CategoryCard = ({ category, categoryName }) => {

  return (
    <div className="albunsContainer">
    <p>{categoryName}:</p>
    {category.map((album) => {
      return <AlbumCard key={album.Album} Album={album} />;
    })}
  </div>
  );
};

export default CategoryCard;
