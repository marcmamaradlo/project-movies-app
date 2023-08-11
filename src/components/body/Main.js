import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context';
import ImageCarouselPortrait from '../reuseable/image-carousel-portrait';
import Banner from '../body/Banner';
import RecentTrailers from "./Recent-Trailers";
import PopOutComponent from '../pop-out/Pop-Out';
import axios from 'axios';

const Main = () => {

    const context = useContext(MyContext);
    const apiKey = context.state.apiKey;
    const [popularData, setPopularData] = useState([]);
    const [topRatedData, setTopRatedData] = useState([]);

    useEffect(() => {
        getData() // eslint-disable-next-line
    }, []);

    async function getData() {
        try {
            const dataType = 'movie';
            const getPopularData = await axios.get(`https://api.themoviedb.org/3/${dataType}/popular?api_key=${apiKey}`);
            setPopularData(getPopularData.data.results);
            const getTopRatedData = await axios.get(`https://api.themoviedb.org/3/${dataType}/top_rated?api_key=${apiKey}&page=1`);
            setTopRatedData(getTopRatedData.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleShowComponent = () => {
        return (
            <>
                <Banner />
                <ImageCarouselPortrait
                    data={popularData}
                    headerName='Popular Movies'
                    type='movie'
                />
                <RecentTrailers />
                <ImageCarouselPortrait
                    data={topRatedData}
                    headerName='Top Rated Movies'
                    type='movie'
                />
                <PopOutComponent />
            </>
        )
    }

    return (
        <div className='container' id='main'>
            {handleShowComponent()}
        </div>
    )
}

export default Main;