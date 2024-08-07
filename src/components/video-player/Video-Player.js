import { useContext } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const params = useParams();
  const context = useContext(MyContext);
  const serverButtonID = context.state.serverButtonID;
  // const vidsrcTo = `https://vidsrc.to/embed/movie/${params.id}`;
  const vidsrcTo = `https://vidsrc.xyz/embed/movie/${params.id}`;
  const vidsrcMe = `https://vidsrc.me/embed/movie?tmdb=${params.id}/`;
  // const xtreamhubCom = `http://xtreamhub.com/video/${params.id}`;
  // const flixembed = `https://flixembed.com/video/${params.id}`;
  const flixembed = `https://streamug.com/video/${params.id}`;

  const chooseServer = () => {
    if (serverButtonID === "server01") {
      return (
        <iframe
          allowFullScreen
          src={vidsrcTo}
          id="video-player"
          name="video-player"
          title="video-player"
        >
          Video Player
        </iframe>
      );
    }
    if (serverButtonID === "server02") {
      return (
        <iframe
          allowFullScreen
          src={vidsrcMe}
          id="video-player"
          name="video-player"
          title="video-player"
        >
          Video Player
        </iframe>
      );
    }
    if (serverButtonID === "server03") {
      return (
        <iframe
          allowFullScreen
          src={flixembed}
          id="video-player"
          name="video-player"
          title="video-player"
        >
          Video Player
        </iframe>
      );
    }
    if (serverButtonID === "server04") {
      return (
        <iframe
          allowFullScreen
          src={flixembed}
          id="video-player"
          name="video-player"
          title="video-player"
        >
          Video Player
        </iframe>
      );
    } else {
      console.log("Sorry, video is not available in our servers.");
    }
  };
  return <>{chooseServer()}</>;
};

export default VideoPlayer;
