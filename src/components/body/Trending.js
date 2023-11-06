import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../reuseable/CustomButton";

const Trending = (props) => {

  const [viewAll, setViewAll] = useState(false);

  const trendingComponent = () => {
    try {
      return props.data.map((item) => (
        <Link to={`/${props.dataType}/${item.id}`} key={item.id}>
          <div className='card-container'>
            <div className='card-container-img'>
              {props.dataType === 'movie'
                ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                : props.dataType === 'tv'
                  ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
                  : props.dataType === 'person'
                    ? <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`} alt={item.name} />
                    : <img src='https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2242&q=80' alt='Preview not available' />
              }
            </div>
            <div className='card-container-title'>
              <p>{props.dataType === 'movie' ?
                item.title
                : props.dataType === 'tv'
                  ? item.name
                  : props.dataType === 'person'
                    ? item.name
                    : null}</p>
            </div>
          </div>
        </Link>
      ))
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleMovieSelector = (e) => {
    props.action(e.target.id);
  }

  const handleTvSelector = (e) => {
    props.action(e.target.id)
  }

  const handlePersonSelector = (e) => {
    props.action(e.target.id)
  }

  const viewAllOnClick = () => {
    setViewAll(!viewAll);
  }

  return (
    <div className='section'>
      <div className='heading'>
        <div className='heading-left'>
          <h3>Trending {props.dataType.slice(0, 1).toUpperCase() + props.dataType.slice(1)}</h3>
        </div>
        <p onClick={viewAllOnClick}>{viewAll ? 'Collapse' : 'Expand'} <i className="fa-solid fa-arrow-right"></i></p>
      </div>
      <div className='trending-button-container'>
        {props.dataType === 'movie'
          ? <>
            <CustomButton
              style={props.selector === 'day' ? 'custom-button-rounded-active' : 'custom-button-rounded'}
              text='Today'
              action={handleMovieSelector}
              id='day'
              name='day'
            />
            <CustomButton
              style={props.selector === 'week' ? 'custom-button-rounded-active' : 'custom-button-rounded'}
              text='Weekly'
              action={handleMovieSelector}
              id='week'
              name='week'
            />
          </>
          : props.dataType === 'tv'
            ? <>
              <CustomButton
                style={props.selector === 'day' ? 'custom-button-rounded-active' : 'custom-button-rounded'}
                text='Today'
                action={handleTvSelector}
                id='day'
                name='day'
              />
              <CustomButton
                style={props.selector === 'week' ? 'custom-button-rounded-active' : 'custom-button-rounded'}
                text='Weekly'
                action={handleTvSelector}
                id='week'
                name='week'
              />
            </>
            : props.dataType === 'person'
              ? <>
                <CustomButton
                  style={props.selector === 'day' ? 'custom-button-rounded-active' : 'custom-button-rounded'}
                  text='Today'
                  action={handlePersonSelector}
                  id='day'
                  name='day'
                />
                <CustomButton
                  style={props.selector === 'week' ? 'custom-button-rounded-active' : 'custom-button-rounded'}
                  text='Weekly'
                  action={handlePersonSelector}
                  id='week'
                  name='week'
                />
              </>
              : null
        }
      </div>
      <div className={viewAll ? 'view-all-expanded' : 'image-carousel-portrait'}>
        {trendingComponent()}
      </div>
    </div>
  )
}

export default Trending;