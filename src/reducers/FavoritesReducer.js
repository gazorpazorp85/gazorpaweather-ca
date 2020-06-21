const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_FAVORITES':
            return { ...state, favorites: action.favorites };
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.location] };
        case 'DELETE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(favorite => favorite.Key !== action.location.Key) };
        default:
            return state;
    }
}