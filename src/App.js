import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useContext } from 'react';
// import Navbar from './components/navbar/Navbar';
import Main from './components/body/Main';
import Footer from './components/footer/Footer'
import DynamicPage from './components/main-dynamic-page/Dynamic-Page';
import ViewAll from './components/view-all-page/View-All-Page';
// import { MyContext } from './context';


const App = () => {

  // const context = useContext(MyContext);
  // const linkName = context.state.linkName;

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movie-page' element={<DynamicPage />} />
          <Route path='/recommendations' element={<DynamicPage />} />
          <Route path='/view-all' element={<ViewAll />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
