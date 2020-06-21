import { combineReducers } from 'redux';

import FavoritesReducer from './FavoritesReducer';

const rootReducer = combineReducers({
    favoritesState: FavoritesReducer,
});

export default rootReducer;