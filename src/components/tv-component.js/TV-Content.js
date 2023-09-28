import { useContext, useEffect } from "react";
import { useState } from "react";
import { getLangNameFromCode } from "language-name-map";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const TVContent = ({ data, keywords }) => {

    const context = useContext(MyContext);
    const params = useParams();
    const [seasonButton, setSeasonButton] = useState(false);
    const [seasonIndex, setSeasonIndex] = useState();
    const [seasonButtonName, setSeasonButtonName] = useState('Select Season');
    const [episodeButton, setEpisodeButton] = useState(false);
    const [episodeIndex, setEpisodeIndex] = useState();
    const [episodeButtonName, setEpisodeButtonName] = useState('Select Episode');
    // const handleFakeLinks = context.handleFakeLinks;
    const handleShowEpisode = context.handleShowEpisode;
    const setDynamicPageData = context.setDynamicPageData;
    const getLanguage = (data.original_language ? getLangNameFromCode(data.original_language).name : data.original_language);
    const genres = data.genres;

    useEffect(() => {
        setSeasonButtonName('Select Season');
        setEpisodeButtonName('Select Episode');
    }, [params.id]);

    const handleCastArtist = () => {
        return data.credits
            ? data.credits.cast.slice(0, 4).map((item, index) => (
                <li key={index}>
                    <Link to={`/person/${item.id}`} id={item.id}>{`${item.name},  `}</Link>
                </li>
            ))
            : null // console.log('Cast Error')
    }

    const handleDynamicKeywords = () => {
        return (keywords
            ? keywords.map((item) => (
                <li key={item.id}>
                    <Link
                        to={`/search/${item.name}`}
                        id={item.id}
                    >
                        {`${item.name},  `}
                    </Link>
                </li>
            ))
            : null
        )
    }

    const handleGenres = () => {
        return (genres
            ? genres.map((item, index) => (
                <li key={index}>
                    <Link
                        to={`/search/${item.name}`}
                        id={item.id}
                    >
                        {`${item.name} `}
                    </Link>
                </li>
            ))
            : null
        )
    }

    const handleSeasonsIndex = (e) => {
        setSeasonIndex(e.target.value);
        setSeasonButton(false);
        setSeasonButtonName(e.target.id);
        console.log(seasonIndex);
    }

    const handleSeasonsDropDown = () => {
        return data.seasons
            ? data.seasons.map((item, index) => (
                <button
                    onClick={handleSeasonsIndex}
                    id={item.name}
                    key={data.seasons.id}
                    value={index}
                >
                    {item.name}
                </button>
            ))
            : null
    }

    const handleEpisodeButtonName = (e) => {
        setEpisodeButtonName(e.target.id);
        setEpisodeButton(false);
        setEpisodeIndex(e.target.name);
        handleShowEpisode(seasonIndex, episodeIndex);
        setDynamicPageData();
        console.log(`s${seasonIndex}e${episodeIndex}`);
    }

    const handleEpisodesDropDown = () => {
        return seasonIndex ? handleEpisodes() : null
    }

    const handleEpisodes = () => {
        let numOfOptions = data.seasons[seasonIndex].episode_count;
        let array = []
        for (let i = 0; i < numOfOptions; i++) {
            array.push(i + 1)
        }
        return array.map((item, index) => (
            <button
                onClick={handleEpisodeButtonName}
                id={`Episode ${item}`}
                key={item + index}
                name={item}
                value={item}
            >
                {`Episode ${item}`}
            </button>
        ))
    }

    const handleSeasonButton = () => {
        setSeasonButton(!seasonButton);
    }

    const handleEpisodeButton = () => {
        setEpisodeButton(!episodeButton);
    }

    return (
        <>
            <div className='dynamic-container'>
                <div className='dynamic-image-container'>
                    <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt={data.title} />
                    <div className='dynamic-tv-button-container'>
                        <div className='dynamic-season-container'>
                            <button
                                onClick={handleSeasonButton}
                                name='seasons'
                                id='seasons'
                            >{seasonButtonName} <i className={seasonButton ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
                            </button>
                            <div
                                className={seasonButton ? 'season-selection-container' : 'display-none'}
                            >
                                {handleSeasonsDropDown()}
                            </div>
                        </div>
                        <div className='dynamic-episode-container'>
                            <button
                                onClick={handleEpisodeButton}
                                name='episodes'
                                id='episodes'
                            >{episodeButtonName} <i className={episodeButton ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
                            </button>
                            <div
                                className={episodeButton ? 'episode-selection-container' : 'display-none'}
                            >
                                {handleEpisodesDropDown()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dynamic-details'>
                    <p className='dynamic-details-title'>{data.name}</p>
                    <div className='dynamic-details-title-icons'>
                        <p><i className="fa-solid fa-star"></i> {data.vote_average}</p>
                        <p>Seasons: {data.number_of_seasons}</p>
                        <p>Episodes: {data.number_of_episodes}</p>
                    </div>
                    <p className='dynamic-details-overview'>{data.overview}</p>
                    <div className='dynamic-details-details'>
                        <div>
                            <p className='details'>Status: </p>
                            <p className='tags'>{`${data.status}, ${data.release_date}`}</p>
                        </div>
                        <div>
                            <p className='details'>Language: </p>
                            <p className='tags'>{getLanguage}</p>
                        </div>
                        <div>
                            <p className='details'>Genre: </p>
                            <ul className='tags'>
                                {handleGenres()}
                            </ul>
                        </div>
                        <div>
                            <p className='details'>Cast: </p>
                            <ul className='tags'>
                                {handleCastArtist()}
                            </ul>
                        </div>
                        <div>
                            {keywords
                                ? <p className='details'>Tags: </p>
                                : null}

                            <ul className='tags'>
                                {handleDynamicKeywords()}
                            </ul>
                        </div>
                        <div>
                            {data.homepage
                                ? <p className='details'>Homepage: </p>
                                : null}
                            <p className='tags'><a href={data.homepage}>{data.homepage}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TVContent;