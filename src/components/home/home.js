import React from 'react';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

export default function Home() {
    return (
        <div
      style={{
        padding: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#eee',
      }}
    >
      <h1>Side React Take-home Assignment</h1>
      <div>
        <div>Here are the SVG assets you will need.</div>
        <img src={heartFill} className="App-logo" alt="favorite icon" />
        <img src={heartStroke} className="App-logo" alt="unfavorite icon" />
      </div>
    </div>
    );
}