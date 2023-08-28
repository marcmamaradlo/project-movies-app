import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

const SearchResult = ({ data }) => {

    const context = useContext(MyContext);
    const searchResult = context.state.searchResult;
    const handlePopOutTrailerButton = context.handlePopOutTrailerButton;
    const dropDownMenu = context.state.dropDownMenu;

    const searchResults = () => {
        return data
            // ? data.slice(0, 5).map((item, index) => (
            ? data.map((item, index) => (
                <Link
                    to={`/${dropDownMenu}/${item.id}`}
                    id={item.id}
                    key={index}
                >

                    <div id={item.id} className='search-result-card' onClick={handlePopOutTrailerButton}>
                        <div className='search-result-card-container-image' id={item.id}>
                            {
                                dropDownMenu === 'movie'
                                    ? item.poster_path
                                        ? <img src={`https://image.tmdb.org/t/p/w92${item.poster_path}`} alt={item.name} />
                                        : <img src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`} alt={item.name} />
                                    : dropDownMenu === 'tv'
                                        ? item.poster_path
                                            ? <img src={`https://image.tmdb.org/t/p/w92${item.poster_path}`} alt={item.name} />
                                            : <img src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`} alt={item.name} />
                                        : dropDownMenu === 'person'
                                            ? item.profile_path
                                                ? <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`} alt={item.name} />
                                                : <img src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`} alt={item.name} />
                                            : <img src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`} alt={item.name} />
                            }
                        </div>
                        <div className='search-result-card-details' id={item.id}>
                            <p className='result-title' id={item.id}>
                                {
                                    dropDownMenu === 'movie'
                                        ? item.title
                                        : dropDownMenu === 'tv'
                                            ? item.name
                                            : dropDownMenu === 'person'
                                                ? item.name
                                                : null
                                }
                            </p>
                            <div>
                                <p id={item.id}>
                                    {
                                        dropDownMenu === 'movie'
                                            ? (item.release_date
                                                ? item.release_date.split('-')[0]
                                                : '????'
                                            )
                                            : dropDownMenu === 'tv'
                                                ? (item.first_air_date
                                                    ? item.first_air_date.split('-')[0]
                                                    : '????'
                                                )
                                                : dropDownMenu === 'person'
                                                    ? item.gender === 0 ? 'Male' : 'Female'
                                                    : item.gender === 1 ? 'Female' : 'Male'
                                    }
                                </p>
                                <i className="fa-solid fa-circle" id={item.id}></i>
                                <p id={item.id}>
                                    {
                                        dropDownMenu === 'movie'
                                            ? dropDownMenu
                                            : dropDownMenu === 'tv'
                                                ? dropDownMenu
                                                : dropDownMenu === 'person'
                                                    ? item.known_for_department
                                                    : null
                                    }
                                </p>
                                <i className="fa-solid fa-circle" id={item.id}></i>
                                <p id={item.id}>
                                    {
                                        dropDownMenu === 'movie'
                                            ? item.vote_average
                                            : dropDownMenu === 'tv'
                                                ? item.vote_average
                                                : dropDownMenu === 'person'
                                                    ? item.popularity
                                                    : null
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
            : null
    }

    return (
        data
            ? <div
                className={
                    searchResult
                        ? 'search-result-container'
                        : 'display-none'
                }
            >
                <div className='search-result-card-container' >
                    {searchResults()}
                    {console.log(searchResult)}
                    {console.log(data)}
                    {/* {data.length > 5
                        ? <div className='search-result-view-all'>
                            <p>
                                VIEW ALL <i className="fa-solid fa-arrow-right"></i>
                            </p>
                        </div >
                        : null
                    } */}
                </div >
            </div >
            : console.log('Search-Result not showing')
    )
}

export default SearchResult;