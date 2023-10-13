import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { useState } from "react";
import { Link } from "react-router-dom";
// import appIcon from '../../assets/image-not-found/app-icon.png'
import axios from "axios";
import SearchResult from "./Search-Result";

const Navbar = () => {

    const context = useContext(MyContext);
    const [searchResultData, setSearchResultData] = useState('');
    const state = context.state;
    const userInput = context.state.userInput;
    const hamburgerIcon = context.state.hamburgerIcon;
    const activePage = context.state.activePage;
    const handleHamburgerIcon = context.handleHamburgerIcon;
    const handleNavbarMenuButtons = context.handleNavbarMenuButtons;
    const handleUserInput = context.handleUserInput;
    const handleNavbarMenu = context.handleNavbarMenu;

    useEffect(() => {
        const timeOutId = setTimeout(() => getSearchResults(), 500);
        return () => clearTimeout(timeOutId);
        //  eslint-disable-next-line
    }, [userInput]);

    async function getSearchResults() {
        try {
            const inputString = userInput.split(' ').join('%');
            const query = inputString;
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=1&api_key=${apiKey}`);
            setSearchResultData(response.data.results);
        }

        catch (error) {
            console.log(error);
        }
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        getSearchResults();
    }

    return (
        <div className='container dark'>
            <div className='section-zero-mp'>
                <div className='banner-navbar'>
                    <div className='banner-navbar-logo'>
                        {/* <Link to='/'>
                            <img src={appIcon} alt='App Logo' />
                        </Link> */}
                        {/* <p className='text-shadow'><Link>TV-Natin.to</Link></p> */}
                        <p className='text-shadow'><Link to='/'>MoviesDB</Link></p>
                    </div>
                    <div className='banner-navbar-search-container'>
                        <form
                            className='banner-navbar-search box-shadow'
                            onSubmit={handleSearchSubmit}
                        >
                            {/* <label for='type'>{`${dataType}`}</label> */}
                            {/* <select onClick={handleDropDownMenu} name='type' id='type'>
                                <option value='movie'>Movie</option>
                                <option value='tv'>TV Show</option>
                                <option value='person'>People</option>
                            </select> */}
                            <input
                                type='text'
                                id='searchInput'
                                value={userInput}
                                placeholder='Quick Search'
                                onChange={handleUserInput}
                            />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <SearchResult data={searchResultData} />
                    </div>
                    <div className='banner-navbar-menu'>
                        <p name='movie' onClick={handleNavbarMenu} className={activePage === 'movie' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>MOVIES</p>
                        <p name='tv' onClick={handleNavbarMenu} className={activePage === 'tv' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>TV SHOW</p>
                        <p name='person' onClick={handleNavbarMenu} className={activePage === 'person' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>PEOPLE</p>
                        <Link to='/search' name='search' onClick={handleNavbarMenu} className={activePage === 'search' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>SEARCH</Link>
                    </div>
                    <div className='burger-icon text-shadow'>
                        <i
                            onClick={handleHamburgerIcon}
                            className={
                                hamburgerIcon
                                    ? 'display-none'
                                    : 'fa-solid fa-bars'
                            }
                        >
                        </i>
                        <div className={
                            hamburgerIcon
                                ? 'off-canvas-menu'
                                : 'display-none'
                        }
                        >
                            <Link to='/' name='home' onClick={handleNavbarMenuButtons}>HOME</Link>
                            <Link to='/' name='movie' onClick={handleNavbarMenuButtons}>MOVIES</Link>
                            <Link to='/' name='tv' onClick={handleNavbarMenuButtons}>TV SHOW</Link>
                            <Link to='/' name='person' onClick={handleNavbarMenuButtons}>PEOPLE</Link>
                            <Link to='/search' name='search' onClick={handleNavbarMenuButtons}>SEARCH</Link>
                            <i
                                onClick={handleHamburgerIcon}
                                className="fa-regular fa-rectangle-xmark"
                            >
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;