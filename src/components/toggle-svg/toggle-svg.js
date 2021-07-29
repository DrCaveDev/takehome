import React from 'react';
import { useState } from 'react';
import './toggle-svg.css';

//Allows toggling between two supplied svgs
export default function ToggleSVG({ offSVG, onSVG, onClick, initialToggle = false }) {
    const [toggled, setToggled] = useState(initialToggle);

    const svg = toggled ? onSVG : offSVG;

    // Using a callback here to allow outer component to persist if desired
    const onImageClick = () => {
        let newToggle = !toggled;
        setToggled(newToggle);
        onClick(newToggle);
    }

    return (
        <>
            <img className="fill-parent" onClick={onImageClick} src={svg} alt={`Favorite icon (${toggled ? 'Favorited' : 'Not Favorited'})`} />
        </>
    );
}