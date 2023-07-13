const Card = ({card, handleShuffle}) => {
    return (
        <div className="card" onClick={handleShuffle}>
            <img src={card.img} alt={card.text} />
            <p>{card.text}</p>
        </div>
    );
};



export default Card;