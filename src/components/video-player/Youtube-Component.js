import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import YouTube from 'react-youtube';
const YoutubeComponent = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const youtubeComponentID = state.youtubeComponentID;
    const youtubePopOut = state.youtubePopOut;
    const handleClosePopOutWindow = context.handleClosePopOutWindow;
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        getVideoData() // eslint-disable-next-line
    }, [youtubeComponentID]);

    const handleWindowScrollingY = () => {
        if (youtubePopOut === true) {
            return document.body.style.overflowY = 'hidden'
        }
        if (youtubePopOut === false) {
            return document.body.style.overflowY = 'scroll'
        }
        else {
            return document.body.style.overflowY = 'scroll'
        }
    }

    async function getVideoData() {
        try {
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${youtubeComponentID}/videos?api_key=${apiKey}`);
            setVideoData(response.data.results)
        }
        catch (error) {
            // console.log('No Data Mounted in State');
        }

    }

    const handleTrailerVideoID = () => {
        const youtubeID = videoData.find(video => video.type === 'Trailer' || 'Official Trailer');
        return (youtubeID
            ? <YouTube
                key={youtubeComponentID.id}
                videoId={youtubeID.key}
                opts={opts}
                className={'youtube-player'}
            />
            : null
        )
    }

    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0,
            modestbranding: 1,
        },
    };

    handleWindowScrollingY();

    return (
        state.youtubePopOut
            ? <div
                onClick={handleClosePopOutWindow}
                className='youtube-component'>
                <div className='trailer-container'>
                    {handleTrailerVideoID()}
                </div>
            </div>
            : null
    )
}

export default YoutubeComponent;