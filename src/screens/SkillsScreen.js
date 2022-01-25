import React from 'react'
import { HeadManager } from '../components/HeadManager'

export const SkillsScreen = () => {
    return (
        <div className="skills-wrapper">
            <HeadManager title='skills'/>
            <div className="skills">
                <div className="skills-item skills-text">
                    <h2 className="skills-heading gradient">Skills</h2>
                    <p className="skills-para">I have strong knowledge in the field of backend apps. This languages, frameworks 
                    and libraries are any tools that I worked or work today.
                    <br/>
                    Easily I can found errors and bugs on legacy code or another apps already exists. 
                    <br/>
                    <br/>
                    Also I can learn new technologys for new projects if is required.
                    </p>
                </div>
                <div className="skills-item skills-info">
                    <div className="skills-info-languages">
                        <h2 className="skills-languages">Languages in which I have worked</h2>
                        <div className="skills-languages-list">
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='typescript' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg" alt='dart' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg" alt='kotlin' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt='java' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mysql' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt='postgresql' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt='mongodb' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='python' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt='php' />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt='csharp' />
                            </div>
                        </div>
                    </div>
                    <div className="skills-info-framworks">
                        <h2 className="skills-frameworks">Frameworks and Libraries</h2>
                        <div className="skills-frameworks-list">
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" alt='nestjs' />
                            </div>
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt='flutter' />
                            </div>
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt='spring boot' />
                            </div>
                            <div className="framework-card">
                                <img className="express framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='expressjs' />
                            </div>
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt='bootstrap' />
                            </div>
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react' />
                            </div>
                        </div>
                    </div>
                    <div className="skills-info-technologies">
                        <h2 className="skills-technologies">Other</h2>
                        <div className="skills-other-list">
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg" alt='android' />
                            </div>
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt='docker' />
                            </div>
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />
                            </div>
                            <div className="other-card">
                                <img className="heroku other-card-img" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/heroku.svg" alt='heroku' />
                            </div>
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt='linux' />
                            </div>

                            <div className="other-card">
                                <img className="postman other-card-img" src="https://cdn.jsdelivr.net/npm/simple-icons/icons/postman.svg" alt='postman' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
