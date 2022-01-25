import React from 'react'
import { HeadManager } from '../components/HeadManager'
import logo from '../assets/svg/rayo.svg';

export const HomeScreen = () => {
    return (
        <div className='landing-wrapper'>
            <HeadManager title='home' />
            <h6 className='hi'>Hello, I´m</h6>
            <div className="gradient">
                <img className="brand-logo" src={logo} alt="rayo logo"></img>
                <h1 className="gradient">Eduardo Chávez</h1>
            </div>
            <h6 className='footer'>Developed with ❤️ from MX</h6>
        </div>
    )
}
