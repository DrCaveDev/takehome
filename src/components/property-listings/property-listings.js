import Property from 'components/property/property';
import React, { useEffect, useState } from 'react';
import PropertyService from '../../services/property.service';
import './property-listings.css';

// Retrieves and diplays properties
export default function PropertyListings() {
    //Hold on to the properties we are using
    const [properties, setProperties] = useState([]);

    // On first load use property service to hydrate properties
    useEffect(() => {
        PropertyService.getAllProperties().then(properties => {
            setProperties(properties);
        });
    }, []);

    return (
        <div className="property-listings">
            <div className="property-listings-grid">
                {properties?.map(property => (
                    <Property key={`property${property.id}`} property={property} />
                ))}
            </div>
        </div>
    );
}