import Banner from '../body/Banner';
// import Trending from "./Trending";
// import RecentTrailers from "./Recent-Trailers";
import Popular from './Popular';
import ComingSoon from './Coming-Soon';
import PopOutComponent from '../pop-out/Pop-Out';

const Main = () => {

    return (
        <div className='container'>
            <Banner />
            {/* <Trending /> */}
            {/* <RecentTrailers /> */}
            <Popular />
            <ComingSoon />
            <PopOutComponent />
        </div>
    )
}

export default Main;