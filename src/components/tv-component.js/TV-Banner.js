import { useContext } from "react";
import { MyContext } from "../../context";
import VideoPlayer from "../video-player/Video-Player";
import YoutubePlayerTrailer from "../main-dynamic-page/Video-Player-Trailer";
// import BannerNavbar from "../navbar/Banner-Navbar";

const TVBanner = ({ data }) => {

    const context = useContext(MyContext);
    const state = context.state;
    const handleClosePopOutWindow = context.handleClosePopOutWindow
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
            return <VideoPlayer />
        }
    }

    return (
        <div
            className='dynamic-banner'
            style={{ ...dynamicBannerBackground }}
            onClick={handleClosePopOutWindow}
        >
            {/* <BannerNavbar /> */}
            <div className='dynamic-banner-div'>
                {showDisplay()}
            </div>
        </div>
    )
}

export default TVBanner;