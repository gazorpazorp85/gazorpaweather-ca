const favorites = JSON.parse(localStorage.getItem('favorites'));

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
        type: 'EDIT_FAVORITES',
        newFavorites
    }
}

export function removeFromFavorites(favoriteToDelete) {
    const newFavorites = favorites.filter(favorite => favorite.Key !== favoriteToDelete.Key);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return {
        type: 'EDIT_FAVORITES',
        newFavorites
    }
}

