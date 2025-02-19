import { useEffect, useState } from "react";
import AlbumsList from "../components/AlbumsList";

const Main = () => {
  function getRandomNumber() {
    return Math.round(Math.random() * 100);
  }
  const [RandomNumber, setRandomNumber] = useState('♪');

  console.log(RandomNumber);

  return (
    <div>
      <section className="DiceRollSection">
        <button
          className="DiceRoll"
          onClick={() => setRandomNumber(getRandomNumber)}
        >
          {RandomNumber}
        </button>
      </section>

    <AlbumsList></AlbumsList>
    </div>
  );
};

export default Main;
