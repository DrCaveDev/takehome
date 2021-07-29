import React from 'react';
import { getFormattedPrice, getFormattedDate, getFullAddress } from '../../utils';
import './property-metadata.css';

// Display all of the information about the property
export default function PropertyMetadata({ bedrooms, bathsTotal, area, listPrice, address, listDate }) {
    return (
        <div className="meta-text">
            <div className="general-info">
                {bedrooms} BR | {bathsTotal} Bath | {area} Sq Ft
            </div>
            <div className="price-info">
                {getFormattedPrice(listPrice)}
            </div>
            {/* Addresses tended to be longer from the api than in examples so width is capped and will wrap */}
            <div className="address-info">
                {getFullAddress(address)}
            </div>
            <div className="listed-info">
                Listed: {getFormattedDate(listDate)}
            </div>
        </div>
    );
}