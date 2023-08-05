import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import YouTube from 'react-youtube';
const YoutubeComponent = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const youtubeComponentID = state.youtubeComponentID;
    const handleClosePopOutWindow = context.handleClosePopOutWindow;
    // const id = '646f86ffe942ee00dcdffc45';
    // const key = 'pBk4NYhWNMM';
    // const title = 'Default-Title'

    const [videoData, setVideoData] = useState([])
    console.log(videoData)


    useEffect(() => {
        getVideoData() // eslint-disable-next-line
    }, [state]);

    async function getVideoData() {
        try {
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${youtubeComponentID}/videos?api_key=${apiKey}`);
            setVideoData(response.data.results)
        }
        catch (error) {
            console.log('No Data Mounted in State');
        }

    }

    const handleTrailerVideoID = () => {
        const youtubeID = videoData.find(video => video.type === 'Trailer');
        console.log(youtubeID);
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