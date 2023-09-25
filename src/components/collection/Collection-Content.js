import { Link } from "react-router-dom";

const CollectionContent = ({ data }) => {
  console.log(data);

  const showCollectionData = () => {
    return (
      data ? data.map((item) => (
        <Link to={`/${item.media_type}/${item.id}`} key={item.id}>
          <div className='collection-card'>
            <img src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`} alt={item.title} />
            <div className='collection-card-details'>
              <div className='collection-card-details-title'>
                <p className='collection-card-title'>{item.title}</p>
                <p className='collection-card-release-date'>{item.release_date.split('-')[0]}</p>
              </div>
              <p className='collection-card-details-overview'>{item.overview}</p>
            </div>
          </div>
        </Link>
      ))
        : null
    )
  }

  return (
    <div className='collection-content-container'>
      {/* <div className='heading'>
        <h3>Movie List</h3>
      </div> */}
      <div className='collection-card-container'>
        {showCollectionData()}
      </div>
    </div>
  )
}

export default CollectionContent;