import AlbumsList from "../components/AlbumsList";
import AlbumCarousel from "../components/AlbumCarousel";
import ApiOffline from "../components/ApiOffline";

const Main = () => {

  return (
    <div>
      <ApiOffline></ApiOffline>
      
      <AlbumCarousel></AlbumCarousel>

      <AlbumsList></AlbumsList>
    </div>
  );
};

export default Main;
