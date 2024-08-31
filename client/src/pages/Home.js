import React from 'react';
import Hero from './../components/Hero';
import FetchData from '../components/FetchData';
import { useTheme } from '../context/ThemeContext'; // Corrected import path
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Home = () => {


    return (
        <>
            <div>
                <Hero />
                <FetchData />
            </div>
            
        </>
    );
};

export default Home;
