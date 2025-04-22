import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?i=${id}&apikey=e7d3551`
                );
                const data = await response.json();
                
                if (data.Response === 'True') {
                    setMovie(data);
                } else {
                    setError(data.Error || 'Failed to load movie details');
                }
            } catch (err) {
                setError('Network error: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="movie-page">
            <div className="movie-header">
                <h1>{movie.Title} ({movie.Year})</h1>
                <p>⭐ {movie.imdbRating} | {movie.Runtime} | {movie.Genre}</p>
            </div>
            
            <div className="movie-content">
                <div className="poster-section">
                    <img 
                        src={movie.Poster !== 'N/A' ? movie.Poster : `https://via.placeholder.com/300x450?text=${movie.Title}`}
                        alt={movie.Title}
                    />
                </div>
                
                <div className="details-section">
                    <h3>Plot</h3>
                    <p>{movie.Plot}</p>
                    
                    <h3>Details</h3>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Country:</strong> {movie.Country}</p>
                    <p><strong>Language:</strong> {movie.Language}</p>
                </div>
            </div>
        </div>
    );
}