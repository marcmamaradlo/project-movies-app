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
  // console.log(state.youtubeComponentID);
  const [movieTrailerData, setMovieTrailerData] = useState([]);

  useEffect(() => {
    nowPlayingData(); // eslint-disable-next-line
  }, []);

  async function nowPlayingData() {
    try {
      const apiKey = state.apiKey;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
      );
      setMovieTrailerData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const dynamicBG = {
    backgroundImage: `url(${bgSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    bakcgroundPosition: "center center",
    transition: "500ms",
  };

  const trailerCarouselData = () => {
    return movieTrailerData.map((item) => (
      <div className="trailer-card-container" key={item.id} id={item.id}>
        <div className="trailer-card-container-img">
          <img
            src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="backdrop-path"
          />
          <div className="trailer-card-container-title">
            <p className="text-shadow">{item.title}</p>
          </div>
          <i
            className="fa-solid fa-play text-shadow"
            onClick={handleYoutubeComponent}
            id={item.id}
          ></i>
        </div>
      </div>
    ));
  };

  return (
    <>
      {/* <div className='bg-fade-black'> */}
      <div
        className="container dynamicBG box-shadow-dark"
        style={{ ...dynamicBG }}
      >
        <div className="bg-fade-black">
          <div className="container">
            <div className="section">
              <div className="heading">
                <div className="heading-left text-white text-shadow">
                  <h3>Movie Trailers</h3>
                </div>
              </div>
              <div className="recent-trailer">{trailerCarouselData()}</div>
            </div>
          </div>
          {state.youtubeComponentID ? <YoutubeComponent /> : null}
        </div>
      </div>
    </>
  );
};

export default RecentTrailers;
