
import axios from 'axios';
import { useEffect, useState } from 'react';
import './card.css'
import Card from './Card'

const CardList = () => {

    const [dataCarousel, setdataCarousel] = useState([]);


    const getdataCarousel = async () => {
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}data-carousels`);
            setdataCarousel(response.data.data);
            console.log(response)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getdataCarousel();
    }, [])
    return (
        <div className="games-exemples">
            <h1 style={{ paddingBottom: '30px' }}>Chose the best game</h1>
            <div className="card-list">
                <Card props={dataCarousel} />
            </div>
        </div>
    )
}

export default CardList