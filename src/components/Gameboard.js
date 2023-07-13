import { useState, useEffect } from "react";
import Card from "./Card";

const Gameboard = ({ handleScore }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Lionel Messi",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
    },
    {
      id: 2,
      text: "Cristiano Ronaldo",
      img: "https://i.imgur.com/1XQ7Qb4.jpg",
    },
    { id: 3, text: "Neymar Jr", img: "https://i.imgur.com/1XQ7Qb4.jpg" },
    { id: 4, text: "Kylian Mbappe", img: "https://i.imgur.com/1XQ7Qb4.jpg" },
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  const shuffle = (array) => {
    const _array = array.slice(0);
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = _array[i];
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp;
    }
    return _array;
  };

  const handleClick = (id) => {
    setCards(shuffle(cards));
    if (clickedCards.includes(id)) {
      setClickedCards([]);
      handleScore(false);
    } else {
      setClickedCards(clickedCards.concat(id));
      handleScore(true);
    }
  };

  return (
    <div className="gameboard">
      {cards.map((card) => (
        <Card card={card} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Gameboard;
