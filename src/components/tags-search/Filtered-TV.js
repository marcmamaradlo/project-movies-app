import { Link } from "react-router-dom";

const FilteredTV = ({ data, image }) => {

  const showFilteredTVData = () => {
    return data.results ? data.results.map((item) => (
      <Link to={`/tv/${item.id}`}>
        <div className='card-container' key={item.id}>
          <div className='card-container-img'>
            {item.poster_path
              ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
              : <img src={image} alt={item.title} />
            }
          </div>
          <div className='card-container-title'>
            <p>{item.name}</p>
          </div>
        </div>
      </Link>
    ))
      : null
  }

  return (
    <>
      {showFilteredTVData()}
    </>
  )
}

export default FilteredTV;