const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export function loadFavorites() {
    return {
        type: 'LOAD_FAVORITES',
        favorites
    }
}

export function addToFavorites(location) {
    const newFavorites = [...favorites, location];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return {
        type: 'ADD_FAVORITE',
        location
    }
}

export function removeFromFavorites(location) {
    const newFavorites = favorites.filter(favorite => favorite.Key !== location.Key);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return {
        type: 'DELETE_FAVORITE',
        location
    }
}

