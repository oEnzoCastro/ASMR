import { useEffect, useRef, useState } from "react";
import { getAlbums } from "../api/api";
import AlbumCarrousel from "../components/AlbumCarrousel";

const Simulador = () => {
  const [albums, setAlbums] = useState([]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    async function fetchAPI() {
      let albums = await getAlbums();

      // Shuffle Albums

      shuffleArray(albums);

      setAlbums(albums);
    }

    fetchAPI();
  }, []);

  const divRef = useRef(null);

  const scrollTo = () => {
    const randomNumber = Math.round(Math.random() * 7) + 1;

    if (divRef.current) {
      divRef.current.scrollTo({
        left: randomNumber * 132,
        behavior: "smooth", // Optional: for smooth scrolling
      });
    }
  };

  return (
    <div className="rngPageContainer">
      <div className="carouselContainer">
        <div className="carouselPointer"></div>
        <AlbumCarrousel ref={divRef} albums={albums}></AlbumCarrousel>
        <button className="DiceRoll" onClick={() => scrollTo()}>
          <p className="DiceRollNumber">!</p>
        </button>
      </div>
    </div>
  );
};

export default Simulador;
