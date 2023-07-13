import {useState, useEffect} from 'react';
import Card from './Card';

const Gameboard = () => {
    const [cards, setCards] = useState([
        {id: 1, text: 'Lionel Messi', img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g'},
        {id: 2, text: 'Cristiano Ronaldo', img: 'https://i.imgur.com/1XQ7Qb4.jpg'},
        {id: 3, text: 'Neymar Jr', img: 'https://i.imgur.com/1XQ7Qb4.jpg'},
        {id: 4, text: 'Kylian Mbappe', img: 'https://i.imgur.com/1XQ7Qb4.jpg'},
    ]);

    const shuffle = (array) => {
        const _array = array.slice(0);//copy the array
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
    
    const handleShuffle = () => {
        setCards(shuffle(cards));
    };

    return (
        <div className="gameboard">
            {cards.map((card) => (
                <Card card={card} handleShuffle={handleShuffle} />
            ))}
        </div>
    );
};

export default Gameboard;
