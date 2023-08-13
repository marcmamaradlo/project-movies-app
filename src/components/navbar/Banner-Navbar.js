import { useContext } from "react";
import { MyContext } from "../../context";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchResult from "./Search-Result";

const BannerNavbar = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const [userInput, setUserInput] = useState('');
    const [searchResult, setSearchResult] = useState('');
    console.log(searchResult)

    async function getSearchResults() {
        try {
            const inputString = userInput.split(' ').join('%');
            const query = inputString;
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/search/multi?language=en-US&query=${query}&page=1&api_key=${apiKey}`);
            setSearchResult(response.data.results)
        }
        catch (error) {
            // console.log('No Data Mounted in State');
        }
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
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
                </div>
                <SearchResult data={searchResult} />
            </div>
        </>
    )
}

export default BannerNavbar;