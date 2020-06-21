import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForecastFavorites from '../cmps/favorites/ForecastFavorites';

import { loadFavorites, removeFromFavorites } from '../actions/FavoritesActions';

class Favorites extends Component {

    state = {
        forecasts: []
    }

    componentDidMount() {
        this.props.loadFavorites();
    }

    componentDidUpdate(prevProps) {
        const { favorites } = this.props;
        if (prevProps.favorites !== favorites) {
            this.props.loadFavorites();
        }
    }

    render() {

        const { favorites } = this.props;

        return (
            <div className="flex full favorites-container">
                {favorites &&
                    <ForecastFavorites favorites={favorites} />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favoritesState.favorites
    }
}

const mapDispatchToProps = {
    loadFavorites,
    removeFromFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);