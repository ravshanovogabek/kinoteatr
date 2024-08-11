import React from "react"; // Import React
import "./Header.css"; // Import CSS stylesheet for styling the header
import { Link } from "react-router-dom"; // Import Link component for navigation

const Header = () => {
    return (
        <div className="header">
            {/* Container for the left section of the header */}
            <div className="headerLeft">
                {/* Logo that navigates to the home page */}
                <Link to="/">
                    <img 
                        className="header__icon" 
                        src="https://static.vecteezy.com/system/resources/previews/005/879/468/original/abstract-letter-o-line-transition-color-linear-logo-linear-modern-lettering-lines-font-alphabet-template-set-logo-thin-line-clean-style-black-background-vector.jpg" 
                        alt="ORU logo" 
                    />
                </Link>
                {/* Navigation links to different movie categories */}
                <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                    <span>Popular</span>
                </Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                    <span>Top Rated</span>
                </Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                    <span>Upcoming</span>
                </Link>
            </div>
        </div>
    )
}

export default Header; // Export the Header component for use in other parts of the application
