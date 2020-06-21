import React from 'react';

import LocationsPreview from './LocationsPreview';

export default function LocationsList({ locations, setCity }) {
    return (
        <div className="flex column locations-list-container">
            {locations.map(location => <LocationsPreview key={location.Key} locationName={location.LocalizedName} setCity={setCity} />)}
        </div>
    )
}