const CollectionBanner = (props) => {

  const collectionBannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780/${props.backdropPath})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div className='collection-banner' style={{ ...collectionBannerStyle }} id={props.id}>
      <div className='collection-banner-content-container'>
        <div className='collection-banner-content'>
          <div className='collection-banner-image'>
            <img src={`https://image.tmdb.org/t/p/w185/${props.posterPath}`} alt={props.name} />
          </div>
          <div className='collection-banner-details'>
            <h3>{props.name}</h3>
            <p>{props.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionBanner;