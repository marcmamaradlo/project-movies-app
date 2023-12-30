import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import dummyImage from "../../assets/image-not-found/dummy-image-240X400.png";
import CustomButton from "../reuseable/CustomButton";
// import CustomButton, { ButtonRounded, ButtonSquared, ButtonLink } from '../reuseable/CustomButton';

const DynamicExtraDetails = ({ fullCast, poster, video }) => {
  useEffect(() => {
    setShowMore(false);
  }, []);

  const [buttonActive, setButtonActive] = useState("cast"); //'cast','poster','video',
  const [showMore, setShowMore] = useState(false);

  const handleCastButton = (e) => {
    setButtonActive(e.target.name);
  };

  const handleShowMoreButton = () => {
    setShowMore(true);
  };

  const handleBackToTop = () => {
    setShowMore(false);
  };

  const showFullCast = () => {
    return fullCast.cast
      .slice(0, showMore ? fullCast.cast.length : 10)
      .map((item, index) => (
        <Link
          to={`/person/${item.id}`}
          className="card-movie-extra-link-wrapper"
        >
          <div className="card-movie-extra" key={index + item.name}>
            <div className="card-movie-extra-image-container">
              {item.profile_path ? (
                <img
                  className="card-movie-extra-img"
                  src={`https://image.tmdb.org/t/p/w92${item.profile_path}`}
                  alt={item.name}
                />
              ) : (
                <img
                  className="card-movie-extra-image-not-found"
                  src={dummyImage}
                  alt={item.name}
                />
              )}
            </div>
            <div className="card-movie-extra-details">
              <p className="extra-details-name">{item.name}</p>
              <p className="extra-details-character">{item.character}</p>
            </div>
          </div>
        </Link>
      ));
  };

  const showPosters = () => {
    const language = "en";
    const height = "1500";
    const width = "1000";
    const newPoster = poster.filter((i) => language.includes(i.iso_639_1));
    const newerPoster = newPoster.filter((i) => height.includes(i.height));
    const newestPoster = newerPoster.filter((i) => width.includes(i.width));
    console.log(newestPoster);
    return newestPoster ? (
      newestPoster.map((item) => (
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w154${item.file_path}`}
          alt={item.file_path}
        />
      ))
    ) : (
      <p>Sorry, no images found</p>
    );
  };

  const showVideos = () => {
    const opts = {
      height: "1080",
      width: "1920",
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        modestbranding: 1,
      },
    };

    const style = {
      marginTop: "unset",
      marginBottom: "unset",
      color: "silver",
      fontFamily: `'Work Sans', sans-serif`,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      maxWidth: "80%",
      width: "12rem",
    };
    return video.map((item) => (
      <div className="youtube-player" title={item.name}>
        <YouTube key={item.id} videoId={item.key} opts={opts} className={``} />
        <p style={{ ...style }}>{item.name}</p>
      </div>
    ));
  };

  const handleExtraContent = () => {
    if (buttonActive === "cast") {
      return (
        <>
          {showFullCast()}
          <div className="show-more-button-container ">
            {showMore ? (
              <a href="#extraDetailsContainer">
                <CustomButton
                  text={`back to top`}
                  style={`custom-button-rounded`}
                  action={handleBackToTop}
                />
              </a>
            ) : (
              <CustomButton
                text="View All"
                style={`custom-button-rounded`}
                action={handleShowMoreButton}
              />
            )}
          </div>
        </>
      );
    }

    if (buttonActive === "poster") {
      return <>{showPosters()}</>;
    }

    if (buttonActive === "video") {
      return <>{showVideos()}</>;
    } else {
      setButtonActive("cast");
    }
  };

  return (
    <>
      <div className="dynamic-extra-details">
        <div className="extra-details-button-container">
          <CustomButton
            text="Cast"
            name="cast"
            style={
              buttonActive === "cast"
                ? "custom-button-rounded-active"
                : "custom-button-rounded"
            }
            action={handleCastButton}
          />
          <CustomButton
            text="Poster"
            name="poster"
            style={
              buttonActive === "poster"
                ? "custom-button-rounded-active"
                : "custom-button-rounded"
            }
            action={handleCastButton}
          />
          <CustomButton
            text="Video"
            name="video"
            style={
              buttonActive === "video"
                ? "custom-button-rounded-active"
                : "custom-button-rounded"
            }
            action={handleCastButton}
          />
        </div>
        <div className="extra-details-card-container">
          {handleExtraContent()}
        </div>
      </div>
    </>
  );
};

export default DynamicExtraDetails;
