import { useContext } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";
import VideoPlayer from "../video-player/Video-Player";
import YoutubePlayerTrailer from "./Video-Player-Trailer";
// import BannerNavbar from "../navbar/Banner-Navbar";

const DynamicBanner = ({ data }) => {
  const params = useParams();
  const context = useContext(MyContext);
  const state = context.state;
  const wallpapper = data.backdrop_path;
  const dynamicBannerBackground = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${wallpapper})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };

  const showDisplay = () => {
    if (state.dynamicPageData === "trailer") {
      return <YoutubePlayerTrailer />;
    }
    if (state.dynamicPageData === "watchNow") {
      return <VideoPlayer videoID={params.id} />;
    }
  };

  return (
    <div className="dynamic-banner" style={{ ...dynamicBannerBackground }}>
      <div className="dynamic-banner-div">{showDisplay()}</div>
    </div>
  );
};

export default DynamicBanner;
