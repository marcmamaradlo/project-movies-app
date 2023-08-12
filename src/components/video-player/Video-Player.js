import { useContext } from "react";
import { MyContext } from "../../context";

const VideoPlayer = ({ videoID }) => {

    const context = useContext(MyContext);
    const serverButtonID = context.state.serverButtonID;
    const vidsrcTo = `https://vidsrc.to/embed/movie/${videoID}`
    const vidsrcMe = `https://vidsrc.me/embed/movie?tmdb=${videoID}/`
    const xtreamhubCom = `https://xtreamhub.com/video/${videoID}`

    // const buttonData = {

    // }


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
                src={vidsrcTo}
                id='video-player'
                name='video-player'
                title='video-player'
            >
                Video Player
            </iframe>
        }
        else {
            console.log('Sorry, video is not available in our servers.')
            // console.log('Sorry, Video is not available n all of our servers.')
        }
    }
    return (
        <>
            {chooseServer()}
        </>
    )
}

export default VideoPlayer;