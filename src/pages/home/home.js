import React, { useEffect, useState } from "react"; // Import necessary React hooks
import "./home.css"; // Import CSS stylesheet for styling
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles for the Carousel component
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component from the react-responsive-carousel library
import { Link } from "react-router-dom"; // Import Link component for routing
import MovieList from "../../components/movieList/movieList"; // Import MovieList component

const Home = () => {
    // State to hold the list of popular movies
    const [popularMovies, setPopularMovies] = useState([]);

    // useEffect hook to fetch popular movies from the API when the component mounts
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json()) // Parse the response as JSON
        .then(data => setPopularMovies(data.results)); // Set the state with the list of popular movies
    }, []); // Empty dependency array ensures this effect runs once on mount

    return (
        <>
            {/* Main container for the home page */}
            <div className="poster">
                {/* Carousel component for displaying movie posters */}
                <Carousel
                    showThumbs={false} // Hide thumbnail images
                    autoPlay={true} // Enable auto-play of slides
                    transitionTime={3} // Set transition time between slides to 3 seconds
                    infiniteLoop={true} // Loop back to the beginning when reaching the end
                    showStatus={false} // Hide status indicators (e.g., slide number)
                >
                    {
                        // Map through the list of popular movies and create a slide for each
                        popularMovies.map(movie => (
                            <Link 
                                key={movie.id} // Use movie ID as key for the list
                                style={{ textDecoration: "none", color: "white" }} // Remove default link styling
                                to={`/movie/${movie.id}`} // Link to movie detail page with the movie ID
                            >
                                <div className="posterImage">
                                    {/* Display the backdrop image of the movie */}
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
                                </div>
                                <div className="posterImage__overlay">
                                    {/* Overlay with movie details */}
                                    <div className="posterImage__title">
                                        {movie ? movie.original_title : ""} {/* Display movie title */}
                                    </div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""} {/* Display release date */}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""} {/* Display movie rating */}
                                            <i className="fas fa-star" /> {/* Star icon for rating */}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">
                                        {movie ? movie.overview : ""} {/* Display movie overview */}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                {/* MovieList component for displaying additional movie lists */}
                <MovieList />
            </div>
        </>
    );
}

export default Home; // Export the Home component for use in other parts of the application
