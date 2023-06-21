import { useState } from 'react';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom'
import Item from "./Item";
import './card.css'

const Card = ({ props }) => {

    const [isFlipped, setIsFlipped] = useState(false);

    function handleFlip() {
        setIsFlipped(!isFlipped);
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
        { width: 1500, itemsToShow: 6 },
    ];

    const cards = props.map(data => {
        return (
            <Item key={data.id}>
                <div className={`card `} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
                    <div className="card-front">
                        <img src={`public/assets/images/Data Carousel/${data.attributes.img}.png`} className="card-image" />
                        <div className='card-stats'>
                            <img src="public/assets/images/Data Carousel/star.png" className="card-star" />
                            <span>{data.attributes.rating}</span>
                        </div>
                        <p className="card-title">{data.attributes.title}</p>
                    </div>
                    <div className="card-back">
                        <div className="card-back-content">
                            <p>{data.attributes.back}</p>
                            <button className="play-btn">
                                <Link to="/games" style={{ textDecoration: 'none', color: 'white' }}>Play</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Item>
        )
    })
    return (
        <>
            <Carousel breakPoints={breakPoints}>{cards}</Carousel>
        </>
    );
};

export default Card