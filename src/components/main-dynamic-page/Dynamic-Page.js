import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context";
import axios from "axios";
import DynamicContent from "./Dynamic-Content";
import DynamicBanner from "./Dynamic-Banner";
import Similar from "./Similar";
const DynamicPage = () => {

    window.scrollTo({
        top: '0',
        behavior: 'smooth'
    })

    const [dynamicData, setDynamicData] = useState([]);
    const [dynamicKeywords, setDynamicKeywords] = useState([]);
    const [similarData, setSimilarData] = useState([]);
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
                    <DynamicContent
                        data={dynamicData}
                        keywords={dynamicKeywords}
                    />
                </div>
            </div>
            <div className='container bg-dark'>
                <Similar data={similarData} />
            </div>
        </>
    )
}

export default DynamicPage;