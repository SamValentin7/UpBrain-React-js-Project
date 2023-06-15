import axios from 'axios';
import { useEffect, useState } from "react";
import './rating.css'
import RatingCard from './RatingCard'

const Rating = () => {
    const [ratingDates, setRatingDates] = useState([]);


    const getRatingDates = async () => {
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}rating-dates`);
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