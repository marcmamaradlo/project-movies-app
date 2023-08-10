import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

const PopOutComponent = () => {



    const context = useContext(MyContext);
    const state = context.state;
    const popOutWindow = state.popOutWindow;
    const handleClosePopOutWindow = context.handleClosePopOutWindow;
    const popOutWindowId = state.popOutWindowId;
    const apiKey = state.apiKey;
    const handlePopOutTrailerButton = context.handlePopOutTrailerButton;
    const handlePopOutWatchNowButton = context.handlePopOutWatchNowButton;
    const handleFakeLinks = context.handleFakeLinks;

    const [popularData, setPopularData] = useState([]);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, [popOutWindowId]);

    const handleWindowScrollingY = () => {
        if (popOutWindow === 'active') {
            return document.body.style.overflowY = 'hidden'
        }
        if (popOutWindow === 'notActive') {
            return document.body.style.overflowY = 'scroll'
        }
        else {
            return document.body.style.overflowY = 'scroll'
        }
    }

    async function getTrendingMovieData() {
        try {
            const selector = state.popOutChannel;
            const response = await axios.get(`https://api.themoviedb.org/3/${selector}/${popOutWindowId}?api_key=${apiKey}`);
            setPopularData(response.data);
        }
        catch (error) {
            // console.log(error, 'No Data Mounted in State');
        }
    }

    const popOutDivStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${popularData.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const popularDataGanres = () => {
        return (
            popularData.genres
                ? popularData.genres.map((item) => (
                    // console.log(item.name)
                    <li key={item.id}>
                        <a onClick={handleFakeLinks} href='/' id={item.id}>{`${item.name}, `}</a>
                    </li>
                ))
                : null
        )
    }

    const popularDataLanguages = () => {

        return (
            popularData.spoken_languages
                ? popularData.spoken_languages.map((item) => (
                    <li>
                        <a href='/'>{`${item.english_name}, `}</a>
                    </li>

                ))
                : null
        )
    }

    const displayPopOutWindow = () => {
        return (
            popOutWindow === 'active'
                ? <div
                    className='pop-out'
                    onClick={handleClosePopOutWindow}>
                    <div className='pop-out-container' style={{ ...popOutDivStyle }}>
                        <div className='pop-out-div'>
                            <div
                                className='pop-out-close-icon'
                                onClick={handleClosePopOutWindow}
                            ><i className="fa-solid fa-xmark"></i>
                            </div>
                            <div className='pop-out-image-container'>
                                <img src={`https://image.tmdb.org/t/p/w300${popularData.poster_path}`} alt='some title' />
                                <div className='pop-out-buttons'>
                                    <Link to='dynamic-page'><button id={popularData.id} onClick={handlePopOutTrailerButton}>Trailer</button></Link>
                                    <Link to='dynamic-page'><button name={popularData.id} onClick={handlePopOutWatchNowButton}>Watch Now</button></Link>
                                </div>
                            </div>
                            <div className='pop-out-details'>
                                {(
                                    state.popOutChannel === 'movie'
                                        ? <p className='pop-out-details-title'>{popularData.title}</p>
                                        : <p className='pop-out-details-title'>{popularData.name}</p>
                                )}
                                <p className='pop-out-details-overview'>{popularData.overview}<br /><br /><span className='pop-out-details-tagline'>{popularData.tagline}</span></p>
                                {/* <div className='pop-out-buttons'>
                                    <Link to='dynamic-page'><button id={popularData.id} onClick={handlePopOutTrailerButton}>Trailer</button></Link>
                                    <Link to='dynamic-page'><button name={popularData.id} onClick={handlePopOutWatchNowButton}>Watch Now</button></Link>
                                </div> */}
                                <div className='pop-out-details-details'>
                                    {/* <p>{`Status: ${popularData.status}, ${(
                                        popularData.release_date
                                            ? popularData.release_date.split('-')[0]
                                            : null
                                    )}`}</p> */}
                                    <div className='pop-out-details-details-div'>
                                        <p>Genre:</p>
                                        <ul>{popularDataGanres()}</ul>
                                    </div>
                                    <div className='pop-out-details-details-div'>
                                        <p>Language:</p>
                                        <ul>{popularDataLanguages()}</ul>
                                    </div>
                                    {/* <p>Homepage: <a href={popularData.homepage}>{popularData.homepage}</a></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
        )
    }

    handleWindowScrollingY()
    return (
        <>
            {displayPopOutWindow()}
        </>
    )
}

export default PopOutComponent;