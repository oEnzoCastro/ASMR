'use client'

import { useEffect, useState } from "react";

const DiceRoll = () => {
  
    function getRandomNumber() {
        return Math.round(Math.random() * 100);
    }
  
    const [RandomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        setRandomNumber(getRandomNumber());
    }, [])

  return <button className="DiceRoll" onClick={() => setRandomNumber(getRandomNumber)}>{RandomNumber}</button>;
};

export default DiceRoll;
