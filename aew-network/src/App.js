import React, { useEffect, useState } from 'react'; 
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=b57dc258';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    searchMovies('aew');
  }, []);
  
 const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); 

    setMovies(data.Search);
  } 


  return (
    <div className="App">
    <h1>ALL ELITE WRESTLING - Network</h1> 
    <div className="search">
      <input 
      placeholder = "Elite Search" 
      value = {searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      <img 
      source={SearchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
      />
    </div> 
    
    
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Results Found</h2>
          </div>
        )}
      </div>
    );
  };

export default App; 

//API key - b57dc258 

//<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"> <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> 
