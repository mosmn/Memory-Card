import {useState, useEffect} from 'react';
import Card from './Card';

const Gameboard = () => {
    const [cards, setCards] = useState([
        {id: 1, content: 'Lionel Messi', img: 'https://i.imgur.com/1XQ7Qb4.jpg'},
        {id: 2, content: 'Cristiano Ronaldo', img: 'https://i.imgur.com/1XQ7Qb4.jpg'},
        {id: 3, content: 'Neymar Jr', img: 'https://i.imgur.com/1XQ7Qb4.jpg'},
    ]);

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

    useEffect(() => {
        setCards(shuffle(cards));
    }, []);

    return (
        <div className="gameboard">
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
};

export default Gameboard;
