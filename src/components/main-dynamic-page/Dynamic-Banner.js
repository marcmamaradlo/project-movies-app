import VideoPlayer from "../video-player/Video-Player";

const DynamicBanner = () => {

    const dynamicBannerBackground = {
        backgroundImage: `url(https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80`
    }
    return (
        <div className='dynamic-banner' style={{ ...dynamicBannerBackground }}>
            <div className='section'>
                <VideoPlayer />
            </div>
        </div>
    )
}

export default DynamicBanner;