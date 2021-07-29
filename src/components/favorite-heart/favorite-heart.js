import ToggleSVG from 'components/toggle-svg/toggle-svg';
import React from 'react';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

// Wrapper of ToggleSVG with our favorite images and logic for localStorage
export default function FavoriteHeart({ id }) {
    // Check to see if this property has been favorited before in local storage
    const isFavorited = () => {
        return (localStorage.getItem(`property-${id}`) === 'true');
    }

    // Set this property as a favorite in local storage
    const setFavorited = (isFavorite) => {
        localStorage.setItem(`property-${id}`, isFavorite);
    }

    return (
        <ToggleSVG offSVG={heartStroke} onSVG={heartFill} onClick={setFavorited} initialToggle={isFavorited()} />
    );
}