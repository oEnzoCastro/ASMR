import { useEffect, useState } from "react";
import AlbumsList from "../components/AlbumsList";
import { getCategories } from "../api/api";

const Main = () => {

  useEffect(() => {
      async function fetchAPI() {
        let albums = await getCategories();

        
      }

      fetchAPI();
}, [])

  function getRandomNumber() {
    return Math.round(Math.random() * 7);
  }
  const [RandomNumber, setRandomNumber] = useState("♪");

  console.log(RandomNumber);

  return (
    <div>
      <section className="DiceRollSection">
        <button
          className="DiceRoll"
          onClick={() => setRandomNumber(getRandomNumber)}
        >
          <p className="DiceRollNumber">{RandomNumber}</p>
        </button>
      </section>

      <AlbumsList></AlbumsList>
    </div>
  );
};

export default Main;
