import axios from 'axios';
import { useEffect, useState } from "react";
import './rating.css'
import RatingCard from './RatingCard'

const Rating = () => {
    const [ratingDates, setRatingDates] = useState([]);


    const getRatingDates = async () => {
        axios.defaults.headers.common['Authorization'] = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";

        try {
            const response = await axios.get("http://localhost:1337/api/rating-dates");
            setRatingDates(response.data.data);
            console.log(response)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRatingDates();
    }, [])
    
    return (
        <div className="testimonials">
            <h1>1 year, 10 million members</h1>
            <p>With our exceptional quality and user-friendly interface, <br />our gaming website has earned a well-deserved spot among the top-rated and most popular in the industry.</p>

            <div className="row">
                <RatingCard props = {ratingDates}/>
            </div>
        </div>
    )
}

export default Rating