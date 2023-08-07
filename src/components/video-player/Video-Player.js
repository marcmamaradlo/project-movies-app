const VideoPlayer = ({ videoID }) => {

    const defaultURL = 'https://vidsrc.to/embed/movie'
    return (
        <>
            <iframe
                allowFullScreen
                src={`${defaultURL}/${videoID}`}
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