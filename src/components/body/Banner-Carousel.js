import { useEffect, useState, useContext } from "react";
import { MyContext } from "../../context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const BannerCarousel = () => {

    const context = useContext(MyContext);
    const state = context.state;

    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        getTrendingMovieData() // eslint-disable-next-line
    }, []);

    async function getTrendingMovieData() {
        try {
            const apiKey = state.apiKey;
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
            setCarouselData(response.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    const carouselImages = () => {
        return (
            carouselData
                ? carouselData.map((item) => (
                    <div className='carousel-card' style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w780${item.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '26.5rem',
                        height: '15rem',
                        borderRadius: '5px',
                        color: 'white'
                    }}>
                        <p>{item.release_date}</p>
                        <h3>{item.title}</h3>
                        {/* <img src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`} alt={item.title} /> */}
                    </div>
                ))
                : console.log('state is empty')
        )
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='carousel-section'>
            <div className='heading'>
                <div className='heading-left'>
                    <h3 className='text-white'>Trending Movies</h3>
                </div>
                <p className='text-white'>view all <i className="fa-solid fa-arrow-right"></i></p>
            </div>
            <div className='carousel-card-container'>
                <Carousel
                    partialVisible={false}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {carouselImages()}
                </Carousel>
            </div>
        </div>
    )
}

export default BannerCarousel;