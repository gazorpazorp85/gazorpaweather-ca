import React, { Component } from 'react';

import LocationsList from './LocationsList';

import WeatherService from '../../services/WeatherService';

export default class SearchBar extends Component {

    state = {
        city: '',
        locations: null,
        searchQuery: ''
    }

    inputChange = (ev) => {
        const { value } = ev.target;
        this.setState({ searchQuery: value }, () => {
            if (this.state.searchQuery.length >= 2) this.predictLocation(this.state.searchQuery);
            if (this.state.searchQuery.length === 0) this.setState({ locations: null });
        });
    }

    predictLocation = async (query) => {
        try {
            const locations = await WeatherService.predictLocation(query);
            this.setState({ locations: locations });
        } catch (err) {
            console.log(err);
        }
    }

    setCity = (searchQuery) => {
        this.setState({ city: searchQuery, searchQuery: searchQuery });
    }

    searchLocation = (ev) => {
        ev.preventDefault();
        const { city, searchQuery, locations } = this.state;
        const query = city ? city.toLowerCase() : searchQuery.toLowerCase();
        const location = locations.find(location => location.LocalizedName.toLowerCase() === query);
        this.props.setLocation(location);
        this.setState({
            city: '',
            locations: null,
        });
    }

    render() {

        const { city, locations, searchQuery } = this.state;

        return (
            <div className="flex column align-center search-bar-container">
                <form onSubmit={this.searchLocation}>
                    <div className="flex input-container">
                        <input
                            type="text"
                            placeholder={'Enter city'}
                            value={searchQuery}
                            onChange={this.inputChange}
                        />
                        <button className="search-city">
                            Search
                        </button>
                    </div>
                    {locations && !city &&
                        <LocationsList locations={locations} setCity={this.setCity} />
                    }
                </form>
            </div>
        )
    }
}