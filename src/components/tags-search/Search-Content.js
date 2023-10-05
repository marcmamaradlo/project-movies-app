import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import FilteredMovies from "./Filtered-Movies";
import FilteredTV from "./Filtered-TV";
import FilteredPerson from "./Filtered-Person";
import FilteredCollection from "./Filtered-Collection.";
import ReactPaginate from "react-paginate";

const SearchContent = (props) => {

  const params = useParams();
  const context = useContext(MyContext);
  const state = context.state;
  const filterMenu = context.state.filterMenu;
  console.log(params);
  const handleSearchMenu = context.handleSearchMenu;
  const showItemFilterMenu = context.showItemFilterMenu;
  const [movieResult, setMovieResult] = useState([]);
  const [tvResult, setTvResult] = useState([]);
  const [personResult, setPersonResult] = useState([]);
  const [collectionResult, setCollectionResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function getMovieDataWithPagination() {
    const apiKey = state.apiKey;
    const userInput = params.query === '' ? '' : params.query;
    try {
      const movieResult = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}&page=${currentPage}`);
      setMovieResult(movieResult.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getTrendingData() {
    const apiKey = state.apiKey;
    const userInput = params.query === undefined ? '' : params.query;
    try {
      const movieResult = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}&page=1`);
      setMovieResult(movieResult.data);
      // console.log(movieResult.data);

      const tvResult = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${userInput}&api_key=${apiKey}&page=1`);
      setTvResult(tvResult.data);
      // console.log(tvResult.data);

      const personResult = await axios.get(`https://api.themoviedb.org/3/search/person?query=${userInput}&language=en-US&page=1&api_key=${apiKey}`);
      setPersonResult(personResult.data);
      // console.log(personResult.data);

      const collectionResult = await axios.get(`https://api.themoviedb.org/3/search/collection?query=${userInput}&language=en-US&page=1&api_key=${apiKey}`);
      setCollectionResult(collectionResult.data);
      // console.log(collectionResult.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  function returnNothing() {
    return props.query === ''
      ? console.log('params is empty')
      : getTrendingData()
  }



  useEffect(() => {
    getMovieDataWithPagination() // eslint-disable-next-line
  }, [currentPage]);

  const handleOutput = () => {
    return (
      filterMenu === 'movie'
        ? <FilteredMovies data={movieResult} image={props.image} />
        : filterMenu === 'tv'
          ? <FilteredTV data={tvResult} image={props.image} />
          : filterMenu === 'person'
            ? <FilteredPerson data={personResult} image={props.image} />
            : filterMenu === 'collection'
              ? <FilteredCollection data={collectionResult} image={props.image} />
              : null
    );
  }

  const handlePaginationClick = (data) => {
    setCurrentPage(data.selected + 1);
  }

  const previousLabel = <i className="fa-solid fa-caret-left"></i>
  const nextLabel = <i className="fa-solid fa-caret-right"></i>

  const changeItemFilterMenu = () => {
    let e = '';
    showItemFilterMenu(e);
    console.log(e);
    return movieResult ? e = 'movie'
      : tvResult ? e = 'tv'
        : personResult ? e = 'person'
          : collectionResult ? e = 'collection'
            : e = 'movie'
  }

  useEffect(() => {
    returnNothing();
    changeItemFilterMenu();
    // eslint-disable-next-line
  }, [params.query]);

  return (
    <>
      <div className='heading-with-navigation' id='search-filter-menu'>
        {movieResult.total_results > 0
          ? <button
            name='movie'
            onClick={handleSearchMenu}
            className={filterMenu === 'movie'
              ? 'heading-with-navigation-active'
              : 'heading-with-navigation-default'}
          >
            {console.log(filterMenu)}
            {`Movie [${movieResult.total_results}]`}
          </button>
          // : console.log('movie, no data')
          : null
        }
        {tvResult.total_results > 0
          ? <button
            name='tv'
            onClick={handleSearchMenu}
            className={filterMenu === 'tv'
              ? 'heading-with-navigation-active'
              : 'heading-with-navigation-default'}
          >
            {`TV [${tvResult.total_results}]`}
          </button>
          // : console.log('tv, no data')
          : null
        }
        {personResult.total_results > 0
          ? <button
            name='person'
            onClick={handleSearchMenu}
            className={filterMenu === 'person'
              ? 'heading-with-navigation-active'
              : 'heading-with-navigation-default'}
          >
            {`Person [${personResult.total_results}]`}
          </button>
          // : console.log('person, no data')
          : null
        }
        {collectionResult.total_results > 0
          ? <button
            name='collection'
            onClick={handleSearchMenu}
            className={filterMenu === 'collection'
              ? 'heading-with-navigation-active'
              : 'heading-with-navigation-default'}
          >
            {`Collection [${collectionResult.total_results}]`}
          </button>
          // : console.log('collection, no data')
          : null
        }
      </div>

      <div className='search-filter-card-container-container'>
        {handleOutput()}
      </div>
      <div className='pagenation'>
        {/* {filterMenu === 'movie'
        ?
        : null}
        {filterMenu === 'tv'
          ?
        : null}
        {filterMenu === 'person'
          ?
        : null}
        {filterMenu === 'collection'
          ?
        : null} */}
        {<ReactPaginate
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          breakLabel={'...'}
          pageCount={filterMenu === 'movie'
            ? movieResult.total_pages
            : filterMenu === 'tv'
              ? tvResult.total_pages
              : filterMenu === 'person'
                ? personResult.total_pages
                : filterMenu === 'collection'
                  ? collectionResult.total_pages
                  : null
          }
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePaginationClick}
          containerClassName={'pagenation'}
          pageClassName={'page-item-li'}
          pageLinkClassName={'page-link-a'}
          previousClassName={'page-item-li'}
          previousLinkClassName={'page-link-a'}
          nextClassName={'page-item-li'}
          nextLinkClassName={'page-link-a'}
          breakClassName={'page-item-li'}
          breakLinkClassName={'page-link-a'}
          activeClassName={'page-link-active'}
        />}
      </div>
    </>
  )
}

export default SearchContent;