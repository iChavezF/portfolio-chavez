import { HeadManager } from '../components/HeadManager'


export const BlogScreen = () => {

    const handleClick = () => {
        // console.log("click")
    }

    // useEffect

    return (
        <div className="showcase-wrapper">
            <HeadManager title='showcase' />
            <div className="showcase-wrapper-flex">
                <div onClick={handleClick} className="showcase-card-blog">
                    <div className="showcase-info">
                        <div className="role">Nestjs</div>
                        <div className="heading">Installing Redis and setting as a service</div>
                        <div className="project-dates">February 2022</div>
                        <div className="tags">
                            <p className="tag">nestjs</p>
                            <p className="tag">redis</p>
                            <p className="tag">typescript</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">In this case we will configure as a service for inject on another services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
