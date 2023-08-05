import { useContext } from "react"
import { MyContext } from "../../context"

const VideoPlayer = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const defaultURL = 'https://vidsrc.to/embed/movie'
    return (
        <>
            <iframe
                allowFullScreen
                src={`${defaultURL}/${state.videoID}`}
                id='video-player'
                name='video-player'
                title='video-player'
            >
                Video Player
            </iframe>
        </>
    )
}

export default VideoPlayer;