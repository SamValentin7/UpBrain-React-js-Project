import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../common/footer/Footer'
import Navbar from '../../common/navbar/Navbar'
import AboutCard from './AboutCard'
import './about.css'


const About = () => {

    const [aboutDates, setAboutDates] = useState([]);


    const getAboutDates = async () => {
        axios.defaults.headers.common['Authorization'] = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";

        try {
            const response = await axios.get("http://localhost:1337/api/about-dates");
            setAboutDates(response.data.data);
            console.log(response)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAboutDates();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <AboutCard props = {aboutDates}/>
            </div>
            <Footer />
        </div>
    )
}

export default About