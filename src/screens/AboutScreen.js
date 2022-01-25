import React from 'react'
import { HeadManager } from '../components/HeadManager'
import iam from '../assets/img/yo.jpg'
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import twitter from '../assets/img/twitter.png'
import gmail from '../assets/img/gmail.png'

export const AboutScreen = () => {
    return (
        <div className='about-wrapper'>
            <HeadManager title='about' />
            <div className='about-wrapper-flex'>
                <h2 className='about gradient'>About me</h2>
                <img className="profile" src={iam} alt="profile" />

                <p className='about'>I am currently a software developer, making backend apps that
                    serve data for applications mobile, web,
                    desktop, inclusive another backend apps.</p>
            </div>
            <div className='about-wrapper-flex'>
                <h2 className='about gradient'>Contact me</h2>
                <p className='about'>Feel free to send me a message.</p>
                <ul>
                    <li><a href="https://github.com/jeckefe" target='_blank' rel="noreferrer">
                        <img className="brands-network" src={github} alt="github logo" />
                        Github
                    </a></li>
                    <li><a href="https://twitter.com/jeckefe" target='_blank' rel="noreferrer">
                        <img className="brands-network" src={twitter} alt="twitter logo" />
                        Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/jechavezf/" target='_blank' rel="noreferrer">
                        <img className="brands-network" src={linkedin} alt="github logo" />
                        Linkedin</a></li>
                    <li><a href="mailto:jechavezf@gmail.com" target='_blank' rel="noreferrer">
                        <img className="brands-network" src={gmail} alt="gmail logo" />
                        Mail</a></li>
                </ul>
            </div>
        </div>
    )
}
