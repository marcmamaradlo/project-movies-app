import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchResult from "./Search-Result";

const BannerNavbar = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const userInput = context.state.userInput;
    const hamburgerIcon = context.state.hamburgerIcon;
    const activePage = context.state.activePage;
    const handleHamburgerIcon = context.handleHamburgerIcon;
    const handleUserInput = context.handleUserInput;
    const [searchResultData, setSearchResultData] = useState('');

    useEffect(() => {
        getSearchResults() // eslint-disable-next-line
    }, [userInput])

    async function getSearchResults() {
        try {
            const inputString = userInput.split(' ').join('%');
            const query = inputString;
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/search/multi?language=en-US&query=${query}&page=1&api_key=${apiKey}`);
            setSearchResultData(response.data.results)
        }
        catch (error) {
            // console.log('No Data Mounted in State');
        }
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        getSearchResults();
    }

    return (
        <>
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
                            <input
                                type='text'
                                id='searchInput'
                                value={userInput}
                                placeholder='Search...'
                                onChange={handleUserInput}
                            />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className='banner-navbar-menu'>
                        <p className={activePage === 'movie' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>MOVIES</p>
                        <p className={activePage === 'tv' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>TV SHOW</p>
                        <p className={activePage === 'people' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>PEOPLE</p>
                        <p className={activePage === 'search' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>SEARCH</p>
                    </div>
                    <div className='burger-icon text-shadow'>
                        {/* <button
                            onClick={handleSearchButton}
                            className={
                                searchButton
                                    ? 'display-none'
                                    : 'box-shadow'
                            }
                        >
                            Search... <i class="fa-solid fa-magnifying-glass"></i>
                        </button> */}
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
                            <p>HOME</p>
                            <p>MOVIES</p>
                            <p>TV SHOW</p>
                            <p>PEOPLE</p>
                            <p>SEARCH</p>
                            <i
                                onClick={handleHamburgerIcon}
                                className="fa-regular fa-rectangle-xmark"
                            >

                            </i>
                        </div>
                    </div>
                </div>
                <SearchResult data={searchResultData} />
            </div>
        </>
    )
}

export default BannerNavbar;