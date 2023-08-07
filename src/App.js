import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/body/Main';
import Footer from './components/footer/Footer'
import DynamicPage from './components/main-dynamic-page/Dynamic-Page';
// import { MyContext } from './context';
// import DynamicPage from './components/main-dynamic-page/Dynamic-Page';

const App = () => {

  // const context = useContext(MyContext);
  // const state = context.state;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='dynamic-page' element={<DynamicPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
