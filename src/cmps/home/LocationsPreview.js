import React from 'react';

export default function LocationsPreview({ locationName, setCity }) {
    return (
        <div className="flex align-center pointer location-container" onClick={() => setCity(locationName)}>
            <div>
                {locationName}
            </div>
        </div>
    )
}