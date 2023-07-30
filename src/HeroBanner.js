import React from 'react';
import './heroBanner.css';
import NavBar from './NavBar';
import pic from './pic.png';

export default function HeroBanner() {
    return (
        <div className='hero-container'>
            <div className='hero-body'>
                <NavBar />
                <div style={{ display: 'flex' }}>
                    <div className='hero-left-body'>
                        <span className='first'>"Explore New Place</span>
                        <span className='second'>Find Next Place To Visit</span>
                        <span className='third'>"I love that Overpass lets us manage everything in one place. It's super helpful to be able.</span>
                        <div className='btn-container'>
                            <button className='contact-btn'>Contact Us</button>
                            <button className='watch-btn'>Watch Video</button>
                        </div>

                    </div>
                    <div className='hero-right-body'>
                        <div className='circle'></div>
                        <img src={pic} alt='travel_picture' className='travel-image' />
                    </div>
                </div>
                <div className='hero-sub-container'>
                    <div className='hero-sub'>
                        <span className='ready'>Ready to get started</span>
                        <div className='card'><div className='inner-card'>Best Tour Guide</div></div>
                        <div className='card'><div className='inner-card1'>Destination lot of choices</div></div>
                        {/* <svg fill='#000000'>
                            <rect width="200" height="400" />
                        </svg> */}
                        <div className='line-vertical'></div>
                        <span className='destination'>450+ Destination</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
