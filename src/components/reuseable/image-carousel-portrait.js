import { useState, useContext } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";

const ImageCarouselPortrait = (props) => {

    const context = useContext(MyContext);
    const [viewAll, setViewAll] = useState(false);
    const data = props.data;
    const type = props.type;
    const headerName = props.headerName;
    const dropDownMenu = context.state.dropDownMenu;
    const handlePopOutTrailerButton = context.handlePopOutTrailerButton;
    // console.log(pageID);

    const viewAllOnClick = () => {
        setViewAll(!viewAll);
    }

    const imageComponent = () => {
        return data.map((item) => (
            <Link
                // to={`/${pageType}/${pageID}&${item.title.split(' ').join('-')}`}
                to={`/${dropDownMenu}/${item.id}`}
                key={item.id}
                id={item.id}
                name={item.name}
                onClick={handlePopOutTrailerButton}
            >
                <div
                    className='card-container'
                    id={item.id}
                    name={type}
                >
                    <div className='card-container-img'>
                        <img
                            src={item.poster_path
                                ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                                : `https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=742&q=80`
                            }
                            alt={item.title}
                            id={item.id}
                            name={type}
                        />
                    </div>
                    <div className='card-container-details'>
                        <p>
                            {
                                dropDownMenu === 'movie'
                                    ? item.release_date
                                        ? item.release_date.split('-')[0]
                                        : null
                                    : dropDownMenu === 'tv'
                                        ? item.first_air_date
                                            ? item.first_air_date.split('-')[0]
                                            : null
                                        : null

                            }</p>
                    </div>
                    <div className='card-container-title'>
                        <p>{item.title}</p>
                    </div>
                </div>
            </Link>
        ))
    }
    return (
        <div className='container bg-dark'>
            <div className='section'>
                <div className='heading'>
                    <div className='heading-left'>
                        <h3>{headerName}</h3>
                    </div>
                    <p onClick={viewAllOnClick}>{viewAll ? 'Collapse' : 'Expand'} <i className="fa-solid fa-arrow-right"></i></p>
                </div>
                <div className={viewAll ? 'view-all-expanded' : 'image-carousel-portrait'}>
                    {imageComponent()}
                </div>
            </div>
        </div>
    )
}

export default ImageCarouselPortrait;