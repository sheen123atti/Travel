import React from 'react';
import './contentSection.css';
import pic2 from './pic2.jpg';

export default function ContentSection() {
    return (
        <div className='content-container'>
            <div className='content-left-body'>
                <img src={pic2} alt='travel_pic' className='travel-image2' width='350' height='350' />
                <div className='total'>
                <svg width="140" height="140">
                    <circle cx="60" cy="80" r="50" stroke="#ffffff" stroke-width="4" fill="yellow" />
                    <text fill="#000000" font-size="30" font-family="Verdana" font-weight="bold"
                    x="18" y="80">150+</text>
                    <text fill="#000000" font-size="12" font-family="Verdana"
                    x="26" y="100">Application</text>
                </svg>
                </div>
            </div>
            <div className='content-right-body'>
                <span className='right-heading'>We take care of your trip</span>
                <span className='sub-text'>This is sub text</span>
                <button className='view-btn'>View More</button>
            </div>
        </div>
    )
}
