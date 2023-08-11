import { useState, useContext } from "react";
import { MyContext } from "../../context";

const ImageCarouselPortrait = (props) => {

    const [viewAll, setViewAll] = useState(false);
    const context = useContext(MyContext);
    const handlePopOutWindow = context.handlePopOutWindow;
    const data = props.data;
    const headerName = props.headerName;
    const type = props.type;
    console.log(data);

    const viewAllOnClick = () => {
        setViewAll(!viewAll);
    }
    const imageComponent = () => {
        return data.map((item) => (
            <div
                className='card-container'
                onClick={handlePopOutWindow}
                key={item.id}
                id={item.id}
                name={type}
            >
                <div className='card-container-img'>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        alt={item.title}
                        id={item.id}
                        name={type}
                    />
                </div>
                <div className='card-container-details'>
                    <p>{item.release_date.split('-')[0]}</p>
                </div>
                <div className='card-container-title'>
                    <p>{item.title}</p>
                </div>
            </div>
        ))
    }
    return (
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
    )
}

export default ImageCarouselPortrait;