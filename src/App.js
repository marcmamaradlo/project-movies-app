import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Main from './components/body/Main';
import Footer from './components/footer/Footer'
import DynamicPage from './components/main-dynamic-page/Dynamic-Page';
import ViewAll from './components/view-all-page/View-All-Page';
import RouteNotFound from './components/404/Router-Not-Found';
import TVMainPage from './components/tv-component.js/TV-Main-Page';
import PeopleMainPage from './components/people-component.js/People-Main-Page';
// import SearchMainPage from './components/tags-search/Search-Main-Page';
import SearchMainPage from './components/tags-search/Search-Main-Page';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movie' element={<DynamicPage />} />
          <Route path='/movie/:id' element={<DynamicPage />} />
          <Route path='/tv' element={<TVMainPage />} />
          <Route path='/tv/:id' element={<TVMainPage />} />
          <Route path='/person/:id' element={<PeopleMainPage />} />
          <Route path='/recommendations' element={<DynamicPage />} />
          <Route path='/view-all' element={<ViewAll />} />
          <Route path='/search' element={<SearchMainPage />} />
          <Route path='*' element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
