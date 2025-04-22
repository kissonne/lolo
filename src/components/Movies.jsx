import React, { useState } from 'react';
import { Movie } from './Movie';
import { MovieDetails } from './MovieDetails';

export function Movies({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleMovieClick = async (id) => {
        console.log('Fetching details for movie:', id);
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?i=${id}&apikey=e7d3551` // Ваш ключ здесь
            );
            const data = await response.json();
            
            if (data.Response === 'True') {
                setSelectedMovie(data);
            } else {
                setError(data.Error || 'Failed to load movie details');
            }
        } catch (err) {
            setError('Network error: ' + err.message);
            console.error('API request failed:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="movies-container">
            <div className="movies-grid">
                {movies.map(movie => (
                    <Movie 
                        key={movie.imdbID}
                        {...movie}
                        onClick={handleMovieClick}
                    />
                ))}
            </div>

            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                    <p>Loading movie details...</p>
                </div>
            )}

            {error && (
                <div className="error-message">
                    <p>⚠️ {error}</p>
                </div>
            )}

            {selectedMovie && (
                <MovieDetails 
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
}