import { useContext } from "react";
import { MyContext } from "../../context";

const RecentTrailers = () => {

    const context = useContext(MyContext);
    const bgSrc = context.bgSrc;
    const handleMouseEnter = context.handleMouseEnter;
    const handleMouseLeave = context.handleMouseLeave;

    const dynamicBG = {
        backgroundImage: `url(${bgSrc})`,
        transition: '200ms',
    }


    return (
        <div className='section'>
            <div className='heading'>
                <div className='heading-left'>
                    <h3>Recent Trailers</h3>
                    <button>Today</button>
                    <button>This Week</button>
                </div>
                <p>view all <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className='recent-trailer' style={{ ...dynamicBG }}>
                <div className='recent-trailer-div'>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1584448141569-69f342da535c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=741&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />

                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1580130544390-ba44d5ae8103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1580130544326-80fc93876841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=690&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1584448141569-69f342da535c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=741&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1580130544390-ba44d5ae8103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            <img
                                src='https://images.unsplash.com/photo-1580130544326-80fc93876841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=690&q=80'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} alt='poster' />
                            <div className='rating'>
                                <p>98%</p>
                            </div>
                        </div>
                        <div className='card-container-title'>
                            <p>The Movie Title, The Movie Title</p>
                        </div>
                        <div className='card-container-year'>
                            <p>2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentTrailers;