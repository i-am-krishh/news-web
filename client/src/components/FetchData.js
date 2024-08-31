import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext'; // Corrected import path
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const FetchData = ({ cat }) => {
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try {
            const res = await axios.get(
                cat ? `https://newsapi.org/v2/top-headlines?q=${cat}&apiKey=281ff1577db84dc4a40ca7b8c632bcfa` :
                    `https://newsapi.org/v2/top-headlines?country=in&apiKey=281ff1577db84dc4a40ca7b8c632bcfa`
            );
            setData(res.data.articles);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchdata();  // Call the fetchdata function when the component mounts.
    }, [cat]);

    // Function to format the publishedAt date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()]; // Get the month initials
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}-${month} ${hours}:${minutes}`;
    };

    const [theme, setTheme] = useTheme();

    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };

    return (
        <>
            <div className="theme-btn" onClick={handleTheme}>
                {theme === 'light' ? (<BsFillMoonStarsFill color='white' />) : (<BsFillSunFill color='white' />)}
            </div>
            <div className='container my-4' style={{ minHeight: "100vh" }}>
                <h3>Top Headlines</h3>
                <div className='container my-2 d-flex justify-content-center align-items-center flex-column'>
                    {data.length > 0 ? data.map((item, index) => (
                        <div className="container my-3 p-3 news-card" key={index} style={{ maxWidth: "850px", boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                            <h5>{item.title}</h5>
                            {item.urlToImage ? (
                                <div className='my-2 d-flex justify-content-center align-items-center'>
                                    <img src={item.urlToImage} alt='Image not found' className='img-fluid' style={{
                                        width: 'auto',
                                        height: '300px',
                                        objectFit: 'cover'
                                    }} />
                                </div>
                            ) : null}
                            {item.description ? <p>{item.description}</p> : null}
                            <p>{item.content}</p>
                            <p>Published At: {formatDate(item.publishedAt)}</p>
                            <Link to={item.url} target='_blank' className='p-3'>Read More</Link>
                        </div>
                    )) : "LOADING..."}
                </div>
            </div>
        </>
    );
}

export default FetchData;
