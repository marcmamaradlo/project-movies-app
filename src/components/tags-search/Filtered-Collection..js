import { Link } from "react-router-dom";

const FilteredCollection = ({ data, image }) => {

  const showFilteredCollectionData = () => {
    return data.results ? data.results.map((item) => (
      <Link to={`/collection/${item.id}`} key={item.id}>
        <div key={item.id} className='card-container'>
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
      {showFilteredCollectionData()}
    </>
  )
}

export default FilteredCollection;