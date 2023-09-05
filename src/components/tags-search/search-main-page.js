import { useContext } from "react";
import { MyContext } from "../../context";

const SearchMainPage = () => {

  const context = useContext(MyContext);
  const handleSearchMenu = context.handleSearchMenu;
  const filterMenu = context.state.filterMenu;
  const buttonList = ['movie', 'tv', 'person', 'collection'];

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
          ? 'Person (0)'
          : `${item.charAt(0).toUpperCase() + item.slice(1)} (0)`}
      </button>
    ))
  }

  return (
    <>
      <div className='container'>
        <div className='section'>
          <div className='heading'>
            {/* <i class="fa-solid fa-filter"></i> */}
            <h3>Search Filters</h3>
          </div>
          <div className='filter-container'>
            <div className='filter-search'>
              <input type='text' placeholder='movies, tv shows, actors...' />
            </div>
            <button>Type
              <select className='filter-select'>
                <option> </option>
                <option>Movie</option>
                <option>TV Show</option>
              </select>
            </button>
            <button>Genre
              <select className='filter-select'>
                <option> </option>
                <option>Action</option>
                <option>Biography</option>
                <option>Documentary</option>
              </select>
            </button>
            <button>Country
              <select className='filter-select'>
                <option> </option>
                <option>Action</option>
                <option>Biography</option>
                <option>Documentary</option>
              </select>
            </button>
            <button>Year
              <select className='filter-select'>
                <option> </option>
                <option>Action</option>
                <option>Biography</option>
                <option>Documentary</option>
              </select>
            </button>
            <button className='filter-submit' type='submit'><i class="fa-solid fa-filter"></i> Filter</button>
          </div>
          <div className='section>'>
            <div className='heading-with-navigation'>
              {/* <button onClick={handleSearchMenu} name='movie' className='heading-with-navigation-active'>Movies (0)</button>
              <button onClick={handleSearchMenu} name='tv' className='heading-with-navigation-default'>TV Shows (0)</button>
              <button onClick={handleSearchMenu} name='person' className='heading-with-navigation-default'>People (0)</button>
              <button onClick={handleSearchMenu} name='collections' className='heading-with-navigation-default'>Collections (0)</button> */}
              {handleButtonNames()}
            </div>
          </div>
          <div className='pagenation'>
            <p><i className="fa-solid fa-caret-left"></i></p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p><i className="fa-solid fa-caret-right"></i></p>
          </div>
        </div>
        {/* <ImageCarouselPortrait /> */}
        {/* <div className='section>'>
          <div className='heading'>
            <h3>Suggestions</h3>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default SearchMainPage;