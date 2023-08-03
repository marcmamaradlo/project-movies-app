import { useContext } from "react"
import { MyContext } from "../../context"

const VideoPlayer = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const defaultURL = 'https://vidsrc.to/embed/movie'
    return (
        <>
            <iframe src={`${defaultURL}/${state.videoID}`} id='video-player' name='video-player'>

            </iframe>
        </>
    )
}

export default VideoPlayer;