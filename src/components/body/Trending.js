import { useContext, useState } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
// import axios from 'axios';

const Trending = (props) => {
    const context = useContext(MyContext);
    const state = context.state;
    const handleButtonSelector = context.handleButtonSelector;
    const trendingData = state.trendingData;
    const active = 'heading-left-button-active';
    const notActive = 'heading-left-button';
    const [viewAll, setViewAll] = useState(false);

    const trendingComponent = () => {
        try {
            return props.data.map((item) => (
                <Link to={`/${props.dataType}/${item.id}`} key={item.id}>
                    <div className='card-container'>
                        <div className='card-container-img'>
                            {props.dataType === 'movie'
                                ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                : props.dataType === 'tv'
                                    ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
                                    : props.dataType === 'person'
                                        ? <img src={`https://image.tmdb.org/t/p/w185${item.profile_path}`} alt={item.name} />
                                        : <img src='https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2242&q=80' alt='Preview not available' />
                            }
                        </div>
                        <div className='card-container-title'>
                            <p>{props.dataType === 'movie' ?
                                item.title
                                : props.dataType === 'tv'
                                    ? item.name
                                    : props.dataType === 'person'
                                        ? item.name
                                        : null}</p>
                        </div>
                    </div>
                </Link>
            ))
        }
        catch (error) {
            console.log(error);
        }
    }

    const viewAllOnClick = () => {
        setViewAll(!viewAll);
    }

    return (
        <div className='section'>
            <div className='heading'>
                <div className='heading-left'>
                    <h3>Trending {props.dataType}</h3>
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
                <p onClick={viewAllOnClick}>{viewAll ? 'Collapse' : 'Expand'} <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className={viewAll ? 'view-all-expanded' : 'image-carousel-portrait'}>
                {trendingComponent()}
            </div>
        </div>
    )
}

export default Trending;