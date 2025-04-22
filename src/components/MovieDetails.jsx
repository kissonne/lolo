import React from 'react';

export function MovieDetails({ movie, onClose }) {
    return (
        <div className="movie-details-overlay" onClick={onClose}>
            <div className="movie-details-card" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                
                <div className="movie-details-content">
                    <div className="poster-column">
                        <img 
                            src={movie.Poster !== 'N/A' ? movie.Poster : `https://via.placeholder.com/300x450?text=${movie.Title}`}
                            alt={movie.Title}
                            className="detail-poster"
                        />
                    </div>
                    
                    <div className="info-column">
                        <h2>{movie.Title} ({movie.Year})</h2>
                        
                        <div className="movie-meta">
                            <p><strong>Rating:</strong> ⭐ {movie.imdbRating}/10</p>
                            <p><strong>Runtime:</strong> {movie.Runtime}</p>
                            <p><strong>Genre:</strong> {movie.Genre}</p>
                            <p><strong>Director:</strong> {movie.Director}</p>
                            <p><strong>Actors:</strong> {movie.Actors}</p>
                        </div>
                        
                        <div className="movie-plot">
                            <h4>Plot</h4>
                            <p>{movie.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}