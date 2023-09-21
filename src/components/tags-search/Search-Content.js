import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import FilteredMovies from "./Filtered-Movies";
import FilteredTV from "./Filtered-TV";
import FilteredPerson from "./Filtered-Person";
import FilteredCollection from "./Filtered-Collection.";
import FilteredCompany from "./Filtered-Company";

const SearchContent = (props) => {

  const context = useContext(MyContext);
  const state = context.state;
  const filterMenu = state.filterMenu;
  const handleSearchMenu = context.handleSearchMenu;
  const changePaginationCurrent = context.changePaginationCurrent;
  const changePaginationPrevious = context.changePaginationPrevious;
  const changePaginationNext = context.changePaginationNext;
  // const headingNavigationButton = context.headingNavigationButton;

  // use this stateName.data >>> .results, .total_pages, .total_results, 
  const [movieResult, setMovieResult] = useState([]);
  const [tvResult, setTvResult] = useState([]);
  const [personResult, setPersonResult] = useState([]);
  const [collectionResult, setCollectionResult] = useState([]);
  const [companyResult, setCompanyResult] = useState([]);

  // const buttonList = [{ 'movie': movieResult, 'tv': tvResult, 'person': personResult, 'collection': collectionResult, 'company': companyResult }];
  // console.log(buttonList.map((item) => (
  //   item
  // )))

  async function getMovieDataWithPagination() {
    const apiKey = state.apiKey;
    const userInput = props.searchInput.split(' ').join('%');
    const paginationCurrent = state.paginationCurrent;
    try {
      const movieResult = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}&page=${paginationCurrent}`);
      setMovieResult(movieResult.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async function getTrendingData() {
    const apiKey = state.apiKey;
    const userInput = props.searchInput.split(' ').join('%');
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

      const companyResult = await axios.get(`https://api.themoviedb.org/3/search/company?query=${userInput}&page=1&api_key=${apiKey}`);
      setCompanyResult(companyResult.data);
      // console.log(companyResult.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTrendingData(); // eslint-disable-next-line
  }, [props.searchInput]);

  useEffect(() => {
    getMovieDataWithPagination() // eslint-disable-next-line
  }, [state.paginationCurrent]);

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
              : filterMenu === 'company'
                ? <FilteredCompany data={companyResult} image={props.image} />
                : null
    );
  }

  const showPagenation = () => {
    let a = [];
    for (let i = 0; i < movieResult.total_pages; i++) {
      a.push(i);
    }

    return a.map((item, index) => (
      <a href='#search-filter-menu' key={item}>
        <p
          key={item + index}
          id={item}
          onClick={changePaginationCurrent}
        >
          {item + 1}
        </p>
      </a>
    ));
  }

  return (
    <>
      <div className='heading-with-navigation' id='search-filter-menu'>
        {/* {handleButtonNames()} */}
        {movieResult.total_results > 0
          ? <button
            name='movie'
            onClick={handleSearchMenu}
            className={filterMenu === 'movie'
              ? 'heading-with-navigation-active'
              : 'heading-with-navigation-default'}
          >
            {`Movie (${movieResult.total_results})`}
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
            {`TV (${tvResult.total_results})`}
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
            {`Person (${personResult.total_results})`}
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
            {`Collection (${collectionResult.total_results})`}
          </button>
          // : console.log('collection, no data')
          : null
        }
        {companyResult.total_results > 0
          ? <button
            name='company'
            onClick={handleSearchMenu}
            className={filterMenu === 'company'
              ? 'heading-with-navigation-active'
              : 'heading-with-navigation-default'}
          >
            {`Company (${companyResult.total_results})`}
          </button>
          // : console.log('company, no data')
          : null
        }
      </div>

      <div className='search-filter-card-container-container'>
        {handleOutput()}
      </div>
      <div className='pagenation'>
        <p id='paginationPrevious' onClick={changePaginationPrevious}><i className="fa-solid fa-caret-left"></i></p>
        {showPagenation()}
        <p id='pagenationNext' onClick={changePaginationNext}><i className="fa-solid fa-caret-right"></i></p>
      </div>
      <div>
        {`Page ${state.paginationCurrent} / ${movieResult.total_pages}`}
      </div>
    </>
  )
}

export default SearchContent;