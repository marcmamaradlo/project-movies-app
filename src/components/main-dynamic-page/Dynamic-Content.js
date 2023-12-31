import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
// import { getLangNameFromCode } from "language-name-map";
import CustomButton from "../reuseable/CustomButton";
// import JSON from './sample.json';

const DynamicContent = ({ data, keywords }) => {
  const [history, setHistory] = useState([]);
  const context = useContext(MyContext);
  const handleDynamicContentButton = context.handleDynamicContentButton;
  const handlePageHistory = context.handlePageHistory;

  const historyArray = {
    title: data.title,
    id: data.id,
    image: data.poster_path,
    dataType: document.URL.split("/")[3],
  };

  const handlePageTitle = () => {
    return data.title
      ? (document.title = `${data.title} ${data.release_date.split("-")[0]}`)
      : null;
  };

  useEffect(() => {
    handlePageTitle();
    setHistory(historyArray);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handlePageHistory(history); // eslint-disable-next-line
  }, [data.title]);

  const releaseData = data.release_date
    ? data.release_date.split("-")[0]
    : data.release_date;
  // const getLanguage = (data.original_language ? getLangNameFromCode(data.original_language).name : data.original_language)
  const genres = data.genres;

  const handleCastArtist = () => {
    return data.credits
      ? data.credits.cast.slice(0, 4).map((item, index) => (
          <li key={index}>
            <Link to={`/person/${item.id}`}>{`${item.name},`}</Link>
          </li>
        ))
      : null;
  };

  const handleDynamicKeywords = () => {
    return keywords
      ? keywords.map((item) => (
          <li key={item.id}>
            <Link
              to={`/search/${item.name}`}
              id={item.id}
            >{`${item.name},  `}</Link>
          </li>
        ))
      : null;
  };

  const handleRuntimeRemainder = () => {
    const runtime = data.runtime ? data.runtime / 60 : data.runtime;
    let x = runtime;
    x = Math.floor(x * 100) / 100;
    return x;
  };

  const handleGenres = () => {
    return genres
      ? genres.map((item, index) => (
          <li key={index}>
            <Link to={`/search/${item.name}`}>{`${item.name} `}</Link>
          </li>
        ))
      : null;
  };

  const handleTitle = () => {
    return data.title ? data.title : data.original_title;
  };

  return (
    <>
      <div className="dynamic-container">
        <div className="dynamic-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
            alt={data.title}
          />
          <div className="dynamic-button-container">
            <CustomButton
              text="Trailer"
              name="trailer"
              id={data.id}
              action={handleDynamicContentButton}
            />
            <CustomButton
              text="Watch Now"
              name="watchNow"
              id={data.id}
              action={handleDynamicContentButton}
            />
          </div>
        </div>
        <div className="dynamic-details">
          <p className="dynamic-details-title">{handleTitle()}</p>
          <div className="dynamic-details-title-icons">
            {/* <p><span className="material-symbols-outlined">hd</span></p> */}
            <p>
              <i className="fa-solid fa-star"></i> {data.vote_average}
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> {handleRuntimeRemainder()}H
            </p>
            {/* <p><i className="fa-solid fa-volume-off"></i> 2.1</p> */}
            <p>
              <i className="fa-regular fa-calendar-days"></i> {releaseData}
            </p>
          </div>
          <p className="dynamic-details-overview">{data.overview}</p>
          <div className="dynamic-details-details">
            <div>
              <p className="details">Status: </p>
              <p className="tags">{`${data.status}, ${data.release_date}`}</p>
            </div>
            <div>
              <p className="details">Language: </p>
              {/* <p className="tags">{getLanguage}</p> */}
            </div>
            <div>
              <p className="details">Genre: </p>
              <ul className="tags">{handleGenres()}</ul>
            </div>
            <div>
              <p className="details">Cast: </p>
              <ul className="tags">
                {handleCastArtist()}
                <li>
                  <a href="#extraDetailsContainer">more...</a>
                </li>
              </ul>
            </div>
            <div>
              {keywords ? <p className="details">Tags: </p> : null}

              <ul className="tags">{handleDynamicKeywords()}</ul>
            </div>
            <div>
              {data.homepage ? <p className="details">Homepage: </p> : null}
              <p className="tags">
                <a href={data.homepage}>{data.homepage}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DynamicContent;
