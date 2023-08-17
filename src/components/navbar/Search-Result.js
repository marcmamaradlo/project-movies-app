import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

const SearchResult = ({ data }) => {

    const context = useContext(MyContext);
    const searchResult = context.state.searchResult;
    const handlePopOutTrailerButton = context.handlePopOutTrailerButton;

    const searchResults = () => {
        return data
            // ? data.slice(0, 5).map((item, index) => (
            ? data.map((item, index) => (
                <Link
                    to='/movie-page'
                    id={item.id}
                    key={index}
                >

                    <div id={item.id} className='search-result-card' onClick={handlePopOutTrailerButton}>
                        <div className='search-result-card-container-image' id={item.id}>
                            <img src={item.poster_path
                                ? `https://image.tmdb.org/t/p/w92${item.poster_path}`
                                : `https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`
                            }
                                alt={item.title}
                                id={item.id}
                            />
                        </div>
                        <div className='search-result-card-details' id={item.id}>
                            <p className='result-title' id={item.id}>
                                {item.media_type === 'movie'
                                    ? item.title
                                    : item.name
                                }
                            </p>
                            <div>
                                <p id={item.id}>
                                    {item.media_type === 'movie'
                                        ? (item.release_date
                                            ? item.release_date.split('-')[0]
                                            : '????'
                                        )
                                        : (item.first_air_date
                                            ? item.first_air_date.split('-')[0]
                                            : '????'
                                        )
                                    }
                                </p>
                                <i className="fa-solid fa-circle" id={item.id}></i>
                                <p id={item.id}>{item.media_type.toUpperCase()}</p>
                                <i className="fa-solid fa-circle" id={item.id}></i>
                                <p id={item.id}>{item.vote_average}</p>
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
            : null
    )
}

export default SearchResult;