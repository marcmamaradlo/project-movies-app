import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import DynamicContent from "./Dynamic-Content";
import DynamicBanner from "./Dynamic-Banner";
import ImageCarouselPortrait from "../reuseable/image-carousel-portrait";
const DynamicPage = () => {

    window.scrollTo({
        top: '0',
        behavior: 'instant'
    })

    const [dynamicData, setDynamicData] = useState([]);
    const [dynamicKeywords, setDynamicKeywords] = useState([]);
    const [similarData, setSimilarData] = useState([]);
    const context = useContext(MyContext);
    const state = context.state;
    const apiKey = state.apiKey;
    const dynamicPageDataID = state.dynamicPageDataID;
    const handleServerButton = context.handleServerButton;
    const dynamicPageData = state.dynamicPageData;
    const serverButtonID = state.serverButtonID;
    const serverButtonName = ['server01', 'server02', 'server03', 'server04',]
    console.log(dynamicPageDataID);

    useEffect(() => {
        getDynamicPageData(); // eslint-disable-next-line
    }, [dynamicPageDataID]);

    async function getDynamicPageData() {
        try {
            const selector = 'movie';
            const dataDetailes = await axios.get(`https://api.themoviedb.org/3/${selector}/${dynamicPageDataID}?api_key=${apiKey}&append_to_response=credits`);
            setDynamicData(dataDetailes.data);
            const dataKeywords = await axios.get(`https://api.themoviedb.org/3/${selector}/${dynamicPageDataID}/keywords?api_key=${apiKey}`);
            setDynamicKeywords(dataKeywords.data.keywords);
            const similar = await axios.get(`https://api.themoviedb.org/3/${selector}/${dynamicPageDataID}/similar?api_key=${apiKey}&page=1`)
            setSimilarData(similar.data.results);
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
            >
                {`Server ${index + 1}`}
            </button>
        ))
    }

    return (
        <>
            <div className='container'>
                <DynamicBanner data={dynamicData} />
            </div>
            <div className='container bg-dark'>
                <div className={dynamicPageData === 'watchNow'
                    ? 'dynamic-server-button-container'
                    : 'display-none'
                }>
                    {handleServerButtons()}
                </div>
            </div>
            <div className='container bg-dark'>
                <div className='section'>
                    <DynamicContent
                        data={dynamicData}
                        keywords={dynamicKeywords}
                    />
                </div>
            </div>
            <div className='container bg-dark'>
                <ImageCarouselPortrait
                    data={similarData}
                    headerName='Recommendations'
                    type='movie'
                />
            </div>
        </>
    )
}

export default DynamicPage;