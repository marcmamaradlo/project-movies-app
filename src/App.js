import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useContext } from 'react';
// import { MyContext } from './context';
// import Navbar from './components/navbar/Navbar';
import Main from './components/body/Main';
import Footer from './components/footer/Footer'
import DynamicPage from './components/main-dynamic-page/Dynamic-Page';
import ViewAll from './components/view-all-page/View-All-Page';
import RouteNotFound from './components/404/Router-Not-Found';
import TestPage from './components/main-dynamic-page/Test-Dynamic-Page';
import TVMainPage from './components/tv-component.js/TV-Main-Page';


const App = () => {

  // const context = useContext(MyContext);
  // const pageID = context.pageID;
  // const pageType = context.state.pageType;
  // console.log(pageID);


  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movie' element={<TestPage />} />
          <Route path='/movie/:id' element={<TestPage />} />
          <Route path='/tv' element={<TVMainPage />} />
          <Route path='/tv/:id' element={<TVMainPage />} />
          <Route path='/people/:id' element={<TestPage />} />
          <Route path='/recommendations' element={<DynamicPage />} />
          <Route path='/view-all' element={<ViewAll />} />
          <Route path='*' element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
