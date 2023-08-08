import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

const BannerNavbar = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const navbarSearchFocus = state.navbarSearchFocus;
    const handleNavbarSearchFocus = context.handleNavbarSearchFocus;
    const handleNavbarSearchBlur = context.handleNavbarSearchBlur;

    // const handleInputClassname = () => {
    //     return (navbarSearchFocus === true
    //         ? 'banner-navbar-search-focus'
    //         : 'banner-navbar-search')
    // }

    return (
        <>
            <div className='section-zero-mp'>
                <div className='banner-navbar'>
                    <div className='banner-navbar-logo'>
                        <p className='text-shadow'><Link to='/'>MoviesDB</Link></p>
                        {/* <i className="fa-solid fa-video"></i> */}
                    </div>
                    <div
                        className='banner-navbar-search-container'
                        onFocus={handleNavbarSearchFocus}
                        onBlur={handleNavbarSearchBlur}
                    >
                        <div className='banner-navbar-search box-shadow'>
                            <input
                                type='text'
                                id='searchInput'
                                placeholder='Search...'
                                className={navbarSearchFocus === true
                                    ? 'banner-navbar-search-focus'
                                    : ''}
                            />
                            <button
                                className={navbarSearchFocus === true
                                    ? 'banner-navbar-button-focus'
                                    : ''}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerNavbar;