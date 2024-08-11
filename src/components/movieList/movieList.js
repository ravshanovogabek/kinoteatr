import React, { useEffect, useState } from "react"; // Import necessary React hooks
import "./movieList.css"; // Import CSS stylesheet for styling
import { useParams } from "react-router-dom"; // Import useParams hook for accessing route parameters
import Cards from "../card/card"; // Import the Cards component to display individual movies

const MovieList = () => {
    // State to hold the list of movies
    const [movieList, setMovieList] = useState([]);
    // Extract 'type' from URL parameters using useParams
    const { type } = useParams();

    // useEffect to fetch movie data when the component mounts
    useEffect(() => {
        getData();
    }, []); // Empty dependency array ensures this effect runs once on mount

    // useEffect to refetch movie data when 'type' changes
    useEffect(() => {
        getData();
    }, [type]); // Dependency on 'type' ensures this effect runs when 'type' changes

    // Function to fetch movie data from the API
    const getData = () => {
        // Build the API URL based on the 'type' parameter
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json()) // Parse(tahlil qilish) the response as JSON
        .then(data => setMovieList(data.results)); // Update the state with the movie list
    }

    return (
        <div className="movie__list">
            {/* Display the title of the list, based on 'type' */}
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            {/* Container for displaying movie cards */}
            <div className="list__cards">
                {
                    // Map through the movie list and render a Cards component for each movie
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} /> // Use movie ID as key for the list
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList; // Export the MovieList component for use in other parts of the application
