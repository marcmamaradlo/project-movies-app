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
    const handleDropDownMenu = context.handleDropDownMenu;
    const dropDownMenu = context.state.dropDownMenu;

    useEffect(() => {
        getSearchResults() // eslint-disable-next-line
    }, [userInput]);

    async function getSearchResults() {
        try {
            const inputString = userInput.split(' ').join('%');
            const query = inputString;
            const apiKey = state.apiKey;
            if (dropDownMenu === 'movie') {
                console.log('movie');
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&api_key=${apiKey}`);
                return setSearchResultData(response.data.results);
            }
            if (dropDownMenu === 'tv') {
                console.log('tv');
                const response = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&language=en-US&page=1&api_key=${apiKey}`);
                return setSearchResultData(response.data.results);
            }
            if (dropDownMenu === 'person') {
                console.log('person');
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${query}&language=en-US&page=1&api_key=${apiKey}`)
                return setSearchResultData(response.data.results);
            }
            else {
                // console.log('else');
                // const response = await axios.get(`https://api.themoviedb.org/3/search/multi?language=en-US&query=${query}&page=1&api_key=${apiKey}`);
                // return setSearchResultData(response.data.results);
                console.log('Search Error');
                alert('Sorry, Nothing Found');
            }
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
                            <select onClick={handleDropDownMenu} name='type' id='type'>
                                <option value='movie'>Movie</option>
                                <option value='tv'>TV Show</option>
                                <option value='person'>People</option>
                            </select>
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
                        <p className={activePage === 'movie' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>MOVIES</p>
                        <p className={activePage === 'tv' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>TV SHOW</p>
                        <p className={activePage === 'person' ? 'banner-navbar-menu-active' : 'banner-navbar-menu-default'}>PEOPLE</p>
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
                {/* <SearchResult data={searchResultData} /> */}
            </div>
        </div>
    )
}

export default Navbar;