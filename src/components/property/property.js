import FavoriteHeart from 'components/favorite-heart/favorite-heart';
import PropertyMetadata from 'components/property-metadata/property-metadata';
import React from 'react';
import { getFullAddress } from 'utils';
import './property.css';

// Molecule of a single property listing
export default function Property({ property }) {
    const { id, bedrooms, bathsFull, bathsHalf, area, listPrice, address, listDate, photo } = property;

    // Do the math for total number of baths
    // If this logic was going to be used elsewhere I would
    // extract into utils
    const getTotalBaths = (full, half) => {
        const halfCount = .5 * half;

        return full + halfCount;
    }

    return (
        <div className="property">
            <div className="property-image-wrapper">
                <img className="property-image" src={photo} alt={`Home at ${getFullAddress(address)}`} />
                <div className="favorite-heart">
                    <FavoriteHeart id={id} />
                </div>
            </div>
            <PropertyMetadata bedrooms={bedrooms} bathsTotal={getTotalBaths(bathsFull, bathsHalf)} area={area} listPrice={listPrice} address={address} listDate={listDate} />
        </div>
    );
}