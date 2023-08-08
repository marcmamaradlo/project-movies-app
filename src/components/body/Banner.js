import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../context";
import BannerCarousel from "./Banner-Carousel";
import axios from "axios";
// import Navbar from "../navbar/Navbar";
import BannerNavbar from "../navbar/Banner-Navbar";

const Banner = () => {

    const context = useContext(MyContext);
    // const state = context.state;
    const apiKey = context.apiKey;


    const [bannerBGData, setBannerBGData] = useState([]);
    const [movieDetails, setMovieDetails] = useState([]);


    const bannerStyles = {
        backgroundImage: movieDetails
            ? `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
            : `url(https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    useEffect(() => {
        getBannerMovieData() // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getBGData() // eslint-disable-next-line
    }, [bannerBGData])

    async function getBannerMovieData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
            const random = Math.floor(Math.random() * 21);
            setBannerBGData(response.data.results[random].id);
        }
        catch (error) {
            // console.log(error);
        }
    }

    async function getBGData() {
        try {
            const backgroundID = await axios.get(`https://api.themoviedb.org/3/movie/${bannerBGData}?api_key=${apiKey}`);
            setMovieDetails(backgroundID.data);
        }
        catch (error) {
            // console.log(error);
        }
    }

    return (
        <div className='banner-container' style={{ ...bannerStyles }}>
            <div className='banner'>
                <BannerNavbar />
                <div className='banner-div'>
                    <div className='banner-details'>
                        <div className="banner-details-div">
                            <h2 className='text-shadow'>{movieDetails.title}</h2>
                        </div>
                        <p className='text-shadow'>{movieDetails.tagline}</p>
                    </div>
                </div>
                <div className='banner-carousel hide-on-mobile'>
                    <BannerCarousel />
                </div>
            </div>
        </div>
    )
}

export default Banner;