import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../context";
import axios from "axios";

const Popular = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const apiKey = context.apiKey;
    const handleButtonSelector = context.handleButtonSelector;
    const popular = state.popular;
    const active = 'heading-left-button-active';
    const notActive = 'heading-left-button';
    const handlePopOutWindow = context.handlePopOutWindow;

    const [popularData, setPopularData] = useState([]);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, [popular]);

    async function getTrendingMovieData() {
        try {
            const selector = popular;
            const response = await axios.get(`https://api.themoviedb.org/3/${selector}/popular?api_key=${apiKey}`);
            setPopularData(response.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const popularComponent = () => {
        try {
            return popularData.map((item) => (
                <div
                    className='card-container'
                    onClick={handlePopOutWindow}
                    name={popular}
                    key={item.id}
                    id={item.id}
                >
                    <div className='card-container-img'>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            alt={item.title}
                            id={item.id}
                            name={popular}
                        />

                    </div>
                    <div className='card-container-title' id={item.id}>
                        {(
                            popular === 'movie'
                                ? <p id={item.id}>{item.title}</p>
                                : <p id={item.id}>{item.name}</p>
                        )}
                    </div>
                    <div className='card-container-year'>
                        {(
                            popular === 'movie'
                                ? <p>{item.release_date}</p>
                                : <p>{item.first_air_date}</p>
                        )}
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
                    <h3>Popular</h3>
                    <button
                        className={(
                            popular === 'movie'
                                ? active
                                : notActive
                        )}
                        onClick={handleButtonSelector}
                        name='popular'
                        id='movie'
                    >
                        Movies
                    </button>
                    <button
                        className={(
                            popular === 'tv'
                                ? active
                                : notActive
                        )}
                        onClick={handleButtonSelector}
                        name='popular'
                        id='tv'
                    >
                        TV Shows
                    </button>
                </div>
                <p>view all <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className='popular'>
                {popularComponent()}
            </div>
        </div>
    )
}

export default Popular;