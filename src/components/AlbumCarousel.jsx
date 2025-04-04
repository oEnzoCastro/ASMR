import { useEffect, useRef, useState } from "react";
import { getAlbums } from "../api/api";

const AlbumCarousel = () => {
  const fakeAlbums = [
    {
      _id: "0",
      category: "SubMuCore",
      artist: "Weezer",
      title: "Pinkertown",
      cover: "https://i.scdn.co/image/ab67616d0000b273f4f9accdc0fb8ddee29e32b7",
    },
    {
      _id: "1",
      category: "SubMuCore",
      artist: "Radiohead",
      title: "OK Computer",
      cover: "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
    },
    {
      _id: "2",
      category: "MuCore",
      artist: "King Crimson",
      title: "In the Court of the Crimson King",
      cover: "https://i.scdn.co/image/ab67616d0000b273da7b326bd7ffa7b6b95b0660",
    },
    {
      _id: "3",
      category: "MuCore",
      artist: "Slint",
      title: "Spiderland",
      cover: "https://i.scdn.co/image/ab67616d0000b273ca727fc0809fb501506ce413",
    },
    {
      _id: "4",
      category: "SubMuCore",
      artist: "Godspeed You! Black Emperor",
      title: "Lift Your Skinny Fists Like Antennas to Heaven",
      cover: "https://i.scdn.co/image/ab67616d0000b2730791c8a2dc44008c52b4883a",
    }
  ];

  const [albums, setAlbums] = useState([]);
  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let albums = await getAlbums();

      shuffleArray(albums);

      setAlbums(albums);
      setAlbumsList(fakeAlbums.concat(albums));
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
