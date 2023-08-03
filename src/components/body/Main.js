import Banner from '../body/Banner';
// import Trending from "./Trending";
// import RecentTrailers from "./Recent-Trailers";
import Popular from './Popular';
import ComingSoon from './Coming-Soon';
import PopOutComponent from '../pop-out/Pop-Out';
import DynamicPage from '../main-dynamic-page/Dynamic-Page';

const Main = () => {

    return (
        <div className='container'>
            <Banner />
            {/* <Trending /> */}
            {/* <RecentTrailers /> */}
            <Popular />
            <ComingSoon />
            <PopOutComponent />
            <DynamicPage />
        </div>
    )
}

export default Main;