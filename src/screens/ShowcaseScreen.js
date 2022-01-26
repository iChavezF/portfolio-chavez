import React from 'react'
import { HeadManager } from '../components/HeadManager'
import serviciosapi from '../assets/img/servicios-api.png'


export const ShowcaseScreen = () => {
    return (
        <div className="showcase-wrapper">
            <HeadManager title='showcase' />
            <div className="showcase-wrapper-flex">
                <div className="showcase-card">
                    <div className="showcase-info">
                        <div className="role">Technical test</div>
                        <div className="heading">Backend - sample-services</div>
                        <div className="project-dates">January 2022</div>
                        <div className="tags">
                            <p className="tag">nestjs</p>
                            <p className="tag">mongodb</p>
                            <p className="tag">typescript</p>
                            <p className="tag">swagger</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">Project with testing, deploy with github actions and heroku.</p>
                            <p className="project-link">
                                <a className="project-link-style" href="https://sample-services.herokuapp.com/api/" rel="noreferrer" target="_blank">https://sample-services.herokuapp.com/api/</a>
                                <br /><br />
                                <a className="project-link-style" href="https://github.com/jeckefe/servicios-api" rel="noreferrer" target="_blank">https://github.com/jeckefe/servicios-api</a>
                            </p>
                        </div>
                    </div>
                    <div className="showcase-image">
                        <img src={serviciosapi} alt="servicios api" />
                    </div>
                </div>
            </div>
            <div className="showcase-wrapper-flex">
                <div className="showcase-card">
                    <div className="showcase-info">
                        <div className="role">Technical test</div>
                        <div className="heading">Front - Users app</div>
                        <div className="project-dates">January 2022</div>
                        <div className="tags">
                            <p className="tag">flutter</p>
                            <p className="tag">dart</p>
                            <p className="tag">android</p>
                            <p className="tag">provider</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">Project deploy with github actions, go to next link to download application.</p>
                            <p className="project-link">
                                <a className="project-link-style" href="https://github.com/jeckefe/productos_app/suites/4965950654/artifacts/144601221" rel="noreferrer" target="_blank">https://github.com/jeckefe/productos_app/suites/4965950654/artifacts/144601221</a>
                                <br /><br />
                                <a className="project-link-style" href="https://github.com/jeckefe/productos_app" rel="noreferrer" target="_blank">https://github.com/jeckefe/productos_app</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
