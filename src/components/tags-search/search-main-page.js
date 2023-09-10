import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import Trending from "../body/Trending";
import SearchContent from "./Search-Content";
import appLogo from '../../assets/image-not-found/app-icon.png';

const SearchMainPage = () => {

  const context = useContext(MyContext);
  const handleSearchMenu = context.handleSearchMenu;
  const filterMenu = context.state.filterMenu;
  const handleOnBlurEvent = context.handleOnBlurEvent;
  const state = context.state;
  const buttonList = ['movie', 'tv', 'person', 'collection', 'company'];
  const [dataTrendingMovie, setDataTrendingMovie] = useState([]);
  const [dataTrendingTV, setDataTrendingTV] = useState([]);
  const [dataTrendingPerson, setDataTrendingPerson] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [filterThisInput, setFilterThisInput] = useState();

  useEffect(() => {
    getTrendingData(); // eslint-disable-next-line
  }, []);

  async function getTrendingData() {
    const apiKey = '0b6d2ddf9c5e096294fa3534fb357915';
    const selector = state.trendingData;
    try {
      const movieData = await axios.get(`https://api.themoviedb.org/3/trending/movie/${selector}?api_key=${apiKey}`);
      setDataTrendingMovie(movieData.data.results);
      const tvData = await axios.get(`https://api.themoviedb.org/3/trending/tv/${selector}?api_key=${apiKey}`);
      setDataTrendingTV(tvData.data.results);
      const personData = await axios.get(`https://api.themoviedb.org/3/trending/person/${selector}?api_key=${apiKey}`);
      setDataTrendingPerson(personData.data.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleButtonNames = () => {
    return buttonList.map((item, index) => (
      <button
        key={index}
        name={item}
        onClick={handleSearchMenu}
        className={item === filterMenu
          ? 'heading-with-navigation-active'
          : 'heading-with-navigation-default'}
      >
        {item === 'person'
          ? 'Person'
          : item === 'tv'
            ? 'TV'
            : `${item.charAt(0).toUpperCase() + item.slice(1)}`}
      </button>
    ))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFilterThisInput(userInput);
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  return (
    <>
      <div onMouseDown={handleOnBlurEvent} className='container'>
        <div className='section'>
          <div className='heading'>
            {/* <i class="fa-solid fa-filter"></i> */}
            <h3>Search Filters</h3>
          </div>
          <div className='filter-container'>
            <form onSubmit={handleFormSubmit}>
              <div className='filter-search'>
                <input
                  type='text'
                  onChange={handleInputChange}
                  placeholder='movies, tv shows, actors...'
                />
              </div>
              <div className='filter-select'>
                <select>
                  <option value=''>Type</option>
                  <option>Movie</option>
                  <option>TV Show</option>
                </select>
                <select>
                  <option value=''>Genre</option>
                  <option>Biography</option>
                  <option>Documentary</option>
                  <option>Action</option>
                </select>
                <select>
                  <option value=''>Country</option>
                  <option>Action</option>
                  <option>Biography</option>
                  <option>Documentary</option>
                </select>
                <select>
                  <option value=''>Year</option>
                  <option>Action</option>
                  <option>Biography</option>
                  <option>Documentary</option>
                </select>
              </div>
              <button
                className='filter-submit'
                type='submit'
              >
                <i className="fa-solid fa-filter"></i> Filter
              </button>
            </form>
          </div>
          <div className='section>'>
            <div className='heading-with-navigation'>
              {handleButtonNames()}
              {/* <button
                name='movie'
                onClick={handleSearchMenu}
                className={filterMenu === 'movie'
                  ? 'heading-with-navigation-active'
                  : 'heading-with-navigation-default'}
              >
                {`Movie (${state.filteredMovies})`}
              </button>
              <button
                name='tv'
                onClick={handleSearchMenu}
                className={filterMenu === 'tv'
                  ? 'heading-with-navigation-active'
                  : 'heading-with-navigation-default'}
              >
                {`TV (${state.filteredtv})`}
              </button>
              <button
                name='person'
                onClick={handleSearchMenu}
                className={filterMenu === 'person'
                  ? 'heading-with-navigation-active'
                  : 'heading-with-navigation-default'}
              >
                {`Person (${state.filteredPerson})`}
              </button>
              <button
                name='collection'
                onClick={handleSearchMenu}
                className={filterMenu === 'collection'
                  ? 'heading-with-navigation-active'
                  : 'heading-with-navigation-default'}
              >
                {`Collection (${state.filteredCollection ? state.filteredCollection : 'not updated'})`}
              </button> */}
            </div>
          </div>
          <SearchContent searchInput={filterThisInput} image={appLogo} />
        </div>
        {/* <ImageCarouselPortrait />*/}
      </div >
      <div className='container bg-dark'>
        <Trending data={dataTrendingMovie} dataType='movie' />
        <Trending data={dataTrendingTV} dataType='tv' />
        <Trending data={dataTrendingPerson} dataType='person' />
      </div>
    </>
  )
}

export default SearchMainPage;