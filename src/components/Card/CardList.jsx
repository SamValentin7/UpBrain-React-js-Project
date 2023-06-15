
import axios from 'axios';
import { useEffect, useState } from 'react';
import './card.css'
import Card from './Card'

const CardList = () => {

    const [dataCarousel, setdataCarousel] = useState([]);


    const getdataCarousel = async () => {
        axios.defaults.headers.common['Authorization'] = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";

        try {
            const response = await axios.get("http://localhost:1337/api/data-carousels");
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