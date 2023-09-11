import { Link } from "react-router-dom";

const FilteredMovies = ({ data, image }) => {

  const showFilteredMovieData = () => {
    return (data.results
      ? data.results.map((item) => (
        <Link to={`/movie/${item.id}`} key={item.id}>
          <div className='card-container'>
            <div className='card-container-img'>
              {item.poster_path
                ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                : <img src={image} alt={item.title} />
              }
            </div>
            <div className='card-container-title'>
              <p>{item.title}</p>
            </div>
          </div>
        </Link>
      ))
      : null)

  }
  return (
    <>
      {showFilteredMovieData()}
    </>
  )
}

export default FilteredMovies;