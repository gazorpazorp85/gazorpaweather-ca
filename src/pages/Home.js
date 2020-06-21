import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherInfo from '../cmps/home/WeatherInfo';
import SearchBar from '../cmps/home/SearchBar';

import WeatherService from '../services/WeatherService';

import { addToFavorites, loadFavorites, removeFromFavorites } from '../actions/FavoritesActions';

class Home extends Component {

    state = {
        location: '',
        weather: '',
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

    setLocation = (location) => {
        this.setState({ location: location }, () => this.showWeatherByLocation());
    }

    showWeatherByLocation = async () => {
        try {
            const weather = await WeatherService.getCurrentConditions(this.state.location.Key);
            this.setState({ weather: weather[0] });
        } catch (err) {
            console.log(err);
        }
    }

    editFavorites = (location) => {
        const { addToFavorites, favorites, removeFromFavorites } = this.props;
        const isLocationInFavorites = favorites.length > 0 ? favorites.findIndex(favorite => favorite.Key === location.Key) : -1;
        if (isLocationInFavorites < 0) {
            addToFavorites(location);
        } else {
            removeFromFavorites(location);
        }
    }

    render() {

        const { location, weather } = this.state;

        return (
            <div className="flex full home-container" >
                <div className="flex column main-container home-subcontainer">
                    <div className="flex logo-container"></div>
                    <SearchBar setLocation={this.setLocation} />
                    {location && weather && <WeatherInfo editFavorites={this.editFavorites} location={location} weather={weather} />}
                </div>
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
    addToFavorites,
    loadFavorites,
    removeFromFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);