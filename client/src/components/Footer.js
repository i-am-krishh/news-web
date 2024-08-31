import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>

            <div className="box-container container">



                <div className="share">
                    <Link href="https://www.facebook.com/"><FaFacebook /></Link>
                    <Link href="https://www.twitter.com/"><BsTwitterX /></Link>
                    <Link href="https://www.instagram.com/"><FaInstagram /></Link>
                    <Link href="https://www.linkedin.com/"><FaLinkedin /></Link>
                    <Link href="https://www.fa-pinterest.com/"><FaPinterest /></Link>
                </div>

                <div className="credits"> created by <span>Krish</span> | all rights are reserved! </div>
            </div>
        </div>
    )
}

export default Footer