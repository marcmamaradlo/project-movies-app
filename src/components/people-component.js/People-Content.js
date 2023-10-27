// import { useContext } from "react";
// import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomButton from "../reuseable/CustomButton";

const PeopleContent = (props) => {

  // const context = useContext(MyContext);
  const [seeMore, setSeeMore] = useState(false);
  const [actingData, setActingData] = useState('movie');
  const [showAll, setShowAll] = useState(false);

  const data = props.data;
  const movieCast = props.movie.cast;
  const movieCrew = props.movie.crew;
  const tvCast = props.tv.cast;
  const tvCrew = props.tv.crew;

  const socialMedia = props.socialMedia;
  // const handleClosePopOutWindow = context.handleClosePopOutWindow;

  const relatedMovieCarousel = () => {
    return movieCast
      ? movieCast.map((item) => (
        <Link to={`/${actingData}/${item.id}`} key={item.id + item.title}>
          <div className='person-card'>
            <div className='person-card-image'>
              <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title} />
            </div>
            <div className='person-card-title'>
              <p>{item.title}</p>
            </div>
          </div>
        </Link>
      ))
      : null
  }

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  }

  const showSeeMoreButton = () => {
    return data.biography.length > 760
      ? <button
        className='see-more'
        onClick={handleSeeMore}
      >
        {seeMore ? 'See Less' : 'Read More'}
      </button>
      : null
  }

  const handleShowAllButton = () => {
    setShowAll(!showAll);
  }

  const handleActingData = (e) => {
    setActingData(e.target.name)
  }

  // const alsoKnownAs = () => {
  //     return data.also_known_as
  //         ? data.also_known_as.map((item, index) => (
  //             <p key={index} className='personal-info-detail'>{item}</p>
  //         ))
  //         : null
  // }

  const homepage = () => {
    return data.homepage
      ? <div className='personal-info-content'>
        <p className='personal-info-title'>Homepage</p>
        <p className='personal-info-detail'>{data.homepage}</p>
      </div>
      : null
  }

  const deathDay = () => {
    return data.deathday
      ? < div className='personal-info-content'>
        <p className='personal-info-title'>Died on</p>
        <p className='personal-info-detail'>{data.deathday}</p>
      </div>
      : null
  }

  const handleActingMovieCast = () => {
    return showAll
      ? movieCast ?
        movieCast.map((item) => (
          <div className='acting-container-content' key={`movieCast${item.id}`}>
            <p className='acting-year'>{item.release_date ? item.release_date.split('-')[0] : '????'}</p>
            <p className='acting-title'>
              <Link to={`/movie/${item.id}`}>{item.title} </Link>
              <span className='acting-title-span'>as {item.character ? item.character : '????'}</span></p>
          </div>
        ))
        : null
      : movieCast ?
        movieCast.slice(0, 10).map((item) => (
          <div className='acting-container-content' key={`movieCast${item.id}`}>
            <p className='acting-year'>{item.release_date ? item.release_date.split('-')[0] : '????'}</p>
            <p className='acting-title'>
              <Link to={`/movie/${item.id}`}>{item.title} </Link>
              <span className='acting-title-span'>as {item.character ? item.character : '????'}</span></p>
          </div>
        ))
        : null
  }

  const handleActingMovieCrew = () => {
    return movieCrew ?
      movieCrew.map((item) => (
        <div className='acting-container-content' key={`movieCrew${item.id}`}>
          <p className='acting-year'>{item.release_date ? item.release_date.split('-')[0] : '????'}</p>
          <p className='acting-title'>
            <Link to={`/movie/${item.id}`}>{item.title} </Link>
            <span className='acting-title-span'>{item.job ? item.job : '????'}</span></p>
        </div>
      ))
      : null
  }

  const handleActingTVCast = () => {
    return tvCast ?
      tvCast.map((item) => (
        <div className='acting-container-content' key={`tvCast${item.id}`}>
          <p className='acting-year'>{item.first_air_date ? item.first_air_date.split('-')[0] : '????'}</p>
          <p className='acting-title'>
            <Link to={`/tv/${item.id}`}>{item.name} </Link>
            <span className='acting-title-span'>Episodes {`( ${item.episode_count} )`} as {item.character === "" ? '???' : item.character}</span></p>
        </div>
      ))
      : null
  }

  const handleActingTVCrew = () => {
    return tvCrew ?
      tvCrew.map((item) => (
        <div className='acting-container-content' key={`tvCrew${item.id}`}>
          <p className='acting-year'>{item.first_air_date ? item.first_air_date.split('-')[0] : '????'}</p>
          <p className='acting-title'>
            <Link to={`/movie/${item.id}`}>{item.name} </Link>
            <span className='acting-title-span'>{item.job ? item.job : '????'}</span></p>
        </div>
      ))
      : null
  }

  const handleSocialMedia = () => {
    return <>
      <div className='personal-icons'>
        {
          socialMedia.facebook_id === ""
            ? null
            : socialMedia.facebook_id
              ? <a href={`https://www.facebook.com/${socialMedia.facebook_id}`}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              : null
        }
        {
          socialMedia.twitter_id === ""
            ? null
            : socialMedia.twitter_id
              ? <a href={`https://www.twitter.com/${socialMedia.twitter_id}`}>
                <i className="fa-brands fa-twitter"></i>
              </a>
              : null
        }
        {
          socialMedia.instagram_id === ""
            ? null
            : socialMedia.instagram_id
              ? <a href={`https://www.instagram.com/${socialMedia.instagram_id}`}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              : null
        }
        {
          socialMedia.tiktok_id === ""
            ? null
            : socialMedia.tiktok_id
              ? <a href={`https://www.tiktok.com/${socialMedia.tiktok_id}`}>
                <i className="fa-brands fa-tiktok"></i>
              </a>
              : null
        }
        {
          socialMedia.youtube_id === ""
            ? null
            : socialMedia.youtube_id
              ? <a href={`https://www.youtube.com/${socialMedia.youtube_id}`}>
                <i className="fa-brands fa-youtube"></i>
              </a>
              : null
        }
        {
          data.homepage === ""
            ? null
            : data.homepage
              ? <a href={`${data.homepage}`}>
                <i className="fa-solid fa-globe"></i>
              </a>
              : null
        }
      </div>
    </>
  }

  return (

    <div className='person-container'>
      <div className='person-image'>
        <img src={`https://image.tmdb.org/t/p/h632${data.profile_path}`} alt={data.name} />
        <div className='person-personal-info'>
          {handleSocialMedia()}
          <h3>Personal Information</h3>
          <div className='personal-info'>
            <div className='personal-info-content'>
              <p className='personal-info-title'>Known For</p>
              <p className='personal-info-detail'>{data.known_for_department}</p>
            </div>
            <div className='personal-info-content'>
              <p className='personal-info-title'>Birthday</p>
              <p className='personal-info-detail'>{data.birthday ? data.birthday.split('-').join(' ') : null}</p>
            </div>
            <div className='personal-info-content'>
              <p className='personal-info-title'>Popularity</p>
              <p className='personal-info-detail'>{data.popularity}</p>
            </div>
            <div className='personal-info-content'>
              <p className='personal-info-title'>Gender</p>
              <p className='personal-info-detail'>{data.gender === 0 ? 'Male' : data.gender === 1 ? 'Female' : 'unknown'}</p>
            </div>
            <div className='personal-info-content'>
              <p className='personal-info-title'>Place of Birth</p>
              <p className='personal-info-detail'>{data.place_of_birth}</p>
            </div>
            {homepage()}
            {/* <div className='personal-info-content'>
                            <p className='personal-info-title'>Also Known As</p>
                            {alsoKnownAs()}
                        </div> */}
            {deathDay()}
          </div>
        </div>
      </div>
      <div className='person-details'>
        <h1>{data.name}</h1>
        <div className='person-details-biography'>
          <p className='person-biography-header'>Biography</p>
          <div className='biography-container'>
            <p className={seeMore ? 'person-biography-details-active' : 'person-biography-details-default'}>
              {
                data.biography
                  ? data.biography
                  : `Sorry, We could not find anything to say about ${data.name}. `
              }
            </p>
            {data.biography ? showSeeMoreButton() : null}
          </div>
        </div>
        <div className='person-related-movie-carousel'>
          <p className='person-biography-header'>Starred in</p>
          <div className='related-movie-carousel'>
            {relatedMovieCarousel()}
          </div>
        </div>
        <div className='person-acting-details'>
          <div className='heading'>
            <h3>Castings</h3>
            <div className='heading-div'>
              <button
                name='movie'
                onClick={handleActingData}
                className={actingData === 'movie' ? 'heading-div-button-active' : 'heading-div-button'}
              >
                Movies ({movieCast ? movieCast.length : null})
              </button>
              <button
                name='tv'
                onClick={handleActingData}
                className={actingData === 'tv' ? 'heading-div-button-active' : 'heading-div-button'}
              >
                TV Shows ({tvCast ? tvCast.length : null})
              </button>
            </div>
          </div>
          <div className='acting-container'>
            {
              actingData === 'movie'
                ? handleActingMovieCast()
                : actingData === 'tv'
                  ? handleActingTVCast()
                  : null}
            {
              movieCast
                ? movieCast.length > 10
                  ? <div className='acting-button-container'>
                    <CustomButton
                      action={handleShowAllButton}
                      text={showAll ? 'Show Less' : 'Show All'}
                      style={`custom-button-rounded-active`}
                    />
                    {/* <button
                      onClick={handleShowAllButton}
                    >
                      {showAll ? 'Show Less' : 'Show All'}
                    </button> */}
                  </div>
                  : null
                : null
            }
          </div>
          {
            movieCrew
              ? <>
                <div className='heading'>
                  <h3>Production</h3>
                </div>
                <div className='acting-container'>
                  {actingData === 'movie' ? handleActingMovieCrew() : actingData === 'tv' ? handleActingTVCrew() : null}
                </div>
              </>
              : null
          }
          {/* <div className='heading'>
                            <h3>Production</h3>
                        </div>
                        <div className='acting-container'>
                            {actingData === 'movie' ? handleActingMovieCrew() : actingData === 'tv' ? handleActingTVCrew() : null}
                        </div> */}
        </div>
      </div>
    </div>
  )
}
export default PeopleContent;