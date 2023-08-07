import { useContext } from "react";
import { getLangNameFromCode } from "language-name-map";
import { MyContext } from "../../context";

const DynamicContent = ({ data, keywords }) => {

    const context = useContext(MyContext);
    const handleDynamicContentButton = context.handleDynamicContentButton;
    const releaseData = (data.release_date ? data.release_date.split('-')[0] : data.release_date);
    const getLanguage = (data.original_language ? getLangNameFromCode(data.original_language).name : data.original_language)
    let runtimeFixed = 0;
    const genres = data.genres;

    const handleDynamicKeywords = () => {
        return keywords.map((item) => (
            <a href='/' id={item.id} key={item.id}>{`${item.name},  `}</a>
        ));
    }

    const handleRuntimeRemainder = () => {
        const runtime = (data.runtime ? data.runtime / 60 : data.runtime);
        let x = runtime;
        x = Math.floor(x * 100) / 100;
        return runtimeFixed = x;
    }

    handleRuntimeRemainder()
    return (
        <>
            <div className='dynamic-container'>
                <div className='dynamic-image-container'>
                    <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} alt={data.title} />
                    <div className='dynamic-button-container'>
                        <button name='trailer' id={data.id} onClick={handleDynamicContentButton}>Trailer</button>
                        <button name='watchNow' id={data.id} onClick={handleDynamicContentButton}>Watch Now</button>
                    </div>
                </div>
                <div className='dynamic-details'>
                    <p className='dynamic-details-title'>{data.title}</p>
                    <div className='dynamic-details-title-icons'>
                        <p><span className="material-symbols-outlined">hd</span></p>
                        <p><i className="fa-solid fa-star"></i> {data.vote_average}</p>
                        <p><i className="fa-solid fa-clock"></i> {runtimeFixed}H</p>
                        <p><i className="fa-solid fa-volume-off"></i> 2.1</p>
                        <p><i className="fa-regular fa-calendar-days"></i> {releaseData}</p>
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
                            <p className='tags'><a href='/'>{genres ? genres[0].name : ''}, </a><a href='/'>{genres ? genres[1].name : ''},</a><a href='/'> {genres ? genres[2].name : ''}</a></p>
                        </div>
                        <div>
                            <p className='details'>Cast: </p>
                            <p className='tags'>N/A</p>
                        </div>
                        <div>
                            <p className='details'>Tags: </p>
                            <p className='tags'>
                                {handleDynamicKeywords()}
                            </p>
                        </div>
                        <div>
                            <p className='details'>Homepage: </p>
                            <p className='tags'><a href={data.homepage}>{data.homepage}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DynamicContent;