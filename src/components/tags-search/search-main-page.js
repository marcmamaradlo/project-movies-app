// import ImageCarouselPortrait from "../reuseable/image-carousel-portrait";

const SearchMainPage = () => {
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
              <input type='text' placeholder='search...' />
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
            <div className='heading'>
              <p>{`0 Results > item`}</p>
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
        <div className='section>'>
          <div className='heading'>
            <h3>Suggestions</h3>
          </div>
        </div>

      </div>
    </>
  )
}

export default SearchMainPage;