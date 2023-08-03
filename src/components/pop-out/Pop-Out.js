import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../context";
import axios from "axios";

const PopOutComponent = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const popOutWindow = state.popOutWindow;
    const handleClosePopOutWindow = context.handleClosePopOutWindow;
    const popOutWindowId = state.popOutWindowId;
    const apiKey = state.apiKey;

    const [popularData, setPopularData] = useState([]);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, [popOutWindowId]);

    async function getTrendingMovieData() {
        try {
            const selector = state.popOutChannel;
            const response = await axios.get(`https://api.themoviedb.org/3/${selector}/${popOutWindowId}?api_key=${apiKey}`);
            setPopularData(response.data);
        }
        catch (error) {
            console.log(error, 'No Data Mounted in State');
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
                    item.name
                ))
                : null
        )
    }

    const popularDataLanguages = () => {

        return (
            popularData.spoken_languages
                ? popularData.spoken_languages.map((item) => (
                    item.english_name
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
                            </div>
                            <div className='pop-out-details'>
                                {(
                                    state.popOutChannel === 'movie'
                                        ? <p className='pop-out-details-title'>{popularData.title}</p>
                                        : <p className='pop-out-details-title'>{popularData.name}</p>
                                )}
                                <p className='pop-out-details-overview'>{popularData.overview}<br /><br /><span className='pop-out-details-tagline'>{popularData.tagline}</span></p>
                                <div className='pop-out-buttons'>
                                    <button

                                    >
                                        Trailer
                                    </button>
                                    <button
                                    >
                                        Watch Now
                                    </button>
                                </div>
                                <div className='pop-out-details-details'>
                                    <p>{`Status: ${popularData.status}, ${(
                                        popularData.release_date
                                            ? popularData.release_date.split('-')[0]
                                            : null
                                    )}`}</p>
                                    <div className='pop-out-details-details-div'>
                                        <p>{`Genre: ${popularDataGanres()}`}</p>
                                    </div>
                                    <div className='pop-out-details-details-div'>
                                        <p>{`Language: ${popularDataLanguages()}`}</p>
                                    </div>
                                    <p>Homepage: <a href={popularData.homepage}>{popularData.homepage}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
        )
    }
    return (
        <>
            {displayPopOutWindow()}
        </>
    )
}

export default PopOutComponent;