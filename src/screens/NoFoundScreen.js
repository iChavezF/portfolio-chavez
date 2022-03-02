import React from 'react'
import { HeadManager } from '../components/HeadManager'

export const NotFoundScreen = () => {
    return (
        <div>
            <HeadManager title='not found' />
            <img  className = 'about-wrapper' src='https://http.cat/404' alt='notfound'></img>
        </div>
    )
}
