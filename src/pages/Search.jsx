import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../style/Search.css';
import MovieDetail from './MovieDetail';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null); // State to manage selected movie

    useEffect(() => {
        fetch("https://freetestapi.com/api/v1/movies")
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error('Error fetching movies:', err));
    }, []);

    const filteredMovies = search 
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        )
        : movies;

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <>
            <div className='search-bar'>
                <input 
                    type='text' 
                    placeholder='Search the movie from the list...' 
                    className='input' 
                    required 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <FaSearch className='search-icon' />
            </div>
            <div className='movie-list'>
                <ul>
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie) => (
                            <li key={movie.id} onClick={() => handleMovieClick(movie)}>
                                {movie.title}
                            </li>
                        ))
                    ) : (
                        <li>No movies found</li>
                    )}
                </ul>
            </div>

            <MovieDetail movie={selectedMovie} />
        </>
    );
}

export default Search;
