import React from 'react';

export function Movie({ Title: title, Year: year, imdbID: id, Type: type, Poster: poster }) {
    const openMoviePage = () => {
        window.open(`/movie/${id}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <div 
            className="movie-card"
            onClick={openMoviePage}
            style={{
                cursor: 'pointer',
                margin: '10px',
                width: '200px',
                transition: 'transform 0.2s',
                ':hover': {
                    transform: 'scale(1.03)'
                }
            }}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openMoviePage()}
            role="button"
            aria-label={`Открыть детали фильма ${title}`}
        >
            <div className="poster-container">
                <img 
                    src={poster !== 'N/A' ? poster : `https://via.placeholder.com/200x300?text=${title}`}
                    alt={`Постер ${title}`}
                    style={{ width: '100%', borderRadius: '8px' }}
                    loading="lazy"
                />
            </div>
            <div className="movie-info">
                <h4>{title}</h4>
                <p>
                    {year} 
                    <span className="movie-type">{type}</span>
                </p>
            </div>
        </div>
    );
}