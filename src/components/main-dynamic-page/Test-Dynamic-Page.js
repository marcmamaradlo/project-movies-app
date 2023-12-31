import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import { useParams } from "react-router-dom";
import axios from "axios";
import DynamicContent from "./Dynamic-Content";
import DynamicBanner from "./Dynamic-Banner";
import ImageCarouselPortrait from "../reuseable/image-carousel-portrait";

const TestPage = () => {

    window.scrollTo({
        top: '0',
        behavior: 'instant'
    });

    const params = useParams();
    // console.log(params);

    const context = useContext(MyContext);
    const [dynamicData, setDynamicData] = useState([]);
    const [dynamicKeywords, setDynamicKeywords] = useState([]);
    const [similarData, setSimilarData] = useState([]);
    const state = context.state;
    const apiKey = state.apiKey;
    const dynamicPageDataID = state.dynamicPageDataID;
    const dynamicPageData = state.dynamicPageData;
    const serverButtonID = state.serverButtonID;
    const dropDownMenu = state.dropDownMenu
    const handleServerButton = context.handleServerButton;
    const serverButtonName = ['server01', 'server02', 'server03', 'server04',];

    useEffect(() => {
        getDynamicPageData(); // eslint-disable-next-line
    }, [dynamicPageDataID]);

    async function getDynamicPageData() {
        try {
            const selector = dropDownMenu;
            const dataDetailes = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}?api_key=${apiKey}&append_to_response=credits`);
            setDynamicData(dataDetailes.data);
            const dataKeywords = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}/keywords?api_key=${apiKey}`);
            setDynamicKeywords(dataKeywords.data.keywords);
            const similar = await axios.get(`https://api.themoviedb.org/3/${selector}/${params.id}/similar?api_key=${apiKey}&page=1`)
            setSimilarData(similar.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleServerButtons = () => {
        return serverButtonName.map((item, index) => (
            <button
                key={`${item + index}`}
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
        ));
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

export default TestPage;