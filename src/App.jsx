
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './asset/scss/app.scss';
import Header from './components/Header';
import Mainswiper from './components/Mainswiper';
import Intro from './components/Intro';
import Category from './components/Category';
import Banner from './components/Banner';
import Footer from './components/Footer';







function App() {

  return (
    <div className="App">
     <BrowserRouter>
       <Header/>
       <Mainswiper/>
        <Routes>
         <Route exact path="/category/:page" element={<Category/>}></Route>  
       </Routes>
       <Intro/>
       <Banner/>
       <Footer/>
       </BrowserRouter>
  
        
       
    </div>
  );
}

export default App;
