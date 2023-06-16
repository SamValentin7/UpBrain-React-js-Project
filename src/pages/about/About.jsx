import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../common/footer/Footer'
import Navbar from '../../common/navbar/Navbar'
import AboutCard from './AboutCard'
import './about.css'


const About = () => {

    const [aboutDates, setAboutDates] = useState([]);


    const getAboutDates = async () => {
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}about-dates`);
            setAboutDates(response.data.data);
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