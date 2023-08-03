// import VideoPlayer from "../video-player/Video-Player";
import ComingSoon from "../body/Coming-Soon";
import DynamicBanner from "./Dynamic-Banner";
const DynamicPage = () => {
    return (
        <>
            <div className='container'>
                <DynamicBanner />
            </div>
            <div className='container bg-dark'>
                <div className='section'>
                    <div className='dynamic-container'>
                        <div className='dynamic-image-container'>
                            <img src='https://images.unsplash.com/photo-1602248003575-934425e8088d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='some title' />
                        </div>
                        <div className='dynamic-details'>
                            <p className='dynamic-details-title'>Knights of the Zodiac</p>
                            <div className='dynamic-details-title-icons'>
                                <p><span className="material-symbols-outlined">hd</span></p>
                                <p><i className="fa-solid fa-star"></i> 5.0</p>
                                <p><i class="fa-solid fa-clock"></i> 2Hr</p>
                                <p><i class="fa-regular fa-calendar-days"></i> 2023</p>
                            </div>
                            <p className='dynamic-details-overview'>When a goddess of war reincarnates in the body of a young girl, street orphan Seiya discovers that he is destined to protect her and save the world. But only if he can face his own past and become a Knight of the Zodiac. </p>
                            <div className='dynamic-details-details'>
                                <div>
                                    <p className='details'>Status: </p>
                                    <p className='tags'>Released, 2023</p>
                                </div>
                                <div>
                                    <p className='details'>Genre: </p>
                                    <p className='tags'><a href='/'>Action</a>, <a href='/'>Fantasy</a>, <a href='/'>Documentary</a></p>
                                </div>
                                <div>
                                    <p className='details'>Language: </p>
                                    <p className='tags'>English</p>
                                </div>
                                <div>
                                    <p className='details'>Cast: </p>
                                    <p className='tags'><a href='/'>D' One</a>, <a href='/'>Edwin Fernandez</a>, <a href='/'>Marc Mamaradlo</a></p>
                                </div>
                                <div>
                                    <p className='details'>Homepage: </p>
                                    <p className='tags'><a href='someWebsite'>simplecodesph.website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container bg-dark'>
                <ComingSoon />
            </div>
        </>
    )
}

export default DynamicPage;