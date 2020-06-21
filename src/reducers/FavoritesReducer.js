const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_FAVORITES':
            return { ...state, favorites: action.favorites };
        case 'ADD_FAVORITES':
            return { ...state, favorites: action.newFavorites };
        default:
            return state;
    }
}