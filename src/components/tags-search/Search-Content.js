import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../context";
import FilteredMovies from "./Filtered-Movies";
import FilteredTV from "./Filtered-TV";
import FilteredPerson from "./Filtered-Person";
import FilteredCollection from "./Filtered-Collection.";
import FilteredCompany from "./Filtered-Company";

const SearchContent = (props) => {

  const context = useContext(MyContext);
  const state = context.state;
  const filterMenu = state.filterMenu;
  // const headingNavigationButton = context.headingNavigationButton;
  const [movieResult, setMovieResult] = useState([]);
  const [tvResult, setTvResult] = useState([]);
  const [personResult, setPersonResult] = useState([]);
  const [collectionResult, setCollectionResult] = useState([]);
  const [companyResult, setCompanyResult] = useState([]);

  async function getTrendingData() {
    const apiKey = state.apiKey;
    const userInput = props.searchInput ? props.searchInput.split(' ').join('%') : 'vivamax';
    try {
      const movieResult = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}&page=1`);
      setMovieResult(movieResult.data.results);
      // console.log(movieResult);

      const tvResult = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${userInput}&api_key=${apiKey}&page=1`);
      setTvResult(tvResult.data.results);
      // console.log(tvResult);

      const personResult = await axios.get(`https://api.themoviedb.org/3/search/person?query=${userInput}&language=en-US&page=1&api_key=${apiKey}`);
      setPersonResult(personResult.data.results);
      // console.log(personResult);

      const collectionResult = await axios.get(`https://api.themoviedb.org/3/search/collection?query=${userInput}&language=en-US&page=1&api_key=${apiKey}`);
      setCollectionResult(collectionResult.data.results);
      // console.log(collectionResult);

      const companyResult = await axios.get(`https://api.themoviedb.org/3/search/company?query=${userInput}&page=1&api_key=${apiKey}`);
      setCompanyResult(companyResult.data.results);
      // console.log(collectionResult);

    }
    catch (error) {
      console.log(error);
    }
  }

  // const headingNavigationButtonsData = () => {
  //   const a = movieResult.length;
  //   const b = tvResult.length;
  //   const c = personResult.length;
  //   const d = collectionResult.length;
  //   headingNavigationButton(a, b, c, d);
  // }

  useEffect(() => {
    // headingNavigationButtonsData()
    getTrendingData(); // eslint-disable-next-line
  }, [props.searchInput]);

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
                : <FilteredMovies data={movieResult} image={props.image} />
    )
  }

  return (
    <>
      {/* <p>{`Result ${movieResult.length}`}</p> */}
      <div className='search-filter-card-container-container'>
        {handleOutput()}
      </div>
      {/* <div className='pagenation'>
        <p><i className="fa-solid fa-caret-left"></i></p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p><i className="fa-solid fa-caret-right"></i></p>
      </div> */}
    </>
  )
}

export default SearchContent;