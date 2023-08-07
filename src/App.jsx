
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './asset/scss/app.scss';
import Nav from './components/Nav';
import Maincomponent from './components/Maincomponent';
import CateBtn from './components/Catebtn';
import Category from './components/Category';
import Lushvalue from './components/Lushvalue';
import Footer from './components/Footer';








function App() {

  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
       <Maincomponent/>
       <CateBtn/>
        <Routes>
         <Route exact path="/category/:page" element={<Category/>}></Route>  
       </Routes>
       <Lushvalue/>
       <Footer/>
       </BrowserRouter>
  
        
       
    </div>
  );
}

export default App;
