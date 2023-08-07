import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import DynamicContent from "./Dynamic-Content";
import DynamicBanner from "./Dynamic-Banner";
import ComingSoon from "../body/Coming-Soon";
const DynamicPage = () => {

    window.scrollTo({
        top: '0',
        behavior: 'smooth'
    })

    const [dynamicData, setDynamicData] = useState([]);
    const [dynamicKeywords, setDynamicKeywords] = useState([]);
    const context = useContext(MyContext);
    const state = context.state;
    const apiKey = state.apiKey;
    const popular = state.popular;
    const popOutWindow = state.popOutWindow;

    useEffect(() => {
        getDynamicPageData(); // eslint-disable-next-line
        handleWindowScrollingY(); // eslint-disable-next-line
    }, [popular]);

    async function getDynamicPageData() {
        try {
            const dynamicPageDataID = state.dynamicPageDataID
            const selector = popular;
            const dataDetailes = await axios.get(`https://api.themoviedb.org/3/${selector}/${dynamicPageDataID}?api_key=${apiKey}`);
            setDynamicData(dataDetailes.data);
            const dataKeywords = await axios.get(`https://api.themoviedb.org/3/${selector}/${dynamicPageDataID}/keywords?api_key=${apiKey}`);
            setDynamicKeywords(dataKeywords.data.keywords);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleWindowScrollingY = () => {
        if (popOutWindow === 'active') {
            return document.body.style.overflowY = 'hidden'
        }
        if (popOutWindow === 'notActive') {
            return document.body.style.overflowY = 'scroll'
        }
        else {
            return document.body.style.overflowY = 'scroll'
        }
    }

    return (
        <>
            <div className='container'>
                <DynamicBanner data={dynamicData} />
            </div>
            <div className='container bg-dark'>
                <div className='section'>
                    <DynamicContent data={dynamicData} keywords={dynamicKeywords} />
                </div>
            </div>
            <div className='container bg-dark'>
                <ComingSoon />
            </div>
        </>
    )
}

export default DynamicPage;