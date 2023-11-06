import image from '../../assets/image-not-found/404-image.jpeg';

const RouteNotFound = () => {

  const divStyle = {
    height: '65vh',
    width: '100%',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div className='route-not-found' style={{ ...divStyle }}>
    </div>
  )
}

export default RouteNotFound;