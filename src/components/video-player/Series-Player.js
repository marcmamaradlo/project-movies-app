import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";

const SeriesPlayer = () => {
  const params = useParams();
  const context = useContext(MyContext);
  const serverButtonID = context.state.serverButtonID;
  const season = parseInt(context.state.tvSeason);
  const episode = parseInt(context.state.tvEpisode);
  const vidsrcTo = `https://vidsrc.to/embed/tv/${params.id}/${season}/${episode}`
  const vidsrcMe = `https://vidsrc.me/embed/tv?tmdb=${params.id}&season=${season}&episode=${episode}`
  const xtreamhubCom = `http://xtreamhub.com/video/${params.id}s${season + 1}e${episode}`
  console.log(season, episode);

  useEffect(() => {
    chooseServer(); // eslint-disable-next-line
  }, [episode]);

  const chooseServer = () => {
    if (serverButtonID === 'server01') {
      return <iframe
        allowFullScreen
        src={vidsrcTo}
        id='video-player'
        name='video-player'
        title='video-player'
      >
        Video Player
      </iframe>
    }
    if (serverButtonID === 'server02') {
      return <iframe
        allowFullScreen
        src={vidsrcMe}
        id='video-player'
        name='video-player'
        title='video-player'
      >
        Video Player
      </iframe>
    }
    if (serverButtonID === 'server03') {
      return <iframe
        allowFullScreen
        src={xtreamhubCom}
        id='video-player'
        name='video-player'
        title='video-player'
      >
        Video Player
      </iframe>
    }
    if (serverButtonID === 'server04') {
      return <iframe
        allowFullScreen
        src={xtreamhubCom}
        id='video-player'
        name='video-player'
        title='video-player'
      >
        Video Player
      </iframe>
    }
    else {
      console.log('Sorry, video is not available in our servers.')
    }
  }
  return (
    <>
      {chooseServer()}
    </>
  )
}

export default SeriesPlayer;