import AlbumCard from "./AlbumCard";

const CategoryCard = ({ category, categoryName }) => {
  return (
    <div className="albunsContainer">
      <p>{categoryName}:</p>
      <div className="albunsCardContainer">

      {category.map((album) => {
        return <AlbumCard key={album._id} Album={album} />;
      })}
      </div>
    </div>
  );
};

export default CategoryCard;
