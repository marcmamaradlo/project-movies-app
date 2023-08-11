import { useContext } from "react";
import { MyContext } from "../../context";
// import BannerNavbar from "../navbar/Banner-Navbar";
import VideoPlayer from "../video-player/Video-Player";
import YoutubePlayerTrailer from "./Video-Player-Trailer";

const DynamicBanner = ({ data }) => {

    const context = useContext(MyContext);
    const state = context.state;
    const wallpapper = data.backdrop_path;
    const dynamicBannerBackground = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${wallpapper})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const showDisplay = () => {
        if (state.dynamicPageData === 'trailer') {
            return <YoutubePlayerTrailer />
        }
        if (state.dynamicPageData === 'watchNow') {
            return <VideoPlayer videoID={data.id} />
        }
    }

    return (
        <div className='dynamic-banner' style={{ ...dynamicBannerBackground }}>
            {/* <div className='banner-container'> */}
            {/* <div className='banner'> */}
            {/* <BannerNavbar /> */}
            {/* </div> */}
            {/* </div> */}
            <div className='dynamic-banner-play-button'>
                {/* <span class="material-symbols-outlined">
                    play_circle
                </span> */}
            </div>
            <div className='section'>
                {showDisplay()}
            </div>
        </div>
    )
}

export default DynamicBanner;