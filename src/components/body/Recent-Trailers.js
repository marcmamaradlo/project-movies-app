import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import YoutubeComponent from "../video-player/Youtube-Component";

const RecentTrailers = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const bgSrc = context.bgSrc;
    const handleMouseEnter = context.handleMouseEnter;
    const handleMouseLeave = context.handleMouseLeave;
    const handleYoutubeComponent = context.handleYoutubeComponent;

    const [movieTrailerData, setMovieTrailerData] = useState([]);

    useEffect(() => {
        nowPlayingData() // eslint-disable-next-line
    }, []);

    async function nowPlayingData() {
        try {
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
            setMovieTrailerData(response.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const dynamicBG = {
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        bakcgroundPosition: 'center',
        transition: '200ms',
    }

    const trailerCarouselData = () => {
        return movieTrailerData.map((item) => (
            <div className='trailer-card-container' key={item.id}
            // dataIndex={index}
            >
                <div className='trailer-card-container-img'>
                    <img
                        src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        alt='backdrop-path' />
                    <div className='trailer-card-container-title'>
                        <p className='text-shadow'>{item.title}</p>
                    </div>
                    <i
                        id={item.id}
                        onClick={handleYoutubeComponent}
                        className="fa-solid fa-play text-shadow"
                    >
                    </i>
                </div>
            </div>
        ))
    }

    return (
        <>
            <div className='section'>
                <div className='heading'>
                    <div className='heading-left'>
                        <h3>Movie Trailers</h3>
                        {/* <button className='heading-left-button'>Today</button>
                        <button className='heading-left-button'>This Week</button> */}
                    </div>
                    <p>view all <i className="fa-solid fa-arrow-right"></i></p>
                </div>
                <div className='recent-trailer' style={{ ...dynamicBG }}>
                    <div className='recent-trailer-div'>
                        {trailerCarouselData()}
                    </div>
                </div>
                <YoutubeComponent />
            </div>

        </>
    )
}

export default RecentTrailers;