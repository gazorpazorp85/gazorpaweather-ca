import React from 'react';

export default function ForecastFavorites({ favorites }) {
    return (
        <div className="main-container forecasts-container">
            {favorites.map(favorite => <div key={favorite.Key}>{favorite.LocalizedName}</div>)}
        </div>
    )
}