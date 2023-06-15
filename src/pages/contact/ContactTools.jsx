import { useState } from "react";
import './contactTools.css'

const ContactMap = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Welcome to our game site!",
            description:
                "Are you ready to embark on an epic adventure? Join millions of players from around the world in our immersive gaming experience.",
            image: "https://picsum.photos/id/1068/600/400",
        },
        {
            title: "Build a community",
            description:
                "Our game site isn't just about competition - it's about building relationships and forging alliances. Join guilds, chat with friends, and discover new ways to interact with players from around the world.",
            image: "https://picsum.photos/id/1058/600/400",
        },
        {
            title: "Explore new worlds",
            description:
                "From the far reaches of space to the depths of the ocean, our games offer endless possibilities for exploration and conquest.",
            image: "https://picsum.photos/id/1067/600/400",
        },
    ];

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };
    return (
        <div className="info-carousel">
            <div className="carousel-container">
                <div
                    className="slide"
                    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                >
                    <div className="slide-content">
                        <h2 className="slide-title">{slides[currentSlide].title}</h2>
                        <p className="slide-description">
                            {slides[currentSlide].description}
                        </p>
                    </div>
                </div>
                <div className="slide-selector">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`selector ${index === currentSlide ? "active" : ""}`}
                            onClick={() => handleSlideChange(index)}
                        >
                            <img src={slide.image} alt={slide.title} />
                            <h3 className="selector-title">{slide.title}</h3>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ContactMap
