import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; // Import Skeleton for loading placeholders
import "./card.css"; // Import CSS stylesheet for styling the card
import { Link } from "react-router-dom"; // Import Link component for navigation

// Functional component to display movie cards
const Cards = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setIsLoading(false); // Set loading to false after 1500ms
        }, 1500);
    }, []); // Empty  dependency array means this effect runs once on mount

    return (
        <>
            {isLoading ? (
                // Render loading skeleton if data is still loading
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} /> {/* Placeholder skeleton with height 300px */}
                    </SkeletonTheme>
                </div>
            ) : (
                // Render movie card once data is loaded
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img
                            className="cards__img"
                            src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                            alt={movie ? movie.original_title : "Movie Poster"} // Accessibility text
                        />
                        <div className="cards__overlay">
                            <div className="card__title">{movie ? movie.original_title : ""}</div>
                            <div className="card__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="card__rating">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa-star" /> {/* Star icon for rating */}
                                </span>
                            </div>
                            <div className="card__description">
                                {movie ? movie.overview.slice(0, 118) + "..." : ""} {/* Truncated description */}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default Cards; // Export the Cards component for use in other parts of the application 
