// import { useContext } from 'react';
import Banner from '../body/Banner';
// import Trending from "./Trending";
import RecentTrailers from "./Recent-Trailers";
import Popular from './Popular';
import ComingSoon from './Coming-Soon';
import PopOutComponent from '../pop-out/Pop-Out';
// import DynamicPage from '../main-dynamic-page/Dynamic-Page';
// import ViewAll from '../view-all-page/View-All-Page';
// import { MyContext } from '../../context';

const Main = () => {

    // const context = useContext(MyContext);
    // const state = context.state;

    const handleShowComponent = () => {
        return (
            <>
                <Banner />
                <Popular />
                <RecentTrailers />
                <ComingSoon />
                <PopOutComponent />
                {/* <DynamicPage /> */}
                {/* <ViewAll /> */}
            </>
        )
    }

    return (
        <div className='container' id='main'>
            {handleShowComponent()}
        </div>
    )
}

export default Main;