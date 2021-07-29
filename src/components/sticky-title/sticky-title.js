import React from 'react';
import './sticky-title.css';

// Title fixed to top of page regardless of scroll position
// children are used here to simplify positioning of 
// property grid
export default function StickyTitle({ title, children }) {
    return (
        <div>
            <div className="sticky-title">
                {title}
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}