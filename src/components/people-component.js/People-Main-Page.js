import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import PeopleContent from "./People-Content";

const PeopleMainPage = () => {

    window.scrollTo({
        top: '0',
        behavior: 'instant'
    });

    const params = useParams();

    const context = useContext(MyContext);
    const [dataDetailes, setDataDetails] = useState([]);
    const [dataMovieCredits, setDataMovieCredits] = useState([]);
    const [dataTVCredits, setDataTVCredits] = useState([]);
    const [dataSocialMedia, setDataSocialMedia] = useState([]);
    // const [similarData, setSimilarData] = useState([]);
    const state = context.state;
    const apiKey = state.apiKey;
    // const pageType = state.pageType;
    // const dynamicPageDataID = state.dynamicPageDataID;
    const dynamicPageData = state.dynamicPageData;
    const serverButtonID = state.serverButtonID;
    const handleServerButton = context.handleServerButton;
    // const handleClosePopOutWindow = context.handleClosePopOutWindow;
    const serverButtonName = ['server01', 'server02', 'server03', 'server04',];

    useEffect(() => {
        getDynamicPageData(); // eslint-disable-next-line
    }, [params.id]);

    async function getDynamicPageData() {
        try {
            const selector = 'person';
            const dataDetailes = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}?api_key=${apiKey}`);
            setDataDetails(dataDetailes.data);
            const dataMovieCredits = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}/movie_credits?language=en-US&api_key=${apiKey}`);
            setDataMovieCredits(dataMovieCredits.data);
            const dataTVCredits = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}/tv_credits?language=en-US&api_key=${apiKey}`);
            setDataTVCredits(dataTVCredits.data);
            const dataSocialMedia = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}/external_ids?api_key=${apiKey}`)
            setDataSocialMedia(dataSocialMedia.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleServerButtons = () => {
        return serverButtonName.map((item, index) => (
            <button
                className={
                    serverButtonID === item
                        ? 'server-button-active'
                        : 'server-button-default'
                }
                onClick={handleServerButton}
                id={item}
                key={index}
            >
                {`Server ${index + 1}`}
            </button>
        ));
    }

    return (
        <>
            <div className='container bg-dark'>
                <div
                    className={
                        dynamicPageData === 'watchNow'
                            ? 'dynamic-server-button-container'
                            : 'display-none'
                    }
                >
                    {handleServerButtons()}
                </div>
            </div>
            <div className='container bg-dark'
            // onClick={handleClosePopOutWindow}
            >
                <div className='section'>
                    <PeopleContent
                        data={dataDetailes}
                        movie={dataMovieCredits}
                        tv={dataTVCredits}
                        socialMedia={dataSocialMedia}
                    />
                </div>
            </div>
        </>
    )
}

export default PeopleMainPage;