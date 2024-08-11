// Import the CSS file for styling the App component
import './App.css';

// Import necessary components and hooks from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import custom(ODATIY) components and page components
import Header from './components/header/Header'; // Header component for navigation or branding
import Home from './pages/home/home'; // Home page component
import MovieList from './components/movieList/movieList'; // Component to display a list of movies
import Movie from './pages/movieDetail/movie'; // Component to display details of a single movie

// Define the main App component
function App() {
  return (
    <div className="App"> {/* Main container for the App component */}
      {/* Set up(o'rnatish) the Router to handle routing within the application */}
      <Router>
        {/* Render the Header component, which will be visible on all pages */}
        <Header />
        
        {/* Define the routes for different pages of the application */}
        <Routes>
          {/* Route for the home page (default route) */}
          <Route index element={<Home />}></Route>
          {/* Route for movie detail pages, using a dynamic parameter for movie ID */}
          <Route path="movie/:id" element={<Movie />}></Route>
          {/* Route for displaying a list of movies, with a dynamic parameter for movie type */}
          <Route path="movies/:type" element={<MovieList />}></Route>
          {/* Catch-all route for handling undefined paths, showing a simple error message */}
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;
