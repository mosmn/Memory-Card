const Card = ({key, card, onClick}) => {
    return (
        <div className="card" onClick={() => onClick(card.id)}>
            <img src={card.img} alt={card.content} />
        </div>
    );
}

export default Card;