import React from 'react';
import './navBar.css';

export default function NavBar() {
  return (
    <div className='navBar-container'>
        <div className='company-name'>
            <span style={{color : "yellow", display: 'inline'}}>AB</span>-Studio
        </div>
        <div className='navBar-options'>
            <div className='options'>Travel</div>
            <div className='options'>Services</div>
            <div className='options'>Contacts</div>
        </div>
        <div className='signUp-option'>
            Sign Up
        </div>
    </div>
  )
}