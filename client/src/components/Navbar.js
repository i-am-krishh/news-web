// Import React and Link component from 'react-router-dom' for navigation
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* Define the navigation bar with Bootstrap classes */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Link to the home page using the brand name */}
                    <Link className="navbar-brand" to="/">NBNW NEWS</Link>
                    
                    {/* Button for toggling the navigation menu on smaller screens */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible navbar content */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Unordered list of navigation links aligned to the right */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Each list item contains a Link to a different category or page */}
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" aria-current="page" to="/home">HOME</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/general">GENERAL</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/business">BUSINESS</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/sport">SPORT</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/entertainment">ENTERTAINMENT</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/technology">TECHNOLOGY</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/science">SCIENCE</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/health">HEALTH</Link>
                            </li>
                            <li className="nav-item items">
                                <Link className="nav-link nav-hover" to="/politics">POLITICS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
