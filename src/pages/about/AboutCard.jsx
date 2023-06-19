import { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const effects = [
  "fade",
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "zoom-in",
  "zoom-out",
  "flip-up",
  "flip-down",
];

const AboutCard = ({ props }) => {
  console.log(props);

  const [selectedEffect, setSelectedEffect] = useState(effects[0]);

  useEffect(() => {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setSelectedEffect(randomEffect);
    Aos.init({ duration: 750 });
  }, []);

  return (
    <div  className="about-container">
      {
        props.map(data => (
          <div data-aos={selectedEffect} className="data-container" key={data.id}>
            <img src={`assets/images/About Images/${data.attributes.img}.png`} />
            <div className="text" >
              <h2>{data.attributes.header}</h2>
              <p>{data.attributes.body}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default AboutCard;