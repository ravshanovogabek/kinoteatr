import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import "./movie.css"; // Import CSS for styling the Movie component
import { useParams } from "react-router-dom"; // Import useParams hook to get URL parameters

const Movie = () => {
    // State to store the movie details
    const [currentMovieDetail, setMovie] = useState();
    // Get the movie ID from the URL parameters
    const { id } = useParams();

    // useEffect hook to fetch movie data when the component mounts
    useEffect(() => {
        getData(); // Fetch movie data
        window.scrollTo(0, 0); // Scroll to top of the page when component loads
    }, []);

    // Function to fetch movie data from the API
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json()) // Parse the response to JSON
            .then(data => setMovie(data)); // Set the movie data in state
    };

    return (
        <div className="movie"> {/* Main container for the Movie component */}
            <div className="movie__intro">
                {/* Background image of the movie */}
                <img
                    className="movie__backdrop"
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
                    alt="Movie Backdrop"
                />
            </div>
            <div className="movie__detail">
                {/* Left side of movie details: Poster */}
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img
                            className="movie__poster"
                            src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
                            alt="Movie Poster"
                        />
                    </div>
                </div>
                {/* Right side of movie details */}
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        {/* Movie title */}
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        {/* Movie tagline */}
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        {/* Movie rating and vote count */}
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">
                                {currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}
                            </span>
                        </div>  
                        {/* Movie runtime */}
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        {/* Movie release date */}
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        {/* Movie genres */}
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <span className="movie__genre" key={genre.id}>{genre.name}</span>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    {/* Bottom part of movie details: Synopsis */}
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
            {/* Section for useful links */}
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && 
                    <a href={currentMovieDetail.homepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p>
                    </a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && 
                    <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p>
                    </a>
                }
            </div>
            {/* Section for production companies */}
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && 
                    currentMovieDetail.production_companies.map(company => (
                        <span className="productionCompanyImage" key={company.id}>
                            {
                                company.logo_path 
                                && 
                                <>
                                    <img className="movie__productionCompany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt={company.name} />
                                    <span>{company.name}</span>
                                </>
                            }
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default Movie; // Export the Movie component for use in other parts of the application
