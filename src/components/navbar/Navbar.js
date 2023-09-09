import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className='container bg-dark'>
            <div className='section-zero-mp'>
                <div className='banner-navbar'>
                    <div className='banner-navbar-logo'>
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
                                placeholder='Search...'
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
                            <Link to='/' onClick={handleHamburgerIcon}>HOME</Link>
                            <p>MOVIES</p>
                            <p>TV SHOW</p>
                            <p>PEOPLE</p>
                            <Link to='/search' onClick={handleHamburgerIcon}>SEARCH</Link>
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