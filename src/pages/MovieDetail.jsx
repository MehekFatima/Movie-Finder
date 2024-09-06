import React from 'react';
import '../style/MovieDetail.css'


const MovieDetail = ({ movie }) => {
    if (!movie) return <div className='info'>Select a movie to see details</div>;

    return (
        <div className='movie-detail'>
            <h2>{movie.title}</h2>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
            <p><strong>Plot:</strong> {movie.plot}</p>
            <p><strong>Trailer:</strong> <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch here</a></p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p><strong>Awards:</strong> {movie.awards}</p>
            <p><strong>Country:</strong> {movie.country}</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Box Office:</strong> {movie.boxOffice}</p>
            <p><strong>Production:</strong> {movie.production}</p>
            <p><strong>Website:</strong> <a href={movie.website} target="_blank" rel="noopener noreferrer">Visit here</a></p>
        </div>
    );
};

export default MovieDetail;
