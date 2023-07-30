import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../context";
import axios from 'axios';

const Trending = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const handleButtonSelector = context.handleButtonSelector;
    const trendingData = state.trendingData;
    const active = 'heading-left-button-active';
    const notActive = 'heading-left-button';

    const [dataTrending, setDataTrending] = useState([]);

    useEffect(() => {
        getTrendingMovieData('movie') // eslint-disable-next-line
    }, [trendingData]);

    async function getTrendingMovieData() {
        try {
            const apiKey = '0b6d2ddf9c5e096294fa3534fb357915';
            const selector = state.trendingData;
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/${selector}?api_key=${apiKey}`);
            // console.log(response.data);
            setDataTrending(response.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const trendingComponent = () => {
        try {
            return dataTrending.map((item) => (
                <div className='card-container' key={item.id}>
                    <div className='card-container-img'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                        {/* <div className='rating'>
                            <p>{item.vote_average}</p>
                        </div> */}
                    </div>
                    <div className='card-container-title'>
                        <p>{item.title}</p>
                    </div>
                    <div className='card-container-year'>
                        <p>{item.release_date}</p>
                    </div>
                </div>
            ))
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='section'>
            <div className='heading'>
                <div className='heading-left'>
                    <h3>Trending Movies</h3>
                    <button
                        className={(trendingData === 'day' ? active : notActive)}
                        onClick={handleButtonSelector}
                        name='trendingData'
                        id='day'
                    >
                        Today
                    </button>
                    <button
                        className={(trendingData === 'week' ? active : notActive)}
                        onClick={handleButtonSelector}
                        name='trendingData'
                        id='week'
                    >
                        This Week
                    </button>
                </div>
                <p>view all <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className='trending'>
                {trendingComponent()}
            </div>
        </div>
    )
}

export default Trending;