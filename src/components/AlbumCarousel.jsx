import { useEffect, useRef, useState } from "react";
import { getAlbums } from "../api/api";

const AlbumCarousel = () => {

  const [albums, setAlbums] = useState([]);
  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let albums = await getAlbums();

      shuffleArray(albums);

      setAlbums(albums);
      setAlbumsList(albums.concat(albums));
    }
    fetchAPI();
  }, []);

  // Suffle

  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // Scroll

  const refDiv = useRef(null);

  const scrollTo = async () => {
    console.log(albums);
    console.log(albumsList);

    shuffleArray(albums);
    setAlbumsList(albumsList.concat(albums));

    console.log(albumsList[albumsList.length - 3]);
    await refDiv.current.scrollTo({
      left: albumsList.length * 1000,
      behavior: "smooth",
    });

    shuffleArray(albums);
    setAlbumsList(albumsList.concat(albums));
  };

  var key = 0;

  return (
    <div className="carouselContainer">
      <div ref={refDiv} className="carouselSlider">
        {albumsList.map((album) => {
          key++;

          return <img key={key} src={album.cover} />;
        })}
        <div className="carouselPointer"></div>
      </div>
      <button className="DiceRoll" onClick={scrollTo}>
        <p className="DiceRollNumber">♪</p>
      </button>
    </div>
  );
};

export default AlbumCarousel;
