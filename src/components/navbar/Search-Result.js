import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context";

const SearchResult = ({ data }) => {
  const context = useContext(MyContext);
  const refOne = useRef(null);
  const [checkData, setCheckData] = useState(false);
  const searchResult = context.state.searchResult;
  const handleOnBlurEvent = context.handleOnBlurEvent;
  const handlePopOutTrailerButton = context.handlePopOutTrailerButton;

  useEffect(() => {
    data ? setCheckData(true) : setCheckData(false);
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    mountEventListener();
    // eslint-disable-next-line
  }, []);

  const mountEventListener = () => {
    return data
      ? document.addEventListener("click", handleClickOutsideNavbar, true)
      : document.removeEventListener("click", handleClickOutsideNavbar, true);
    // : null;
  };

  const handleClickOutsideNavbar = (e) => {
    if (!refOne.current.contains(e.target)) {
      // console.log('click outside navbar');
      handleOnBlurEvent();
      // setCheckData(false);
    } else {
      console.log("search result closed!");
      // console.log(e.target);
    }
  };

  const searchResults = () => {
    return checkData
      ? data.map((item, index) => (
          <Link to={`/${item.media_type}/${item.id}`} id={item.id} key={index}>
            <div
              id={item.id}
              className="search-result-card"
              onClick={handlePopOutTrailerButton}
            >
              <div className="search-result-card-container-image" id={item.id}>
                {item.media_type === "movie" ? (
                  item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                      alt={item.name}
                    />
                  ) : (
                    <img
                      src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`}
                      alt={item.name}
                    />
                  )
                ) : item.media_type === "tv" ? (
                  item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                      alt={item.name}
                    />
                  ) : (
                    <img
                      src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`}
                      alt={item.name}
                    />
                  )
                ) : item.media_type === "person" ? (
                  item.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                      alt={item.name}
                    />
                  ) : (
                    <img
                      src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`}
                      alt={item.name}
                    />
                  )
                ) : (
                  <img
                    src={`https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`}
                    alt={item.name}
                  />
                )}
              </div>
              <div className="search-result-card-details" id={item.id}>
                <p className="result-title" id={item.id}>
                  {item.media_type === "movie"
                    ? item.title
                    : item.media_type === "tv"
                    ? item.name
                    : item.media_type === "person"
                    ? item.name
                    : null}
                </p>
                <div>
                  <p id={item.id}>
                    {item.media_type === "movie"
                      ? item.release_date
                        ? item.release_date.split("-")[0]
                        : "????"
                      : item.media_type === "tv"
                      ? item.first_air_date
                        ? item.first_air_date.split("-")[0]
                        : "????"
                      : item.media_type === "person"
                      ? item.gender === 0
                        ? "Male"
                        : "Female"
                      : item.gender === 1
                      ? "Female"
                      : "Male"}
                  </p>
                  <i className="fa-solid fa-circle" id={item.id}></i>
                  <p id={item.id}>
                    {item.media_type === "movie"
                      ? item.media_type
                      : item.media_type === "tv"
                      ? item.media_type
                      : item.media_type === "person"
                      ? item.known_for_department
                      : null}
                  </p>
                  <i className="fa-solid fa-circle" id={item.id}></i>
                  <p id={item.id}>
                    {item.media_type === "movie"
                      ? item.vote_average
                      : item.media_type === "tv"
                      ? item.vote_average
                      : item.media_type === "person"
                      ? item.popularity
                      : null}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      : null;
  };

  return checkData ? (
    <div
      ref={refOne}
      className={searchResult ? "search-result-container" : "display-none"}
    >
      <div className="search-result-card-container">{searchResults()}</div>
    </div>
  ) : null; // console.log('Search-Result not showing')
};

export default SearchResult;
