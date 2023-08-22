import { useContext } from "react";
import { useState } from "react";
import { getLangNameFromCode } from "language-name-map";
import { MyContext } from "../../context";

const TVContent = ({ data, keywords }) => {

    const context = useContext(MyContext);
    const [season, setSeason] = useState('');
    // const [episode, setEpisode] = useState('');
    // const handleDynamicContentButton = context.handleDynamicContentButton;
    const handleFakeLinks = context.handleFakeLinks;
    // const releaseData = (data.release_date ? data.release_date.split('-')[0] : data.release_date);
    const getLanguage = (data.original_language ? getLangNameFromCode(data.original_language).name : data.original_language)
    const genres = data.genres;
    console.log(season);

    const handleCastArtist = () => {
        return data.credits
            ? data.credits.cast.slice(0, 4).map((item, index) => (
                <li key={index}>
                    <a onClick={handleFakeLinks} href='/' id={item.id}>{`${item.name},  `}</a>
                </li>
            ))
            : null // console.log('Cast Error')
    }


    const handleDynamicKeywords = () => {
        return (keywords
            ? keywords.map((item) => (
                <li key={item.id}>
                    <a onClick={handleFakeLinks} href='/' id={item.id}>{`${item.name},  `}</a>
                </li>
            ))
            : null
        )
    }

    // const handleRuntimeRemainder = () => {
    //     const runtime = (data.runtime ? data.runtime / 60 : data.runtime);
    //     let x = runtime;
    //     x = Math.floor(x * 100) / 100;
    //     return x;
    // }

    const handleGenres = () => {
        return (genres
            ? genres.map((item, index) => (
                <li key={index}>
                    <a onClick={handleFakeLinks} href='/'>{`${item.name} `}</a>
                </li>
            ))
            : null
        )
    }

    const handleTitle = () => {
        return data.title ? data.title : data.original_title;
    }

    const handleSeasonsDropDownValue = (e) => {
        setSeason(e.target.value);
        console.log(season);
    }

    const handleSeasonsDropDown = () => {
        return data.seasons
            ? data.seasons.map((item, index) => (
                <option id={data.seasons.id} key={data.seasons.id} value={index}>{item.name}</option>
            ))
            : null
    }

    const handleEpisodesDropDown = () => {
        return season ? handleEpisodes() : 'false'
    }

    const handleEpisodes = () => {
        let numOfOptions = data.seasons[season].episode_count;
        let array = []
        // console.log(numOfOptions)
        for (let i = 0; i < numOfOptions; i++) {
            array.push(i + 1)
            // <option id='episode' key={i} value={i}>{`Episode ${i}`}</option>
        }
        return array.map((item, index) => (
            <option id='episode' key={item + index} value={item}>{`Episode ${item}`}</option>
        ))
    }

    return (
        <>
            <div className='dynamic-container'>
                <div className='dynamic-image-container'>
                    <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt={data.title} />
                    {/* <div className='dynamic-button-container'>
                        <button name='trailer' id={data.id} onClick={handleDynamicContentButton}>Trailer</button>
                        <button name='watchNow' id={data.id} onClick={handleDynamicContentButton}>Watch Now</button>
                    </div> */}
                    <div className='dynamic-button-container'>
                        <select onClick={handleSeasonsDropDownValue} name='seasons' id='seasons'>
                            {handleSeasonsDropDown()}
                        </select>
                        <select name='episodes' id='episodes'>
                            {handleEpisodesDropDown()}
                        </select>
                    </div>
                </div>
                <div className='dynamic-details'>
                    <p className='dynamic-details-title'>{handleTitle()}</p>
                    <div className='dynamic-details-title-icons'>
                        {/* <p><span className="material-symbols-outlined">hd</span></p> */}
                        <p><i className="fa-solid fa-star"></i> {data.vote_average}</p>
                        <p>Seasons: {data.number_of_seasons}</p>
                        <p>Episodes: {data.number_of_episodes}</p>
                        {/* <p><i className="fa-solid fa-clock"></i> {handleRuntimeRemainder()}H</p> */}
                        {/* <p><i className="fa-solid fa-volume-off"></i> 2.1</p> */}
                        {/* <p><i className="fa-regular fa-calendar-days"></i> {releaseData}</p> */}
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