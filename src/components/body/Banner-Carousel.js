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
                ? carouselData.map((item, index) => (
                    <div
                        className='carousel-card'
                        key={index}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                        }}
                    >
                        <h3>{item.title}</h3>
                    </div>
                ))
                : console.log('state is empty')
        )
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2560, min: 1440 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1440, min: 1024 },
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
                    <h3 className='text-white text-shadow'>Trending Movies</h3>
                </div>
                <p className='text-white text-shadow'>view all <i className="fa-solid fa-arrow-right"></i></p>
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
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
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