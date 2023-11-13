import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import Trending from "../body/Trending";
import SearchContent from "./Search-Content";
import appLogo from '../../assets/image-not-found/app-icon.png';

const SearchMainPage = () => {

  const context = useContext(MyContext);
  const params = useParams();
  const handleOnBlurEvent = context.handleOnBlurEvent;
  const [dataTrendingMovie, setDataTrendingMovie] = useState([]);
  const [dataTrendingTV, setDataTrendingTV] = useState([]);
  const [dataTrendingPerson, setDataTrendingPerson] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [movieSelector, setMovieSelector] = useState('day');
  const [tvSelector, setTvSelector] = useState('day');
  const [personSelector, setPersonSelector] = useState('day');

  useEffect(() => {
    getTrendingData(); // eslint-disable-next-line
  }, [movieSelector, tvSelector, personSelector]);

  async function getTrendingData() {
    const apiKey = '0b6d2ddf9c5e096294fa3534fb357915';
    try {
      const movieData = await axios.get(`https://api.themoviedb.org/3/trending/movie/${movieSelector}?api_key=${apiKey}`);
      setDataTrendingMovie(movieData.data.results);
      const tvData = await axios.get(`https://api.themoviedb.org/3/trending/tv/${tvSelector}?api_key=${apiKey}`);
      setDataTrendingTV(tvData.data.results);
      const personData = await axios.get(`https://api.themoviedb.org/3/trending/person/${personSelector}?api_key=${apiKey}`);
      setDataTrendingPerson(personData.data.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInput === '') {
      return console.log('userInput is empty');
    }
    else {
      return params.query = userInput;
    }
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  return (
    <>
      <div onMouseDown={handleOnBlurEvent} className='container'>
        <div className='section'>
          <div className='heading'>
            <h3>Search Filters</h3>
            <h4>if no search result, type anything in Quick Search</h4>
          </div>
          <div className='filter-container'>
            <form onSubmit={handleFormSubmit}>
              <input
                type='text'
                onChange={handleInputChange}
                placeholder='movies, tv shows, actors, collection...'
              />
              <button type='submit'>
                <i className="fa-solid fa-filter"></i> Filter
              </button>
            </form>
          </div>
          <SearchContent image={appLogo} />
        </div>
      </div >
      <div className='container bg-dark'>
        <Trending data={dataTrendingMovie} dataType='movie' action={setMovieSelector} selector={movieSelector} />
        <Trending data={dataTrendingTV} dataType='tv' action={setTvSelector} selector={tvSelector} />
        <Trending data={dataTrendingPerson} dataType='person' action={setPersonSelector} selector={personSelector} />
      </div>
    </>
  )
}

export default SearchMainPage;