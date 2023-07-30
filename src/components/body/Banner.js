import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../context";
import BannerCarousel from "./Banner-Carousel";
import axios from "axios";

const Banner = () => {

    const context = useContext(MyContext);
    // const state = context.state;
    const apiKey = context.apiKey;

    const [bannerBGData, setBannerBGData] = useState([]);
    const [movieDetails, setMovieDetails] = useState([]);
    // const [finalData, setFinalData] = useState([]);

    console.log(movieDetails);

    // const checkFinalData = () => {
    //     return movieDetails === true
    //         ? `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
    //         : null
    // }

    const bannerStyles = {
        backgroundImage: [movieDetails
            ? `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
            : null],
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    useEffect(() => {
        bannerBGData.map((item) => (
            setMovieDetails(item.id) // eslint-disable-next-line
        ));
        // checkFinalData(); // eslint-disable-next-line
    }, [bannerBGData]);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, []);

    async function getTrendingMovieData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
            setBannerBGData(response.data.results);

            const backgroundID = await axios.get(`https://api.themoviedb.org/3/movie/${movieDetails.toString()}?api_key=${apiKey}`);
            setMovieDetails(backgroundID.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='banner-container'>
            <div className='banner' style={{ ...bannerStyles }}>
                <div className='banner-div'>
                    <div className='banner-details'>
                        <h2>Welcome!</h2>
                        <p>Millions of movies, TV shows and people to discover. Explore now!</p>
                        <div className='navbar-search'>
                            <input type='text' id='searchInput' placeholder='Search...' />
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        {/* <div className='banner-button'>
                            <button>About API <i className="fa-solid fa-arrow-right"></i></button>
                        </div> */}
                    </div>
                </div>
                <div className='banner-carousel'>
                    <BannerCarousel />
                </div>
            </div>
        </div >
    )
}

export default Banner;