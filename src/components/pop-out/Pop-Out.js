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
    console.log(popularData);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, [popOutWindowId]);

    async function getTrendingMovieData() {
        try {
            // const apiKey = '0b6d2ddf9c5e096294fa3534fb357915';
            // const selector = state.comingSoon;
            // const response = await axios.get(`https://api.themoviedb.org/3/movie/${popOutWindowId}?api_key=${apiKey}`);
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${popOutWindowId}?api_key=${apiKey}`);
            // console.log(response.data);
            setPopularData(response.data);
        }
        catch (error) {
            console.log(error);
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

    // const popOutComponent = () => {
    // }

    const displayPopOutWindow = () => {
        return (
            popOutWindow === 'active'
                ? <div
                    className='pop-out'
                    onClick={handleClosePopOutWindow}>
                    <div className='pop-out-container' style={{ ...popOutDivStyle }}>
                        <div className='pop-out-div'>
                            {/* <img src={`https://image.tmdb.org/t/p/w1280${popularData.backdrop_path}`} alt={popularData.original_title} /> */}
                            <div
                                className='pop-out-close-icon'
                                onClick={handleClosePopOutWindow}
                            ><i className="fa-solid fa-xmark"></i>
                            </div>
                            <div className='pop-out-image-container'>
                                <img src={`https://image.tmdb.org/t/p/w300${popularData.poster_path}`} alt='some title' />
                            </div>
                            <div className='pop-out-details'>
                                <p className='pop-out-details-title'>{popularData.title}</p>
                                <p className='pop-out-details-overview'>{popularData.overview}<br /><br />{popularData.tagline}</p>
                                {/* <p className='pop-out-details-tagline'>{popularData.tagline}</p> */}
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