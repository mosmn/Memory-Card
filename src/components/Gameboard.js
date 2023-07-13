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
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    },
    {
      id: 3,
      text: "Neymar Jr",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa",
    },
    {
      id: 4,
      text: "Kylian Mbappe",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSm1IwsPZDVXMagZrFcX2o8neNG5SoTD1Gxnx1A_ApzHw3TBcuP",
    },
    {
      id: 5,
      text: "Pelé",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pele_by_John_Mathew_Smith.jpg/220px-Pele_by_John_Mathew_Smith.jpg",
    },
    {
      id: 6,
      text: "Robert Lewandowski",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSx5EKZHirVVSRbMBJrvERDeZ5p1L6k_nAjIZMxKQKh4ElDakW",
    },
    {
      id: 7,
      text: "Johan Cruyff",
      img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRl8Ui7aNUh7mXLZ7ERrxmcVIJaPDZQ6C04uO7nxoI1Yqj4xCJ0e3QOgnUU7Dd4Mwcs",
    },
    {
      id: 8,
      text: "Ronaldinho Gaúcho",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwSagrRPgnNqt2edvvbBodJY9IVZ9eCghuMWwJ9S9DcaA1CmKm",
    },
    {
      id: 9,
      text: "Zlatan Ibrahimović",
      img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQyoS0mWPVHXgX-EtirquyB4HyWopNOS1tYKEVLxj5nRDPCYl1xd0jHP1p-0rVu_sMS",
    },
    {
      id: 10,
      text: "Luka Modrić",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/ISL-HRV_%287%29.jpg",
    },
    {
      id: 11,
      text: "Mohamed Salah",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSc4bnfG3zNmNB6Dk4C3vge8FxKkdFH64E96jiW8FKdS_04gDdF",
    },
    {
      id: 12,
      text: "Andrés Iniesta",
      img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSV8OZSWif0uU7hr8IGVVn12ZOcrfM4RTw6-MtbDKbPKQVYUZ6MUCEum4BC3PLJ-3IY",
    },
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
