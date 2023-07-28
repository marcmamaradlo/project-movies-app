import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../context";
import axios from "axios";

const ComingSoon = () => {

    const context = useContext(MyContext);
    // const state = context.state;
    const apiKey = context.apiKey;
    const popular = context.popular;


    const [comingSoon, setComingSoon] = useState([]);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, [popular]);

    async function getTrendingMovieData() {
        try {
            // const apiKey = '0b6d2ddf9c5e096294fa3534fb357915';
            // const selector = state.comingSoon;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
            // console.log(response.data);
            setComingSoon(response.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const comingSoonComponent = () => {
        try {
            return comingSoon.map((item) => (
                <div className='card-container' key={item.id}>
                    <div className='card-container-img'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                        {/* <div className='rating'>
                            <p>98%</p>
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
                    <h3>Coming Soon</h3>
                    {/* <button>Movie</button>
                    <button>Television</button> */}
                </div>
                <p>view all <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className='coming-soon'>
                {comingSoonComponent()}
            </div>
        </div>
    )
}

export default ComingSoon;